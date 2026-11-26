import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:gap-12 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1.5 text-xs font-medium text-indigo-700 sm:px-4 sm:py-2 sm:text-sm">
            <CheckCircle2 size={16} className="shrink-0" />
            Smart Personal Finance Management
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            Take Control of Your
            <span className="text-indigo-600"> Money</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Track your income, manage expenses, and understand your spending
            habits with one simple platform.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              size="lg"
              className="h-11 w-full px-5 text-base bg-indigo-600 hover:bg-indigo-700 sm:w-auto"
            >
              <Link href="/signup" className="inline-flex items-center">
                Get Started Free <ArrowRight className="ml-2" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-11 w-full px-5 text-base sm:w-auto"
            >
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Simple. Smart. Secure.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-2xl border bg-white p-5 shadow-2xl shadow-indigo-100 sm:rounded-3xl sm:p-6">
            <p className="text-sm text-gray-500">Total Balance</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              ৳45,500
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
              <div className="rounded-xl bg-green-50 p-4 sm:rounded-2xl sm:p-5">
                <p className="text-xs text-green-700 sm:text-sm">Income</p>
                <p className="mt-2 text-lg font-bold text-green-700 sm:text-xl">
                  ৳60,000
                </p>
              </div>

              <div className="rounded-xl bg-red-50 p-4 sm:rounded-2xl sm:p-5">
                <p className="text-xs text-red-700 sm:text-sm">Expenses</p>
                <p className="mt-2 text-lg font-bold text-red-700 sm:text-xl">
                  ৳14,500
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-gray-50 p-4 sm:mt-6 sm:rounded-2xl sm:p-5">
              <p className="font-semibold">Monthly Savings</p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-3/4 rounded-full bg-indigo-600" />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                75% of your income saved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
