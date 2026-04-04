import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export const dynamic = "force-dynamic";

/**
 * Sanity Revalidation API Route
 * This endpoint is called by Sanity Webhooks whenever content is published.
 * It uses the 'sanity' tag to revalidate all cached content.
 */
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      const message = "Invalid signature";
      console.warn(message);
      return new NextResponse(message, { status: 401 });
    }

    if (!body?._type) {
      const message = "Bad Request: Missing _type in body";
      console.warn(message);
      return new NextResponse(message, { status: 400 });
    }

    // Revalidate the 'sanity' tag which we've added to fetch calls
    revalidateTag("sanity");

    console.log(
      `[Revalidate] Success: Revalidated tag "sanity" for type: ${body._type}`,
    );

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (err) {
    const error = err as Error;
    console.error("[Revalidate] Error:", error.message);
    return new NextResponse(error.message, { status: 500 });
  }
}
