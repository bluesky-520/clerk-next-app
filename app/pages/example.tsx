import { getAuth, buildClerkProps, clerkClient } from '@clerk/nextjs/server'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // Use `getAuth()` to get the user's ID
    const { userId } = getAuth(ctx.req)

    // Protect the route by checking if the user is signed in
    if (!userId) {
        // Handle when the user is not signed in
    }

    // Initialize the Backend SDK
    const client = await clerkClient()

    // Get the user's full `Backend User` object
    const user = userId ? await client.users.getUser(userId) : undefined

    return { props: { ...buildClerkProps(ctx.req, { user }) } }
}