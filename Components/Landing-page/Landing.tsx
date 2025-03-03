"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { ChevronRight } from "lucide-react"
import Link from "next/link";

export default function Netflix() {
  const [email, setEmail] = useState("")

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1 opacity-50">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="aspect-[2/3] bg-neutral-900 relative overflow-hidden">
              <Image
                src="/Assets/nextflix-bg.jpg"
                alt=""
                fill
                className="object-cover"
                priority={i < 10}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between w-full px-4 py-6 md:px-8">
          <div className="w-28 md:w-40">
            <svg viewBox="0 0 111 30" className="fill-red-600 h-full w-full" aria-hidden="true" focusable="false">
              <g>
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
              </g>
            </svg>
          </div>
      
         <Link href="/Signin">
          <Button variant="destructive" size="sm" className="rounded px-4 py-1 h-auto font-medium cursor-pointer">
           Sign In
          </Button>
          </Link>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12 md:py-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-lg md:text-xl mb-5">Starts at ₦2,200. Cancel anytime.</p>
          <p className="text-lg mb-4">Ready to watch? Enter your email to create or restart your membership.</p>

          <div className="flex flex-col sm:flex-row w-full max-w-xl gap-3 mt-2">
            <Input
              type="email"
              placeholder="Email address"
              className="h-14 bg-black/60 border-gray-600 text-white placeholder:text-gray-400 flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <Link href="/Signup">
             <Button variant="destructive" size="lg" className="h-14 px-6 text-xl font-medium cursor-pointer">
             Get Started
             <ChevronRight className="ml-2 h-5 w-5" />
             </Button>
             </Link>
          </div>
          </main>

        {/* Gradient Border */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-80" />
      </div>
    </div>
  )
}

