
import { ThemeToggle } from "@/components/theme-toggle";
import { NavMenu } from "@/components/nav-menu";
import { Code, Video, Paintbrush, GraduationCap } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <NavMenu />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="scroll-animation text-center">
          <span className="text-sm uppercase tracking-widest">Hello, I am</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4">
            Sehajdeep Singh Dhami
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto mb-4">
            Welcome to my digital space. I create meaningful experiences through code and design.
          </p>
          <a href="mailto:dhamiputtar2009@gmail.com" 
             className="text-primary hover:underline">
            dhamiputtar2009@gmail.com
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen p-4 bg-secondary/20">
        <div className="max-w-3xl mx-auto pt-16">
          <h2 className="text-3xl font-bold mb-8 text-center scroll-animation">About Me</h2>
          
          <p className="text-lg text-muted-foreground mb-6 text-center scroll-animation delay-100">
            Hi, I'm Sehajdeep Singh Dhami, a 15-year-old passionate about technology and creativity.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="glass p-6 scroll-animation delay-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-5 h-5" />
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <p>Proficient in HTML, CSS, JavaScript, and Python. Always excited to learn and build new things.</p>
            </div>

            <div className="glass p-6 scroll-animation delay-300 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <Video className="w-5 h-5" />
                <h3 className="text-xl font-semibold">Video Editing</h3>
              </div>
              <p>Experienced with Alight Motion and CapCut, creating engaging visual content.</p>
            </div>

            <div className="glass p-6 scroll-animation delay-400 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <Paintbrush className="w-5 h-5" />
                <h3 className="text-xl font-semibold">Graphic Design</h3>
              </div>
              <p>Currently exploring the world of graphic design, eager to combine creativity with technical skills.</p>
            </div>

            <div className="glass p-6 scroll-animation delay-500 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p>Student at CKCS, balancing academic pursuits with my passion for technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section Placeholder */}
      <section className="min-h-screen p-4">
        <div className="max-w-3xl mx-auto pt-16">
          <h2 className="text-3xl font-bold mb-8 text-center scroll-animation">My Projects</h2>
          <p className="text-center text-muted-foreground scroll-animation delay-100">Project showcase coming soon...</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-3xl mx-auto text-center scroll-animation">
          <p className="text-muted-foreground">
            © 2024 Sehajdeep Singh Dhami. All rights reserved.
          </p>
          <a 
            href="mailto:dhamiputtar2009@gmail.com"
            className="text-primary hover:underline mt-2 block"
          >
            dhamiputtar2009@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
