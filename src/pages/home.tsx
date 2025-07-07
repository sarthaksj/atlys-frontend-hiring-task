import { useState } from "react";
import Post from "../components/post";
import PostComposer from "../components/postcomposer";
import type { PostData } from "../types/post";

const INITIAL_STATE: PostData[] = [
  {
    id: 1,
    user: "Theresa Webb",
    avatar: "https://mighty.tools/mockmind-api/content/human/125.jpg",
    timestamp: Date.now() - 5 * 60 * 1000,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    emoji: "😊",
  },
  {
    id: 2,
    user: "John Doe",
    avatar: "https://mighty.tools/mockmind-api/content/human/80.jpg",
    timestamp: Date.now() - 10 * 60 * 1000,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    emoji: "👍",
  },
  {
    id: 3,
    user: "Jane Doe",
    avatar: "https://mighty.tools/mockmind-api/content/human/104.jpg",
    timestamp: Date.now() - 15 * 60 * 1000,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    emoji: "💀",
  },
];

export default function Home() {
  const [posts, setPosts] = useState<PostData[]>(INITIAL_STATE);

  return (
    <>
      <div className="h-full">
        <main className="w-full max-w-[568px] mx-auto space-y-6">
          <PostComposer setPosts={setPosts} posts={posts} />
          {posts.map((post) => (
            <Post
              avatar={post.avatar}
              content={post.content}
              emoji={post.emoji}
              id={post.id}
              key={post.id}
              timestamp={post.timestamp}
              user={post.user}
            />
          ))}
        </main>
      </div>
    </>
  );
}
