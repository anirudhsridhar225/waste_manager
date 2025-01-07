"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Bar, BarChart, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";

interface WasteProps {
  id: string;
  waste_name: string;
  waste_type: string;
  waste_location: string;
  waste_quantity: number;
}

interface LocationAnalytics {
  location: string;
  totalQuantity: number;
  percentage: number;
}

const formSchema = z.object({
  waste_name: z.string().min(1, {
    message: "Waste name is required",
  }),
  waste_type: z.string().min(1),
  waste_location: z.string().min(1),
  waste_quantity: z.coerce.number().positive().int().min(1),
})

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

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

function calculateLocationAnalytics(data: WasteProps[]): LocationAnalytics[] {
  // Group by location and sum quantities
  const locationMap = data.reduce((acc, curr) => {
    acc[curr.waste_location] = (acc[curr.waste_location] || 0) + curr.waste_quantity;
    return acc;
  }, {} as Record<string, number>);

  // Calculate total waste quantity
  const totalWaste = Object.values(locationMap).reduce((sum, qty) => sum + qty, 0);

  // Convert to array and calculate percentages
  return Object.entries(locationMap).map(([location, totalQuantity]) => ({
    location,
    totalQuantity,
    percentage: Number(((totalQuantity / totalWaste) * 100).toFixed(1))
  }));
}

export default function Home() {
  const [wasteData, setWasteData] = useState<WasteProps[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [analytics, setAnalytics] = useState<LocationAnalytics[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  useEffect(() => {
    fetchWaste().then(data => {
      setWasteData(data);
      setAnalytics(calculateLocationAnalytics(data));
    }).catch(console.error);
  }, []);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      await saveWaste(data);
      const updatedWasteData = await fetchWaste();
      setWasteData(updatedWasteData);
      setAnalytics(calculateLocationAnalytics(updatedWasteData));
      setShowForm(false);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Waste Management Dashboard</h1>
          <Button
            onClick={() => setShowForm(true)}
            className="border border-white flex items-center gap-2"
          >
            <Plus size={16} />
            Add New Waste Entry
          </Button>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Bar Chart */}
          <Card className="bg-black border border-white/50 p-6 rounded-xl text-white">
            <h2 className="text-xl font-bold mb-4">Waste Quantity by Location</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analytics}>
                  <XAxis dataKey="location" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#000', border: '1px solid #fff' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Legend />
                  <Bar dataKey="totalQuantity" fill="#8884d8" name="Total Quantity" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Pie Chart */}
          <Card className="bg-black border border-white/50 p-6 rounded-xl text-white">
            <h2 className="text-xl font-bold mb-4">Waste Distribution (%)</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={analytics}
                    dataKey="percentage"
                    nameKey="location"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ location, percentage }) => `${location}: ${percentage}%`}
                  >
                    {analytics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #fff' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Summary Statistics */}
          <Card className="bg-black border border-white/50 p-6 rounded-xl text-white md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Location Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {analytics.map((location) => (
                <div key={location.location} className="p-4 border border-white/20 rounded-lg">
                  <h3 className="font-semibold mb-2">{location.location}</h3>
                  <p className="text-sm">Total Quantity: {location.totalQuantity}</p>
                  <p className="text-sm">Distribution: {location.percentage}%</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Table Card */}
        <Card className="bg-black border border-white/50 p-6 rounded-xl mb-8 text-white">
          <h2 className="text-xl font-bold mb-4">Waste Entries</h2>
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
        </Card>

        {/* Modal Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <Card className="bg-black border border-white/50 p-8 rounded-xl w-full max-w-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Add New Waste Entry</h2>
                <Button
                  onClick={() => setShowForm(false)}
                  variant="ghost"
                  className="hover:bg-white/10"
                >
                  ✕
                </Button>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="waste_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Waste Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="text-white" {...field} />
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
                        <FormLabel className="text-white">Waste Type</FormLabel>
                        <FormControl>
                          <Input placeholder="Waste Type A" className="text-white" {...field} />
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
                        <FormLabel className="text-white">Waste Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Waste Location A" className="text-white" {...field} />
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
                    render={({ field: { onChange, ...field } }) => (
                      <FormItem>
                        <FormLabel className="text-white">Waste Quantity</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="100" 
                            className="text-white" 
                            onChange={(e) => {
                              const value = e.target.value ? parseInt(e.target.value) : '';
                              onChange(value);
                            }}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter the quantity of waste being dumped.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end gap-4">
                    <Button
                      type="submit"
                      className="border border-white"
                    >
                      Submit
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setShowForm(false)}
                      variant="outline"
                      className="border-white"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}