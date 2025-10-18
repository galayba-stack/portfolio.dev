import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card.tsx";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";
import { Textarea } from "./ui/textarea.tsx";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  // Twitter,
  Send
} from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';



export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
        .send(
            'service_r1hy2z7',
            'template_5mycq77',
            formData,
            'DThcuhMVnoER6zHcE'
        )
        .then(() => {
          setShowSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          alert("Something went wrong. Please try again.");
        });
  };

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "galayba.work@gmail.com",
      href: "mailto:galayba.work@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "Secure",
      href: ""
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Based in",
      value: "Edmonton, Canada",
      href: "#"
    }
  ];

  const socialProfiles = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/galayba-stack/",
      username: "@galayba-stack"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/olha-h-dev/",
      username: "Olha Halaiba"
    },
    // {
    //   icon: <Twitter className="h-5 w-5" />,
    //   label: "Twitter/X",
    //   href: "https://twitter.com/yourhandle",
    //   username: "@yourhandle"
    // }
  ];

  return (
      <section id="contact" className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Got an idea or a challenge? Whether it’s a quick chat or a deep dive, I’m here
              to help bring it to life. Drop a message below.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Start the Conversation</CardTitle>
                  <CardDescription>
                    Fill in the form and I’ll reply as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm mb-2">
                          Your Name
                        </label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Name "
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm mb-2">
                          Email Address
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="example@gmail.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm mb-2">
                        Subject
                      </label>
                      <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="What’s the topic?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm mb-2">
                        Message
                      </label>
                      <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="Tell me what you're thinking..."
                      />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send
                    </Button>
                    {showSuccess && (
                        <Alert
                            icon={<CheckIcon fontSize="inherit" />}
                            severity="success"
                            onClose={() => setShowSuccess(false)}
                            className="mb-6"
                        >
                          Your message has been sent successfully!
                        </Alert>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Side */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
              {/* Contact Methods */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Details</CardTitle>
                  <CardDescription>
                    Prefer a direct way? Reach me here:
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactMethods.map((item, index) => (
                      <motion.a
                          key={index}
                          href={item.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                          whileHover={{ x: 5 }}
                      >
                        <div className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg group-hover:shadow-lg">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{item.label}</div>
                          <div className="group-hover:text-blue-600">{item.value}</div>
                        </div>
                      </motion.a>
                  ))}
                </CardContent>
              </Card>

              {/* Socials */}
              <Card>
                <CardHeader>
                  <CardTitle>Find Me Online</CardTitle>
                  <CardDescription>
                    Follow for insights, code drops, and updates.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialProfiles.map((profile, index) => (
                      <motion.a
                          key={index}
                          href={profile.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                          whileHover={{ x: 5 }}
                      >
                        <div className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg group-hover:shadow-lg">
                          {profile.icon}
                        </div>
                        <div>
                          <div className="group-hover:text-blue-600">{profile.label}</div>
                          <div className="text-sm text-muted-foreground">{profile.username}</div>
                        </div>
                      </motion.a>
                  ))}
                </CardContent>
              </Card>



            </motion.div>
          </div>
        </div>
      </section>
  );
}
