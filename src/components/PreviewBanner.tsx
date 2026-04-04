import Link from 'next/link'

export default function PreviewBanner() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-neutral-900 border-t border-neutral-800 text-white p-3 flex justify-between items-center text-sm md:text-base px-6">
      <div className="flex items-center gap-2">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="font-medium text-emerald-400">Preview Mode Active</span>
        <span className="text-neutral-400 hidden sm:inline ml-2">— Viewing draft content</span>
      </div>
      <Link 
        href="/api/exit-preview" 
        className="px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 transition-colors rounded-md font-medium text-sm"
      >
        Exit Preview
      </Link>
    </div>
  )
}
