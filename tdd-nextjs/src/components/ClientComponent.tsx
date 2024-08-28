"use client";

import { useEffect, useState } from "react";
import type { User } from "@/lib";
import { UserBlock } from "@/ui/UserBlock";
import { CodeBlock } from "@/ui/CodeBlock";
import { sleep } from "@/util";

export default function ClientComponent() {
  const [error, setError] = useState<string>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function retrieveUser() {
      setError(undefined);

      const response = await fetch("/api/v2/user", {
        method: "GET",
        cache: "no-cache",
      });

      await sleep(500);

      if (!response.ok) {
        setError("Failed to retrieve user");
        return;
      }

      setUser(await response.json());
    }

    void retrieveUser();
  }, []);

  if (user == null && error == null) {
    return (
      <div className="flex w-full grow flex-col items-center justify-center gap-4 rounded-xl bg-yellow-500 p-8">
        <h2>Loading!</h2>
      </div>
    );
  }

  if (error != null) {
    return (
      <div className="flex w-full grow flex-col items-center gap-4 rounded-xl bg-red-500 p-8">
        <h2>Error!</h2>

        <CodeBlock title="Error" code={error} />
      </div>
    );
  }

  return (
    <div className="flex w-full grow flex-col items-center gap-4 rounded-xl bg-blue-500 p-8">
      <h2>Client Component!</h2>

      {user != null ? (
        <>
          <UserBlock user={user} />

          <CodeBlock code={JSON.stringify(user, null, 2)} />
        </>
      ) : null}
    </div>
  );
}
