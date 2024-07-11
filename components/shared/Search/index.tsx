"use client";
import { Input } from "@/components/ui/input";
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import React from "react";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { checkAddressType } from "@/utils/checkAddressType";

const Search = () => {
  const router = useRouter();
  const formSchema = z.object({
    search: z.string().min(2).max(90),
  });
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const type = await checkAddressType(values.search);
    console.log(type);
    router.push(`/${type}/${values.search}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-lg space-y-8"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center border-b border-purple-500">
                  <Input
                    {...field}
                    placeholder="Search tokens, addresses and NFTs"
                    className="rounded-none border-0 bg-inherit placeholder:font-bold placeholder:text-white"
                  />
                  <Button type="submit" className="">
                    <SearchIcon size={16} />
                  </Button>
                </div>
              </FormControl>
              <FormDescription>
                You can search for any block, address, signature or etc. on
                Solana
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default Search;
