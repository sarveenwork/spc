"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Shield, Users } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setWhatsapp("");
    }, 5000);
  };

  const faqs = [
    {
      question: "How quickly can you respond to an infestation?",
      answer: "We offer same-day emergency pest control services. Once you contact us, our certified technicians will arrive at your location within a few hours to assess and begin treatment."
    },
    {
      question: "Are your pest control methods safe for kids and pets?",
      answer: "Absolutely! We use eco-safe solutions and pet-friendly products. Our pest control methods are EPA-approved and designed to target pests while being safe for your family and pets."
    },
    {
      question: "Do you handle both residential and commercial properties?",
      answer: "Yes! We provide professional pest control services for both residential homes and commercial businesses. Our experienced team can handle any scale of infestation."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F9FAFB]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex min-h-screen items-center justify-center px-6 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-screen-xl text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
          >
            We Eliminate Pests.
            <br />
            <span className="text-[#E11D48]">You Enjoy Peace of Mind.</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 text-lg text-gray-300 md:text-xl lg:text-2xl"
          >
            Fast, reliable, and long-term pest management for homes and businesses.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToForm}
              className="rounded-lg bg-[#E11D48] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#E11D48]/30 transition-all duration-300 hover:bg-red-600 hover:shadow-xl hover:shadow-[#E11D48]/50"
            >
              Get a Quote
            </motion.button>
            <button
              onClick={scrollToForm}
              className="rounded-lg border-2 border-[#F9FAFB]/30 px-8 py-4 text-lg font-semibold text-[#F9FAFB] transition-all duration-300 hover:border-[#E11D48] hover:text-[#E11D48]"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-screen-xl">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            Why Choose Suria Pest Control?
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Fast Response Time",
                description: "Same-day pest control available. We understand urgency and act quickly to eliminate pests from your property."
              },
              {
                icon: Shield,
                title: "Long-Term Protection",
                description: "Lasting pest prevention, not just removal. We provide comprehensive solutions to keep pests away for good."
              },
              {
                icon: Users,
                title: "Trusted Professionals",
                description: "Certified experts using eco-safe solutions. Your family and business are in the hands of experienced professionals."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#E11D48]/30 hover:bg-white/10 hover:shadow-xl hover:shadow-[#E11D48]/10"
              >
                <div className="mb-4 inline-flex rounded-lg bg-[#E11D48]/10 p-3 text-[#E11D48]">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="overflow-hidden rounded-lg border border-white/10 bg-white/5"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left font-bold transition-colors hover:bg-white/10"
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    className="text-[#E11D48]"
                  >
                    ▼
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-white/10 p-6 text-gray-300">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section id="quote-form" className="py-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12"
          >
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Get Your Free Quote Now
            </h2>
            <p className="mb-8 text-center text-gray-300">
              Fast, reliable pest control — let's solve your problem today.
            </p>
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="rounded-lg bg-green-500/20 p-6 text-center text-green-400"
              >
                ✅ Message sent successfully!
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-[#E11D48] focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="mb-2 block text-sm font-semibold">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-[#E11D48] focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 transition-colors"
                    placeholder="Enter your WhatsApp number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-[#E11D48] focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-lg bg-[#E11D48] px-6 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-red-600 hover:shadow-xl hover:shadow-[#E11D48]/30"
                >
                  Submit
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-white/10 py-6 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <p>© {new Date().getFullYear()} Suria Pest Control. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#E11D48] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#E11D48] transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}