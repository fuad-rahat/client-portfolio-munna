"use client";

import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineEventAvailable } from "react-icons/md";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess("Your message has been sent!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Background Glow */}
      <div
        className="absolute -top-40 -left-40
                   h-96 w-96 rounded-full
                   bg-indigo-600/10 blur-3xl"
      />

      <div
        className="absolute -bottom-40 -right-40
                   h-96 w-96 rounded-full
                   bg-cyan-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <span
            className="inline-flex items-center gap-2
                       rounded-full
                       border border-indigo-400/20
                       bg-indigo-500/10
                       px-4 py-2
                       text-xs font-semibold uppercase
                       tracking-[0.2em]
                       text-indigo-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            Get In Touch
          </span>

          <h2
            className="mt-5 text-4xl font-bold tracking-tight
                       text-white md:text-5xl"
          >
            Contact Me
          </h2>

          <p
            className="mt-5 text-lg leading-8
                       text-slate-400"
          >
            Have a project, research idea, or opportunity in mind?
            I’d love to hear from you.
          </p>

        </div>


        {/* ================= CONTACT CARD ================= */}

        <div
          className="overflow-hidden rounded-3xl
                     border border-white/10
                     bg-white/[0.03]
                     shadow-2xl
                     backdrop-blur-xl"
        >

          <div className="grid lg:grid-cols-5">


            {/* ================================================= */}
            {/* LEFT SIDE                                         */}
            {/* ================================================= */}

            <div
              className="relative lg:col-span-2
                         overflow-hidden
                         bg-gradient-to-br
                         from-indigo-600
                         via-indigo-700
                         to-slate-900
                         p-8 md:p-10"
            >

              {/* Decorative circles */}

              <div
                className="absolute -right-20 -top-20
                           h-48 w-48 rounded-full
                           border border-white/10"
              />

              <div
                className="absolute -bottom-24 -left-20
                           h-56 w-56 rounded-full
                           bg-cyan-400/10 blur-2xl"
              />


              <div className="relative z-10">

                <p
                  className="text-sm font-medium
                             uppercase tracking-widest
                             text-indigo-200"
                >
                  Let's Connect
                </p>

                <h3
                  className="mt-4 text-3xl font-bold
                             leading-tight text-white"
                >
                  Let’s build something
                  <span className="block text-cyan-300">
                    meaningful together.
                  </span>
                </h3>

                <p
                  className="mt-5 leading-7
                             text-indigo-100/80"
                >
                  Whether you want to discuss a project, research
                  collaboration, or a new opportunity, feel free to
                  reach out.
                </p>


                {/* Contact Details */}

                <div className="mt-10  space-y-5">

                  {/* Email */}

                  <a
                    href="mailto:munna2305341396@diu.edu.bd"
                    className="group flex items-center gap-4"
                  >

                    <div
                      className="flex h-11 w-11 shrink-0
                                 items-center justify-center
                                 rounded-xl
                                 bg-white/10
                                 border border-white/10
                                 text-cyan-300
                                 transition-all duration-300
                                 group-hover:bg-white/20"
                    >
<HiOutlineMail />
                    </div>

                    <div>
                      <p className="text-xs text-indigo-200">
                        Email
                      </p>

                      <p
                        className="mt-0.5 text-sm font-medium
                                   text-white
                                   group-hover:text-cyan-300
                                   transition-colors"
                      >
                        munna2305341396@diu.edu.bd
                      </p>
                    </div>

                  </a>


                  {/* Phone */}

                  <a
                    href="tel:+8801908863619"
                    className="group flex items-center gap-4"
                  >

                    <div
                      className="flex h-11 w-11 shrink-0
                                 items-center justify-center
                                 rounded-xl
                                 bg-white/10
                                 border border-white/10
                                 text-cyan-300
                                 transition-all duration-300
                                 group-hover:bg-white/20"
                    >
                      <FaPhoneAlt />

                    </div>

                    <div>
                      <p className="text-xs text-indigo-200">
                        Phone
                      </p>

                      <p
                        className="mt-0.5 text-sm font-medium
                                   text-white
                                   group-hover:text-cyan-300
                                   transition-colors"
                      >
                        +8801908863619
                      </p>
                    </div>

                  </a>


                  {/* Availability */}

                  <div className="flex items-center gap-4">

                    <div
                      className="flex h-11 w-11 shrink-0
                                 items-center justify-center
                                 rounded-xl
                                 bg-white/10
                                 border border-white/10
                                 text-emerald-300"
                    >
                      <MdOutlineEventAvailable />

                    </div>

                    <div>
                      <p className="text-xs text-indigo-200">
                        Availability
                      </p>

                      <p className="mt-0.5 text-sm font-medium text-white">
                        Open to opportunities
                      </p>
                    </div>

                  </div>

                </div>


                {/* Bottom Decoration */}

                <div className="mt-12 flex items-center gap-3">

                  <div className="h-px flex-1 bg-white/10" />

                  <span className="text-xs text-indigo-200">
                    Munna
                  </span>

                  <div className="h-px w-10 bg-white/10" />

                </div>

              </div>

            </div>


            {/* ================================================= */}
            {/* RIGHT SIDE - FORM                                  */}
            {/* ================================================= */}

            <div
              className="lg:col-span-3
                         bg-slate-900/70
                         p-8 md:p-10"
            >

              {/* Form Heading */}

              <div className="mb-8">

                <h3 className="text-2xl font-semibold text-white">
                  Send a Message
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Fill out the form below and I’ll get back to you.
                </p>

              </div>


              {/* ================= FORM ================= */}

              <form onSubmit={handleSubmit}>


                {/* ================= NAME ================= */}

                <div className="mb-6">

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm
                               font-medium text-slate-200"
                  >
                    Name
                  </label>

                  <div className="relative">

                    <div
                      className="pointer-events-none
                                 absolute inset-y-0 left-0
                                 flex items-center pl-4"
                    >
                      <i className="fa-solid fa-user text-slate-500" />
                    </div>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl
                                 border border-white/10
                                 bg-white/[0.04]
                                 py-3.5 pl-11 pr-4
                                 text-white
                                 placeholder:text-slate-500
                                 outline-none
                                 transition-all duration-300
                                 hover:border-white/20
                                 focus:border-indigo-500
                                 focus:bg-white/[0.06]
                                 focus:ring-4
                                 focus:ring-indigo-500/10"
                    />

                  </div>

                </div>


                {/* ================= EMAIL ================= */}

                <div className="mb-6">

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm
                               font-medium text-slate-200"
                  >
                    Email
                  </label>

                  <div className="relative">

                    <div
                      className="pointer-events-none
                                 absolute inset-y-0 left-0
                                 flex items-center pl-4"
                    >
                      <i className="fa-solid fa-envelope text-slate-500" />
                    </div>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl
                                 border border-white/10
                                 bg-white/[0.04]
                                 py-3.5 pl-11 pr-4
                                 text-white
                                 placeholder:text-slate-500
                                 outline-none
                                 transition-all duration-300
                                 hover:border-white/20
                                 focus:border-indigo-500
                                 focus:bg-white/[0.06]
                                 focus:ring-4
                                 focus:ring-indigo-500/10"
                    />

                  </div>

                </div>


                {/* ================= MESSAGE ================= */}

                <div className="mb-6">

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm
                               font-medium text-slate-200"
                  >
                    Message
                  </label>

                  <div className="relative">

                    <div
                      className="pointer-events-none
                                 absolute left-0 top-4
                                 flex items-center pl-4"
                    >
                      <i className="fa-solid fa-message text-slate-500" />
                    </div>

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or idea..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full resize-none
                                 rounded-xl
                                 border border-white/10
                                 bg-white/[0.04]
                                 py-3.5 pl-11 pr-4
                                 text-white
                                 placeholder:text-slate-500
                                 outline-none
                                 transition-all duration-300
                                 hover:border-white/20
                                 focus:border-indigo-500
                                 focus:bg-white/[0.06]
                                 focus:ring-4
                                 focus:ring-indigo-500/10"
                    />

                  </div>

                </div>


                {/* ================= ERROR ================= */}

                {error && (
                  <div
                    className="mb-5 flex items-center gap-3
                               rounded-xl
                               border border-red-400/20
                               bg-red-500/10
                               px-4 py-3
                               text-sm text-red-300"
                  >
                    <i className="fa-solid fa-circle-exclamation" />
                    <span>{error}</span>
                  </div>
                )}


                {/* ================= SUCCESS ================= */}

                {success && (
                  <div
                    className="mb-5 flex items-center gap-3
                               rounded-xl
                               border border-emerald-400/20
                               bg-emerald-500/10
                               px-4 py-3
                               text-sm text-emerald-300"
                  >
                    <i className="fa-solid fa-circle-check" />
                    <span>{success}</span>
                  </div>
                )}


                {/* ================= BUTTON ================= */}

                <div className="flex justify-end">

                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex
                               min-w-[170px]
                               items-center justify-center
                               gap-2
                               rounded-xl
                               bg-gradient-to-r
                               from-indigo-500
                               to-blue-500
                               px-6 py-3.5
                               font-semibold text-white
                               shadow-lg
                               shadow-indigo-500/20
                               transition-all duration-300
                               hover:-translate-y-0.5
                               hover:from-indigo-600
                               hover:to-blue-600
                               hover:shadow-xl
                               hover:shadow-indigo-500/30
                               active:translate-y-0
                               disabled:cursor-not-allowed
                               disabled:opacity-50
                               focus:outline-none
                               focus:ring-4
                               focus:ring-indigo-500/20"
                  >
                    {loading ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin text-sm" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <i
                          className="fa-solid fa-paper-plane
                                     transition-transform duration-300
                                     group-hover:-translate-y-0.5
                                     group-hover:translate-x-0.5"
                        />
                        Send Message
                      </>
                    )}
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMe;