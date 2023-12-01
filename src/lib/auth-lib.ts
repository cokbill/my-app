import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const getAuthSession = async () => {
    const session = await getServerSession(authOptions);
    return session?.user;
};