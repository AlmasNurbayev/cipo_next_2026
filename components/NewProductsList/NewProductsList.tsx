import Link from 'next/link';
import ProductCardVertical from '../ProductCardVertical/ProductCardVertical';
import styles from './NewProductsList.module.css';

interface Product {
  id: string;
  name: string;
  price: number;
  sizes: string[];
  imageUrl: string;
}

export default async function NewProductsList() {
  const res = await fetch('http://localhost:3000/api/productsNews', { cache: 'no-store' });
  const newProducts: Product[] = await res.json();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Новинки сезона</h2>
          <Link href="/catalog" className={styles.linkAll}>
            Смотреть все →
          </Link>
        </div>
        
        <div className={styles.grid}>
          {newProducts.map((product) => (
            <ProductCardVertical
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              sizes={product.sizes}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
