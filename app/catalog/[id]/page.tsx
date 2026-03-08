import Link from 'next/link';
import styles from './product.module.css';

interface ProductDetail {
  id: string;
  name: string;
  price: number;
  article: string;
  upperMaterial: string;
  innerMaterial: string;
  soleMaterial: string;
  sizes: string[];
  images: string[];
  description: string;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`, { cache: 'no-store' });
  
  if (!res.ok) {
    return <div className={styles.container}>Товар не найден</div>;
  }
  
  const product: ProductDetail = await res.json();

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link href="/">Главная</Link> &gt; <Link href="/catalog">Каталог</Link> &gt; <span>{product.name}</span>
      </div>

      <div className={styles.layout}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <img src={product.images[0]} alt={product.name} />
          </div>
          {product.images.length > 1 && (
            <div className={styles.thumbnails}>
              {product.images.map((img, i) => (
                <div key={i} className={`${styles.thumbnail} ${i === 0 ? styles.active : ''}`}>
                  <img src={img} alt={`${product.name} - ${i + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{product.name}</h1>
          <div className={styles.price}>{product.price.toLocaleString('ru-RU')} ₸</div>

          <div className={styles.detailsList}>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Артикул:</span>
              <span className={styles.detailValue}>{product.article}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Материал верха:</span>
              <span className={styles.detailValue}>{product.upperMaterial}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Материал внутри:</span>
              <span className={styles.detailValue}>{product.innerMaterial}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Материал подошвы:</span>
              <span className={styles.detailValue}>{product.soleMaterial}</span>
            </div>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Доступные размеры:</h3>
            <div className={styles.sizesGrid}>
              {product.sizes.map(size => (
                <div key={size} className={styles.sizeBox}>{size}</div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Описание:</h3>
            <p className={styles.description}>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
