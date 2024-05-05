import { getImage, getImages } from "@/server/db/queries/image";
import Image from "@/components/image";

const HomePage = async () => {
  const images = await getImages();
  const thirdImage = await getImage(3);

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <Image image={image} key={image.id} />
      ))}
      {thirdImage && <Image image={thirdImage} />}
    </div>
  );
};

export default HomePage;
