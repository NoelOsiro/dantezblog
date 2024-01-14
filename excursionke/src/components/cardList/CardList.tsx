'use client'
import React, { useEffect, useState } from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

// Define type for a single post
type Post = {
  _id: string;
  img: string;
  createdAt: string;
  catSlug: string;
  slug: string;
  title: string;
  desc: string;
};

// Sample data for blog posts
const samplePosts: Post[] = [
  {
    _id: "1",
    img: "/post1.jpg",
    createdAt: "2024-01-14T12:34:56Z",
    catSlug: "technology",
    slug: "post-1",
    title: "Introduction to Next.js",
    desc: "<p>This is a sample description for the first post.</p>",
  },
  {
    _id: "2",
    img: "/post2.jpg",
    createdAt: "2024-01-13T09:45:23Z",
    catSlug: "programming",
    slug: "post-2",
    title: "React State Management",
    desc: "<p>This is a sample description for the second post.</p>",
  },
  // Add more sample posts as needed
];

// Function to fetch data (simulating asynchronous data fetching)
const getData = async (page: number, cat?: string) => {
  // Simulated fetch with samplePosts
  return { posts: samplePosts, count: samplePosts.length } as const;
};

// CardList component
const CardList: React.FC<{ page: number }> = ({ page }) => {
  const [data, setData] = useState<{ posts: Post[]; count: number } | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(page);
      setData(result);
    };

    fetchData();
  }, [page]);

  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext =
    POST_PER_PAGE * (page - 1) + POST_PER_PAGE < (data?.count || 0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data?.posts.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
