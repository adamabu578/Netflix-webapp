"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function SignInForm() {
  const [email, setEmail] = useState("abukamsulum01@gmail.com")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log({ email, password, rememberMe })
  }

  return (
    <div className="w-full max-w-md bg-black/75 rounded-md p-8 md:p-12">
      <h1 className="text-3xl font-bold mb-8">Sign In</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or mobile number"
            className="w-full bg-zinc-800 rounded px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white/30"
          />
        </div>

        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-zinc-800 rounded px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white/30"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#e50914] text-white py-3 rounded font-medium hover:bg-[#f40612] transition"
        >
          Sign In
        </button>
      </form>

      <div className="text-center my-4 text-gray-400">OR</div>

      <button className="w-full bg-zinc-700/60 text-white py-3 rounded font-medium mb-4 hover:bg-zinc-700 transition">
        Use a Sign-In Code
      </button>

      <div className="mt-3 mb-6">
        <Link href="/forgot-password" className="text-gray-400 hover:underline text-sm">
          Forgot password?
        </Link>
      </div>

      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="h-4 w-4 bg-zinc-800 border-zinc-600 rounded"
        />
        <label htmlFor="remember-me" className="ml-2 text-gray-400 text-sm">
          Remember me
        </label>
      </div>

      <div className="text-gray-400 text-sm">
        New to Netflix?{" "}
        <Link href="/signup" className="text-white hover:underline">
          Sign up now
        </Link>
        .
      </div>

      <div className="mt-4 text-xs text-gray-500">
        This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.{" "}
        <Link href="/learn-more" className="text-blue-500 hover:underline">
          Learn more
        </Link>
        .
      </div>
    </div>
  )
}

