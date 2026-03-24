const departments = [
  {
    icon: '⚙️',
    title: 'Engineering & Technology',
    desc: 'Mechanical, Civil, Electrical, and Software Engineering programs built for the industry of tomorrow.',
    programs: '24 Programs',
    color: 'bg-blue-50 border-blue-100',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    icon: '💼',
    title: 'Business & Management',
    desc: 'MBA, Finance, Marketing, and Entrepreneurship tracks to launch your leadership career.',
    programs: '18 Programs',
    color: 'bg-green-50 border-green-100',
    badge: 'bg-green-100 text-green-700',
  },
  {
    icon: '⚕️',
    title: 'Medicine & Health Sciences',
    desc: 'MBBS, Nursing, Pharmacy, and Public Health programs in partnership with leading hospitals.',
    programs: '15 Programs',
    color: 'bg-red-50 border-red-100',
    badge: 'bg-red-100 text-red-700',
  },
  {
    icon: '🎨',
    title: 'Arts & Humanities',
    desc: 'Literature, Philosophy, Fine Arts, and Communication programs that shape critical thinkers.',
    programs: '20 Programs',
    color: 'bg-purple-50 border-purple-100',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    icon: '⚖️',
    title: 'Law & Political Science',
    desc: 'LLB, Constitutional Law, International Relations, and Public Policy for future advocates.',
    programs: '12 Programs',
    color: 'bg-yellow-50 border-yellow-100',
    badge: 'bg-yellow-100 text-yellow-700',
  },
  {
    icon: '💻',
    title: 'Computer Science & AI',
    desc: 'Data Science, Machine Learning, Cybersecurity, and Full-Stack Development.',
    programs: '16 Programs',
    color: 'bg-indigo-50 border-indigo-100',
    badge: 'bg-indigo-100 text-indigo-700',
  },
]

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm tracking-widest uppercase">Academics</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0f1e45]">
            Explore Our Departments
          </h2>
          <div className="mt-4 w-16 h-1 bg-yellow-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            With over 200 programs across 12 schools and colleges, Westbrook has a path for every passion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.title}
              className={`rounded-2xl border p-6 ${dept.color} hover:shadow-md transition-all duration-200 hover:-translate-y-1 transform group`}
            >
              <div className="text-4xl mb-4">{dept.icon}</div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-[#0f1e45] text-lg leading-tight flex-1">{dept.title}</h3>
                <span className={`ml-3 text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${dept.badge}`}>
                  {dept.programs}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{dept.desc}</p>
              <button className="text-[#0f1e45] font-semibold text-sm hover:text-yellow-600 transition-colors flex items-center gap-1 group-hover:gap-2 duration-200">
                Learn More <span>→</span>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block border-2 border-[#0f1e45] text-[#0f1e45] hover:bg-[#0f1e45] hover:text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            View All Programs
          </a>
        </div>
      </div>
    </section>
  )
}
