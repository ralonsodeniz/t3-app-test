import { unstable_cache as nextCache } from "next/cache";
import { db } from "@/server/db";

export const getImages = nextCache(
  async () =>
    db.query.images.findMany({
      orderBy: (image, { desc }) => desc(image.id),
    }),
  ["images"],
  { tags: ["images"], revalidate: 30 },
);
