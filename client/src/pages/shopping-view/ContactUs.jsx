import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen  text-[#181A1B]">
      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8 ">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif mb-6 ">Get in Touch</h3>
              <p className="mb-8 text-[#6C6A61]">
                We are dedicated to providing you with the finest luxury
                experience. Our team is always available to assist you with any
                inquiries.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2 ">Location</h4>
                  <p className="text-[#6C6A61]">
                    123 Luxury Avenue, Suite 500
                    <br />
                    Munich, 10001
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Hours</h4>
                  <p className="text-[#6C6A61]">
                    Monday - Friday: 9am - 7pm
                    <br />
                    Saturday: 10am - 6pm
                    <br />
                    Sunday: By appointment only
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2 ">Contact</h4>
                  <p className="text-[#6C6A61]">
                    Email: clientservices@dedsv.com
                    <br />
                    Phone: +49 (212) 555-0123
                  </p>
                </div>
              </div>
            </div>

            <div className=" p-8 border border-[#45423D]">
              <h3 className="text-2xl font-serif mb-6 ">Send a Message</h3>

              {submitStatus === "success" ? (
                <div className=" p-4 border border-[#6C6A61]">
                  <p>
                    Thank you for contacting the DEDSV store. Our team will be
                    in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium "
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-[#C5C7CA] border border-[#45423D] focus:border-[#C5C7CA] outline-none "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-[#C5C7CA] border border-[#45423D] focus:border-[#C5C7CA] outline-none "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium "
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-[#C5C7CA] border border-[#45423D] focus:border-[#C5C7CA] outline-none "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full p-3 bg-[#C5C7CA] border border-[#45423D] focus:border-[#C5C7CA] outline-none "
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#C5C7CA]  hover:bg-[#6C6A61] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
