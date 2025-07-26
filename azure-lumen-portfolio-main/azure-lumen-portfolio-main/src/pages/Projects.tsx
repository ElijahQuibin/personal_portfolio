import { useState, useEffect } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["All", "Web Apps", "Mobile", "Design", "Open Source"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration, inventory management, and analytics dashboard.",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      category: "Web Apps",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team communication features.",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      category: "Web Apps",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      id: 3,
      title: "Weather Mobile App",
      description: "Beautiful weather application with location-based forecasts and interactive maps.",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      category: "Mobile",
      technologies: ["React Native", "API Integration", "Maps"],
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      id: 4,
      title: "Design System",
      description: "Comprehensive UI component library with documentation and theming capabilities.",
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      category: "Design",
      technologies: ["Storybook", "CSS-in-JS", "TypeScript"],
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      id: 5,
      title: "Open Source CLI Tool",
      description: "Command-line interface for automating common development workflows and deployments.",
      image: "bg-gradient-to-br from-gray-700 to-gray-900",
      category: "Open Source",
      technologies: ["Node.js", "Commander.js", "Chalk"],
      github: "https://github.com",
      live: "https://npmjs.com"
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform with customizable charts and reporting features.",
      image: "bg-gradient-to-br from-cyan-500 to-blue-600",
      category: "Web Apps",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      github: "https://github.com",
      live: "https://demo.com"
    }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom">
          <div className={`text-center fade-in ${isVisible ? 'visible' : ''}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of projects showcasing my skills in web development, 
              design, and problem-solving across various technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="transition-smooth"
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden project-card shadow-elegant"
              >
                {/* Project Image */}
                <div className={`h-48 ${project.image} flex items-center justify-center`}>
                  <div className="text-white text-lg font-semibold">
                    {project.title}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {project.featured && (
                      <Badge variant="secondary" className="text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-primary-soft text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1">
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="p-8 card-gradient shadow-elegant max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
              <p className="text-muted-foreground mb-6">
                I'm always excited to take on new challenges and collaborate on interesting projects.
              </p>
              <Button size="lg" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;