import ResumePdf from "@/lib/John_Man_Resume.pdf";
import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {
  return <section id="about" className="py-24 px-4 relative">
    {" "}
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:4xl font-bold mb-12 text-center">
        About <span className="text-primary"> Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Dedicated Computer Science Student</h3>
          <p className="text-muted-foreground">
            I'm a fourth-year Computer Science student at the University of British Columbia with a passion for building efficient and scalable software.
          </p>
          <p className="text-muted-foreground">
            My experience spans full-stack web development, distributed systems, and low-level programming. I enjoy learning new technologies and turning ideas into impactful digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">Contact Me</a>
            <a href={ResumePdf} download="John_Man_Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download Resume</a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Software Development</h4>
                <p className="text-muted-foreground">Experienced in building full-stack applications with modern frameworks and clean design principles.</p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Collaboration</h4>
                <p className="text-muted-foreground">Strong communicator who enjoys working in Agile teams to deliver reliable, high-quality software.</p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Career Goals</h4>
                <p className="text-muted-foreground">Aspiring software engineer eager to apply technical skills and creativity to impactful real-world projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
