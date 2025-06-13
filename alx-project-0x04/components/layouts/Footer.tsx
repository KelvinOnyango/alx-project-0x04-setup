// components/layouts/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} My Next.js App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
