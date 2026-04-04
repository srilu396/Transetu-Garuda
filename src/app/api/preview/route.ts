import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  // Sanity Studio automatically sends sanity-preview-pathname
  const pathname = searchParams.get('sanity-preview-pathname') || '/'
  
  // Enable Draft Mode safely
  draftMode().enable()

  // Redirect securely to the frontend URL requested
  redirect(pathname.startsWith('/') ? pathname : `/${pathname}`)
}
