import styles from './AdvantagesList.module.css';

const advantages = [
  {
    id: 1,
    title: "Ортопедически правильная обувь",
    text: "Мы заботимся о здоровье стоп вашего ребенка с первых шагов.",
    imageUrl: "https://placehold.co/1200x500/ef6419/white?text=Health+Care",
  },
  {
    id: 2,
    title: "Натуральные материалы",
    text: "Используем только дышащие, гипоаллергенные материалы премиум класса.",
    imageUrl: "https://placehold.co/1200x500/ef6419/white?text=Natural+Materials",
  },
  {
    id: 3,
    title: "Широкий размерный ряд",
    text: "Обувь для малышей, дошкольников и подростков на любой сезон.",
    imageUrl: "https://placehold.co/1200x500/ef6419/white?text=All+Sizes",
  }
];

export default function AdvantagesList() {
  return (
    <section className={styles.section} id="advantages">
      <div className="container">
        <h2 className={styles.title}>Почему выбирают Cipo</h2>
        <div className={styles.carousel}>
          {advantages.map((adv) => (
            <div key={adv.id} className={styles.slide}>
              <img src={adv.imageUrl} alt={adv.title} className={styles.image} loading="lazy" />
              <div className={styles.content}>
                <h3 className={styles.slideTitle}>{adv.title}</h3>
                <p className={styles.slideText}>{adv.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
