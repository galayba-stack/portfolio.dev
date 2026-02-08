import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
    ExternalLink, Github
    // , Eye
    , X
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

export function ProjectsSection() {
    const [filter, setFilter] = useState("all");
    const [activeProject, setActiveProject] = useState<any | null>(null);

    useEffect(() => {
        if (activeProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [activeProject]);

    const projects = [
        {
            id: 1,
            title: "Full-Stack portfolio",
            description:
                "Updated my personal portfolio from a static HTML/CSS/JS setup to a modern React application styled with Tailwind CSS and Supabase analytics.",
            image: "/portfolio.dev/images/Screenshot1.52.55.png",
            technologies: ["React", "Tailwind CSS", "Supabase", "Vite"],
            category: "fullstack",
            demoUrl: "https://galayba-stack.github.io/portfolio.dev/",
            githubUrl: "https://github.com/galayba-stack/portfolio.dev",
            featured: false
        },
        {
            id: 18,
            title: "Dashboard",
            description:
                "Modern dashboard application built with React, TypeScript and Vite. Features client-side routing, reusable UI components and responsive layout.",
            image: "/portfolio.dev/images/dashboard.png",
            technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
            category: "fullstack",
            demoUrl: "https://galayba-stack.github.io/dashboard/#/",
            githubUrl: "https://github.com/galayba-stack/dashboard",
            featured: true
        },
        {
            id: 3,
            title: "Multi-Region Content Management System",
            description:
                "Internal full-stack project for managing legal and static content across multiple countries, including terms, footers, and region-specific configurations.",
            image: "/portfolio.dev/images/work-hero.webp",
            technologies: [
                "Laravel",
                "SQL",
                "JS",
                "HTML",
                "CSS",
                "REST API"
            ],
            category: "fullstack",
            featured: true,
            isPrivate: true,
            isWorkProject: true,
            caseStudy: {
                responsibilities: [
                    "Developed interfaces for managing region-specific content",
                    "Implemented logic for country-based content variations",
                    "Worked on full-stack features including frontend and backend integration",
                    "Handled structured storage of legal and static content",
                    "Collaborated within a team on a production-level internal system"
                ],
                highlights: [
                    "Multi-country content management architecture",
                    "Clear separation of content by region and locale",
                    "Scalable structure for legal and static content",
                    "Production-ready internal tooling"
                ]
            }
        },
        {
            id: 2,
            title: "Automated API Provisioning Service",
            description:
                "Backend-only project responsible for automated API setup, secure key generation, and configuration delivery through protected endpoints.",
            image: "/portfolio.dev/images/api-hero.webp",
            technologies: [
                "Laravel",
                "REST API",
                "Authentication",
                "Security",
                "Database"
            ],
            category: "backend",
            featured: true,
            isPrivate: true,
            isWorkProject: true,
            caseStudy: {
                responsibilities: [
                    "Designed and implemented secure API endpoints for automated setup",
                    "Handled generation and validation of hashes, keys, and access tokens",
                    "Implemented authorization logic for protected configuration access",
                    "Worked with backend storage for setup and configuration data",
                    "Ensured security, reliability, and correctness of API workflows"
                ],
                highlights: [
                    "Automated API provisioning workflow",
                    "Secure handling of keys and hashes",
                    "Backend-only service with no UI dependency",
                    "Production-ready API design"
                ]
            }
        },
        {
            id: 15,
            title: "PIN/ClickPay Flow Integration Services",
            description:
                "Internal backend project focused on integrating secure PIN-based user verification flows within a larger system architecture for several countries.",
            image: "/portfolio.dev/images/api-backend.jpg",
            technologies: [
                "Laravel",
                "REST API",
                "Authentication",
                "Security",
                "Database"
            ],
            category: "backend",
            featured: false,
            isPrivate: true,
            isWorkProject: true,
            caseStudy: {
                responsibilities: [
                    "Integrated secure PIN verification workflows",
                    "Handled validation and lifecycle of PIN-based authentication",
                    "Worked with external services and internal APIs",
                    "Ensured correct error handling and edge case coverage",
                    "Maintained security and data integrity throughout the flow"
                ],
                highlights: [
                    "Secure PIN-based authentication flow",
                    "Reliable handling of verification edge cases",
                    "Production-ready backend integration",
                    "Focus on security and correctness"
                ]
            }
        },
        {
            id: 10,
            title: "FitCutie",
            description:
                "FitCutie is a lightweight, elegant web app designed to make short workouts simple, motivating, and visually pleasant.",
            image: "/portfolio.dev/images/Screenshot2.44.46.png",
            technologies: ["TypeScript", "React Native", "Node.js", "Expo Go"],
            category: "mobile",
            demoUrl: "https://expo.dev/preview/update?message=Configure+package.json",
            githubUrl: "https://github.com/galayba-stack/fitCutie/",
            featured: false
        },
        {
            id: 11,
            title: "Bajkowa Kraina",
            description:
                "Commercial website project for a children’s play center, focused on clean UI, responsive layout, and clear content structure.",
            image: "/portfolio.dev/images/Bajkowa-hero.webp",
            technologies: ["HTML", "CSS", "JavaScript"],
            category: "frontend",
            featured: false,
            isPrivate: true,
            caseStudy: {
                responsibilities: [
                    "Built responsive, mobile-first layouts using HTML and CSS",
                    "Implemented interactive UI elements with JavaScript",
                    "Focused on usability, clarity, and performance optimization"
                ],
                highlights: [
                    "Responsive layout optimized for mobile and desktop",
                    "Performance-oriented asset structure",
                    "Client-oriented content presentation"
                ]
            }
        },
        {
            id: 4,
            title: "Bidding Platform - Bonus",
            description:
                "Private commercial project featuring a user-driven bidding system with dynamic pricing logic and real-time data updates.",
            image: "/portfolio.dev/images/bonus-hero.webp",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Wordpress",
                "REST API",
                "Database",
            ],
            category: "fullstack",
            featured: false,
            isPrivate: true,
            caseStudy: {
                responsibilities: [
                    "Implemented user bidding logic and validation rules",
                    "Integrated backend APIs handling bid processing",
                    "Worked with large datasets and optimized data flow",
                    "Ensured correct state handling and edge case validation"
                ],
                highlights: [
                    "Dynamic bidding and pricing logic",
                    "Real-time updates based on user actions",
                    "Scalable architecture prepared for high activity",
                ]
            }
        },
        {
            id: 14,
            title: "Handmade E-commerce Website (Headless CMS)",
            description:
                "Personal commercial project involving full UI/UX design and development of a handmade products website using a headless CMS architecture.",
            image: "/portfolio.dev/images/strapi-hero.webp",
            technologies: [
                "Strapi",
                "JavaScript",
                "HTML",
                "CSS",
                "REST API",
                "Design"
            ],
            category: "fullstack",
            featured: false,
            isPrivate: true,
            caseStudy: {
                responsibilities: [
                    "Designed the complete UI and visual identity of the website",
                    "Configured and customized Strapi as a headless CMS",
                    "Implemented frontend consuming CMS APIs",
                    "Structured content models for products and categories",
                    "Built a scalable foundation for future online sales"
                ],
                highlights: [
                    "End-to-end project ownership (design + development)",
                    "Headless CMS architecture using Strapi",
                    "Custom content models for handmade products",
                    "Real-world commercial use case"
                ]
            }
        },
        {
            id: 7,
            title: "Construction Industry Website",
            description:
                "Commercial corporate website for a construction materials manufacturer, focused on clear content structure, responsive layout, and professional brand presentation.",
            image: "/portfolio.dev/images/strobud-hero.webp",
            technologies: ["HTML", "CSS", "JavaScript", "Wordpress"],
            category: "frontend",
            featured: false,
            isPrivate: true,
            caseStudy: {
                responsibilities: [
                    "Implemented responsive layouts optimized for desktop and mobile devices",
                    "Structured content for clear communication of company offer and services",
                    "Ensured visual consistency with brand identity",
                    "Optimized performance and loading of media-heavy sections",
                    "Worked closely with business requirements and client expectations"
                ],
                highlights: [
                    "Clear information architecture for corporate content",
                    "Professional, industry-appropriate UI design",
                    "Responsive layout across all breakpoints",
                    "Optimized assets for performance and usability"
                ]
            }
        },
        {
            id: 13,
            title: "Foundation Website – Visual Accessibility",
            description:
                "Non-profit website designed for visually impaired users, with a strong focus on accessibility, readability, and assistive-friendly user experience.",
            image: "/portfolio.dev/images/fundacja-hero-1.webp",
            technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
            category: "fullstack",
            featured: false,
            isPrivate: true,
            caseStudy: {
                responsibilities: [
                    "Designed and implemented accessibility-first layouts",
                    "Focused on keyboard navigation and screen reader compatibility",
                    "Ensured high contrast, readable typography, and clear structure",
                    "Optimized content for assistive technologies",
                    "Collaborated with foundation requirements and accessibility needs"
                ],
                highlights: [
                    "Accessibility-first design for visually impaired users",
                    "WCAG-oriented implementation decisions",
                    "Improved usability with assistive technologies",
                    "Socially impactful non-profit project"
                ]
            }
        },
        {
            id: 8,
            title: "Foundation Website – Accessibility Focused",
            description:
                "Non-profit website created for a foundation supporting people with mental problems.",
            image: "/portfolio.dev/images/fundacja-hero.webp",
            technologies: ["HTML", "CSS", "JavaScript", "Wordpress"],
            category: "frontend",
            featured: false,
            isPrivate: true,
            caseStudy: {
                responsibilities: [
                    "Designed and implemented accessible, user-friendly layouts",
                    "Focused on readability, contrast, and clear content hierarchy",
                    "Implemented responsive design for all devices",
                    "Adapted UI for users with special accessibility needs",
                    "Collaborated closely with foundation requirements and goals"
                ],
                highlights: [
                    "Accessibility-first approach (WCAG-oriented design decisions)",
                    "Clear and inclusive user experience",
                    "Responsive layout optimized for mobile and desktop",
                    "Socially impactful project for a non-profit organization"
                ]
            }
        },
        {
            id: 9,
            title: "Rental Website – Krystalinos",
            description:
                "Commercial website for short-term and long-term property rentals in Spain, focused on clear offer presentation, user-friendly navigation, and conversion-oriented design.",
            image: "/portfolio.dev/images/krystalinos-hero.webp",
            technologies: ["HTML", "CSS", "JavaScript", "Wordpress", "Design"],
            category: "frontend",
            featured: false,
            isPrivate: true,
            caseStudy: {
                responsibilities: [
                    "Implemented responsive layouts for property listings and detail pages",
                    "Designed clear content structure for rental offers and locations",
                    "Focused on user experience and conversion-oriented UI",
                    "Optimized image-heavy pages for performance",
                    "Ensured usability across desktop and mobile devices"
                ],
                highlights: [
                    "Clear and attractive presentation of rental properties",
                    "UX focused on user decision-making and inquiries",
                    "Responsive design optimized for international users",
                    "Performance-conscious handling of media content"
                ]
            }
        },







    ];

    const categories = [
        { id: "all", label: "All Projects" },
        { id: "fullstack", label: "Full Stack" },
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "mobile", label: "Mobile" }
    ];

    const filteredProjects =
        filter === "all" ? projects : projects.filter(p => p.category === filter);

    const featuredProjects = projects.filter(p => p.featured);

    return (
        <section id="projects" className="relative py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* FEATURED PROJECTS */}
                <div className="mb-24">
                    <h2 className="text-3xl sm:text-4xl mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
                        Selected projects that best demonstrate my experience with backend systems,
                        integrations, and production-ready architectures.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map(project => (
                            <Card
                                key={project.id}
                                className="flex flex-col hover:shadow-xl transition-all cursor-pointer"
                                onClick={() => setActiveProject(project)}
                            >
                                <div className="relative overflow-hidden rounded-t-2xl">
                                    <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>

                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription className="line-clamp-4">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="mt-auto">
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {project.technologies.map(t => (
                                            <Badge key={t} variant="secondary" className="text-xs">
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>

                                    <Button variant="outline" className="w-full">
                                        View case study
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* FILTERS */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        All Projects
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        A curated selection of projects I can publicly present, including commercial, internal, and personal work across various domains and technologies. </p>
                </div>


                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map(cat => (
                        <Button
                            key={cat.id}
                            size="sm"
                            variant={filter === cat.id ? "secondary" : "outline"}
                            onClick={() => setFilter(cat.id)}
                        >
                            {cat.label}
                        </Button>
                    ))}
                </div>

                {/* ALL PROJECTS */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {filteredProjects.map(project => (
                        <Card
                            key={project.id}
                            className={`h-full flex flex-col transition ${project.isPrivate ? "hover:ring-2 hover:ring-purple-500 cursor-pointer" : ""
                                }`}
                            onClick={() => project.isPrivate && setActiveProject(project)}
                        >
                            {/* IMAGE */}
                            <div className="relative overflow-hidden rounded-t-2xl">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-40 object-cover"
                                />
                            </div>

                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">{project.title}</CardTitle>

                                {project.isPrivate && (
                                    <Badge variant="outline" className="w-fit text-xs">
                                        {project.isWorkProject
                                            ? "Internal work project · Confidential"
                                            : "Client project · Source code private"}
                                    </Badge>
                                )}

                                <CardDescription className="line-clamp-3">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="mt-auto">
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {project.technologies.map(tech => (
                                        <Badge key={tech} variant="secondary" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* ACTIONS */}
                                {!project.isPrivate ? (
                                    <div className="flex gap-2">
                                        {project.demoUrl && (
                                            <Button size="sm" variant="outline" className="flex-1" asChild>
                                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="h-3 w-3 mr-1" />
                                                    Demo
                                                </a>
                                            </Button>
                                        )}
                                        {project.githubUrl && (
                                            <Button size="sm" variant="outline" className="flex-1" asChild>
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <Github className="h-3 w-3 mr-1" />
                                                    Code
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                ) : (
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="w-full"
                                        onClick={() => setActiveProject(project)}
                                    >
                                        View case study
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* HEADER */}
                {/*<div className="text-center mb-16">*/}
                {/*    <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">*/}
                {/*        Featured Projects*/}
                {/*    </h2>*/}
                {/*    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">*/}
                {/*        A showcase of my recent work, demonstrating various technologies and problem-solving approaches.*/}
                {/*    </p>*/}
                {/*</div>*/}
                {/* FEATURED */}
                {/*<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">*/}
                {/*    {featuredProjects.map(project => (*/}
                {/*        <Card*/}
                {/*            key={project.id}*/}
                {/*            className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-background"*/}
                {/*        >*/}
                {/*            /!* IMAGE *!/*/}
                {/*            <div className="relative overflow-hidden">*/}
                {/*                <ImageWithFallback*/}
                {/*                    src={project.image}*/}
                {/*                    alt={project.title}*/}
                {/*                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"*/}
                {/*                />*/}

                {/*                /!* HOVER OVERLAY *!/*/}
                {/*                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">*/}
                {/*                    {project.demoUrl && (*/}
                {/*                        <Button size="sm" variant="secondary" asChild>*/}
                {/*                            <a*/}
                {/*                                href={project.demoUrl}*/}
                {/*                                target="_blank"*/}
                {/*                                rel="noopener noreferrer"*/}
                {/*                            >*/}
                {/*                                <Eye className="h-4 w-4 mr-2" />*/}
                {/*                                Demo*/}
                {/*                            </a>*/}
                {/*                        </Button>*/}
                {/*                    )}*/}

                {/*                    {project.githubUrl && (*/}
                {/*                        <Button size="sm" variant="secondary" asChild>*/}
                {/*                            <a*/}
                {/*                                href={project.githubUrl}*/}
                {/*                                target="_blank"*/}
                {/*                                rel="noopener noreferrer"*/}
                {/*                            >*/}
                {/*                                <Github className="h-4 w-4 mr-2" />*/}
                {/*                                Code*/}
                {/*                            </a>*/}
                {/*                        </Button>*/}
                {/*                    )}*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            /!* CONTENT *!/*/}
                {/*            <CardHeader>*/}
                {/*                <CardTitle>{project.title}</CardTitle>*/}
                {/*                <CardDescription className="line-clamp-3">*/}
                {/*                    {project.description}*/}
                {/*                </CardDescription>*/}
                {/*            </CardHeader>*/}

                {/*            <CardContent className="mt-auto">*/}
                {/*                /!* TECHNOLOGIES *!/*/}
                {/*                <div className="flex flex-wrap gap-1 mb-3">*/}
                {/*                    {project.technologies.map(tech => (*/}
                {/*                        <Badge key={tech} variant="secondary" className="text-xs">*/}
                {/*                            {tech}*/}
                {/*                        </Badge>*/}
                {/*                    ))}*/}
                {/*                </div>*/}

                {/*                /!* ACTIONS *!/*/}
                {/*                {!project.isPrivate && (*/}
                {/*                    <div className="flex gap-2">*/}
                {/*                        {project.demoUrl && (*/}
                {/*                            <Button size="sm" variant="outline" className="flex-1" asChild>*/}
                {/*                                <a*/}
                {/*                                    href={project.demoUrl}*/}
                {/*                                    target="_blank"*/}
                {/*                                    rel="noopener noreferrer"*/}
                {/*                                >*/}
                {/*                                    <ExternalLink className="h-3 w-3 mr-1" />*/}
                {/*                                    Demo*/}
                {/*                                </a>*/}
                {/*                            </Button>*/}
                {/*                        )}*/}

                {/*                        {project.githubUrl && (*/}
                {/*                            <Button size="sm" variant="outline" className="flex-1" asChild>*/}
                {/*                                <a*/}
                {/*                                    href={project.githubUrl}*/}
                {/*                                    target="_blank"*/}
                {/*                                    rel="noopener noreferrer"*/}
                {/*                                >*/}
                {/*                                    <Github className="h-3 w-3 mr-1" />*/}
                {/*                                    Code*/}
                {/*                                </a>*/}
                {/*                            </Button>*/}
                {/*                        )}*/}
                {/*                    </div>*/}
                {/*                )}*/}
                {/*            </CardContent>*/}
                {/*        </Card>*/}
                {/*    ))}*/}
                {/*</div>*/}

            </div>

            {/* MODAL */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveProject(null)}
                    >
                        <motion.div
                            className="bg-background w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col overflow-hidden"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="relative">
                                <img
                                    src={activeProject.image}
                                    alt={activeProject.title}
                                    className="w-full h-64 object-cover"
                                />
                                <button
                                    onClick={() => setActiveProject(null)}
                                    className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            <div className="p-4 sm:p-6 space-y-6 overflow-y-auto">
                                <h3 className="text-2xl font-semibold">
                                    {activeProject.title}
                                </h3>

                                <div>
                                    <h4 className="font-semibold">Project overview</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {activeProject.description}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-2">Technologies used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeProject.technologies.map((tech: string) => (
                                            <Badge key={tech} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-1">What I worked on</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                        {activeProject.caseStudy.responsibilities.map(
                                            (item: string, idx: number) => (
                                                <li key={idx}>{item}</li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-1">Project highlights</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                        {activeProject.caseStudy.highlights.map(
                                            (item: string, idx: number) => (
                                                <li key={idx}>{item}</li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                <div className="flex justify-end">
                                    <Button variant="outline" onClick={() => setActiveProject(null)}>
                                        Close
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
