import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";
import { Badge } from "./ui/badge.tsx";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Vassabi",
      location: "Ukraine, remote",
      period: "2024 - Present",
      description: "Initially focused on front-end development, later expanding into back-end technologies. Experienced in page layout, database handling, and API integration.",
      achievements: [
        "Faster API integrations with a partners",
        "Several large projects completed",
        "Process optimization"
      ],
      technologies: ["Laravel", "SQL", "RestApi", "Postman", "HTML/CSS/JS", "React"]
    },
    {
      title: "Front End Developer",
      company: "Intern in small project",
      location: "Poland",
      period: "2022 - 2024",
      description: "Developed and maintained multiple client projects from concept to deployment. Worked directly with clients to gather requirements and deliver solutions.",
      achievements: [
        "Developed over 15 responsive web pages using HTML, CSS, and JavaScript",
        "Customized and maintained WordPress websites, including WooCommerce integration and theme adaptation",
        "Implemented modern development workflows and tools, including Git, npm, and component-based architecture"
      ],
      technologies: ["Html", "Css", "JS", "Wordpress", "WooCommerce", "PrestaShop","SEO", "PHP", "Twig"]
    },
    {
      title: "Junior Developer",
      company: "Freelance",
      location: "Poland",
      period: "2021 - 2022",
      description: "Started my professional journey building websites and learning industry best practices. Focused on HTML, CSS, and JavaScript fundamentals.",
      achievements: [
        "Completed 10+ client projects",
        "Learned modern development workflows",
        "Contributed to open-source projects"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Merito",
      location: "Bydgoszcz, Poland",
      period: "2022 - 2025",
      description: "Graduated Magna Cum Laude. Focused on software engineering, data structures, and algorithms.",
      achievements: [
        "GPA: 5.0/5.0"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the experiences that have shaped my development skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-8 flex items-center">
              <Building className="mr-2 h-6 w-6" />
              Professional Experience
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-background"></div>
                    
                    <div className="ml-12">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <CardDescription className="space-y-1">
                            <div className="flex items-center text-sm">
                              <Building className="mr-1 h-3 w-3" />
                              {exp.company}
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center">
                                <MapPin className="mr-1 h-3 w-3" />
                                {exp.location}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="mr-1 h-3 w-3" />
                                {exp.period}
                              </div>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          
                          <div className="mb-4">
                            <h5 className="text-sm mb-2">Key Achievements:</h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="mr-2 mt-1.5 w-1 h-1 bg-blue-500 rounded-full flex-shrink-0"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-8">Education</h3>
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Building className="mr-1 h-3 w-3" />
                        {edu.school}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-3 w-3" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {edu.period}
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    <div className="mb-4">
                      <h5 className="text-sm mb-2">Achievements:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 mt-1.5 w-1 h-1 bg-blue-500 rounded-full flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="text-xl mb-6">Certifications</h3>
              <div className="space-y-4">
                {[
                  "Web Developer Bootcamp - Angela Yu",
                  "Become a Wordpress Developer - Brad Schiff",
                  "The Complete JavaScript Course -Jonas Schmedtmann"
                ].map((cert, index) => (
                  <div key={index} className="flex items-center p-4 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}