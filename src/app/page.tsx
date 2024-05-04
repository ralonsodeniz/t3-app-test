import { mockImages } from "@/mock/images";
import { db } from "@/server/db";

const HomePage = async () => {
  const posts = await db.query.posts.findMany();

  return (
    <div className="flex flex-wrap gap-4">
      {posts.map((post) => (
        <div key={post.id} className="w-48">
          {post.name}
        </div>
      ))}
      {mockImages.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} alt="mock" />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
