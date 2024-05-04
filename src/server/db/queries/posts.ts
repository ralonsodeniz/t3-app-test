import { unstable_cache as nextCache } from "next/cache";
import { db } from "@/server/db";

export const getPosts = nextCache(
  async () => db.query.posts.findMany(),
  ["posts"],
  { tags: ["posts"], revalidate: 60 },
);
