import Link from "next/link";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import Featured from "@/components/featured/Featured";


export default function Home() {
  const page = 1;

  return (
    <div className={styles.container}>
      <Featured 
      title={"Hey, Daniel Mogaka here!"} 
      imageSrc={"/p1.jpeg"} 
      postTitle={"Lorem ipsum dolor sit amet alim consectetur adipisicing elit"} 
      postDesc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis."} />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu />
      </div>
    </div>
  );
}