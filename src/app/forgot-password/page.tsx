"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const schema = z.object({
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: FormData) => {
    console.log(values);
  };

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-16">
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
          <div className="w-full p-6 bg-gray-300">
            <div className="flex flex-col items-center bg-white px-8 py-32">
              <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">Forgot password?</h1>
              <p className="my-4 text-gray-400">
                Please enter the email associated with your account to reset your password.
              </p>
              <div className="w-full my-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center space-y-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-5/6 md:w-3/5">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="email@example.com" {...field} />
                        </FormControl>
                        {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col justify-center items-center pt-8">
                    <Button type="submit" className="bg-gray-400 text-white px-8">Request Password Reset</Button>
                    <div className="mt-2 text-center text-xs">
                      <span>Back to </span>
                      <a href="/sign-in" className="text-red-500 font-bold hover:underline">Sign In</a>
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
