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

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
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
      .post(`${API}/auth/local/register`, {
        username: values.email,
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
      })
      .then((response) => {
        setToken(response.data.jwt);
        setUser(response.data.user);
        router.push("/");
      })
      .catch((error) => {
        if (error.response.status === 400) {
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
          <div className="w-full p-6 bg-gray-300">
            <div className="flex flex-col bg-white p-8">
              <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
                Sign Up
              </h1>
              <p className="my-4 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
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
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="First Name" {...field} />
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
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Last Name" {...field} />
                          </FormControl>
                          {errors.lastName && (
                            <FormMessage>{errors.lastName.message}</FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="email@example.com" {...field} />
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
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Password"
                              {...field}
                            />
                          </FormControl>
                          {errors.password && (
                            <FormMessage>{errors.password.message}</FormMessage>
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
                        className="bg-gray-400 text-white px-8"
                      >
                        Sign Up
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
