"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import Link from "next/link"

export function EmailForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Email submitted:", email)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col md:flex-row gap-2">
      <div className="flex-1">
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 bg-black/40 border-zinc-600 text-white placeholder:text-zinc-400"
        />
      </div>
       <Link href="/Signup">
       <Button type="submit"  className="h-12 bg-red-600 hover:bg-red-700 text-white font-medium px-6 cursor-pointer">
         Get Started
        <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
        </Link>
    </form>
  )
}

