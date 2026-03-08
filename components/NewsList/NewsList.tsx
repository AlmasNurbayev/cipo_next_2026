import NewsCardHorizontal from '../NewsCardHorizontal/NewsCardHorizontal';
import styles from './NewsList.module.css';

interface NewsItem {
  id: string;
  title: string;
  text: string;
  date: string;
  imageUrl: string;
}

export default async function NewsList() {
  const res = await fetch('http://localhost:3000/api/news', { cache: 'no-store' });
  const newsList: NewsItem[] = await res.json();

  return (
    <section className={styles.section} id="news">
      <div className="container">
        <h2 className={styles.title}>Новости и блог</h2>
        
        <div className={styles.grid}>
          {newsList.map((news) => (
            <NewsCardHorizontal
              key={news.id}
              id={news.id}
              title={news.title}
              text={news.text}
              imageUrl={news.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
