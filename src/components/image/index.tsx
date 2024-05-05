import NextImage from "next/image";

type Props = {
  image: {
    id: number;
    name: string;
    url: string;
    createdAt: Date;
    updatedAt: Date | null;
  };
};

const Index = ({ image }: Props) => (
  <div className="flex flex-col">
    <div className="relative aspect-square w-48">
      <NextImage
        src={image.url}
        alt={image.name}
        fill
        className="object-cover"
        sizes="192px"
      />
    </div>
    <p>{image.name}</p>
  </div>
);

export default Index;
