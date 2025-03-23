
import { NavMenu } from "@/components/nav-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Code, Video, Paintbrush, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen p-4">
      <ThemeToggle />
      <NavMenu />
      
      <div className="max-w-3xl mx-auto pt-32 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg text-muted-foreground mb-6">
            Hi, I'm Sehajdeep Singh Dhami, a 15-year-old passionate about technology and creativity.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Web Development</h2>
              </div>
              <p>Proficient in HTML, CSS, JavaScript, and Python. Always excited to learn and build new things in the world of web development.</p>
            </div>

            <div className="glass p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Video className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Video Editing</h2>
              </div>
              <p>Experienced with Alight Motion and CapCut, creating engaging visual content and bringing ideas to life through video.</p>
            </div>

            <div className="glass p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Paintbrush className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Graphic Design</h2>
              </div>
              <p>Currently exploring the world of graphic design, eager to combine creativity with technical skills.</p>
            </div>

            <div className="glass p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Education</h2>
              </div>
              <p>Student at CKCS, balancing academic pursuits with my passion for technology and digital creation.</p>
            </div>
          </div>

          <div className="glass p-6 rounded-lg">
            <p className="text-lg mb-4">
              At just 15, I'm exploring these fields out of pure enthusiasm and curiosity. I believe in continuous learning and am always ready to take on new challenges.
            </p>
            <p className="text-muted-foreground">
              Feel free to reach out if you'd like to know more about my journey or discuss potential collaborations!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
