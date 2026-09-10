import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function CheckoutSuccessPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Order Successful!</h1>
      <p className="text-lg text-gray-500 mb-8">
        Thank you for your purchase. We&apos;ve received your order and will process it shortly.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}
