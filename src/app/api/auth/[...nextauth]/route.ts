import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";


export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.CLIENTID || "",
            clientSecret: process.env.GITHUBSECRET || "",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET || "wOTM2UXhlpuUUHpBf3woPNKV3JydedOpbiIRAPhXHY",
}

const handler = NextAuth(authOptions) 

export { handler as GET, handler as POST }