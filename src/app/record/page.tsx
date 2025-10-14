import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import RecordInterviewClient from "../components/RecordInterview";
import { authOptions } from "../api/auth/[...nextauth]/route"; // adjust path as needed

export default async function RecordPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // 🚫 If not logged in, redirect before rendering anything
    redirect("/signin");
  }

  return <RecordInterviewClient />;
}
