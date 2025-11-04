const skills = {
  "Frontend": ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "Next.js"],
  "Backend": ["FastAPI (Python)", "Node.js", "PHP", "Java"],
  "Databases": ["MySQL"],
  "Tools & Dev": ["Git & GitHub", "VS Code", "Debugging", "Microsoft Word & Excel"],
};

export default function SkillsPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h2 className="text-3xl font-bold text-[#054160] mb-6">Skills</h2>
      {Object.entries(skills).map(([category, list]) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-semibold text-[#054160] mb-2">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {list.map((item, i) => (
              <span key={i} className="bg-[#edf7ff] text-[#054160] px-3 py-1 rounded-full text-sm shadow">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
