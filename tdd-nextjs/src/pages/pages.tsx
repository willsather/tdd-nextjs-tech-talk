import ClientComponent from "@/components/ClientComponent";
import { getUser, User } from "@/lib";
import ServerishComponent from "@/components/ServerishComponent";

export default function Pages({ user }: { user: User }) {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="my-8 flex justify-center">
        <h1>Next.js Pages Router</h1>
      </div>

      <div className="flex gap-4">
        <ServerishComponent user={user} />

        <ClientComponent />
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const user = await getUser();

  return { props: { user } };
}
