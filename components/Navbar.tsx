"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-gray-800">
      <h1 className="text-xl font-bold text-cyan-400">Mzazi Tech</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </nav>
  )
}
