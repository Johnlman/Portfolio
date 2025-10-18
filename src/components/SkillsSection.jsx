import { act, useState } from 'react';
import { cn } from "@/lib/utils";
const skills = [
  // Languages
  { name: 'Java', level: 'Intermediate', category: 'language' },
  { name: 'C++', level: 'Intermediate', category: 'language' },
  { name: 'C', level: 'Intermediate', category: 'language' },
  { name: 'Python', level: 'Advanced', category: 'language' },
  { name: 'Assembly', level: 'Beginner', category: 'language' },
  { name: 'JavaScript', level: 'Advanced', category: 'language' },
  { name: 'TypeScript', level: 'Advanced', category: 'language' },
  { name: 'SQL', level: 'Intermediate', category: 'language' },
  { name: 'NoSQL', level: 'Intermediate', category: 'language' },
  { name: 'HTML', level: 'Advanced', category: 'frontend' },
  { name: 'CSS', level: 'Intermediate', category: 'frontend' },
  { name: 'Golang', level: 'Beginner', category: 'language' },
  { name: 'Node.js', level: 'Advanced', category: 'backend' },
  { name: 'React', level: 'Advanced', category: 'frontend' },
  { name: 'Firebase', level: 'Intermediate', category: 'backend' },
  { name: 'Java Swing', level: 'Intermediate', category: 'frontend' },
  { name: 'Spring Boot', level: 'Intermediate', category: 'backend' },
  { name: 'JUnit', level: 'Intermediate', category: 'testing' },
  { name: 'NumPy', level: 'Intermediate', category: 'data' },
  { name: 'Pandas', level: 'Intermediate', category: 'data' },
  { name: 'scikit-learn', level: 'Intermediate', category: 'data' },
  { name: 'MATLAB', level: 'Intermediate', category: 'data' },
  { name: 'R', level: 'Intermediate', category: 'data' },
  { name: 'Cypress', level: 'Intermediate', category: 'testing' },
  { name: 'Jest', level: 'Intermediate', category: 'testing' },
  { name: 'Docker', level: 'Intermediate', category: 'devops' },
  { name: 'GitHub Actions', level: 'Intermediate', category: 'devops' },
  { name: 'AWS (ECS, ECR, S3)', level: 'Intermediate', category: 'devops' },
  { name: 'OracleDB', level: 'Intermediate', category: 'database' },
  { name: 'MongoDB', level: 'Intermediate', category: 'database' },
  { name: 'PostgreSQL', level: 'Intermediate', category: 'database' }
];
const categories = ["all", "language", "frontend", "backend", "database", "data", "testing", "devops"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] =  useState('all');
    const filteredSkills = activeCategory === 'all' ? skills : skills.filter(skill => skill.category === activeCategory);
    return (<section id="skills" className="py-24 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key)=>(
                    <button key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")} onClick={() => setActiveCategory(category)}>
                        {category}
                    </button>

                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <h3 className="font-semibold">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">{skill.level}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>);
    };
