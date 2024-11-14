"use client";
import { prisma } from "@/lib/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface WasteProps {
  wasteName: string;
  wasteType: string;
  wasteLocation: string;
  wasteQuantity: number;
}

const formSchema = z.object({
  wasteName: z.string().min(1, {
    message: "Waste name is required",
  }),
  wasteType: z.string().min(1),
  wasteLocation: z.string().min(1),
  wasteQuantity: z.number().positive().int().min(1),
})

async function saveWaste(waste: WasteProps) {
  const response = await fetch("/api/waste", {
    method: "POST",
    body: JSON.stringify(waste),
  });

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  return await response.json();
}

export default function Home() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wasteName: "John Doe",
      wasteLocation: "Waste Dump A",
      wasteType: "Waste Type B",
      wasteQuantity: 1,
    }
  })

    function onSubmit(data: z.infer<typeof formSchema>) {
        saveWaste(data);
        console.log(data);
    }

  return (
    <div className="bg-black flex justify-center items-center min-h-screen text-white">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 border border-white/50 p-10 rounded-xl w-1/2">
          <FormField
            control={form.control}
            name="wasteName"
            render={({ field }) =>(
                <FormItem>
                  <FormLabel>Waste Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please enter the name of waste item being dumped.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
            )}
          ></FormField>
          <FormField
              control={form.control}
              name="wasteType"
              render={({ field }) =>(
                  <FormItem>
                    <FormLabel>Waste Type</FormLabel>
                    <FormControl>
                      <Input placeholder="Waste Type A" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter the type of waste being dumped.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
              )}
          ></FormField>
          <FormField
              control={form.control}
              name="wasteLocation"
              render={({ field }) =>(
                  <FormItem>
                    <FormLabel>Waste Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Waste Location A" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter the location of the waste being dumped.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
              )}
          ></FormField>
          <FormField
              control={form.control}
              name="wasteQuantity"
              render={({ field }) =>(
                  <FormItem>
                    <FormLabel>Waste Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="100" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter the quantity of waste being dumped.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
              )}
          ></FormField>
          <Button type="submit" className="border border-white">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
