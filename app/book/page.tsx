"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, ChevronLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { useSearchParams } from "next/navigation"

export default function BookingPage() {
  const searchParams = useSearchParams()
  const defaultService = searchParams.get("service") || ""

  const [step, setStep] = useState(1)
  const [date, setDate] = useState()
  const [time, setTime] = useState("")

  const form = useForm({
    defaultValues: {
      service: defaultService,
      bedrooms: "1",
      bathrooms: "1",
      date: "",
      time: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      notes: "",
    },
  })

  const onSubmit = (data) => {
    console.log(data)
    // In a real app, this would submit to an API
    setStep(4) // Move to confirmation step
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ]

  return (
    <div className="container max-w-4xl py-10">
      <Link href="/" className="flex items-center mb-8 text-sm hover:underline">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Home
      </Link>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Book a Cleaning Service</h1>
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-blue-600" : "bg-gray-300"}`}></div>
          <div className={`w-12 h-1 ${step >= 2 ? "bg-blue-600" : "bg-gray-300"}`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-blue-600" : "bg-gray-300"}`}></div>
          <div className={`w-12 h-1 ${step >= 3 ? "bg-blue-600" : "bg-gray-300"}`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 3 ? "bg-blue-600" : "bg-gray-300"}`}></div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Select Service & Size</CardTitle>
                <CardDescription>Choose the type of cleaning service you need</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="regular">Bedroom</SelectItem>
                          <SelectItem value="deep">Bathroom</SelectItem>
                          <SelectItem value="move">Bedroom & Bathroom</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>Select the type of cleaning service you need</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="bedrooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bedrooms</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select number" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5+">5+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bathrooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bathrooms</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select number" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5+">5+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div></div>
                <Button type="button" onClick={nextStep}>
                  Continue
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Select Date & Time</CardTitle>
                <CardDescription>Choose when you'd like us to clean</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? field.value : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(selectedDate) => {
                              setDate(selectedDate)
                              if (selectedDate) {
                                field.onChange(selectedDate.toDateString())
                              }
                            }}
                            disabled={(date) => {
                              // Disable dates in the past and Sundays
                              const today = new Date()
                              today.setHours(0, 0, 0, 0)
                              return date < today || date.getDay() === 0
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>Select a date for your cleaning service</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          setTime(value)
                          field.onChange(value)
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>Select a time for your cleaning service</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  Back
                </Button>
                <Button type="button" onClick={nextStep}>
                  Continue
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Your Information</CardTitle>
                <CardDescription>Provide your contact and address details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(123) 456-7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St, City, State, ZIP" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Instructions</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any special instructions or notes for our cleaners"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Include any special instructions, access codes, or areas that need special attention
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  Back
                </Button>
                <Button type="submit">Book Now</Button>
              </CardFooter>
            </Card>
          )}

          {step === 4 && (
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Booking Confirmed!</CardTitle>
                <CardDescription>Your cleaning service has been scheduled</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-medium">Thank you for your booking!</p>
                  <p className="text-gray-500">
                    We've sent a confirmation email with all the details to your email address.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p className="text-gray-500">Service:</p>
                    <p className="font-medium">
                      {form.getValues().service === "regular" && "Bedroom"}
                      {form.getValues().service === "deep" && "Bathroom"}
                      {form.getValues().service === "move" && "Bedroom & Bathroom"}
                    </p>
                    <p className="text-gray-500">Date:</p>
                    <p className="font-medium">{form.getValues().date}</p>
                    <p className="text-gray-500">Time:</p>
                    <p className="font-medium">{form.getValues().time}</p>
                    <p className="text-gray-500">Address:</p>
                    <p className="font-medium">{form.getValues().address}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/">
                  <Button>Return to Home</Button>
                </Link>
              </CardFooter>
            </Card>
          )}
        </form>
      </Form>
    </div>
  )
}
