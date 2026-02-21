import { posts } from "@/data/blog"

export default function BlogPost({ params }: any) {
  const post = posts.find((p) => p.slug === params.slug)

  return (
    <div className="p-20">
      <h1 className="text-4xl text-cyan-400 mb-6">{post?.title}</h1>
      <p className="text-gray-400">{post?.content}</p>
    </div>
  )
}
