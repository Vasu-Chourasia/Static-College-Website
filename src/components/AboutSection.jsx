const values = [
  {
    icon: '🎓',
    title: 'Academic Excellence',
    desc: 'Ranked among the top 50 universities globally with world-class faculty and research facilities.',
  },
  {
    icon: '🌍',
    title: 'Global Community',
    desc: 'A diverse campus of 120+ nationalities, preparing students for leadership on the world stage.',
  },
  {
    icon: '🔬',
    title: 'Cutting-edge Research',
    desc: 'Over $200M in annual research funding driving breakthroughs in science, medicine, and technology.',
  },
  {
    icon: '🤝',
    title: 'Student Support',
    desc: 'Comprehensive mentorship, career services, and wellness programs to help you thrive.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0f1e45]">
            A Legacy of Excellence Since 1893
          </h2>
          <div className="mt-4 w-16 h-1 bg-yellow-500 mx-auto rounded-full" />
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Westbrook University has been at the forefront of higher education for over 130 years.
              Founded with a mission to make knowledge accessible and impactful, we've grown into a
              global institution that bridges rigorous academics with real-world application.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our faculty comprises Nobel laureates, Pulitzer Prize winners, and leading industry
              practitioners who bring unparalleled depth and perspective to every classroom. We believe
              education should inspire — not just inform.
            </p>
            <a
              href="#courses"
              className="inline-block bg-[#0f1e45] hover:bg-[#1a3a6b] text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200"
            >
              Learn More About Us
            </a>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#0f1e45] to-[#1a3a6b] rounded-3xl p-1 shadow-2xl">
              <div className="bg-gray-200 rounded-3xl h-72 flex items-center justify-center overflow-hidden">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-3">🏛️</div>
                  <div className="text-sm font-medium">Westbrook Campus</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-[#0f1e45] rounded-2xl p-4 shadow-lg">
              <div className="font-bold text-2xl">130+</div>
              <div className="text-xs font-semibold">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="font-bold text-[#0f1e45] mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
