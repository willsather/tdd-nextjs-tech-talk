export function CodeBlock({
  title = "Code",
  code,
}: {
  title?: string;
  code: string;
}) {
  return (
    <pre className="w-full rounded border border-gray-200 bg-gray-100 p-4">
      <h3 className="font-semibold text-gray-700">{title}</h3>
      <code className="font-mono text-sm text-gray-800">{code}</code>
    </pre>
  );
}
