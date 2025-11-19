import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Bhawna Rao",
    role: "Design Apprentice",
    period: "2024",
    highlights: [
      "Created an independent clutch collection, interlacing artistry with structural refinement",
      "Contributed to a couture gown line, assisting in the orchestration of embellishment and sculptural draping",
      "Gained intimate exposure to the ethos of luxury ateliers and precision craftsmanship",
    ],
  },
  {
    company: "Sangha Collectives",
    role: "Jewellery Intern",
    period: "2023",
    highlights: [
      "Curated bespoke adornments, reimagining designs to client sensibilities",
      "Commanded the store presence at Lil Flea, embodying both brand custodian and stylist",
    ],
  },
  {
    company: "Tara Global",
    role: "Retail & Client Liaison",
    period: "2023",
    highlights: [
      "Guided clientele through sartorial narratives, ensuring personalised experiences",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full px-[5vw] py-[15vh]">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-5xl font-bold mb-4 uppercase">
          Professional Experience
        </h2>
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm">
          Journey & Expertise
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-accent/30"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />

            {/* Content Card */}
            <div className="bg-secondary/20 p-8 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-1">{exp.company}</h3>
                  <div className="flex items-center gap-2 text-accent">
                    <Briefcase className="w-4 h-4" />
                    <p className="uppercase tracking-wider text-sm">{exp.role}</p>
                  </div>
                </div>
                <span className="text-muted-foreground uppercase tracking-wider text-sm mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              {/* Highlights */}
              <ul className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
