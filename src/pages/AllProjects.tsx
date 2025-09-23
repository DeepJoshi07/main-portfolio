// src/pages/AllProjects.tsx
import { Link } from "react-router-dom"; // Use Link for internal navigation
import GlitchLink from "../components/GlitchLink";
import Navbar from "../components/Navbar";
import MediaHanger from "../components/MediaHanger";
import Footer from "../components/Footer";
import Chat from '../assets/chat-app.jpeg'
import Fashion from '../assets/fashion-app.jpeg'
import Social from '../assets/social-app.jpeg'

const projectsData = [
  {
    title: "Chat app",
    subtitle: "Real-Time Collaborative Coding Platform",
    description:
     "I've developed a real-time web application using the MERN stack (MongoDB, Express.js, React.js, Node.js), enhanced by Socket.IO for bi-directional communication and Zustand for lean, scalable state management in React.",
    techStack: [
      "React.js",
      "Node.js",
      "WebSockets",
      "MongoDB",
      "Tailwind CSS",
      "AI API",
    ],
    liveLink: "https://chat-app-frontend-alsb.onrender.com/",
    githubLink:
      "https://github.com/DeepJoshi07/Major-Projects/tree/main/Chat%20App",
    imageUrl: Chat,
  },
  {
    title: "Fashion E-commerce App",
    subtitle: "AI-Powered Mental Fitness Web App",
    description:
      "I’ve built a stylish and responsive fashion e-commerce platform using React.js, with smooth state management powered by Context API. The app features seamless payment integration via Stripe and Razorpay, giving customers flexible options during checkout.",
    techStack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "AI API"],
    liveLink: "https://fashion-frontend-six.vercel.app/",
    githubLink:
      "https://github.com/DeepJoshi07/Major-Projects/tree/main/fashion-app",
    imageUrl: Fashion,
  },
  {
    title: "Social media App",
    subtitle: "My Custom-Designed Developer Portfolio",
    description:
      "I've built a powerful full-stack application using Next.js, with Prisma as your ORM to efficiently connect and manage your database. The app also features image upload to the cloud, allowing users to add media seamlessly and store it securely. (In Progress...)",
    techStack: ["React.js", "Tailwind CSS", "Vite", "TypeScript"],
    liveLink: "https://social-app-rosy-sigma.vercel.app/",
    githubLink:
      "https://github.com/DeepJoshi07/Major-Projects/tree/main/social-media-app",
    imageUrl: Social,
  },
];

const AllProjects = () => {
  return (
    <div className="bg-black text-white font-mono">
      <Navbar />
      <MediaHanger />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-16">
          <Link
            to="/home"
            className="text-gray-400 hover:text-green-400 transition-colors mb-4 inline-block"
          >
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-green-400">/</span>projects
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            A list of my selected projects.
          </p>
        </div>

        <div className="space-y-20">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-2 border-gray-800 hover:border-green-400 transition-all duration-300 p-2"
                >
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} screenshot`}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/600x400/000000/333333?text=Image+Not+Found";
                    }}
                  />
                </a>
              </div>

              {/* Text Content Section */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-green-400 mb-1">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-300 mb-4 italic">
                  {project.subtitle}
                </p>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-800 text-green-400 text-xs font-mono px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <GlitchLink
                    href={project.liveLink}
                    text="[ Live Demo ]"
                    className="text-green-400 hover:text-white"
                  />
                  <span className="text-gray-600">|</span>
                  <GlitchLink
                    href={project.githubLink}
                    text="[ GitHub ]"
                    className="text-green-400 hover:text-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProjects;
