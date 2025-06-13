// pages/home.tsx
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Button from "@/components/common/Button";
import Layout from "@/components/layouts/Layout"; // Import Layout component
import { type HomePagePost } from "@/interface"; // Corrected: Import HomePagePost from interfaces

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<HomePagePost[]>([
    {
      title: "Welcome to Home",
      content: "This is the content for the home page card.",
    },
    {
      title: "Dynamic Card Example",
      content: "You can pass different titles and content to this card.",
    },
  ]);

  const handleAddPost = (title: string, content: string) => {
    const newPost: HomePagePost = { title, content };
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <Layout title="Home Page">
      {" "}
      {/* Wrap content with Layout */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Home Page
      </h1>
      <div className="flex justify-center mb-8">
        <Button onClick={() => setIsModalOpen(true)} size="large">
          Add New Post
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPostAdd={handleAddPost}
      />
    </Layout>
  );
};

export default HomePage;
