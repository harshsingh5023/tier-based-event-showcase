"use client";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4 animate-in fade-in duration-700">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-10 text-center border border-gray-100 animate-in slide-in-from-bottom-4 duration-500 delay-200">
        <div className="mb-8 animate-in fade-in slide-in-from-top-2 duration-600 delay-300">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-in zoom-in duration-500 delay-500">
            Tier-Based Event Showcase
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed animate-in fade-in duration-500 delay-700">
            Access exclusive events based on your membership tier
          </p>
        </div>

        <SignedOut>
          <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500 delay-900">
            <SignInButton>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-semibold active:scale-95">
                Sign In to Continue
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-xl hover:shadow-xl hover:shadow-green-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-semibold active:scale-95">
                Create Account
              </button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <Link
            href="/events"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-semibold inline-block active:scale-95 animate-in slide-in-from-bottom-4 duration-500 delay-900"
          >
            View Events Dashboard
          </Link>
        </SignedIn>
      </div>
    </div>
  );
}
