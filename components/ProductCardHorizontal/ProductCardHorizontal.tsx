import Link from 'next/link';
import styles from './ProductCardHorizontal.module.css';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  sizes: string[];
  imageUrl: string;
}

export default function ProductCardHorizontal({ id, name, price, sizes, imageUrl }: ProductCardProps) {
  return (
    <Link href={`/catalog/${id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} loading="lazy" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.sizes}>Размеры: {sizes.join(', ')}</p>
        <span className={styles.price}>{price.toLocaleString('ru-RU')} ₸</span>
      </div>
    </Link>
  );
}
