import NSNavbar from "@/components/NSNavbar";
import ContactForm from "@/components/ContactForm";
import NSFooter from "@/components/NSFooter";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <NSNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-[0.3em] mb-4">
              Let's Create Something Beautiful
            </p>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </motion.div>
        </div>
      </section>

      <ContactForm />
      <NSFooter />
    </div>
  );
};

export default Contact;
