import { users } from "@/lib/users";
import { redirect } from "next/navigation";
const DashboardPage = () => {
  const user = users[0];

  if (user.role === "admin") {
    redirect("/dashboard/admin");
  } else if (user.role === "seller") {
    redirect("/dashboard/seller");
  } else {
    redirect("/");
  }
};

export default DashboardPage;
