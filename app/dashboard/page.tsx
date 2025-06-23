"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, ChevronLeft, ChevronRight, Home, LogOut, Settings, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const [date, setDate] = useState(new Date())

  // Mock data for upcoming bookings
  const upcomingBookings = [
    {
      id: "B001",
      customer: "John Smith",
      service: "Regular Cleaning",
      date: "Jun 12, 2025",
      time: "10:00 AM",
      address: "123 Main St, Apt 4B",
      status: "confirmed",
    },
    {
      id: "B002",
      customer: "Sarah Johnson",
      service: "Deep Cleaning",
      date: "Jun 13, 2025",
      time: "1:00 PM",
      address: "456 Oak Ave",
      status: "confirmed",
    },
    {
      id: "B003",
      customer: "Michael Brown",
      service: "Move Out Cleaning",
      date: "Jun 14, 2025",
      time: "9:00 AM",
      address: "789 Pine St, Suite 3",
      status: "pending",
    },
  ]

  // Mock data for recent bookings
  const recentBookings = [
    {
      id: "B004",
      customer: "Emily Davis",
      service: "Regular Cleaning",
      date: "Jun 8, 2025",
      time: "2:00 PM",
      address: "321 Elm St",
      status: "completed",
    },
    {
      id: "B005",
      customer: "David Wilson",
      service: "Deep Cleaning",
      date: "Jun 7, 2025",
      time: "11:00 AM",
      address: "654 Maple Rd",
      status: "completed",
    },
    {
      id: "B006",
      customer: "Jennifer Taylor",
      service: "Regular Cleaning",
      date: "Jun 5, 2025",
      time: "3:00 PM",
      address: "987 Cedar Ln",
      status: "completed",
    },
  ]

  // Mock data for staff
  const staff = [
    {
      id: "S001",
      name: "Alex Rodriguez",
      role: "Team Lead",
      bookings: 24,
      rating: 4.9,
    },
    {
      id: "S002",
      name: "Maria Garcia",
      role: "Cleaner",
      bookings: 18,
      rating: 4.8,
    },
    {
      id: "S003",
      name: "James Wilson",
      role: "Cleaner",
      bookings: 15,
      rating: 4.7,
    },
  ]

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r bg-gray-50">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">CleanCo</span>
          </Link>
        </div>
        <div className="flex-1 px-4 py-2">
          <nav className="space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2 text-blue-900">
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/bookings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-blue-900 hover:bg-blue-50"
            >
              <CalendarIcon className="h-5 w-5" />
              <span>Bookings</span>
            </Link>
            <Link
              href="/dashboard/staff"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-blue-900 hover:bg-blue-50"
            >
              <Users className="h-5 w-5" />
              <span>Staff</span>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-blue-900 hover:bg-blue-50"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-500">admin@cleanco.com</p>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="border-b">
          <div className="flex h-16 items-center px-6">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
        </header>

        <main className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">145</div>
                <p className="text-xs text-green-500">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,580</div>
                <p className="text-xs text-green-500">+8% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Staff</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">3 teams active today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Customer Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8/5</div>
                <p className="text-xs text-green-500">+0.2 from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 mt-6">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Upcoming Bookings</CardTitle>
                <CardDescription>Manage your upcoming cleaning appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.customer}</TableCell>
                        <TableCell>{booking.service}</TableCell>
                        <TableCell>
                          {booking.date}, {booking.time}
                        </TableCell>
                        <TableCell>
                          <span
                            className={cn(
                              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                              booking.status === "confirmed"
                                ? "bg-green-100 text-green-800"
                                : booking.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-blue-100 text-blue-800",
                            )}
                          >
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="ml-auto">
                  View All Bookings
                </Button>
              </CardFooter>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>View and manage your schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm">3 Regular Cleanings</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">1 Deep Cleaning</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-6">
            <Tabs defaultValue="recent">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="recent">Recent Bookings</TabsTrigger>
                  <TabsTrigger value="staff">Staff Performance</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <TabsContent value="recent" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Date & Time</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentBookings.map((booking) => (
                          <TableRow key={booking.id}>
                            <TableCell className="font-medium">{booking.id}</TableCell>
                            <TableCell>{booking.customer}</TableCell>
                            <TableCell>{booking.service}</TableCell>
                            <TableCell>
                              {booking.date}, {booking.time}
                            </TableCell>
                            <TableCell>
                              <span
                                className={cn(
                                  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                                  booking.status === "completed"
                                    ? "bg-green-100 text-green-800"
                                    : booking.status === "cancelled"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-blue-100 text-blue-800",
                                )}
                              >
                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="staff" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Bookings Completed</TableHead>
                          <TableHead>Customer Rating</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {staff.map((person) => (
                          <TableRow key={person.id}>
                            <TableCell className="font-medium">{person.name}</TableCell>
                            <TableCell>{person.role}</TableCell>
                            <TableCell>{person.bookings}</TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                {person.rating}
                                <div className="ml-2 flex">
                                  {[...Array(5)].map((_, i) => (
                                    <svg
                                      key={i}
                                      className={`h-4 w-4 ${i < Math.floor(person.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                  ))}
                                </div>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
