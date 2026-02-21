export default function Admin() {
  return (
    <div className="p-20">
      <h1 className="text-4xl text-red-400 mb-10">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl">
          Projects: 2
        </div>
        <div className="bg-gray-900 p-6 rounded-xl">
          Blog Posts: 1
        </div>
        <div className="bg-gray-900 p-6 rounded-xl">
          Visitors: 1,204
        </div>
      </div>
    </div>
  )
}
