import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.column}>
          <div className={styles.logo}>Cipo</div>
          <p className={styles.text}>Сеть магазинов детской обуви<br/>с заботой о здоровье ваших детей.</p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>Реквизиты</h4>
          <p className={styles.text}>ИП "Cipo Kids"</p>
          <p className={styles.text}>БИН/ИИН: 123456789012</p>
          <p className={styles.text}>Юридический адрес: г. Астана, пр. Туран, 37</p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>Документы</h4>
          <a href="/offer" className={styles.link}>Публичная оферта</a>
          <a href="/privacy" className={styles.link}>Политика конфиденциальности</a>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>Контакты</h4>
          <a href="https://wa.me/77000000000" className={styles.link} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://instagram.com" className={styles.link} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:info@cipo.kz" className={styles.link}>info@cipo.kz</a>
        </div>
      </div>
      <div className={`container ${styles.bottomBar}`}>
        © {new Date().getFullYear()} Cipo Kids. Все права защищены.
      </div>
    </footer>
  );
}
