import styles from './ShopList.module.css';

interface Shop {
  id: string;
  name: string;
  address: string;
  workHours: string;
  imageUrl: string;
  twoGisLink: string;
}

export default async function ShopList() {
  const res = await fetch('http://localhost:3000/api/stores', { cache: 'no-store' });
  const shops: Shop[] = await res.json();

  return (
    <section className={styles.section} id="shops">
      <div className="container">
        <h2 className={styles.title}>Наши магазины</h2>
        
        <div className={styles.grid}>
          {shops.map((shop) => (
            <div key={shop.id} className={styles.shopCard}>
              <div className={styles.imageWrapper}>
                <img src={shop.imageUrl} alt={shop.name} loading="lazy" />
              </div>
              <div className={styles.content}>
                <h3 className={styles.name}>{shop.name}</h3>
                
                <p className={styles.info}>
                  <span className={styles.label}>Адрес:</span> {shop.address}
                </p>
                <p className={styles.info}>
                  <span className={styles.label}>Режим работы:</span> {shop.workHours}
                </p>
                
                <a 
                  href={shop.twoGisLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.linkButton}
                >
                  Открыть в 2GIS
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
