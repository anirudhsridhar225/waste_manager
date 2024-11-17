'use client'

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface WasteProps {
  id: string;
  waste_name: string;
  waste_type: string;
  waste_location: string;
  waste_quantity: number;
}

const formSchema = z.object({
  waste_name: z.string().min(1, {
    message: "Waste name is required",
  }),
  waste_type: z.string().min(1),
  waste_location: z.string().min(1),
  waste_quantity: z.number().positive().int().min(1),
})

async function saveWaste(waste: Omit<WasteProps, 'id'>) {
  const response = await fetch("/api/waste", {
    method: "POST",
    body: JSON.stringify(waste),
  });

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  return await response.json();
}

async function fetchWaste(): Promise<WasteProps[]> {
  const response = await fetch("/api/waste", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  return await response.json();
}

export default function Home() {
  const [wasteData, setWasteData] = useState<WasteProps[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  useEffect(() => {
    fetchWaste().then(setWasteData).catch(console.error);
  }, []);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      await saveWaste(data);
      console.log(data);
      // Refresh the waste data after submission
      const updatedWasteData = await fetchWaste();
      setWasteData(updatedWasteData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="bg-black flex flex-col justify-center items-center min-h-screen text-white p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 border border-white/50 p-10 rounded-xl w-full max-w-2xl mb-8">
          <FormField
            control={form.control}
            name="waste_name"
            render={({ field }) => (
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
          />
          <FormField
            control={form.control}
            name="waste_type"
            render={({ field }) => (
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
          />
          <FormField
            control={form.control}
            name="waste_location"
            render={({ field }) => (
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
          />
          <FormField
            control={form.control}
            name="waste_quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Waste Quantity</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="100" {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />
                </FormControl>
                <FormDescription>
                  Please enter the quantity of waste being dumped.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="border border-white">Submit</Button>
        </form>
      </Form>

      <div className="w-full max-w-4xl border border-white p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Waste Data</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Waste Name</TableHead>
              <TableHead>Waste Type</TableHead>
              <TableHead>Waste Location</TableHead>
              <TableHead>Waste Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {wasteData.map((waste) => (
              <TableRow key={waste.id}>
                <TableCell>{waste.waste_name}</TableCell>
                <TableCell>{waste.waste_type}</TableCell>
                <TableCell>{waste.waste_location}</TableCell>
                <TableCell>{waste.waste_quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}