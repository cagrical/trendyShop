
import '../css/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Şirket Adı. Tüm hakları saklıdır.</p>
                <ul className="footer-links">
                    <li><a href="/">Ana Sayfa</a></li>
                    <li><a href="#about">Hakkımızda</a></li>
                    <li><a href="#contact">İletişim</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;