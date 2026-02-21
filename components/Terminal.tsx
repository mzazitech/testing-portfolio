"use client"

export default function Terminal() {
  return (
    <section className="py-16">
      <h2 className="text-3xl mb-6 text-cyan-400">Bot Simulator</h2>
      <div className="bg-black border border-cyan-500 p-6 rounded-xl font-mono">
        <p>&gt; .menu</p>
        <p>&gt; .owner</p>
        <p>&gt; .add 2547xxxx</p>
      </div>
    </section>
  )
}
