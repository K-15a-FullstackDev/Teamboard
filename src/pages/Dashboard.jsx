import { useEffect } from "react";
import { useAuth } from "../store/auth";

export default function Dashboard() {
  const { fetchMe, user } = useAuth();
  useEffect(() => {
    fetchMe();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">TeamBoard</h1>
      <p className="mt-2">Welcome {user?.id ? `User #${user.id}` : "..."}</p>
    </div>
  );
}
