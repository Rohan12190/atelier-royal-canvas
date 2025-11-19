import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Khushilohchab3@gmail.com",
    link: "mailto:Khushilohchab3@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9518845008",
    link: "tel:+919518845008",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Navi Mumbai, Maharashtra",
    subvalue: "A504, Regency Park, Sector 5, Kharghar",
    link: null,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="w-full px-[5vw] py-[15vh] bg-secondary/20">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-5xl font-bold mb-4 uppercase">
          Let's Connect
        </h2>
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm">
          Get In Touch
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="mb-8">
            <h3 className="font-serif text-3xl font-bold mb-4">Contact Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              Feel free to reach out for collaborations, commissions, or inquiries about my work.
            </p>
          </div>

          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <contact.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                  {contact.label}
                </p>
                {contact.link ? (
                  <a
                    href={contact.link}
                    className="text-lg font-medium hover:text-accent transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <>
                    <p className="text-lg font-medium">{contact.value}</p>
                    {contact.subvalue && (
                      <p className="text-sm text-muted-foreground mt-1">{contact.subvalue}</p>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-background/80 backdrop-blur-sm p-8 rounded-lg border border-border/50"
        >
          <h3 className="font-serif text-2xl font-bold mb-6">Send a Message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:border-accent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground py-3 px-6 rounded-md uppercase tracking-wider font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
