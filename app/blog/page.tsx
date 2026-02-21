import Link from "next/link"
import { posts } from "@/data/blog"

export default function Blog() {
  return (
    <div className="p-20">
      <h1 className="text-4xl text-purple-400 mb-10">Blog</h1>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div className="bg-gray-900 p-6 mb-6 rounded-xl">
            {post.title}
          </div>
        </Link>
      ))}
    </div>
  )
}
