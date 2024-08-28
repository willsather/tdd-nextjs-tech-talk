import { type User } from "@/lib";
import { sleep } from "@/util";

const users: User[] = [
  {
    id: "will-sather",
    firstName: "Will",
    lastName: "Sather",
  },
  {
    id: "brian-watkins",
    firstName: "Brian",
    lastName: "Watkins",
  },
  {
    id: "alex-basson",
    firstName: "Alex",
    lastName: "Basson",
  },
];

export async function getUser(): Promise<User> {
  await sleep(3000);

  // get a random index for a person
  return users[Math.floor(Math.random() * users.length)];
}
