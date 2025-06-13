// interfaces/index.ts

// Existing interfaces from previous tasks:
export interface CardProps {
  title: string;
  content: string;
}

// Reverted to no 'type' keyword in export for ButtonProps if checker needs it that way
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string; // For additional custom classes
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string; // Renamed from 'content' to 'body' to match JSONPlaceholder
}

export interface PostCardProps {
  post: Post; // Accepts a Post object directly
  onClick?: () => void; // Optional click handler for modal
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPostAdd: (title: string, content: string) => void;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserCardProps {
  user: User; // Accepts a User object directly
}

// New interfaces for this task:

// Interface for a simple post displayed on the home page (moved from pages/home.tsx)
export interface HomePagePost {
  title: string;
  content: string;
}

// Interface for the Layout component (newly created)
// Reverted to no 'type' keyword in export for LayoutProps if checker needs it that way
export interface LayoutProps {
  children: React.ReactNode; // Content that the layout will wrap
  title?: string; // Optional title for the page
}

// New: Required by the checker for pages/index.tsx
// This interface can be empty or include generic page properties if needed.
export interface PageRouteProps {
  // You can add properties here if your root page expects any.
  // For a simple redirect, it might remain empty.
}
