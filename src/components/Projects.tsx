// src/components/Projects.tsx

import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

const projectData = [
  {
    title: 'Chat app',
    description: 'Real-time collaborative coding platform with shared rooms, live execution, and AI debugging.',
    techStack: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'Tailwind CSS', 'AI APIs'],
    liveLink: 'https://chat-app-frontend-alsb.onrender.com/', 
    githubLink: 'https://github.com/DeepJoshi07/Major-Projects/tree/main/Chat%20App',
  },
  {
    title: 'Fashion E-com app',
    description: 'A store to sell your clothes .',
    techStack: ['JavaScript', 'CSS', 'HTML', 'JWT Auth', 'REST APIs', 'AI Integration'],
    liveLink: 'https://fashion-frontend-six.vercel.app/',
    githubLink: 'https://github.com/DeepJoshi07/Major-Projects/tree/main/fashion-app',
  },
  {
    title: 'Social media app',
    description: 'My custom-designed personal portfolio to showcase my skills and projects.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveLink: 'https://social-app-rosy-sigma.vercel.app/',
    githubLink: 'https://github.com/DeepJoshi07/Major-Projects/tree/main/social-media-app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="my-16 md:my-24">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-green-400">#</span>Projects
        </h2>
   <Link 
  to="/projects"
  className="text-lg text-gray-300 hover:text-green-400 transition-colors"
>
  View all →
</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
