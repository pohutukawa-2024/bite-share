function ContactUs() {
  return (
    <div className="min-h-screen p-6 text-gray-800">
      {/* Page Title */}
      <h1 className="text-black-600 mb-6 text-center text-3xl font-bold">
        Contact Us
      </h1>

      {/* Intro Section */}
      <p className="mb-8 text-center text-sm text-gray-600">
        Have a question, feedback, or just want to say hi? We&apos;d love to
        hear from you! Fill out the form below, and we’ll get back to you as
        soon as possible.
      </p>

      {/* Form Section */}
      <div className="mx-auto max-w-lg rounded-lg bg-gray-50 p-6 shadow-md">
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-yellow-500 focus:outline-none"
              placeholder="Your full name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-yellow-500 focus:outline-none"
              placeholder="Your email address"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-yellow-500 focus:outline-none"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full rounded bg-yellow-500 py-2 font-semibold text-white transition hover:bg-yellow-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Details Section */}
      <div className="mx-auto mt-8 max-w-lg text-center text-sm text-gray-600">
        <p>You can also reach us at:</p>
        <p className="font-medium text-gray-800">contact@bite-share.com</p>
        <p>
          or call us at: <span className="font-medium">+64 (333) 123-4567</span>
        </p>
      </div>
    </div>
  )
}

export default ContactUs
