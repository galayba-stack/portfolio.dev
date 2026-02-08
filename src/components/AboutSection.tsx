import { Card, CardContent } from "./ui/card.tsx";
import { Badge } from "./ui/badge.tsx";
import { motion } from "framer-motion";
import { Code, Database, Zap } from "lucide-react";


export function AboutSection() {
  const expertise = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend",
      description: "Building interfaces using React, Tailwind, and TypeScript."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend",
      description: "Working with REST APIs, SQL databases, and Laravel"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "WordPress Expertise",
      description: "Custom themes, WooCommerce integration, and SEO-ready builds tailored for performance and flexibility."

    }
  ];

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
      <section id="about" className="py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Who I Am
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
                I'm a Full-Stack / Front-End Developer focused on building responsive,
                high-performance web applications. With a strong front-end foundation
                and practical back-end experience, I turn ideas into clean,
                scalable, and user-focused digital solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Bio */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">My Background</h3>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                    I specialize in building clean, responsive front-end interfaces
                    and integrating them with reliable back-end systems.
                </p>
                <p>
                    On the back end, I work with Laravel and PHP to build RESTful APIs,
                    handle complex business logic, and integrate subscription and
                    payment flows. I have experience working with large,
                    production-scale databases, focusing on data integrity,
                    performance, and scalability. </p>
                <p>
                    In addition, I work extensively with WordPress,WooCommerce and Strapi,
                    developing custom solutions with a strong focus on SEO,
                    performance optimization, and accessibility.</p>
              </div>

              <div className="mt-8">
                <h4 className="mb-3 font-medium">Current focus:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React', 'Next.js', 'TypeScript',
                    'PHP', 'Strapi', 'Vue',
                    'JS', 'Laravel'
                  ].map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side: Cards */}
            <motion.div
                variants={parentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-6"
            >
              {expertise.map((item, i) => (
                  <motion.div key={i} variants={childVariants}>
                    <Card className="hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-gradient-to-tr from-blue-500 to-purple-500 text-white rounded-lg">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
  );
}
