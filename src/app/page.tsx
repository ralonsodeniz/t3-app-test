import Image from "next/image";
import { getImages } from "@/server/db/queries/image";

const HomePage = async () => {
  const images = await getImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col">
          <div key={image.id} className="relative aspect-square w-48">
            <Image
              src={image.url}
              alt={image.name}
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
