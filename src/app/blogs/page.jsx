import Link from "next/link";
import React from "react";

// google font
import { Roboto ,Poppins} from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const poppins =Poppins({
  weight:'600',
  subsets:['latin'],
})

const BlogPages = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding React Basics",
      author: "John Doe",
      date: "2026-04-01",
      category: "React",
      image: "https://i.ibb.co/0y8FtyP/react-blog.jpg",
      description:
        "Learn the fundamentals of React including components, props, and state. This guide is perfect for beginners starting their React journey.",
    },
    {
      id: 2,
      title: "Getting Started with Next.js",
      author: "Sarah Smith",
      date: "2026-04-02",
      category: "Next.js",
      image: "https://i.ibb.co/3sK7Q0F/nextjs-blog.jpg",
      description:
        "Explore the basics of Next.js including routing, layouts, and server-side rendering to build fast modern web applications.",
    },
    {
      id: 3,
      title: "Tailwind CSS Tips and Tricks",
      author: "Michael Lee",
      date: "2026-04-03",
      category: "CSS",
      image: "https://i.ibb.co/ZYW3VTp/tailwind-blog.jpg",
      description:
        "Discover powerful Tailwind CSS techniques that help you design beautiful and responsive layouts quickly.",
    },
    {
      id: 4,
      title: "JavaScript ES6 Features Explained",
      author: "Emily Johnson",
      date: "2026-04-04",
      category: "JavaScript",
      image: "https://i.ibb.co/q0QK8rR/javascript-blog.jpg",
      description:
        "Understand modern JavaScript features such as arrow functions, destructuring, spread operators, and more.",
    },
    {
      id: 5,
      title: "Building Responsive Layouts",
      author: "David Brown",
      date: "2026-04-05",
      category: "Web Design",
      image: "https://i.ibb.co/5W2pF6H/responsive-blog.jpg",
      description:
        "Learn how to create responsive layouts using Flexbox and Grid to make your websites mobile-friendly.",
    },
  ];

  return (
    <div className={poppins.className}>
      <h2 className="text-4xl font-bold text-blue-500">This is Blog Page</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2 className="text-3xl font-bold text-red-500">
            Title: {blog.title}
          </h2>
          <Link href={`blogs/${blog.id}`}>See Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPages;
