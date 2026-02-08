import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.tsx";
import { Progress } from "./ui/progress.tsx";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function SkillsSection() {
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "Tailwind CSS", level: 80 },
        { name: "JS", level: 90 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Laravel", level: 95 },
        { name: "SQL", level: 90 },
        { name: "REST APIs", level: 95 }
      ]
    },
    {
      title: "CMS",
      skills: [
        { name: "WordPress", level: 85 },
        { name: "WooCommerce", level: 90 },
        { name: "PrestaShop", level: 75 },
        { name: "Strapi", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Postman", level: 95 },
        { name: "Canva", level: 80 },
        { name: "Figma", level: 65 },
          { name: "Filezila", level: 95 }
      ]
    }
  ];

  const technologies = ["Communication",
    "Problem-solving",
    "Time management",
    "Teamwork",
    "Empathy for users",
    "Adaptability",
    "Critical thinking",
    "Openness to feedback",
  "Honesty",
  "Attention to Detail",
  "Continuous Learning",
  "Accountability",
  "Creativity"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const newProgressValues: { [key: string]: number } = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          newProgressValues[skill.name] = skill.level;
        });
      });
      setProgressValues(newProgressValues);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {progressValues[skill.name] || 0}%
                        </span>
                      </div>
                      <Progress 
                        value={progressValues[skill.name] || 0} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl mb-8">Soft Skills</h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            id="text-config"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-full border border-blue-200 dark:border-blue-800 text-sm"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}