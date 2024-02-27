"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

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

interface PayLevelProps {
  type: string;
  donation: string;
}

export const PayLevel: React.FC<PayLevelProps> = ({
  type,
  donation,
}) => {
  const form = useForm()

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <p className="content-center px-4 pb-6"> {type} </p>
      <p className="text-[#FF0000] px-4 pb-6"> ${donation}.00 </p>

      <Form {...form}>
          <FormField
            control={form.control}
            name="business name"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Business Name </FormLabel>
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
                <FormLabel> Website (if applicable) </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
      </Form>

      <div className="pt-12">
        <Button className="bg-[#F6F6F6] text-black rounded-2xl drop-shadow-xl px-10 h-8"> Pay Now </Button>
      </div>

    </div>
  );
};