import Image from "next/image"
import { Tv, Download, TabletsIcon as Devices, Users } from "lucide-react"
const features = [
  {
    title: "Enjoy on your TV",
    description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: Tv,
    iconColor: "bg-purple-600",
  },
  {
    title: "Download your shows to watch offline",
    description: "Save your favorites easily and always have something to watch.",
    icon: Download,
    iconColor: "bg-pink-500",
  },
  {
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: Devices,
    iconColor: "bg-red-500",
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: Users,
    iconColor: "bg-pink-400",
  },
]

export default function FeaturesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">More Reasons to Join</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1a1a2e] rounded-lg p-6 transition-transform hover:scale-[1.02] cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-300 mb-6">{feature.description}</p>
            <div className="flex justify-center">
              <div className={`relative w-20 h-20 ${feature.iconColor} rounded-full flex items-center justify-center`}>
                <feature.icon
                  className="w-10 h-10 text-white"
                  aria-label={feature.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

