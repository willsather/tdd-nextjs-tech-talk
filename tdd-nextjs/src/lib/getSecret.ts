import { env } from "@/lib";
import { sleep } from "@/util";

export async function getSecret() {
  await sleep(5000);

  return env.API_SECRET;
}
