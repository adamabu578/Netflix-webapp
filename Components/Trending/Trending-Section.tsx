"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/Components/ui/button"

const trendingShows = [
  {
    id: 1,
    title: "ADA Omo Daddy",
    src: "/assets/omodaddy.jpg",
    number: 1,
  },
  {
    id: 2,
    title: "DEMON CITY",
    src: "/assets/demon.jpg",
    number: 2,
  },
  {
    id: 3,
    title: "RUNNING POINT",
    src: "/assets/running-point.jpg",
    number: 3,
  },
  {
    id: 4,
    title: "SQUAD 36",
    src: "/assets/squad-36.jpg",
    number: 4,
  },
  {
    id: 5,
    title: "SEVEN DOORS",
    src: "/assets/seven-doors.jpg",
    number: 5,
  },
  {
    id: 6,
    title: "GHOST",
    src: "/assets/sniper.png",
    number: 6,
  },
  {
    id: 7,
    title: "THE LAST DANCE",
    src: "/assets/pushkar.png",
    number: 7,
  },
  {
    id: 8,
    title: "BREAKING POINT",
    src: "/assets/movie.jpg",
    number: 8,
  },
]

export default function TrendingSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
      checkScrollPosition()
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
      checkScrollPosition()
    }
  }

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10)
    }
  }

  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Trending Now</h2>

      <div className="relative">
        {showLeftArrow && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full h-12 w-12"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          onScroll={checkScrollPosition}
        >
          {trendingShows.map((show) => (
            <div key={show.id} className="relative flex-shrink-0 w-[180px] md:w-[200px] group cursor-pointer">
              <div className="relative h-[270px] md:h-[300px] w-full rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <Image
                  src={show.src || "/placeholder.svg"}
                  alt={show.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 z-20">
                  <Image src="/assets/netflix-logo.png" alt="Netflix logo" width={24} height={24} />
                </div>
                <div className="absolute bottom-0 left-0 z-20 p-3">
                  <h3 className="text-lg font-bold">{show.title}</h3>
                </div>
                <div className="absolute left-0 top-0 z-10 text-[120px] font-bold opacity-70 leading-none pl-2">
                  {show.number}
                </div>
              </div>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full h-12 w-12"
            onClick={scrollRight}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        )}
      </div>
    </section>
  )
}

