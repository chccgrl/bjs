export default function Loading() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="p-6">
          <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="flex-1 px-4 py-2 space-y-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="h-16 bg-white border-b flex items-center px-6">
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="p-6 space-y-6">
          <div className="h-8 w-64 bg-gray-200 rounded animate-pulse"></div>
          <div className="grid gap-6 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
          <div className="space-y-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
