import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  // Disable draft mode
  draftMode().disable()

  // Find where they are returning from
  const { searchParams } = new URL(request.url)
  const redirectUrl = searchParams.get('redirect')

  // Prevent open redirect
  if (redirectUrl && redirectUrl.startsWith('/')) {
    redirect(redirectUrl)
  }

  // Base case
  redirect('/')
}
