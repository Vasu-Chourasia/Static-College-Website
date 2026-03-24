import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0f1e45]">Contact Us</h2>
          <div className="mt-4 w-16 h-1 bg-yellow-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-500 max-w-xl mx-auto">
            Have questions about admissions, programs, or campus life? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-[#0f1e45] text-lg mb-5">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: '📍', label: 'Address', value: '1200 University Avenue, Westbrook, CA 90210' },
                  { icon: '📞', label: 'Phone', value: '+1 (800) 555-WEST' },
                  { icon: '📧', label: 'Email', value: 'admissions@westbrook.edu' },
                  { icon: '🕐', label: 'Office Hours', value: 'Mon – Fri, 8:00 AM – 5:00 PM' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <div>
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{item.label}</div>
                      <div className="text-gray-700 text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-100 rounded-2xl h-52 flex items-center justify-center border border-gray-200">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">🗺️</div>
                <div className="text-sm font-medium">Campus Map</div>
                <div className="text-xs mt-1">1200 University Avenue, Westbrook CA</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-[#0f1e45] mb-2">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. We'll get back to you within 1–2 business days.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-6 text-sm text-yellow-600 hover:text-yellow-700 font-semibold underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f1e45] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f1e45] focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Subject *</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f1e45] focus:border-transparent transition bg-white"
                  >
                    <option value="">Select a subject…</option>
                    <option>Undergraduate Admissions</option>
                    <option>Graduate Admissions</option>
                    <option>Financial Aid & Scholarships</option>
                    <option>Campus Housing</option>
                    <option>International Students</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help you…"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f1e45] focus:border-transparent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0f1e45] hover:bg-[#1a3a6b] text-white font-bold py-3 rounded-xl transition-colors duration-200"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
