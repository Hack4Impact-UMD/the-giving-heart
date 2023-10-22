"use client";

import { useState } from 'react';
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

type FormData = z.infer<typeof schema>;

export default function Settings() {
  const { formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('Password123');
  

  const onSubmit = (values: FormData) => {
    setEmail(values.email);
    setPassword(values.password);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const passwordAsterisks = '*'.repeat(password.length);
  
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-16">
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
            <div className="w-full">
                <h1 className="text-2xl font-bold text-gray-900 mb-8 sm:text-3xl md:text-4xl">Settings</h1>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isEditing ? (
                            <div className="w-full mb-8">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                            <Input placeholder="email@example.com" {...field} />
                                            </FormControl>
                                            {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
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
                                            <Input type="password" placeholder="Password" {...field} />
                                            </FormControl>
                                            {errors.password && <FormMessage>{errors.password.message}</FormMessage>}
                                        </FormItem>
                                        )}
                                    />

                                    <div className="flex flex-col">
                                        <Button type="submit" className="bg-gray-400 text-white px-12 w-12">Save</Button>
                                    </div>
                                    
                                    </form>
                                </Form>
                            </div>
                        ) : (
                            <div className="flex flex-col text-lg mb-6">
                                <div>
                                    <p className="font-bold">Email:</p>
                                    <p className="text-gray-600">{email}</p>
                                </div>
                                <div className="mt-2">
                                    <p className="font-bold">Password:</p>
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
                                I would like to recieve emails from The Giving Heart's optional newsletter.
                                </label>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className="flex justify-center mt-8">
                    <Button type="button" onClick={handleEdit} className="bg-gray-400 text-white w-40">Edit Information</Button>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
