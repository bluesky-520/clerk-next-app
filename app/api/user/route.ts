import { NextResponse } from "next/server";
import { currentUser, auth } from "@clerk/nextjs/server";

export async function GET(request: Request) {
    // Use `auth()` to get the user's ID
    const { userId } = await auth();

    // Protect the route by checking if the user is signed in
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Use `currentUser()` to get the Backend API User object
    const user = await currentUser();

    // Add your Route Handler's logic with the returned `user` object

    // Return the user object
    return NextResponse.json({ user: user }, { status: 200 });
}
