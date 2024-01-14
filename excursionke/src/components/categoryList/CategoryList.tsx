import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

// Define the type for each category item
interface CategoryItem {
  _id: string;
  slug: string;
  img?: string;
  title: string;
}

const CategoryList: React.FC = () => {

  const data: CategoryItem[] = [
    { _id: "1", slug: "style", img: "/style.png", title: "Style" },
    { _id: "2", slug: "fashion", img: "/fashion.png", title: "Fashion" },
    { _id: "3", slug: "food", img: "/food.png", title: "Food" },
    { _id: "4", slug: "food", img: "/travel.png", title: "Travel" },
    { _id: "5", slug: "food", img: "/culture.png", title: "Culture" },
    { _id: "6", slug: "food", img: "/coding.png", title: "Volunteer" },
    // Add more categories as needed
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
