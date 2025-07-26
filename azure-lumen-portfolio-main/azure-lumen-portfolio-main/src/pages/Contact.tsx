import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "hello@alexchen.dev",
      link: "mailto:hello@alexchen.dev"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "San Francisco, CA",
      link: null
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom">
          <div className={`text-center fade-in ${isVisible ? 'visible' : ''}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 card-gradient shadow-elegant">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="mt-1"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-4 card-gradient shadow-elegant">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary-soft rounded-lg">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-smooth"
                            >
                              {info.detail}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.detail}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      asChild
                      className="hover:text-primary hover:border-primary transition-smooth"
                    >
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card className="p-6 card-gradient shadow-elegant">
                <h3 className="text-xl font-bold mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Freelance Projects</span>
                    <span className="px-3 py-1 bg-success text-success-foreground text-sm rounded-full">
                      Available
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Full-time Opportunities</span>
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                      Open to discuss
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Consulting</span>
                    <span className="px-3 py-1 bg-success text-success-foreground text-sm rounded-full">
                      Available
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;