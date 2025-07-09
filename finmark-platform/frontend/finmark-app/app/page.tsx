import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FM</span>
            </div>
            <span className="text-xl font-bold text-gray-800">FinMark Corporation</span>
          </div>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Finer FinMark Platform</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Scalable, secure, and data-driven platform designed to support growing SME businesses with enhanced order
            processing capabilities.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/signup">
              <Button size="lg" className="px-8">
                Start Your Journey
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                Access Platform
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                <span>Scalable Architecture</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Handle up to 3,000+ orders daily with our optimized infrastructure designed for growth.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                <span>Enhanced Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Advanced cybersecurity measures to protect your data and ensure system reliability.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                <span>Data Analytics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Intelligent insights and demand forecasting to optimize your business operations.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <footer className="text-center text-gray-600">
          <p className="mb-2">123 Makati Avenue, Makati City, Manila, Philippines</p>
          <p className="mb-2">Phone: +63 2 1234 5678 | Email: info@finmarksolutions.ph</p>
          <p>www.finmarksolutions.ph</p>
        </footer>
      </div>
    </div>
  )
}
