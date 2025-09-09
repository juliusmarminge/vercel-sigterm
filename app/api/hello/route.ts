import { NextRequest, NextResponse } from "next/server";

process.on("SIGTERM", async () => {
  await fetch("https://webhook.site/c6a3cb36-b8f3-4a9b-9e64-64f1f2834fa4");
});

export function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello, world!" });
}
