import { User } from "@/lib";

export function UserBlock({ user }: { user: User }) {
  return (
    <div className="w-full rounded border border-gray-200 bg-gray-100 p-4">
      <h3 className="font-semibold text-gray-700">User</h3>
      <p>
        <b>id: </b>
        <span aria-label="id">{user.id}</span>
      </p>

      <p>
        <b>first name: </b>
        <span aria-label="first-name">{user.firstName}</span>
      </p>

      <p>
        <b>last name: </b>
        <span aria-label="last-name">{user.lastName}</span>
      </p>
    </div>
  );
}
