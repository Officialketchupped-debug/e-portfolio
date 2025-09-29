export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'C#', 'Java', 'C++']
    },
    {
      title: 'Frontend',
      skills: ['React', 'HTML/CSS', 'Figma', 'Tailwind CSS']
    },
    {
      title: 'Tools',
      skills: ['Git/GitHub', 'VS Code', 'Supabase']
    }
  ];

  return (
    <div className="w-full px-8 py-12">
      <h2 className="text-white text-2xl mb-8">Skills & Technologies</h2>
      <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-6xl">
  {skillCategories.map((category) => (
    <div key={category.title} className="space-y-4 min-w-[200px]">
      <h3 className="text-gray-300 text-lg">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="text-gray-400 text-sm py-1 px-3 bg-gray-800 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>

    </div>
  );
}