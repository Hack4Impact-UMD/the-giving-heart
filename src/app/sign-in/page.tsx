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
import { useAuthContext } from "@/utils/context/AuthContext";
import { useRouter } from "next/navigation";
import { setToken } from "@/utils/helpers";
import { API } from "@/utils/constant";

// TODO?: might want to consider making passwords require at least a special character or number
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

type FormData = z.infer<typeof schema>;

export default function SignIn() {
  const router = useRouter();
  const { setUser } = useAuthContext();
  const [wrongPassword, setWrongPassword] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormData) => {
    axios
      .post(`${API}/auth/local`, {
        identifier: values.email,
        password: values.password,
      })
      .then((response) => {
        setUser(response.data.user);
        setToken(response.data.jwt);
        router.push("/dashboard");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setWrongPassword(true);
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
          <div className="flex flex-col w-full md:flex-row mx-auto">
            <div className="bg-gray-300 p-6 flex flex-col justify-between items-center md:w-full">
              <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Lorem ips
                </h1>

                <p className="text-center italic my-4 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>

              <div className="h-60 w-full bg-white">
                <p>Logo goes here</p>
              </div>
            </div>

            <div className="flex flex-col bg-white p-6 md:w-full">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Login
              </h1>
              <div className="w-full mt-12">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
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
                          <FormDescription>
                            <a
                              href="/forgot-password"
                              className="text-red-500 text-xs hover:underline"
                            >
                              Forgot password?
                            </a>
                          </FormDescription>
                        </FormItem>
                      )}
                    />

                    {wrongPassword && (
                      <FormMessage>
                        Username or password is incorrect. Please try again.
                      </FormMessage>
                    )}

                    <div className="flex flex-col justify-center items-center pt-8">
                      <Button
                        type="submit"
                        className="bg-gray-400 text-white px-12"
                      >
                        Login
                      </Button>
                      <div className="mt-2 text-center text-xs">
                        <span>Need to make an account? </span>
                        <a
                          href="/sign-up"
                          className="text-red-500 hover:underline"
                        >
                          Sign Up
                        </a>
                      </div>
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
