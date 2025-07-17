// File: app/api/login/route.ts
export const dynamic = "force-dynamic"; // optional for edge compatibility

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;
    console.log("Login attempt:", email);

    if (!email || !password) {
      return new Response(JSON.stringify({ message: "Email and password are required" }), {
        status: 400,
      });
    }

    const response = await fetch(`${API_BASE_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    let result;
    try {
      result = await response.json();
    } catch (err) {
      const text = await response.text();
      return new Response(JSON.stringify({ message: text || "Login failed" }), {
        status: response.status,
      });
    }

    if (!response.ok) {
      return new Response(JSON.stringify({ message: result.detail || "Login failed" }), {
        status: response.status,
      });
    }

    // Result contains: access_token, token_type, role, approval
    return new Response(
      JSON.stringify({
        message: "Login successful",
        token: result.access_token,
        role: result.role,
        approval: result.approval,
      }),
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error("Login error:", err);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
