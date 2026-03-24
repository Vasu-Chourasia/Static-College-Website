const quickLinks = ['Home', 'About', 'Courses', 'Events', 'Contact']
const programs = ['Engineering', 'Business', 'Medicine', 'Computer Science', 'Law', 'Arts']
const resources = ['Admissions', 'Financial Aid', 'Student Portal', 'Library', 'Career Services']

export default function Footer() {
  return (
    <footer className="bg-[#0a1530] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-yellow-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">WU</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">Westbrook</div>
                <div className="text-yellow-400 text-xs tracking-widest uppercase">University</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Empowering minds and shaping futures since 1893. Excellence in education, research, and community.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { label: 'Twitter', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
                { label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/10 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold mb-4">Programs</h4>
            <ul className="space-y-2">
              {programs.map((p) => (
                <li key={p}>
                  <a href="#courses" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((r) => (
                <li key={r}>
                  <a href="#contact" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>© 2026 Westbrook University. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
