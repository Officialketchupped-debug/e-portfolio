import Navigation from '@/app/components/Navigation';

export default function RecentProjects() {
  const projects = [
    {
      id: 'portfolio',
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS',
      image: '/portfolio.jpg',
      technologies: ['React', 'Tailwind CSS', 'Typescript'],
    },
    {
      id: 'student-internship-tracker',
      title: 'Student Internship Tracker',
      description: 'Student Task Management System built using Next.JS (in development)',
      image: '/Tracker.jpg',
      technologies: ['Next.JS', 'Tailwind CSS', 'Typescript'],
    },
  ];

  return (
    <>
      <Navigation />
      <section id="projects" className="w-full px-8 py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4">Recent Projects</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover my latest projects showcasing my development
              and design skills across different technologies and platforms.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Here are some of my recent portfolio pieces showcasing my
              development and design capabilities.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg shadow-md border border-gray-700 overflow-hidden"
              >

                <div className="aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>


                <div className="p-6">
                  <h3 className="text-xl text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>


                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>


                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-sm rounded-md w-full">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
