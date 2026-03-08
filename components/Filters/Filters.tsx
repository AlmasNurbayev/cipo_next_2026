'use client';

import { useEffect, useState } from 'react';
import styles from './Filters.module.css';

interface FilterData {
  seasons: string[];
  sizes: string[];
  types: string[];
  priceRange: { min: number; max: number };
}

export default function Filters() {
  const [data, setData] = useState<FilterData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/productsFilter')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return (
      <aside className={styles.sidebar}>
        <div className={styles.loading}>Загрузка фильтров...</div>
      </aside>
    );
  }

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Фильтры</h2>
      
      <div className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>Тип обуви</h3>
        {data.types.map(type => (
          <label key={type} className={styles.label}>
            <input type="checkbox" className={styles.checkbox} />
            {type}
          </label>
        ))}
      </div>

      <div className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>Сезон</h3>
        {data.seasons.map(season => (
          <label key={season} className={styles.label}>
            <input type="checkbox" className={styles.checkbox} />
            {season}
          </label>
        ))}
      </div>

      <div className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>Размер</h3>
        {/* Для размеров можно сделать сетку, но для простоты здесь список */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {data.sizes.map(size => (
            <label key={size} className={styles.label} style={{ marginBottom: 0 }}>
              <input type="checkbox" className={styles.checkbox} />
              {size}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <h3 className={styles.groupTitle}>Цена (₸)</h3>
        <div className={styles.priceInputs}>
          <input type="number" placeholder="От" min={data.priceRange.min} className={styles.priceInput} />
          <span> - </span>
          <input type="number" placeholder="До" max={data.priceRange.max} className={styles.priceInput} />
        </div>
      </div>

      <button className={styles.applyButton}>Применить</button>
    </aside>
  );
}
