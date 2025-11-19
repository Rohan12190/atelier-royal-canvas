import { motion } from "framer-motion";
import { Scissors, Palette, Monitor, Ruler, Sparkles, TrendingUp, Pen, Image, Layers } from "lucide-react";

const skills = [
  {
    category: "Technical Mastery",
    icon: Ruler,
    items: [
      { name: "Pattern Drafting", icon: Scissors },
      { name: "Draping", icon: Layers },
      { name: "Garment Construction", icon: Ruler },
      { name: "Surface Embellishment", icon: Sparkles },
    ],
  },
  {
    category: "Creative Expression",
    icon: Palette,
    items: [
      { name: "Editorial Styling", icon: Sparkles },
      { name: "Accessories Design", icon: Pen },
      { name: "Couture Conceptualisation", icon: Palette },
      { name: "Trend Forecasting", icon: TrendingUp },
    ],
  },
  {
    category: "Digital Fluency",
    icon: Monitor,
    items: [
      { name: "CLO 3D", icon: Layers },
      { name: "Adobe Illustrator", icon: Pen },
      { name: "Photoshop", icon: Image },
      { name: "InDesign", icon: Layers },
      { name: "Procreate", icon: Palette },
      { name: "AI Design Tools", icon: Sparkles },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full px-[5vw] py-[15vh] bg-secondary/20">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-5xl font-bold mb-4 uppercase">
          Skills & Expertise
        </h2>
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm">
          Core Capabilities
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {skills.map((skillCategory, categoryIndex) => (
          <motion.div
            key={skillCategory.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="bg-background/80 backdrop-blur-sm p-8 rounded-lg border border-border/50"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <skillCategory.icon className="w-8 h-8 stroke-[1.5] text-accent" />
              <h3 className="font-serif text-2xl font-bold uppercase">
                {skillCategory.category}
              </h3>
            </div>

            {/* Skills List */}
            <ul className="space-y-4">
              {skillCategory.items.map((skill, index) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.05 }}
                  className="flex items-center gap-3 group"
                >
                  <skill.icon className="w-5 h-5 stroke-[1.5] text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-base tracking-wide">{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
