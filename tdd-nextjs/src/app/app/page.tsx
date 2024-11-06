import ServerComponent from "@/app/app/ServerComponent";
import ClientComponent from "@/components/ClientComponent";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="my-8 flex justify-center">
        <h1>Next.js App Router</h1>
      </div>

      <div className="flex gap-4">
        <ServerComponent />

        <ClientComponent />
      </div>
    </main>
  );
}
