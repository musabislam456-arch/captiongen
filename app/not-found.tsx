import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center px-4">
      <div className="w-16 h-16 rounded-3xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 mb-2">
        <Sparkles className="w-8 h-8" />
      </div>
      <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">404 - Not Found</h2>
      <p className="text-slate-600 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors mt-4"
      >
        Return Home
      </Link>
    </div>
  )
}
