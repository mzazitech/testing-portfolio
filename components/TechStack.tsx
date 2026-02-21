export default function TechStack() {
  const tech = ["Next.js", "Node.js", "Baileys", "Tailwind", "Pterodactyl"]

  return (
    <section className="py-16">
      <h2 className="text-3xl mb-8 text-purple-400">Tech Stack</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tech.map((item) => (
          <div
            key={item}
            className="p-6 bg-gray-900 rounded-xl hover:scale-105 transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
