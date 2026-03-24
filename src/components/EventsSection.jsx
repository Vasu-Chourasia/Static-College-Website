const events = [
  {
    month: 'APR',
    day: '07',
    title: 'Spring Orientation Week',
    desc: 'Welcome new students to the Westbrook family with campus tours, meet-and-greets, and academic advising sessions.',
    category: 'Campus Life',
    categoryColor: 'bg-green-100 text-green-700',
    location: 'Main Campus Quad',
    time: '9:00 AM – 5:00 PM',
  },
  {
    month: 'APR',
    day: '19',
    title: 'Annual Research Symposium',
    desc: 'Faculty and student researchers present groundbreaking work across STEM, humanities, and social sciences.',
    category: 'Academic',
    categoryColor: 'bg-blue-100 text-blue-700',
    location: 'Science & Innovation Hall',
    time: '10:00 AM – 6:00 PM',
  },
  {
    month: 'MAY',
    day: '03',
    title: 'Alumni Homecoming & Gala',
    desc: 'Reconnect with classmates and celebrate the achievements of Westbrook alumni from around the globe.',
    category: 'Alumni',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    location: 'Founders Auditorium',
    time: '6:00 PM – 10:00 PM',
  },
  {
    month: 'MAY',
    day: '24',
    title: 'Graduation Ceremony 2026',
    desc: 'Celebrate the Class of 2026 as they cross the stage and begin their journeys beyond Westbrook.',
    category: 'Graduation',
    categoryColor: 'bg-purple-100 text-purple-700',
    location: 'Westbrook Stadium',
    time: '10:00 AM – 1:00 PM',
  },
]

export default function EventsSection() {
  return (
    <section id="events" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm tracking-widest uppercase">What's On</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0f1e45]">
            Upcoming Events & Announcements
          </h2>
          <div className="mt-4 w-16 h-1 bg-yellow-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex gap-5"
            >
              {/* Date badge */}
              <div className="flex-shrink-0 bg-[#0f1e45] text-white rounded-2xl w-16 flex flex-col items-center justify-center py-3">
                <span className="text-xs font-semibold text-yellow-400 tracking-widest">{event.month}</span>
                <span className="text-2xl font-bold leading-none">{event.day}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${event.categoryColor}`}>
                    {event.category}
                  </span>
                </div>
                <h3 className="font-bold text-[#0f1e45] text-lg mb-2">{event.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{event.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">📍 {event.location}</span>
                  <span className="flex items-center gap-1">🕐 {event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-block border-2 border-[#0f1e45] text-[#0f1e45] hover:bg-[#0f1e45] hover:text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200">
            View All Events
          </button>
        </div>
      </div>
    </section>
  )
}
