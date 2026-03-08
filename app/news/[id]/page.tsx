import Link from 'next/link';
import styles from './news.module.css';

interface NewsDetail {
  id: string;
  title: string;
  text: string;
  date: string;
  imageUrl: string;
}

export default async function NewsPage({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3000/api/news/${params.id}`, { cache: 'no-store' });
  
  if (!res.ok) {
    return <div className={styles.container}>Новость не найдена</div>;
  }
  
  const newsItem: NewsDetail = await res.json();

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link href="/">Главная</Link> &gt; <Link href="/#news">Новости</Link> &gt; <span>{newsItem.title}</span>
      </div>

      <div className={styles.imageWrapper}>
        <img src={newsItem.imageUrl} alt={newsItem.title} />
      </div>

      <h1 className={styles.title}>{newsItem.title}</h1>
      <span className={styles.date}>
        {new Date(newsItem.date).toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </span>

      <div className={styles.content}>
        {newsItem.text}
      </div>
    </div>
  );
}
