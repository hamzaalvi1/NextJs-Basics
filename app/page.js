import getAllUsers from "@/libs/getAllUsers";

export default async function Home() {
  const users = await getAllUsers();
  console.log(users);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
