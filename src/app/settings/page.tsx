"use client";

import { useState, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from 'lucide-react';

const schema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

type FormData = z.infer<typeof schema>;

export default function Settings() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { formState: { errors } } = form;
  const [isEditing, setIsEditing] = useState(false);
  const [email] = useState('test@gmail.com');
  const [password, setPassword] = useState('Password123');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    form.setValue('password', password);
  }, [password, form]);

  const onSubmit = (values: FormData) => {
    setPassword(values.password);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    form.reset({ password });
    setIsEditing(false);
  };

  const passwordAsterisks = '*'.repeat(password.length);

  return (
    <div>
      <div className="z-0 w-full h-40 bg-red-900">
         .
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-16 -mt-44">
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
          <div className="w-full">
            <h1 className="text-3xl font-semibold text-white mb-8 sm:text-3xl md:text-4xl">Settings</h1>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="w-full mb-8">
                    <div className="text-lg">
                      <p className="font-semibold">Email:</p>
                      <p className="text-gray-600">{email}</p>
                    </div>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 mt-2">
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-lg font-semibold">New Password:</FormLabel>
                              <FormControl className="relative">
                                <div className="flex items-center">
                                  <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    {...field}
                                    className="pr-10"
                                  />
                                  <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                  >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                  </div>
                                </div>
                              </FormControl>
                              {errors.password && <FormMessage>{errors.password.message}</FormMessage>}
                            </FormItem>
                          )}
                        />
                      </form>
                    </Form>
                  </div>
                ) : (
                  <div className="flex flex-col text-lg mb-6">
                    <div>
                      <p className="font-semibold">Email:</p>
                      <p className="text-gray-600">{email}</p>
                    </div>
                    <div className="mt-2">
                      <p className="font-semibold">Password:</p>
                      <p className="text-gray-600">{passwordAsterisks}</p>
                    </div>
                  </div>
                )}
                <CardTitle>Preferences</CardTitle>
                <div className="items-top flex space-x-2 mt-4">
                  <Checkbox id="terms1" />
                  <div className="flex flex-row items-center">
                    <label
                      htmlFor="terms1"
                      className="text-sm leading-none text-gray-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I would like to receive emails from The Giving Heart&apos;s optional newsletter.
                    </label>
                  </div>
                </div>
                <div className="flex justify-center mt-8 space-x-2">
                  {isEditing ? (
                    <div className="flex flex-row space-x-2">
                      <Button type="button" onClick={handleCancel} className="bg-red-600 text-white px-12 w-12">Cancel</Button>
                      <Button type="submit" className="bg-red-500 text-white px-12 w-12">Save</Button>
                    </div>
                  ) : (
                    <Button type="button" onClick={handleEdit} className="bg-red-600 text-white w-40">Edit Information</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
