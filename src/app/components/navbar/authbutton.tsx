import Link from "next/link";
import { getAuthSession } from "@/lib/auth-lib";
export default async function AuthButton() {
    const user = await getAuthSession();
    const isLoggedIn = user ? "Sign Out" : "Sign In";
    const href = user ? "/api/auth/signout" : "/api/auth/signin";
    return (
        <div className="flex justify-between gap-2 items-center mt-2 md:mt-0">
            {
             user ? <Link href="/users/dashboard" className="text-white text-xl " >Dashboard</Link> : null
            }
            <Link href={href} className="text-white text-xl font-light py-1 bg-red-900 rounded-lg px-8" >{isLoggedIn}</Link>
        </div>
    )
}