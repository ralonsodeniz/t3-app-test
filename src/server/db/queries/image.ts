import { cache } from "react";
import { unstable_cache as nextCache } from "next/cache";

import { db } from "@/server/db";

export const getImages = cache(
  nextCache(
    () =>
      db.query.images.findMany({
        orderBy: (image, { desc }) => desc(image.id),
      }),
    ["images"],
    { tags: ["images"], revalidate: 30 },
  ),
);

export const getImage = cache((id: number) =>
  nextCache(
    () =>
      db.query.images.findFirst({
        where: (image, { eq }) => eq(image.id, id),
      }),
    ["image", `${id}`],
    { tags: ["image", `${id}`], revalidate: 30 },
  )(),
);
