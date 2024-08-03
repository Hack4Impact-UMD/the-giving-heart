"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface PayLevelProps {
  type: string;
  donation: string;
  hostedButtonId: string;
  on0Label: string;
  on1Label: string;
}

export const PayLevel: React.FC<PayLevelProps> = ({
  type,
  donation,
  hostedButtonId,
  on0Label,
  on1Label,
}) => {
  const form = useForm();

  const onSubmit = (data: any) => {
    const formElement = document.createElement("form");
    formElement.setAttribute("action", "https://www.paypal.com/cgi-bin/webscr");
    formElement.setAttribute("method", "post");
    formElement.setAttribute("target", "_top");

    const cmdInput = document.createElement("input");
    cmdInput.setAttribute("type", "hidden");
    cmdInput.setAttribute("name", "cmd");
    cmdInput.setAttribute("value", "_s-xclick");
    formElement.appendChild(cmdInput);

    const hostedButtonIdInput = document.createElement("input");
    hostedButtonIdInput.setAttribute("type", "hidden");
    hostedButtonIdInput.setAttribute("name", "hosted_button_id");
    hostedButtonIdInput.setAttribute("value", hostedButtonId);
    formElement.appendChild(hostedButtonIdInput);

    const on0Input = document.createElement("input");
    on0Input.setAttribute("type", "hidden");
    on0Input.setAttribute("name", "on0");
    on0Input.setAttribute("value", on0Label);
    formElement.appendChild(on0Input);

    const os0Input = document.createElement("input");
    os0Input.setAttribute("type", "hidden");
    os0Input.setAttribute("name", "os0");
    os0Input.setAttribute("value", data.businessName);
    formElement.appendChild(os0Input);

    const on1Input = document.createElement("input");
    on1Input.setAttribute("type", "hidden");
    on1Input.setAttribute("name", "on1");
    on1Input.setAttribute("value", on1Label);
    formElement.appendChild(on1Input);

    const os1Input = document.createElement("input");
    os1Input.setAttribute("type", "hidden");
    os1Input.setAttribute("name", "os1");
    os1Input.setAttribute("value", data.website);
    formElement.appendChild(os1Input);

    document.body.appendChild(formElement);
    formElement.submit();
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <p className="content-center text-center px-4 pb-6"> {type} </p>
      <p className="text-[#FF0000] px-4 pb-6"> ${donation}.00 </p>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Form {...form}>
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel> {on0Label} </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel> {on1Label} </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-12">
            <Button
              type="submit"
              className="bg-[#F6F6F6] text-black rounded-2xl drop-shadow-xl px-10 h-8"
            >
              Pay Now
            </Button>
          </div>
        </Form>
      </form>
    </div>
  );
};
