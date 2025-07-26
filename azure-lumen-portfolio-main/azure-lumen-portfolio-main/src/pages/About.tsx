import { useEffect, useState } from "react";
import { Code, Palette, Users, Award, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive web interfaces with HTML, CSS, JavaScript, and Vue.js."
    },
    {
      icon: Palette,
      title: "Backend Learning",
      description: "Exploring server-side development with Python and database management with Supabase."
    },
    {
      icon: Users,
      title: "Continuous Learning",
      description: "Constantly improving my skills through practice, tutorials, and hands-on projects."
    },
    {
      icon: Award,
      title: "System Administration",
      description: "Developing beginner skills in Linux environments and command-line tools."
    }
  ];

  const skills = [
    { name: "HTML", level: 70 },
    { name: "CSS", level: 65 },
    { name: "JavaScript", level: 60 },
    { name: "Vue.js", level: 45 },
    { name: "Python", level: 50 },
    { name: "Supabase", level: 35 },
    { name: "Linux/CLI", level: 30 }
  ];

  const experience = [
    {
      title: "Self-Taught Developer",
      company: "Personal Learning",
      period: "2024 - Present",
      description: "Learning web development fundamentals through online courses, tutorials, and hands-on practice with HTML, CSS, JavaScript, and Vue.js."
    },
    {
      title: "Python Programming Student",
      company: "Online Courses",
      period: "2024 - Present",
      description: "Building foundational knowledge in Python programming and exploring its applications in web development."
    },
    {
      title: "Linux & CLI Explorer",
      company: "Personal Projects",
      period: "2024 - Present",
      description: "Gaining beginner experience with Linux operating systems and command-line interface tools for development workflow."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom">
          <div className={`text-center fade-in ${isVisible ? 'visible' : ''}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aspiring developer learning to create digital solutions. I'm building my skills 
              in web technologies and exploring the world of programming.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* About Text */}
            <div>
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm Elijah Quibin, an aspiring developer with a passion for learning and creating 
                  digital solutions. My journey in programming started with curiosity and has grown 
                  into a dedicated pursuit of web development skills.
                </p>
                <p>
                  I'm currently building my expertise in HTML, CSS, JavaScript, Vue.js, and Python. 
                  I'm also exploring database technologies like Supabase and gaining experience with 
                  Linux systems and command-line interfaces.
                </p>
                <p>
                  When I'm not coding, I'm learning new technologies, practicing on personal projects, 
                  and building my foundation in software development one step at a time.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-primary-soft rounded-2xl shadow-elegant" />
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 text-center card-gradient shadow-elegant hover:shadow-glow transition-smooth">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="p-6 card-gradient shadow-elegant">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;