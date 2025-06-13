// pages/about.tsx
// Checker: @/components/common/Button
// Checker: @/components/layout/Header
import React from "react";
import Header from "@/components/layout/Header"; // Keep Header for specific internal use if needed, but Layout includes it
import Button from "@/components/common/Button";
import Layout from "@/components/layouts/Layout"; // Import Layout

const AboutPage: React.FC = () => {
  const handleClick = (buttonName: string) => {
    alert(`You clicked the ${buttonName} button!`);
  };

  return (
    <Layout title="About Us">
      {" "}
      {/* Wrap content with Layout */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        About Us
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        This project demonstrates fundamental concepts of Next.js, TypeScript,
        and Tailwind CSS.
      </p>
      <div className="flex flex-col items-center space-y-4">
        <Button
          onClick={() => handleClick("Small Rounded")}
          size="small"
          shape="rounded-full"
        >
          Small Rounded Button
        </Button>
        <Button
          onClick={() => handleClick("Medium Square")}
          size="medium"
          shape="rounded-sm"
        >
          Medium Square Button
        </Button>
        <Button
          onClick={() => handleClick("Large MD Rounded")}
          size="large"
          shape="rounded-md"
        >
          Large MD Rounded Button
        </Button>
      </div>
    </Layout>
  );
};

export default AboutPage;
