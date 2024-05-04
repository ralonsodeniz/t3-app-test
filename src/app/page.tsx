import { mockImages } from "@/mock/images";
import { getPosts } from "@/server/db/queries/posts";

const HomePage = async () => {
  const posts = await getPosts();

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
