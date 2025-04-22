'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg('');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMsg('Message sent successfully!');
        form.reset();
      } else {
        setResponseMsg(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMsg('Server error. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-100 p-6">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl flex overflow-hidden">
        {/* Left Column - Info */}
        <div className="bg-blue-900 text-white p-8 w-1/2 relative">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-sm mb-6">
            Have questions, feedback or need help with a booking?<br />
            We're here for you.
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>+234 829 872 7626</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>oyinlafirms@gmail.com</span>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-6 w-16 h-16 bg-white bg-opacity-20 rounded-full blur-xl" />
        </div>

        {/* Right Column - Form */}
        <div className="w-1/2 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-4">
              <input name="firstName" type="text" placeholder="First Name" className="w-1/2 border-b p-2 outline-none" required />
              <input name="lastName" type="text" placeholder="Last Name" className="w-1/2 border-b p-2 outline-none" required defaultValue="Doe" />
            </div>

            <div className="flex gap-4">
              <input name="email" type="email" placeholder="Email" className="w-1/2 border-b p-2 outline-none" required />
              <input name="phone" type="tel" placeholder="Phone Number" className="w-1/2 border-b p-2 outline-none" required defaultValue="+234 012 3456 789" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Select Subject?</label>
              <div className="flex flex-wrap gap-4">
                {["General Inquiry", "Support", "Partnership", "Feedback"].map((item, index) => (
                  <label key={index} className="flex items-center gap-2 text-sm">
                    <input type="radio" name="subject" value={item} required className="accent-blue-500" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Write your message.."
                className="w-full border-b p-2 outline-none resize-none"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition-all"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {responseMsg && (
              <p className="text-sm text-green-700 mt-2">{responseMsg}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
