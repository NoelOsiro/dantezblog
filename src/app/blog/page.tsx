import { useRouter } from 'next/router';
import { FC } from 'react';
import CardList from '@/components/cardList/CardList';
import styles from './blogpage.module.css';
import Menu from '@/components/Menu/Menu';

interface BlogPageProps {
  searchParams: {
    page: string;
    cat: string;
  };
}

const BlogPage: FC<BlogPageProps> = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
