"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  FolderOpen,
  Rocket,
  Lightbulb,
  Shield,
  Globe,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Quote,
  Palette,
  Cloud,
  Brain,
  Smartphone,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 bg-background"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.h1
            className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Empowering Innovation Through Technology
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg sm:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            At{" "}
            <span className="font-semibold text-primary">
              DeltaCube Technology
            </span>
            , we craft intelligent digital solutions that help businesses
            innovate, scale, and thrive in the modern world. From software
            development to AI-driven automation, we turn ideas into impact.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <FolderOpen className="w-4 h-4" />
              View Our Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="w-full py-24 px-6 bg-muted/30 border-t">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <motion.h2
              className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Who We Are
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              DeltaCube Technology is a next-generation software and technology
              company dedicated to building efficient, scalable, and
              future-ready digital products. Our team of developers, designers,
              and innovators work together to create seamless experiences
              powered by modern tools and technologies.
            </motion.p>

            <motion.p
              className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              We believe technology should not only solve problems but also
              create possibilities. Whether it’s AI-driven solutions, modern web
              and mobile apps, or business automation — we make it happen.
            </motion.p>
          </div>

          {/* Core Values Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader>
                <Rocket className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                We constantly push the boundaries of technology to deliver
                creative, high-impact solutions that redefine possibilities.
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader>
                <Lightbulb className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Simplicity</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                We believe in creating clean, user-centric designs that make
                complex technologies easy to use and understand.
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Every product we deliver is built for stability, security, and
                long-term performance.
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader>
                <Globe className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Our goal is to make a real difference — empowering businesses
                and communities through meaningful technology.
              </CardContent>
            </Card>
          </div>

          {/* Team Profiles */}
          <div className="pt-20 space-y-10">
            <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Meet Our Team
            </h3>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Abir Hasan",
                  role: "Founder & Lead Developer",
                  img: "/images/abir.jpg",
                  desc: "Full-stack developer with a passion for building scalable systems and crafting impactful digital solutions.",
                  linkedin: "#",
                  github: "#",
                },
                {
                  name: "Nusrat Jahan",
                  role: "AI Engineer",
                  img: "/images/nusrat.jpg",
                  desc: "Specializes in AI-driven automation and intelligent systems that help businesses innovate faster.",
                  linkedin: "#",
                  github: "#",
                },
                {
                  name: "Rafiul Karim",
                  role: "UI/UX Designer",
                  img: "/images/rafiul.jpg",
                  desc: "Designs intuitive user experiences and beautiful interfaces that connect technology with people.",
                  linkedin: "#",
                  github: "#",
                },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <Card className="group overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="relative w-full h-60 overflow-hidden">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    </div>

                    <CardHeader className="text-center space-y-1 mt-4">
                      <CardTitle className="text-lg font-semibold">
                        {member.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </CardHeader>

                    <CardContent className="text-center px-6 pb-6 text-sm text-muted-foreground">
                      <p className="mb-4">{member.desc}</p>
                      <div className="flex justify-center gap-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section
        id="services"
        className="w-full py-24 px-6 bg-background border-t"
      >
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <motion.h2
              className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              What We Do
            </motion.h2>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto">
              We offer end-to-end technology solutions tailored to your goals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Custom Software Development",
                desc: "Scalable applications built for performance and reliability. From prototypes to enterprise-grade solutions.",
              },
              {
                icon: Smartphone,
                title: "Web & Mobile App Development",
                desc: "Stunning, responsive, and user-friendly apps for every platform. Powered by React, Next.js, and Flutter.",
              },
              {
                icon: Brain,
                title: "AI & Automation Solutions",
                desc: "Integrate machine learning and automation to boost efficiency. Gain data-driven insights for smarter decisions.",
              },
              {
                icon: Cloud,
                title: "Cloud & DevOps Services",
                desc: "Seamless deployment, monitoring, and scaling in the cloud. We work with AWS, Google Cloud, and Azure.",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                desc: "Human-centered design focused on engagement, usability, and conversion.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                  <CardHeader>
                    <service.icon className="w-10 h-10 text-primary mb-3 mx-auto" />
                    <CardTitle className="text-xl font-semibold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    {service.desc}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="w-full py-24 px-6 bg-muted/30 border-t">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <motion.h2
            className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Businesses Choose DeltaCube
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {[
              "✅ Full-Stack Expertise – We handle every layer of your tech stack.",
              "⚙️ End-to-End Delivery – From idea to deployment, we manage it all.",
              "🔍 Transparent Workflow – Agile methods and open communication.",
              "🧠 Innovation-Driven – We don’t just build — we invent.",
              "🤝 Trusted Partnerships – Long-term collaborations with measurable results.",
            ].map((point, i) => (
              <motion.p
                key={i}
                className="text-muted-foreground text-lg flex items-start gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {point}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="w-full py-24 px-6 bg-background border-t"
      >
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <motion.h2
            className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Work Speaks for Itself
          </motion.h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto">
            We’ve delivered high-quality solutions for startups, enterprises,
            and organizations across multiple industries — from fintech and
            e-commerce to healthcare and AI.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI Chatbot for Retail",
                desc: "An intelligent assistant that automates customer support and boosts engagement.",
              },
              {
                title: "Smart IoT Dashboard",
                desc: "Real-time device monitoring with interactive data visualization.",
              },
              {
                title: "SaaS Admin Panel",
                desc: "Custom admin platform for managing clients, analytics, and automation tools.",
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Card className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    {project.desc}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="w-full py-24 px-6 bg-muted/30 border-t"
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2
            className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                quote:
                  "DeltaCube transformed our outdated system into a fully automated platform. Their attention to detail and technical depth are unmatched.",
                name: "Sarah K.",
                title: "CTO at NovaTech",
              },
              {
                quote:
                  "Working with DeltaCube was a game changer for our mobile app launch. The team is fast, skilled, and super reliable.",
                name: "James R.",
                title: "Founder of FlowSpace",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-card/50">
                  <Quote className="w-8 h-8 text-primary mb-4 mx-auto" />
                  <p className="text-muted-foreground mb-4">{t.quote}</p>
                  <h4 className="font-semibold text-foreground">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.title}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full py-24 px-6 bg-background border-t"
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.h2
            className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let’s Build Something Amazing
          </motion.h2>

          <p className="text-muted-foreground text-lg sm:text-xl">
            Ready to bring your idea to life? Let’s collaborate to create
            innovative, reliable, and scalable solutions tailored to your
            business.
          </p>

          <Button size="lg" className="gap-2">
            Contact Us
          </Button>

          <div className="pt-6 space-y-2 text-muted-foreground">
            <p className="flex justify-center items-center gap-2">
              <Mail className="w-4 h-4" /> info@deltacubetechnology.com
            </p>
            <p className="flex justify-center items-center gap-2">
              <MapPin className="w-4 h-4" /> Rangpur, Bangladesh
            </p>
            <p>🌐 www.deltacubetechnology.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
