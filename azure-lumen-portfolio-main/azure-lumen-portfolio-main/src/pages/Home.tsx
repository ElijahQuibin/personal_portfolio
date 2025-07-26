import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    "HTML", "CSS", "JavaScript", "Vue.js", "Python", "Supabase"
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@alexchen.dev", label: "Email" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className={`text-center fade-in ${isVisible ? 'visible' : ''}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Elijah Quibin</span><br />
              <span className="text-primary">Aspiring Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Building my skills in web development with HTML, CSS, JavaScript, Vue.js, Python, and Supabase
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="primary-gradient shadow-glow">
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="lg"
                  asChild
                  className="hover:text-primary hover:scale-110 transition-smooth"
                >
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies & Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Constantly learning and adapting to the latest technologies to deliver cutting-edge solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <Card 
                key={index}
                className="p-6 text-center card-gradient shadow-elegant hover:shadow-glow transition-smooth hover:-translate-y-1"
              >
                <h3 className="font-semibold text-sm md:text-base">{skill}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Project
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work combining innovative design with powerful functionality
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-smooth">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto bg-primary-soft" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">E-Commerce Platform</h3>
                <p className="text-muted-foreground mb-6">
                  A modern, responsive e-commerce solution built with React, Node.js, and MongoDB. 
                  Features include real-time inventory, secure payments, and an intuitive admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "Node.js", "MongoDB", "Stripe"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary-soft text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline">
                  <Link to="/projects">
                    View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;