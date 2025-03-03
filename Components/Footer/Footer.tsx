import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Footer() {
  const footerLinks = [
    {
      title: "FAQ",
      href: "#",
    },
    {
      title: "Investor Relations",
      href: "#",
    },
    {
      title: "Privacy",
      href: "#",
    },
    {
      title: "Speed Test",
      href: "#",
    },
    {
      title: "Help Center",
      href: "#",
    },
    {
      title: "Jobs",
      href: "#",
    },
    {
      title: "Cookie Preferences",
      href: "#",
    },
    {
      title: "Legal Notices",
      href: "#",
    },
    {
      title: "Account",
      href: "#",
    },
    {
      title: "Ways to Watch",
      href: "#",
    },
    {
      title: "Corporate Information",
      href: "#",
    },
    {
      title: "Only on Netflix",
      href: "#",
    },
    {
      title: "Media Center",
      href: "#",
    },
    {
      title: "Terms of Use",
      href: "#",
    },
    {
      title: "Contact Us",
      href: "#",
    },
  ]

  return (
    <footer className="bg-black text-white py-8 px-4 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="#" className="text-white/70 hover:underline">
            Questions? Contact us.
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {/* Column 1 */}
          <div className="space-y-3">
            {footerLinks.slice(0, 4).map((link) => (
              <div key={link.title}>
                <Link href={link.href} className="text-sm text-white/70 hover:underline">
                  {link.title}
                </Link>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            {footerLinks.slice(4, 8).map((link) => (
              <div key={link.title}>
                <Link href={link.href} className="text-sm text-white/70 hover:underline">
                  {link.title}
                </Link>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            {footerLinks.slice(8, 12).map((link) => (
              <div key={link.title}>
                <Link href={link.href} className="text-sm text-white/70 hover:underline">
                  {link.title}
                </Link>
              </div>
            ))}
          </div>

          {/* Column 4 */}
          <div className="space-y-3">
            {footerLinks.slice(12, 15).map((link) => (
              <div key={link.title}>
                <Link href={link.href} className="text-sm text-white/70 hover:underline">
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Language Selector */}
        <div className="mb-4">
          <div className="inline-flex items-center border border-white/30 rounded px-2 py-1">
            <span className="mr-1">🌐</span>
            <span className="text-sm">English</span>
            <ChevronDown className="ml-1 h-4 w-4" />
          </div>
        </div>

        {/* Netflix Country */}
        <div className="text-sm text-white/70">Netflix Nigeria</div>
      </div>
    </footer>
  )
}

