import { Github,ArrowRight } from "lucide-react"
const projects = [
    {
        id: 1,
        title: "Fault Tolerant Key-Value Store",
        description:
            "A fault-tolerant key-value store was implemented in Go, featuring replication and coordination through the Raft consensus algorithm as described in Stanford’s ATC 2014 paper. The system was designed to ensure consistency and reliability across distributed nodes while maintaining high availability. To enhance performance, the service was partitioned into shards, enabling data and workload distribution across replica groups and significantly improving overall database throughput.",
        imageUrl: "/projects/raft-consensus-algorithm-diagram.jpg",
        tags: ["Golang", "Distributed Systems"],
    },
    {
        id: 2,
        title: "Parking Pass Sharing App",
        description:
            "A full-stack web application was developed using the MERN stack to connect users without parking passes to those who have one, enabling shared costs through the stable matching algorithm. The platform integrates an AI-powered text recognition system that automatically extracts parking ticket information from uploaded images, improving automation and user experience. Built by a team of four using Agile development practices, the project emphasized iterative development, collaboration, and timely delivery of features.",
        imageUrl: "/projects/parking-buddy.png",
        tags: ["MongoDB", "Express", "React", "Node.js", "HTML", "CSS"],
        githubUrl: "https://github.com/NACK2/parking-buddy",
    },
    {
        id: 3,
        title: "Collaborative Task Manager",
        description:
            "A real-time task management platform built with a React and TypeScript frontend and a Node.js and Express backend, supported by MongoDB for scalable document-based storage. The system includes user authentication and role-based access control to manage projects and tasks across teams. Comprehensive testing was implemented using Jest and Cypress to ensure reliability, while continuous integration and deployment pipelines were established with GitHub Actions, Docker, and AWS services such as ECS, S3, and CloudFront for automated builds and seamless scalability.",
        imageUrl: "/projects/task-manager.png",
        tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Jest", "Cypress", "Docker", "AWS"],
    },
    {
        id: 4,
        title: "UBC Course/Room Finder",
        description:
            "A full-stack query engine designed to search and aggregate metadata from uploaded course and room datasets. Built with React and TypeScript, it leverages asynchronous, promise-based parsing using the JSZip API and the ParseS library to handle JSON and HTML files efficiently. RESTful API endpoints were implemented to support scalable client-server interactions, while robust testing with the Mocha framework ensured system reliability and maintainability throughout development.",
        imageUrl: "/projects/UBC_Course_Room_Finder.png",
        tags: ["TypeScript", "React", "CSS", "Mocha"],
        githubUrl: "https://github.com/Johnlman/UBC-Course-Room-Finder"
    },
    {
        id: 5,
        title: "Job Board",
        description:
            "A feature-rich job board web application that allows users to create, delete, and filter job postings with ease. Built with Node.js, Express, and OracleDB, the system uses SQL queries to manage relational data between job postings and applications. RESTful API endpoints were developed to handle POST, PUT, and GET requests, enabling efficient data retrieval and manipulation, including real-time company-wise job counts and job application tracking.",
        imageUrl: "/projects/Job_Board.png",
        tags: ["JavaScript", "Node.js", "Express.js", "SQL", "OracleDB"],
        githubUrl:"https://github.com/Johnlman/Job-Board"
    },
        {
        id: 6,
        title: "2D Survival Game",
        description:
            "A 2D survival game developed in C and C++ using OpenGL, featuring real-time rendering, collision detection, and player movement with velocity-based physics. The project implemented a modular game loop architecture and efficient memory management for performance optimization. Core mechanics such as resource collection, health tracking, and enemy AI were designed to create engaging and dynamic gameplay.",
        imageUrl: "/projects/All_In.png",
        tags: ["C", "C++", "OpenGL", "Game Development"],
    }, {
        id: 7,
        title: "Portfolio Website",
        description:
            "A personal portfolio website built with React and Tailwind CSS, showcasing my projects, skills, and experience. The site features a responsive design, smooth scrolling, and interactive elements to enhance user engagement. It is optimized for performance and SEO, ensuring fast load times and better visibility in search engines.",
        imageUrl: "/projects/Portfolio_Website.png",
        tags: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    },
];

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                My <span className="text-primary"> Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">A selection of my recent work.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
                {projects.map((project,key) => (  
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
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
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github />
                                    </a>
                                )}
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