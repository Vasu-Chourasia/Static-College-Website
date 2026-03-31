const stats = [
  { value: '12,000+', label: 'Students Enrolled' },
  { value: '200+',    label: 'Degree Programs' },
  { value: '130',     label: 'Years of Excellence' },
  { value: '95%',     label: 'Graduate Employment' },
]

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center"
      style={{
        background: 'linear-gradient(135deg, #0f1e45 0%, #1a3a6b 50%, #0f2d4a 100%)',
      }}
    >
      {/* Decorative overlay pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-block border border-yellow-500 text-yellow-400 text-xs font-semibold tracking-widest uppercase px-4 py-1 rounded-full mb-6">
            Est. 1893 · Accredited Institution
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Central Institute of technology.{' '}
            <span className="text-yellow-400 font-serif italic">Shape the Future.</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl">
            Join a community of innovators, thinkers, and leaders. Experience world-class education
            that transforms passion into purpose — at Westbrook University.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#courses"
              className="bg-yellow-500 hover:bg-yellow-400 text-[#0f1e45] font-bold px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 transform"
            >
              Explore Programs →
            </a>
            <a
              href="#about"
              className="border border-white/40 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:bg-white/10"
            >
              Take a Virtual Tour
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f9fafb" />
        </svg>
      </div>
    </section>
  )
}
