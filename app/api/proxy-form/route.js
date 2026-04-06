export async function GET(request) {
  const target = "https://blog.kce.ac.in/admissions-enquiry/";

  const res = await fetch(target, {
    headers: {
      "User-Agent": request.headers.get("user-agent") || "Mozilla/5.0",
    },
  });

  const html = await res.text();

  return new Response(html, {
    status: res.status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      // Remove frame-blocking headers
      "X-Frame-Options": "ALLOWALL",
      "Content-Security-Policy": "",
    },
  });
}
