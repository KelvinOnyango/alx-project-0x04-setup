// pages/index.tsx
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layouts/Layout"; // Consider using Layout if it's the main entry
import { PageRouteProps }
const RootPage: React.FC = () => {
  const router = useRouter();

  // Redirect to home page automatically
  useEffect(() => {
    router.push("/home");
  }, [router]);

  return (
    // You can choose to wrap this with Layout as well, or keep it simple for a redirect
    <Layout title="Redirecting...">
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Redirecting...
        </h1>
        <p className="text-lg text-gray-600">
          You will be redirected to the Home page shortly.
        </p>
      </div>
    </Layout>
  );
};

export default RootPage;
