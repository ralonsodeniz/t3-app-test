import { mockImages } from "@/mock/images";

const HomePage = () => (
  <div className="flex flex-wrap gap-4">
    {mockImages.map((image) => (
      <div key={image.id} className="w-48">
        <img src={image.url} alt="mock" />
      </div>
    ))}
  </div>
);

export default HomePage;
