import { User } from "@/lib";
import { UserBlock } from "@/ui/UserBlock";
import { CodeBlock } from "@/ui/CodeBlock";

export default function ServerishComponent({ user }: { user: User }) {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-xl bg-green-500 p-8">
      <h2>Server-ish Component!</h2>

      <UserBlock user={user} />

      <CodeBlock code={JSON.stringify(user, null, 2)} />
    </div>
  );
}
