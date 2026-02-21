import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <div className="p-20">
      <h1 className="text-4xl text-cyan-400 mb-10">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-900 p-6 rounded-xl">
            <h2 className="text-xl">{project.title}</h2>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
