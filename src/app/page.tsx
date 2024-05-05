import Image from "next/image";
import { getImage, getImages } from "@/server/db/queries/image";

const HomePage = async () => {
  const images = await getImages();
  const thirdImage = await getImage(3);

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
      {thirdImage && (
        <div key={thirdImage.id} className="flex flex-col">
          <div key={thirdImage.id} className="relative aspect-square w-48">
            <Image
              src={thirdImage.url}
              alt={thirdImage.name}
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
          <p>{thirdImage.name}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
