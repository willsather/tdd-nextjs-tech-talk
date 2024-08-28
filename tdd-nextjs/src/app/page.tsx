export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-24">
      <div className="my-8 flex justify-center">
        <h1>TDD and Next.js</h1>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <a
          href="/app"
          className="flex w-full flex-col items-center gap-4 rounded-xl bg-green-400 p-8"
        >
          <h2>App Router</h2>
        </a>

        <a
          href="/pages"
          className="flex w-full flex-col items-center gap-4 rounded-xl bg-blue-400 p-8"
        >
          <h2>Pages Router</h2>
        </a>
      </div>
    </main>
  );
}
