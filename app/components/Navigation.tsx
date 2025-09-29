import { LinkedinIcon, GithubIcon, TwitterIcon } from 'lucide-react';


export default function Navigation() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Learning Journey', href: '/pages/LearningJourney' },
    { label: 'Recent Projects', href: '/pages/RecentProjects' },
    { label: 'Get In Touch', href: '/pages/GetInTouch' },
  ];

  return (
    <nav className="w-full px-8 py-6 flex justify-between items-center">
      <div className="flex space-x-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
          >
            {item.label}
          </a>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/jamesnel-chavez-5a7641387/"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={20} />
        </a>
        <a
          href="https://github.com/Officialketchupped-debug"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="GitHub"
        >
          <GithubIcon size={20} />
        </a>

      </div>
    </nav>
  );
}