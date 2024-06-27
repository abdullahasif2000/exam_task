"use client"

import { z } from "zod"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { nameschema } from "@/schemas/nameschema"

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
import { createLorem } from "@/actions/createLorem"

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof nameschema>>({
    resolver: zodResolver(nameschema),
    defaultValues: {
      name: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof nameschema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    createLorem(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-6 items-center justify-between">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input className="w-[850px]" placeholder="Enter Something" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}