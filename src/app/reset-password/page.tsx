"use client";

import axios from "axios";
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
import { API } from "@/utils/constant";
import { useRouter } from "next/navigation";
import React from "react";

const schema = z.object({
  password: z.string().min(8).max(20),
});

type FormData = z.infer<typeof schema>;

type Props = {
  searchParams: {
    code?: string;
  };
};

export default function ResetPassword({ searchParams }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  const form = useForm<FormData>({});
  const [samePasswordError, setSamePasswordError] = React.useState(false);

  const onSubmit = (values: FormData) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/reset-password`,
        {
          code: searchParams.code,
          password: values.password,
          passwordConfirmation: values.password,
        }
      )
      .then((response) => {
        router.push("/sign-in");
        console.log("Your user's password has been reset.");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setSamePasswordError(true);
        }
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <div>
      <main className="flex min-h-screen bg-[#4A0E11] flex-col items-center justify-center p-4 md:p-16">
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm flex-col">
          <div className="bg-[#860E13] text-center py-5 text-white rounded-t-2xl">
            <h1 className={`text-3xl`}>Forgot Password</h1>
          </div>
          <div className="flex flex-col items-center bg-[#E6E5E5] bg-opacity-75 px-8 py-12 md:py-32 rounded-b-2xl">
            <p className="my-4 text-black text-center">
              Please create a new password.
            </p>
            <div className={`w-full mt-8`}>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col items-center space-y-8"
                >
                  <FormField
                    name="password"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-3/5">
                        <FormLabel className="text-black">Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Password"
                            {...field}
                            type="password"
                          />
                        </FormControl>
                        {errors.password && (
                          <FormMessage>{errors.password.message}</FormMessage>
                        )}
                        {samePasswordError && (
                          <FormMessage>
                            Please double check the new password and try again.
                          </FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col justify-center items-center pt-2">
                    <Button
                      type="submit"
                      className="bg-[#ED1C24] text-white px-2 md:px-8"
                    >
                      Submit new password
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            <div className="mt-2 mb-5 text-center text-xs">
              <span>Back to </span>
              <a
                href="/sign-in"
                className="text-red-500 font-bold hover:underline"
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
