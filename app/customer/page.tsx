"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, Edit, Home, LogOut, MapPin, Star, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function CustomerDashboard() {
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [isEditingProfile, setIsEditingProfile] = useState(false)

  // Mock customer data
  const customer = {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "(555) 123-4567",
    address: "123 Main Street, Apt 4B, New York, NY 10001",
    memberSince: "January 2023",
    totalBookings: 12,
    favoriteService: "Regular Cleaning",
  }

  // Mock upcoming bookings
  const upcomingBookings = [
    {
      id: "B001",
      service: "Regular Cleaning",
      date: "2025-06-15",
      time: "10:00 AM",
      duration: "2-3 hours",
      cleaner: "Maria Garcia",
      cleanerRating: 4.9,
      price: 120,
      status: "confirmed",
      address: "123 Main Street, Apt 4B",
      notes: "Please focus on the kitchen and bathrooms",
    },
    {
      id: "B002",
      service: "Deep Cleaning",
      date: "2025-06-28",
      time: "9:00 AM",
      duration: "4-5 hours",
      cleaner: "Alex Rodriguez",
      cleanerRating: 4.8,
      price: 250,
      status: "confirmed",
      address: "123 Main Street, Apt 4B",
      notes: "First deep cleaning - please be thorough",
    },
  ]

  // Mock booking history
  const bookingHistory = [
    {
      id: "B003",
      service: "Regular Cleaning",
      date: "2025-06-01",
      time: "2:00 PM",
      cleaner: "Maria Garcia",
      cleanerRating: 4.9,
      price: 120,
      status: "completed",
      customerRating: 5,
      review: "Excellent service! Maria was very thorough and professional.",
    },
    {
      id: "B004",
      service: "Regular Cleaning",
      date: "2025-05-18",
      time: "10:00 AM",
      cleaner: "Jennifer Lopez",
      cleanerRating: 4.7,
      price: 120,
      status: "completed",
      customerRating: 4,
      review: "Good job overall, arrived on time.",
    },
    {
      id: "B005",
      service: "Move In Cleaning",
      date: "2025-05-01",
      time: "8:00 AM",
      cleaner: "Alex Rodriguez",
      cleanerRating: 4.8,
      price: 300,
      status: "completed",
      customerRating: 5,
      review: "Perfect for our move-in! Everything was spotless.",
    },
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleCancelBooking = (bookingId) => {
    // In a real app, this would call an API to cancel the booking
    console.log("Cancelling booking:", bookingId)
  }

  const handleRescheduleBooking = (bookingId) => {
    // In a real app, this would open a reschedule dialog
    console.log("Rescheduling booking:", bookingId)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">CleanCo</span>
          </Link>
        </div>
        <div className="flex-1 px-4 py-2">
          <nav className="space-y-1">
            <Link href="/customer" className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2 text-blue-900">
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/book"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-blue-900 hover:bg-blue-50"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Service</span>
            </Link>
            <Link
              href="/customer/profile"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-blue-900 hover:bg-blue-50"
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </nav>
        </div>
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt={customer.name} />
              <AvatarFallback>
                {customer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">{customer.name}</p>
              <p className="text-xs text-gray-500">{customer.email}</p>
            </div>
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b">
          <div className="flex h-16 items-center px-6">
            <h1 className="text-lg font-semibold">My Dashboard</h1>
          </div>
        </header>

        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Welcome back, {customer.name.split(" ")[0]}!</h2>
            <p className="text-gray-600">Manage your cleaning services and view your booking history.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Next Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Jun 15</div>
                <p className="text-xs text-gray-500">Regular Cleaning at 10:00 AM</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{customer.totalBookings}</div>
                <p className="text-xs text-gray-500">Since {customer.memberSince}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Favorite Service</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">{customer.favoriteService}</div>
                <p className="text-xs text-gray-500">Most booked service</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs for different sections */}
          <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming Bookings</TabsTrigger>
              <TabsTrigger value="history">Booking History</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            {/* Upcoming Bookings */}
            <TabsContent value="upcoming" className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Upcoming Bookings</h3>
                <Link href="/book">
                  <Button>Book New Service</Button>
                </Link>
              </div>

              {upcomingBookings.length === 0 ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Calendar className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No upcoming bookings</h3>
                    <p className="text-gray-500 text-center mb-4">
                      You don't have any scheduled cleaning services. Book one now to keep your home spotless!
                    </p>
                    <Link href="/book">
                      <Button>Book a Service</Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="text-lg font-semibold">{booking.service}</h4>
                              <Badge className={getStatusColor(booking.status)}>
                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                              </Badge>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{formatDate(booking.date)}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>
                                  {booking.time} ({booking.duration})
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>{booking.address}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>{booking.cleaner}</span>
                                <div className="flex items-center">
                                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                  <span className="ml-1">{booking.cleanerRating}</span>
                                </div>
                              </div>
                            </div>

                            {booking.notes && (
                              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-600">
                                  <strong>Notes:</strong> {booking.notes}
                                </p>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col items-end gap-2 ml-6">
                            <div className="text-xl font-bold">${booking.price}</div>
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm" onClick={() => setSelectedBooking(booking)}>
                                    View Details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-md">
                                  <DialogHeader>
                                    <DialogTitle>Booking Details</DialogTitle>
                                    <DialogDescription>Booking ID: {booking.id}</DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div>
                                      <Label className="text-sm font-medium">Service</Label>
                                      <p className="text-sm text-gray-600">{booking.service}</p>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium">Date & Time</Label>
                                      <p className="text-sm text-gray-600">
                                        {formatDate(booking.date)} at {booking.time}
                                      </p>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium">Cleaner</Label>
                                      <p className="text-sm text-gray-600">
                                        {booking.cleaner} (★ {booking.cleanerRating})
                                      </p>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium">Address</Label>
                                      <p className="text-sm text-gray-600">{booking.address}</p>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium">Price</Label>
                                      <p className="text-sm text-gray-600">${booking.price}</p>
                                    </div>
                                    {booking.notes && (
                                      <div>
                                        <Label className="text-sm font-medium">Special Instructions</Label>
                                        <p className="text-sm text-gray-600">{booking.notes}</p>
                                      </div>
                                    )}
                                  </div>
                                  <DialogFooter className="flex gap-2">
                                    <Button variant="outline" onClick={() => handleRescheduleBooking(booking.id)}>
                                      Reschedule
                                    </Button>
                                    <Button variant="destructive" onClick={() => handleCancelBooking(booking.id)}>
                                      Cancel
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Booking History */}
            <TabsContent value="history" className="space-y-4">
              <h3 className="text-lg font-semibold">Booking History</h3>

              <div className="space-y-4">
                {bookingHistory.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-lg font-semibold">{booking.service}</h4>
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </Badge>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(booking.date)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{booking.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              <span>{booking.cleaner}</span>
                              <div className="flex items-center">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span className="ml-1">{booking.cleanerRating}</span>
                              </div>
                            </div>
                          </div>

                          {booking.review && (
                            <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-sm font-medium">Your Review:</span>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < booking.customerRating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm text-gray-600">{booking.review}</p>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col items-end gap-2 ml-6">
                          <div className="text-xl font-bold">${booking.price}</div>
                          <Button variant="outline" size="sm">
                            Book Again
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Profile */}
            <TabsContent value="profile" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Profile Information</h3>
                <Button variant="outline" onClick={() => setIsEditingProfile(!isEditingProfile)}>
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditingProfile ? "Cancel" : "Edit Profile"}
                </Button>
              </div>

              <Card>
                <CardContent className="p-6">
                  {isEditingProfile ? (
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" defaultValue={customer.name} />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue={customer.email} />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" defaultValue={customer.phone} />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Textarea id="address" defaultValue={customer.address} />
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => setIsEditingProfile(false)}>Save Changes</Button>
                        <Button variant="outline" onClick={() => setIsEditingProfile(false)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Full Name</Label>
                          <p className="text-sm">{customer.name}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Email</Label>
                          <p className="text-sm">{customer.email}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Phone</Label>
                          <p className="text-sm">{customer.phone}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Member Since</Label>
                          <p className="text-sm">{customer.memberSince}</p>
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Address</Label>
                        <p className="text-sm">{customer.address}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Account Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Actions</CardTitle>
                  <CardDescription>Manage your account settings and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-gray-500">Receive booking confirmations and reminders</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Payment Methods</h4>
                      <p className="text-sm text-gray-500">Manage your saved payment methods</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Change Password</h4>
                      <p className="text-sm text-gray-500">Update your account password</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
