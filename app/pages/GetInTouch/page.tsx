import Navigation from "@/app/components/Navigation";

export default function ContactForm() {
  return (
    <>
      <Navigation />
      <section id="contact" className="w-full px-8 py-16 bg-black">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg">
              I'd love to hear from you! Whether you have a project in mind
              or just want to discuss technology, feel free to reach out.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Let's connect and discuss potential collaborations. I'm always open
              to new opportunities and technologies.
            </p>
          </div>

          <form className="space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-300 text-sm">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-300 text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label htmlFor="subject" className="text-gray-300 text-sm">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-gray-300 text-sm">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                rows={6}
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md w-full transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2025 Chavez • Email: officialketchupped@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
