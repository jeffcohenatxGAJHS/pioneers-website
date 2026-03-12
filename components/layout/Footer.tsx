import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo and Organization Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
          {/* PLACEHOLDER: Logo */}
          <div className="w-40 h-40 bg-gray-600 rounded-full flex items-center justify-center text-4xl font-bold">
            P
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">
              {/* PLACEHOLDER: Organization Name */}
              Pioneers Organization
            </h2>
            <p className="text-gray-400 max-w-md">
              {/* PLACEHOLDER: Mission Statement */}
              Mission statement goes here. Describe your organization&apos;s purpose and goals.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-6">
          <p className="text-gray-400">
            {/* PLACEHOLDER: Contact Info */}
            Email: <a href="mailto:info@example.com" className="hover:text-white">info@example.com</a>
          </p>
          <p className="text-gray-400">
            Phone: <a href="tel:5551234567" className="hover:text-white">(555) 123-4567</a>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pioneers. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
            <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
