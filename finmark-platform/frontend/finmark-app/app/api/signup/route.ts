// File: app/api/signup/route.ts
export const dynamic = "force-dynamic"; // optional for edge compatibility

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, role, password, approval } = body;
    console.log("Received data:", body);

    if (!firstName || !lastName || !email || !role || !password) {
      return new Response(JSON.stringify({ message: "All fields are required" }), {
        status: 400,
      });
    }

    const response = await fetch(`${API_BASE_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: firstName,
        surname: lastName,
        email,
        role,
        password,
        approval,
      }),
    });

    let result;
    try {
      result = await response.json();
    } catch (err) {
      const text = await response.text();
      return new Response(JSON.stringify({ message: text || "Signup failed" }), {
        status: response.status,
      });
    }

    if (!response.ok) {
      return new Response(JSON.stringify({ message: result.detail || "Signup failed" }), {
        status: response.status,
      });
    }

    return new Response(JSON.stringify({ message: "User registered successfully" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
