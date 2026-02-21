import Hero from "./components/Hero"
import TechStack from "./components/TechStack"
import Terminal from "./components/Terminal"

export default function Home() {
  return (
    <main className="px-6 md:px-20">
      <Hero />
      <TechStack />
      <Terminal />
    </main>
  )
}
