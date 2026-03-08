import Filters from '../../components/Filters/Filters';
import ProductCardVertical from '../../components/ProductCardVertical/ProductCardVertical';
import styles from './catalog.module.css';

interface Product {
  id: string;
  name: string;
  price: number;
  sizes: string[];
  imageUrl: string;
  season: string;
  type: string;
}

export default async function CatalogPage() {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
  const products: Product[] = await res.json();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Каталог обуви</h1>
      
      <div className={styles.layout}>
        <div className={styles.filtersWrapper}>
          <Filters />
        </div>
        
        <div className={styles.productsWrapper}>
          <div className={styles.header}>
            <span className={styles.resultsCount}>Найдено товаров: {products.length}</span>
            <select className={styles.sortSelect} defaultValue="popular">
              <option value="popular">Сначала популярные</option>
              <option value="price_asc">Сначала дешевле</option>
              <option value="price_desc">Сначала дороже</option>
              <option value="new">Сначала новинки</option>
            </select>
          </div>
          
          <div className={styles.grid}>
            {products.map((product) => (
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
      </div>
    </div>
  );
}
