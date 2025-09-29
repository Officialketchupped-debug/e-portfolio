import Navigation from "@/app/components/Navigation";

export default function LearningJourney() {
  const projects = [
    {
      id: 'ux-design',
      title: 'UI/UX Design Study',
      description:
        'UI/UX design exploration using Figma and Canva to create creative design mockups focusing on design principles, user research, and prototyping methodologies.',
      buttonText: 'View Project',
      buttonColor: 'bg-orange-500 hover:bg-orange-600',
      accentColor: 'text-orange-400',
      image: '/ux.jpg',
      tag: 'DESIGN',
    },
    {
      id: 'C++',
      title: 'Expert Systems',
      description:
        'A C++ project implementing a simple expert system that uses fuzzy logic and rule-based reasoning to simulate decision-making under uncertainty. Focused on algorithm design, efficient data structures, and problem-solving in real-world scenarios.',
      buttonText: 'View Project',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      accentColor: 'text-blue-400',
      image: '/fuzzy.jpg',
      tag: 'C++',
    },
    {
      id: 'web-design',
      title: 'Responsive Web Design',
      description:
        'A comprehensive web application built using HTML, CSS, and JavaScript focusing on responsive design principles and user experience optimization through iterative development.',
      buttonText: 'View Project',
      buttonColor: 'bg-teal-600 hover:bg-teal-700',
      accentColor: 'text-teal-400',
      image: '/webdesign.jpg',
      tag: 'WEB DEV',
    },
  ];

  return (
    <>
      <Navigation />
      <section id="learning" className="w-full px-8 py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4">Learning Journey</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Learning through building programs.
              These are projects I've worked on, exploring my development
              process, challenges overcome, and lessons learned.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-gray-800 rounded-lg shadow-md overflow-hidden ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
              >
                {/* Text */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span
                      className={`text-xs font-semibold ${project.accentColor} mb-2 block`}
                    >
                      {project.tag}
                    </span>
                    <h3 className="text-2xl text-white mb-4">{project.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <button
                      className={`${project.buttonColor} text-white px-6 py-3 rounded-md w-fit`}
                    >
                      {project.buttonText} →
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 min-h-[300px] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
