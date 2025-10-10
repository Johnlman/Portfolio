import { Github,ArrowRight } from "lucide-react"
const projects = [
    {
        id: 1,
        title: "Project One",
        description: "A brief description of Project One.",
        imageUrl: "/path/to/image1.jpg",
        tags: ["React", "Node.js"],
        githubUrl: "https://github.com/user/project-one"
    }
]

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                My <span className="text-primary"> Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">A selection of my recent work.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">  
                {projects.map((project,key) => (  
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration- group:hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/80 text-secondary-foreground border">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github/></a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}  
            </div>
            <div className="text-center mt-12">
                <a href="https://github.com/johnlman" target="_blank" rel="noopener noreferrer" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                Check my Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}