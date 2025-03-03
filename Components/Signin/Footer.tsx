import Link from "next/link"

export default function Footer() {
  const footerLinks = [
    { name: "FAQ", href: "/faq" },
    { name: "Help Center", href: "/help" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Cookie Preferences", href: "/cookies" },
    { name: "Corporate Information", href: "/corporate" },
  ]

  return (
    <footer className="relative z-10 w-full bg-black/80 py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-6">
          <p className="text-gray-400 text-sm">Questions? Contact us.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {footerLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-400 text-sm hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

