import Image from "next/image"
import NetflixLogo from "@/Components/Signin/nextflix-logo"
import SignInForm from "@/Components/Signin/Signin-form"
import Footer from "@/Components/Signin/Footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative text-white">
      {/* Background with movie posters */}
      <div className="fixed inset-0 bg-black/50 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/80 z-10"></div>
        <Image
          src="/movies-background.jpg"
          alt="Netflix background"
          fill
          className="object-cover opacity-60 z-0"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <header className="p-6">
          <NetflixLogo className="w-32 md:w-40" />
        </header>

        {/* Sign In Form */}
        <div className="flex-1 flex items-center justify-center px-4">
          <SignInForm />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}

