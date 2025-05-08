import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize Upstash Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Create a rate limiter that allows 5 requests per hour
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 h"), // 5 requests per hour
});

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "";

export default async function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");
  const ip = request.headers.get("x-forwarded-for") || "anonymous"; // Identify the requester by IP address

  if (origin && origin !== ALLOWED_ORIGIN) {
    return new NextResponse(
      JSON.stringify({ message: "CORS: Origin not allowed" }),
      {
        status: 403,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  // Apply rate limiting
  const { success, limit, remaining, reset } = await ratelimit.limit(ip);

  // Create a new response
  const response = success
    ? NextResponse.next()
    : NextResponse.json(
        { message: "Too many requests. Try after 1 hour." },
        { status: 429 }
      );

  response.headers.set("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  response.headers.set("Vary", "Origin");

  // Set rate limit headers
  response.headers.set("X-RateLimit-Limit", limit.toString());
  response.headers.set("X-RateLimit-Remaining", remaining.toString());
  response.headers.set("X-RateLimit-Reset", reset.toString());

  return response;
}

export const config = {
  matcher: "/api/contact",
};
