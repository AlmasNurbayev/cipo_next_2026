import Link from 'next/link';
import styles from './NewsCardHorizontal.module.css';

interface NewsCardProps {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
}

export default function NewsCardHorizontal({ id, title, text, imageUrl }: NewsCardProps) {
  return (
    <Link href={`/news/${id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} loading="lazy" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <span className={styles.readMore}>Читать далее →</span>
      </div>
    </Link>
  );
}
