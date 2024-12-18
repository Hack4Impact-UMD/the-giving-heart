"use client";

import axios from "axios";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getToken, setToken } from "@/utils/helpers";
import { useAuthContext } from "@/utils/context/AuthContext";
import { useRouter } from "next/navigation";
import { API } from "@/utils/constant";

const schema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters",
    }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password must be at least 8 characters" }),
    phoneNumber: z.string().min(10, {
      message: "Invalid phone number",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Specify which field the error should appear under
  });

type FormData = z.infer<typeof schema>;

export default function SignUp() {
  const router = useRouter();
  const { user, setUser } = useAuthContext();
  const [userExistsError, setUserExistsError] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: FormData) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local/register`,
        {
          username: values.email,
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
        }
      )
      .then((response) => {
        setToken(response.data.jwt);
        setUser(response.data.user);
        router.push("/dashboard");
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          setUserExistsError(true);
        }
        console.log("An error occurred:", error.response);
      });
  };

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-16">
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
          <div className="w-full p-6">
            <div className="flex flex-col bg-white p-8">
              <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
                Sign Up
              </h1>
              <p className="my-4 text-gray-400">
                You&apos;re one step closer to making a difference!
              </p>
              <div className="w-full my-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name:</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter first name" {...field} />
                          </FormControl>
                          {errors.firstName && (
                            <FormMessage>
                              {errors.firstName.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name:</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter last name" {...field} />
                          </FormControl>
                          {errors.lastName && (
                            <FormMessage>{errors.lastName.message}</FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number:</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          {errors.phoneNumber && (
                            <FormMessage>
                              {errors.phoneNumber.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email:</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          {errors.email && (
                            <FormMessage>{errors.email.message}</FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password:</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter password"
                              {...field}
                            />
                          </FormControl>
                          {errors.password && (
                            <FormMessage>{errors.password.message}</FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password:</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Confirm password"
                              {...field}
                            />
                          </FormControl>
                          {errors.confirmPassword && (
                            <FormMessage>
                              {errors.confirmPassword.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                    {userExistsError && (
                      <FormMessage>
                        An error occurred. Please try again with a different
                        email.
                      </FormMessage>
                    )}
                    <div className="flex flex-row justify-center items-center pt-8">
                      <Button
                        type="submit"
                        className="bg-[#ED1C24] text-white px-8"
                        disabled={true}
                      >
                        VOLUNTEER ROLES FILLED
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
