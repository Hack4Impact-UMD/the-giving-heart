"use client";

import { useState, useEffect } from "react";
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
import { API } from "@/utils/constant";
import { getToken } from "../../utils/helpers";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { useAuthContext } from "@/utils/context/AuthContext";

// TODO?: might want to consider making passwords require at least a special character or number
const schema = z
  .object({
    currentPassword: z.string().min(1, "Please enter your current password"),
    newPassword: z.string().min(8, {
      message: "Password must be at least 8 characters",
    }),
    confirmPassword: z.string().min(1, "Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function Settings() {
  const { user } = useAuthContext();
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const {
    formState: { errors },
  } = form;
  const [isEditing, setIsEditing] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  useEffect(() => {
    form.setValue("newPassword", "");
    form.setValue("confirmPassword", "");
  }, [form]);

  const togglePasswordVisibility = (field: keyof typeof passwordVisibility) => {
    setPasswordVisibility({
      ...passwordVisibility,
      [field]: !passwordVisibility[field],
    });
  };

  const onSubmit = (values: FormData) => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    console.log(form.watch("currentPassword"));
    form.reset({ newPassword: "", confirmPassword: "" });
    setIsEditing(false);
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit);
    changePassword(
      form.watch("currentPassword"),
      form.watch("newPassword"),
      form.watch("confirmPassword")
    )
      .then((data) => {
        console.log(data);
        form.reset({ newPassword: "", confirmPassword: "" });
        setIsEditing(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [currentPassword] = useState("Password123");
  const passwordAsterisks = "*".repeat(currentPassword.length);

  async function changePassword(
    currentPassword: String,
    newPassword: String,
    newPasswordConfirmation: String
  ) {
    const authToken = getToken();
    const response = await fetch(`${API}/auth/change-password`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentPassword: currentPassword,
        password: newPassword,
        passwordConfirmation: newPasswordConfirmation,
      }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      setWrongPassword(true);
      throw new Error("Failed to change password");
    }
  }

  return (
    <div>
      <div className="z-0 w-full h-40 bg-red-900">.</div>
      <main className="flex min-h-screen flex-col items-center justify-between -mt-36 p-8 md:-mt-44md:p-16">
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
          <div className="w-full">
            <h1 className="text-4xl font-semibold text-white mb-8 sm:text-3xl md:text-4xl">
              Settings
            </h1>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="w-full mb-8">
                    <div className="text-lg">
                      <p className="font-semibold">Email:</p>
                      <p className="text-gray-600">{user?.email}</p>
                    </div>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-2 mt-2"
                      >
                        <FormField
                          control={form.control}
                          name="currentPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-lg font-semibold">
                                Current Password:
                              </FormLabel>
                              <FormControl className="relative">
                                <div className="flex items-center">
                                  <Input
                                    type={
                                      passwordVisibility.currentPassword
                                        ? "text"
                                        : "password"
                                    }
                                    placeholder="Current Password"
                                    {...field}
                                    className="pr-10"
                                  />
                                  <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={() =>
                                      togglePasswordVisibility(
                                        "currentPassword"
                                      )
                                    }
                                  >
                                    {passwordVisibility.currentPassword ? (
                                      <EyeOff size={16} />
                                    ) : (
                                      <Eye size={16} />
                                    )}
                                  </div>
                                </div>
                              </FormControl>
                              {errors.currentPassword && (
                                <FormMessage>
                                  {errors.currentPassword.message}
                                </FormMessage>
                              )}
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="newPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-lg font-semibold">
                                New Password:
                              </FormLabel>
                              <FormControl className="relative">
                                <div className="flex items-center">
                                  <Input
                                    type={
                                      passwordVisibility.newPassword
                                        ? "text"
                                        : "password"
                                    }
                                    placeholder="New Password"
                                    {...field}
                                    className="pr-10"
                                  />
                                  <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={() =>
                                      togglePasswordVisibility("newPassword")
                                    }
                                  >
                                    {passwordVisibility.newPassword ? (
                                      <EyeOff size={16} />
                                    ) : (
                                      <Eye size={16} />
                                    )}
                                  </div>
                                </div>
                              </FormControl>
                              {errors.newPassword && (
                                <FormMessage>
                                  {errors.newPassword.message}
                                </FormMessage>
                              )}
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="confirmPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-lg font-semibold">
                                Confirm Password:
                              </FormLabel>
                              <FormControl className="relative">
                                <div className="flex items-center">
                                  <Input
                                    type={
                                      passwordVisibility.confirmPassword
                                        ? "text"
                                        : "password"
                                    }
                                    placeholder="Confirm Password"
                                    {...field}
                                    className="pr-10"
                                  />
                                  <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={() =>
                                      togglePasswordVisibility(
                                        "confirmPassword"
                                      )
                                    }
                                  >
                                    {passwordVisibility.confirmPassword ? (
                                      <EyeOff size={16} />
                                    ) : (
                                      <Eye size={16} />
                                    )}
                                  </div>
                                </div>
                              </FormControl>
                              {errors.confirmPassword && (
                                <FormMessage>
                                  {errors.confirmPassword.message}
                                </FormMessage>
                              )}
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
                      <p className="text-gray-600">{user?.email}</p>
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
                      I would like to receive emails from The Giving
                      Heart&apos;s optional newsletter.
                    </label>
                  </div>
                </div>
                {wrongPassword && isEditing && (
                  <div className="text-red-600 mt-2">
                    Something went wrong. Please check your values and try
                    again.
                  </div>
                )}
                <div className="flex justify-center mt-8 space-x-2">
                  {isEditing ? (
                    <div className="flex flex-row space-x-2">
                      <Button
                        type="button"
                        onClick={handleCancel}
                        className="bg-red-600 text-white px-12 w-12"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        onClick={handleSave}
                        className="bg-red-500 text-white px-12 w-12"
                      >
                        Save
                      </Button>
                    </div>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleEdit}
                      className="bg-red-600 text-white w-40"
                    >
                      Edit Information
                    </Button>
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
