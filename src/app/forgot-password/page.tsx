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

const schema = z.object({
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: FormData) => {
    console.log(values);
    // need to set up email provider - currently 500 internal server error
    /*
    axios
      .post("http://localhost:1337/api/auth/forgot-password", {
        email: values.email,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
    */
  };

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <main className="flex min-h-screen bg-[#4A0E11] flex-col items-center justify-center p-4 md:p-16">
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm flex-col">
          <div className="bg-[#860E13] text-center py-5 text-white rounded-t-2xl">
            <h1 className="text-4xl text-white md:text-5xl">
              Forgot password?
            </h1>
            <p className="italic pt-3">It’s okay! it happens to the best of us.</p>
          </div>
          <div className="flex flex-col items-center bg-[#E6E5E5] bg-opacity-75 px-8 py-12 md:py-32 rounded-b-2xl">
            <p className="my-4 text-black text-center">
              Please enter the email associated with your account to reset
              your password.
            </p>
            <div className="w-full my-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col items-center space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-3/5">
                        <FormLabel className="text-black">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="email@example.com" {...field} />
                        </FormControl>
                        {errors.email && (
                          <FormMessage>{errors.email.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col justify-center items-center pt-8">
                    <Button
                      type="submit"
                      className="bg-[#ED1C24] text-white px-2 md:px-8"
                    >
                      Request Password Reset
                    </Button>
                    <div className="mt-2 text-center text-xs">
                      <span>Back to </span>
                      <a
                        href="/sign-in"
                        className="text-red-500 font-bold hover:underline"
                      >
                        Log In
                      </a>
                    </div>
                  </div>
                </form>
              </Form>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}
