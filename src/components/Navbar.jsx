import { MdFavoriteBorder } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";
import { MdSearch } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";
import Badge from '@mui/material/Badge';
import logo from "../images/logo.jfif"
import '../css/navbar.css';
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";


function Navbar({ handleCartOpen }) {

    //const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const { isAuthenticated, logout } = useAuth();

    const navigator = useNavigate();

    const handleMouseEnter = (menu) => {
        setOpenMenu(menu);
    };

    const handleMouseLeave = () => {
        setOpenMenu(null);
    };

    useEffect(() => {
        if (openMenu !== null) {
            document.body.style.backgroundColor = '#ccc'; // Arka plan rengini gri yap
        } else {
            document.body.style.backgroundColor = ''; // Varsayılan arka plan rengine döndür
        }

        // Cleanup: bileşen unmount olduğunda veya `isOpen` değiştiğinde eski rengi geri yükle
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [openMenu]);


    return (
        <div>
            <div className="navbar">
                <div className="navbar-info">
                    <div onClick={() => navigator("/")} style={{ cursor: "pointer" }} className="logo"><img src={logo} alt="" /></div>
                    <div className="search-bar">
                        <input type="text" name="search" id="search" placeholder="Aradığınız Ürünü Yazınız" />
                        <MdSearch className="search-icon" />
                    </div>
                    <div className="info">
                        {isAuthenticated ? (
                            <>
                                <div className="sub-info"><IoPersonOutline className="icons" /> Hesabım</div>
                                <div className="sub-info"><MdFavoriteBorder className="icons" /> Favorilerim</div>
                                <div className="sub-info" onClick={handleCartOpen} > <Badge badgeContent={4} color="error" style={{ padding: "5px" }}><CgShoppingCart className="icons" /></Badge>Sepetim</div>
                                <div onClick={logout} className="sub-info"><IoExitOutline className="icons" /> Çıkış Yap</div>
                            </>
                        ) : (
                            <div>
                                <div onClick={() => navigator("/login")} className="sub-info"><CiLogin className="icons" /> Giriş Yap</div>
                                <div className="sub-info" onClick={handleCartOpen} > <Badge badgeContent={4} color="error" style={{ padding: "5px" }}><CgShoppingCart className="icons" /></Badge>Sepetim</div>
                            </div>

                        )}


                    </div>
                </div>
                <div className="navbar-bottom">
                    <nav>
                        <ul className="main-nav">
                            <li className="tab-link">
                                <a
                                    className="category-header"
                                    href=""
                                    onMouseEnter={() => handleMouseEnter('women')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Kadın
                                </a>
                                <div
                                    className={`sub-menu-1 ${openMenu === 'women' ? 'open' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('women')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <ul>
                                                <li><b>Giyim</b></li>
                                                <li>Elbise</li>
                                                <li>Tişört</li>
                                                <li>Gömlek</li>
                                                <li>Kot Pantolon</li>
                                                <li>Kot Ceket</li>
                                                <li>Pantolon</li>
                                                <li>Mont</li>
                                                <li>Bluz</li>
                                                <li>Ceket</li>
                                                <li>Etek</li>
                                                <li>Kazak</li>
                                                <li>Tesettür</li>
                                                <li>Büyük Beden</li>
                                                <li>Trençkot</li>
                                                <li>Yağmurluk & Rüzgarlık</li>
                                                <li>Sweatshirt</li>
                                                <li>Kaban</li>
                                                <li>Hırka</li>
                                                <li>Palto</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Ayakkabı</b></li>
                                                <li>Topulklu Ayakkabı</li>
                                                <li>Sneaker</li>
                                                <li>Günlük Ayakkabı</li>
                                                <li>Babet</li>
                                                <li>Sandelet</li>
                                                <li>Pantolon</li>
                                                <li>Bot</li>
                                                <li>Çizme</li>
                                            </ul>
                                            <ul>
                                                <li><b>Aksesuar & Çanta</b></li>
                                                <li>Çanta</li>
                                                <li>Saat</li>
                                                <li>Takı</li>
                                                <li>Cüzdan</li>
                                                <li>Atkı</li>
                                                <li>Bere</li>
                                                <li>Eldiven</li>
                                                <li>Kemer</li>
                                                <li>Şal</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Çanta</b></li>
                                                <li>Omuz Çantası</li>
                                                <li>Sırt Çantası</li>
                                                <li>Bel Çantası</li>
                                                <li>Okul Çantası</li>
                                                <li>Laptop Çantası</li>
                                                <li>Portföy</li>
                                                <li>Postacı Çantası</li>
                                                <li>El Çantası</li>
                                                <li>Kanvas Çanta</li>
                                                <li>Makyaj Çantası</li>
                                                <li>Abiye Çanta</li>
                                                <li>Çapraz Çanta</li>
                                                <li>Bez Çanta</li>
                                                <li>Anne Bebek Çantası</li>
                                                <li>Evrak Çantası</li>
                                                <li>Tote Çanta</li>
                                                <li>Beslenme Çantası</li>
                                                <li>Kartlık</li>
                                                <li>Cüzdan</li>
                                                <li>Kadın Spor Çantası</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>İç Giyim</b></li>
                                                <li>Pijama Takımı</li>
                                                <li>Gecelik</li>
                                                <li>Sütyen</li>
                                                <li>İç Çamaşırı Takımları</li>
                                                <li>Fantezi Giyim</li>
                                                <li>Çorap</li>
                                                <li>Korse</li>
                                                <li>Külot</li>
                                                <li>Büstiyer</li>
                                                <li>Bralet</li>
                                                <li>Atlet & Body</li>
                                                <li>Kombinezon</li>
                                                <li>Jartiyer</li>
                                            </ul>
                                            <ul>
                                                <li><b>Lüks</b></li>
                                                <li>Lüks Çanta</li>
                                                <li>Lüks Giyim</li>
                                                <li>Lüks Ayakkabı</li>
                                            </ul>

                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Kozmetik</b></li>
                                                <li>Parfüm</li>
                                                <li>Göz Makyajı</li>
                                                <li>Cilt Bakım</li>
                                                <li>Saç Bakımı</li>
                                                <li>Makyaj</li>
                                                <li>Ağız Bakım</li>
                                                <li>Cinsel Sağlık</li>
                                                <li>Vücut Bakım</li>
                                                <li>Hijyenik Ped</li>
                                                <li>Duş Jeli & Kremleri</li>
                                                <li>Epilasyon Ürünleri</li>
                                                <li>Ruj</li>
                                                <li>Dudak Nemlendirici</li>
                                                <li>Aydınlatıcı & Highlighter</li>
                                                <li>Eyeliner</li>
                                                <li>Ten Makyajı</li>
                                                <li>Manikür & Pedikür</li>
                                                <li>BB & CC Krem</li>
                                                <li>El Kremi</li>
                                                <li>Yüz Nemlendirici</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Spor & Outdoor</b></li>
                                                <li>Sweatshirt</li>
                                                <li>Tişört</li>
                                                <li>Spor Sütyeni</li>
                                                <li>Tayt</li>
                                                <li>Eşofman</li>
                                                <li>Koşu Ayakkabısı</li>
                                                <li>Spor Çantası</li>
                                                <li>Spor Ekipmanları</li>
                                                <li>Outdoor Ayakkabı</li>
                                                <li>Kar Botu</li>
                                                <li>Outdoor Ekipmanları</li>
                                                <li>Sporcu Besinleri</li>
                                                <li>Sporcu Aksesuarları</li>
                                                <li>Outdoor Çanta</li>
                                                <li>Kayak Malzemeleri</li>
                                                <li>Uyku Tulumu</li>
                                                <li>Mat</li>
                                                <li>Dağcılık</li>
                                                <li>Kadın Spor Ceket</li>
                                                <li>Spor Ayakkabı</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="tab-link">
                                <a className="category-header" href=""
                                    onMouseEnter={() => handleMouseEnter('men')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Erkek
                                </a>
                                <div
                                    className={`sub-menu-1 ${openMenu === 'men' ? 'open' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('men')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <ul>
                                                <li><b>Giyim</b></li>
                                                <li>Tişört</li>
                                                <li>Şort</li>
                                                <li>Gömlek</li>
                                                <li>Eşofman</li>
                                                <li>Pantolon</li>
                                                <li>Ceket</li>
                                                <li>Kot Pantolon</li>
                                                <li>Yelek</li>
                                                <li>Kazak</li>
                                                <li>Mont</li>
                                                <li>Takım Elbise</li>
                                                <li>Sweatshirt</li>
                                                <li>Deri Mont</li>
                                                <li>Kaban</li>
                                                <li>Hırka</li>
                                                <li>Trençkot</li>
                                                <li>Palto</li>
                                                <li>Yağmurluk</li>
                                                <li>Blazer</li>
                                                <li>Polar</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Ayakkabı</b></li>
                                                <li>Spor Ayakkabı</li>
                                                <li>Günlük Ayakkabı</li>
                                                <li>Yürüyüş Ayakkabısı</li>
                                                <li>Krampon</li>
                                                <li>Sneaker</li>
                                                <li>Klasik</li>
                                                <li>Bot</li>
                                                <li>Kar Botu</li>
                                                <li>Deri Ayakkabı</li>
                                                <li>Loafer</li>
                                                <li>Ev Terliği</li>
                                                <li>Koşu Ayakkabısı</li>
                                                <li>Çizme</li>
                                            </ul>

                                            <ul>
                                                <li><b>Kişisel Bakım</b></li>
                                                <li>Parfüm</li>
                                                <li>Cinsel Sağlık</li>
                                                <li>Tıraş Sonrası Ürünler</li>
                                                <li>Tıraş Bıçağı</li>
                                                <li>Deodorant</li>
                                            </ul>

                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Çanta</b></li>
                                                <li>Sırt Çantası</li>
                                                <li>Spor Çanta</li>
                                                <li>Laptop Çantası</li>
                                                <li>Valiz & Bavul</li>
                                                <li>Postacı Çantası</li>
                                                <li>Bel Çantası</li>
                                                <li>Bez Çanta</li>
                                                <li>Evrak Çantası</li>
                                                <li>Cüzdan</li>

                                                <li><b>Büyük Beden</b></li>
                                                <li>Büyük Beden Sweatshirt</li>
                                                <li>Büyük Beden T-shirt</li>
                                                <li>Büyük Beden Gömlek</li>
                                                <li>Büyük Beden Pantolon</li>
                                                <li>Büyük Beden Mont</li>
                                                <li>Büyük Beden Kazak</li>
                                                <li>Büyük Beden Hırka</li>
                                                <li>Büyük Beden Kaban</li>
                                                <li>Büyük Beden Eşofman Altı</li>
                                            </ul>

                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Saat & Aksesuar</b></li>
                                                <li>Saat</li>
                                                <li>Güneş Gözlüğü</li>
                                                <li>Cüzdan</li>
                                                <li>Kemer</li>
                                                <li>Çanta</li>
                                                <li>Şapka</li>
                                                <li>Kartlık</li>
                                                <li>Valiz</li>
                                                <li>Kravat</li>
                                                <li>Boyunluk</li>
                                                <li>Atkı</li>
                                                <li>Bere</li>
                                                <li>Eldiven</li>

                                                <li><b>İç Giyim</b></li>
                                                <li>Boxer</li>
                                                <li>Çorap</li>
                                                <li>Pijama</li>
                                                <li>Atlet</li>
                                                <li>İçlik</li>
                                            </ul>

                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Spor & Outdoor</b></li>
                                                <li>Eşofman</li>
                                                <li>Spor Ayakkabı</li>
                                                <li>T-shirt</li>
                                                <li>Sweatshirt</li>
                                                <li>Forma</li>
                                                <li>Spor Çorap</li>
                                                <li>Spor Giyim</li>
                                                <li>Outdoor Ayakkabı</li>
                                                <li>Outdoor Bot</li>
                                                <li>Spor Ekipmanları</li>
                                                <li>Outdoor Ekipmanları</li>
                                                <li>Sporcu Besinleri</li>
                                                <li>Sporcu Aksesuarları</li>
                                                <li>Sneaker</li>
                                                <li>Scooter</li>
                                                <li>Bisiklet</li>
                                                <li>Dalış Malzemeleri</li>
                                                <li>Rüzgarlık</li>
                                                <li>Aksiyon Kamerası</li>
                                                <li>Kamp Malzemeleri</li>
                                            </ul>

                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Elektronik</b></li>
                                                <li>Tıraş Makinesi</li>
                                                <li>Cep Telefonu</li>
                                                <li>Akıllı Saat</li>
                                                <li>Akıllı Bileklik</li>
                                                <li>Laptop</li>
                                                <li>Oyun & Konsollar</li>
                                                <li>Elektrikli Bisiklet</li>
                                                <li>E-pin ve Cüzdan Kodu</li>
                                                <li>Playstation 5</li>
                                                <li>Hediye Kartları</li>
                                                <li>Bluetooth Kulaklık</li>
                                                <li>Gaming PC</li>
                                                <li>Oyuncu Koltuğu</li>
                                                <li>Xbox Series X</li>
                                                <li>Drone</li>
                                                <li><b>Lüks & Designer</b></li>
                                                <li>Lüks Giyim</li>
                                                <li>Lüks Ayakkabı</li>
                                                <li>Lüks Çanta</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="tab-link">
                                <a className="category-header" href=""
                                    onMouseEnter={() => handleMouseEnter('Anne&Çocuk')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Anne&Çocuk
                                </a>
                                <div
                                    className={`sub-menu-1 ${openMenu === 'Anne&Çocuk' ? 'open' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('Anne&Çocuk')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <ul>
                                                <li><b>Bebek</b></li>
                                                <li>Bebek Takımları</li>
                                                <li>Ayakkabı</li>
                                                <li>Hastane Çıkışı</li>
                                                <li>Yenidoğan Kıyafetleri</li>
                                                <li>Tulum</li>
                                                <li>Body & Zıbın</li>
                                                <li>Tişört & Atlet</li>
                                                <li>Elbise</li>
                                                <li>Şort</li>
                                                <li>Bebek Patiği</li>
                                                <li>Hırka</li>
                                                <li>Battaniye</li>
                                                <li>Alt Üst Takım</li>
                                                <li>Tişört</li>
                                                <li>Etek</li>
                                                <li>Çorap</li>
                                                <li>Şapka</li>
                                                <li>Eldiven</li>
                                                <li>Eşofman</li>
                                                <li>Bere</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Kız Çocuk</b></li>
                                                <li>Elbise</li>
                                                <li>Sweatshirt</li>
                                                <li>Spor Ayakkabı</li>
                                                <li>Eşofman</li>
                                                <li>İç Giyim & Pijama</li>
                                                <li>Tişört & Atlet</li>
                                                <li>Tayt</li>
                                                <li>Günlük Ayakkabı</li>
                                                <li>Şort</li>
                                                <li>Mont</li>
                                                <li>Çocuk Oyun Evi</li>
                                                <li>Oyuncak Bebek</li>
                                                <li>Oyuncak Mutfak</li>
                                                <li>Kaban</li>
                                                <li>Abiye & Elbise</li>
                                                <li>Ceket</li>
                                                <li>Pantolon</li>
                                                <li>Kazak</li>
                                                <li>Bot</li>
                                                <li>Şapka & Bere & Eldiven</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Erkek Çocuk</b></li>
                                                <li>Sweatshirt</li>
                                                <li>Spor Ayakkabı</li>
                                                <li>Eşofman</li>
                                                <li>İç Giyim & Pijama</li>
                                                <li>Tişört & Atlet</li>
                                                <li>Günlük Ayakkabı</li>
                                                <li>Okul Çantası</li>
                                                <li>Şort</li>
                                                <li>Gömlek</li>
                                                <li>Mont</li>
                                                <li>Oyuncak Traktör</li>
                                                <li>Akülü Araba</li>
                                                <li>Kumandalı Araba</li>
                                                <li>Bisiklet</li>
                                                <li>Boxer</li>
                                                <li>İçlik</li>
                                                <li>Bot</li>
                                                <li>Krampon</li>
                                                <li>Şapka & Bere & Eldiven</li>
                                                <li>Takım Elbise</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Bebek Bakım</b></li>
                                                <li>Bebek Bezi</li>
                                                <li>Bebek Şampuanı</li>
                                                <li>Krem & Yağlar</li>
                                                <li>Bebek Çantası</li>
                                                <li>Bebek Sabunları</li>
                                                <li>Bebek Deterjanları</li>
                                                <li>Bebek Vücut Kremi</li>
                                                <li>Islak Mendil</li>
                                                <li>Bebek Tarağı</li>
                                                <li>Bebek Yağı</li>
                                                <li>Bebek Buhar Makinesi</li>
                                                <li>Bebek Ateş Ölçer</li>
                                            </ul>
                                            <ul>
                                                <li><b>Oyuncak</b></li>
                                                <li>Eğitici Oyuncaklar</li>
                                                <li>Oyuncak Araba</li>
                                                <li>Oyuncak Bebek</li>
                                                <li>Bebek & Okul Öncesi</li>
                                                <li>Kumandalı Oyuncak</li>
                                                <li>Robot Oyuncak</li>
                                            </ul>

                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Beslenme Emzirme</b></li>
                                                <li>Biberon & Emzik</li>
                                                <li>Göğüs Pompası</li>
                                                <li>Mama Sandalyesi</li>
                                                <li> Mama Önlüğü</li>
                                                <li>Alıştırma Bardağı</li>
                                                <li>Biberon Temizleyici</li>
                                                <li>Biberon Seti</li>
                                                <li>Bebek Maması</li>
                                                <li>Kavanoz Mama</li>
                                                <li>Sterilizatör</li>
                                                <li>Bebek Bakım Çantası</li>
                                                <li>Yemek Setleri</li>
                                                <li>Kaşık Maması</li>
                                                <li>Buharlı Pişirici</li>
                                                <li>Termal Çanta</li>
                                                <li>Süt Pompası</li>
                                                <li>Emzirme Önlüğü</li>
                                                <li>Emzirme Minderi</li>
                                                <li>Göğüs Pedi</li>
                                                <li>Göğüs Kremi</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Taşıma Güvenlik</b></li>
                                                <li>Bebek Arabası & Puset</li>
                                                <li>Park Yatak</li>
                                                <li>Ana Kucağı</li>
                                                <li>Portbebe & Kanguru</li>
                                                <li>Yürüteç</li>
                                                <li>Oto Koltuğu</li>
                                                <li>Baston Puset</li>
                                                <li>Kanguru</li>
                                                <li>Bebek Salıncakları</li>
                                            </ul>
                                            <ul>
                                                <li><b>Bebek Odası</b></li>
                                                <li>Bebek Beşiği</li>
                                                <li>Bebek Yatağı</li>
                                                <li>Bebek Nevresimleri</li>
                                                <li>Oyuncak Sepetleri</li>
                                                <li>Bebek Cibinlik</li>
                                                <li>Oyuncak Dolabı</li>
                                                <li>Bebek Odası Mobilyaları</li>
                                                <li>Bebek Oyun Matları</li>
                                                <li>Bebek Oyun Parkı</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="tab-link">
                                <a className="category-header" href=""
                                    onMouseEnter={() => handleMouseEnter('Ev&Yaşam')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Ev&Yaşam
                                </a>
                                <div
                                    className={`sub-menu-1 ${openMenu === 'Ev&Yaşam' ? 'open' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('Ev&Yaşam')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <ul>
                                                <li><b>Sofra & Mutfak</b></li>
                                                <li>Tencere & Tencere Seti</li>
                                                <li>Tava</li>
                                                <li>Düdüklü Tencere</li>
                                                <li>Yemek Takımı</li>
                                                <li>Kahvaltı Takımı</li>
                                                <li>Tabak</li>
                                                <li>Çatal Kaşık Bıçak Seti</li>
                                                <li>Saklama Kabı</li>
                                                <li>Bardak</li>
                                                <li>Kahve Fincanı</li>
                                            </ul>
                                            <ul>
                                                <li><b>Ev Gereçleri</b></li>
                                                <li>Hurç</li>
                                                <li>Düzenleyiciler</li>
                                                <li>Askı</li>
                                                <li>Çamaşır Sepeti</li>
                                                <li>Banyo Düzenleyici</li>
                                                <li>Banyo Setleri</li>
                                                <li>Ütü Masası ve Aksesuarları</li>
                                                <li>Makyaj & Takı Organizeri</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Ev Tekstili</b></li>
                                                <li>Nevresim & Pike Takımı</li>
                                                <li>Yastık & Yorgan</li>
                                                <li>Çarşaf & Alez</li>
                                                <li>Yatak Örtüsü & Battaniye</li>
                                                <li>Uyku Seti</li>
                                                <li>Koltuk Örtüsü</li>
                                                <li>Havlu & Bornoz</li>
                                                <li>Banyo Paspası</li>
                                                <li>Halı & Kilim</li>
                                                <li>Perde</li>
                                                <li>Seccade</li>
                                            </ul>
                                            <ul>
                                                <li><b>Ev Dekorasyon</b></li>
                                                <li>Ayna</li>
                                                <li>Tablo</li>
                                                <li>Dekoratif Çiçek & Vazo</li>
                                                <li>Kırlent & Kırlent Kılıfı</li>
                                                <li>Duvar Saati</li>
                                                <li>Oda Kokusu & Mum</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Aydınlatma</b></li>
                                                <li>Avize</li>
                                                <li>Lambader</li>
                                                <li>Masa ve Gece Lambası</li>
                                            </ul>
                                            <ul>
                                                <li><b>Mobilya</b></li>
                                                <li>Salon & Oturma Odası</li>
                                                <li>Yatak Odası</li>
                                                <li>Bahçe Mobilyası</li>
                                                <li>Çalışma Odası</li>
                                                <li>Yemek Odası</li>
                                                <li>Oturma Grupları</li>
                                                <li>Genç Odası</li>
                                                <li>Koltuk Takımı</li>
                                                <li>Mutfak Dolabı</li>
                                                <li>Şifonyer</li>
                                                <li>Mutfak Tezgahı</li>
                                                <li>Dolap</li>
                                                <li>Gardırop</li>
                                                <li>Sandalye</li>
                                                <li>Zigon</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Hobi</b></li>
                                                <li>Parti Malzemeleri</li>
                                                <li>Müzik Alet ve Ekipmanları</li>
                                                <li>Hediyelik Ürünler</li>
                                                <li>Hobi Malzemeleri</li>
                                                <li>Uzaktan Kumandalı Araçlar</li>
                                                <li>Drone</li>
                                                <li>Oyun Grupları</li>
                                                <li>Hediye Sepeti</li>
                                                <li>Led Işık</li>
                                            </ul>

                                            <ul>
                                                <li><b>Spor & Outdoor</b></li>
                                                <li>Koşu Bandı</li>
                                                <li>Dumbell & Ağırlık</li>
                                                <li>Pilates & Yoga</li>
                                                <li>Eliptik Bisiklet</li>
                                                <li>Yoga Matı</li>
                                                <li>Sporcu Eldiveni</li>
                                                <li>Pilates Topu</li>
                                                <li>Sporcu Sulukları</li>
                                                <li>Termoslar</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Kitap</b></li>
                                                <li>Sınav Hazırlık Kitapları</li>
                                                <li>Ders ve Yardımcı Kitaplar</li>
                                                <li>Roman & Edebiyat Kitapları</li>
                                                <li>Kişisel Gelişim & Psikoloji Kitapları</li>
                                                <li>Çocuk Bakım Kitapları</li>
                                                <li>Yabancı Dil Eğitim Kitapları</li>
                                                <li>E-Kitaplar</li>
                                                <li>Din Kitapları</li>
                                                <li>Çizgi Roman ve Manga</li>
                                                <li>Yabancı Dil Çocuk Kitapları</li>
                                            </ul>

                                            <ul>
                                                <li><b>Kırtasiye</b></li>
                                                <li>Defter</li>
                                                <li>Ajanda</li>
                                                <li>Fotokopi Kağıdı</li>
                                                <li>Kalem</li>
                                                <li>Boya Seti</li>
                                                <li>Dosyalama Arşivleme</li>
                                                <li>Masaüstü Gereçleri</li>
                                                <li>Ofis Teknolojisi</li>
                                            </ul>

                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Otomobil & Motosiklet</b></li>
                                                <li>Oto Aksesuar</li>
                                                <li>Oto Paspası</li>
                                                <li>Oto Lastik</li>
                                                <li>Kask</li>
                                                <li>Kol Dayama & Kolçak</li>
                                                <li>Güneşlik & Perde</li>
                                                <li>Araç Kokusu</li>
                                                <li>Motosiklet Eldiveni</li>
                                                <li>Motosiklet Montu</li>
                                                <li>Motosiklet Botu</li>
                                                <li>Motosiklet Sepeti</li>
                                            </ul>
                                            <ul>
                                                <li><b>Yapı Market</b></li>
                                                <li>Banyo Yapı Malzemeleri</li>
                                                <li>Elektrikli El Aleti</li>
                                                <li>Hırdavat Ürünleri</li>
                                                <li>Boya</li>
                                                <li>Matkap</li>
                                                <li>Ampul</li>
                                                <li>Vidalama</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="tab-link">
                                <a className="category-header" href=""
                                    onMouseEnter={() => handleMouseEnter('Süpermarket')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Süpermarket
                                </a>
                                <div
                                    className={`sub-menu-1 ${openMenu === 'Süpermarket' ? 'open' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('Süpermarket')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <ul>
                                                <li><b>Ev & Temizlik</b></li>
                                                <li>Çamaşır Yıkama</li>
                                                <li>Bulaşık Yıkama</li>
                                                <li>Paspas & Mop</li>
                                                <li>Çamaşır Deterjanı</li>
                                                <li>Bulaşık Deterjanı</li>
                                                <li>Oda Kokusu</li>
                                                <li>Banyo Temizleyiciler</li>
                                                <li>Yumuşatıcı</li>
                                                <li>Islak Mendil</li>
                                                <li>Tuvalet Kağıdı</li>
                                                <li>Kağıt Havlu</li>
                                                <li>Temizlik Bezi</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Kişisel Bakım</b></li>
                                                <li>Saç Bakım</li>
                                                <li>Ağda & Epilasyon</li>
                                                <li>Banyo & Duş</li>
                                                <li>Ağız Bakım</li>
                                                <li>Cilt Bakım</li>
                                                <li>Vücut Bakım</li>
                                                <li>Deodorant ve Roll on</li>
                                                <li>Şarjlı Diş Fırçaları</li>
                                                <li>Kadın Hijyen</li>
                                                <li>Kolonya</li>
                                                <li>Tıraş Ürünleri</li>
                                                <li>Güneş Ürünleri</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Bebek Bakım</b></li>
                                                <li>Süt Arttırıcı İçecekler</li>
                                                <li>Bebek Ek Besin</li>
                                                <li>Bebek Bezi</li>
                                                <li>Islak Mendil & Havlu</li>
                                                <li>Bebek Kozmetik</li>
                                                <li>Bebek Burun Aspiratörü</li>
                                                <li>Bebek Diş Fırçası</li>
                                                <li>Bebek Mamaları</li>
                                                <li>Bebek Diş Macunu</li>
                                                <li>Bebek Temizleme Pamuğu</li>
                                                <li>Bebek Güneş Kremi</li>
                                                <li>Bebek Pudrası</li>
                                                <li>Bebek Tırnak Makası</li>
                                                <li>Bebek Pişik Kremi</li>
                                                <li>Bebek Yağı</li>
                                                <li>Bebek Bakım Seti</li>
                                                <li>Bebek Şampuanı</li>
                                                <li>Bebek Kolonyası</li>
                                                <li>Bebek Bakım Örtüsü</li>
                                                <li>Bebek Ateş Ölçer</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Gıda ve İçecek</b></li>
                                                <li>Çay</li>
                                                <li>Özel Gıda</li>
                                                <li>Atıştırmalık</li>
                                                <li>Kahvaltılık</li>
                                                <li>Kuru Gıda</li>
                                                <li>Kahve</li>
                                                <li>Makarna</li>
                                                <li>Salça</li>
                                                <li>Sıvı Yağ</li>
                                                <li>Un</li>
                                                <li>Tuz & Baharat</li>
                                                <li>Çorba</li>
                                                <li>Gevrek</li>
                                                <li>Yulaf</li>
                                                <li>Konserve</li>
                                                <li>Şeker</li>
                                                <li>Süt</li>
                                                <li>Pasta Süslemeleri</li>
                                                <li>Bitki Çayları</li>
                                                <li>Gazsız İçecekler</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Atıştırmalık</b></li>
                                                <li>Kuru Meyve</li>
                                                <li>Kuruyemiş</li>
                                                <li>Cips</li>
                                                <li>Çikolata</li>
                                                <li>Gofret</li>
                                                <li>Bisküvi</li>
                                                <li>Kraker</li>
                                                <li>Şekerleme</li>
                                                <li>Sakız</li>
                                                <li>Protein Bar</li>
                                                <li>Sağlıklı Atıştırmalıklar</li>
                                            </ul>

                                            <ul>
                                                <li><b>Unlu Mamüller</b></li>
                                                <li>Kek</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Petshop</b></li>
                                                <li>Kedi Maması</li>
                                                <li>Kedi Kumu</li>
                                                <li>Köpek Maması</li>
                                                <li>Kedi Vitamini</li>
                                                <li>Köpek Tasması</li>
                                                <li>Kuş Ürünleri</li>
                                                <li>Akvaryum Ürünleri</li>
                                                <li>Kedi Box & Taşıma Çantaları</li>
                                                <li>Kedi ve Köpek Oyuncakları</li>
                                                <li>Kedi Yaş Mamaları</li>
                                                <li>Kedi Ödül Mamaları</li>
                                                <li>Köpek Ödül Mamaları</li>
                                                <li>Kısır Kedi Mamaları</li>
                                                <li>Kedi Şampuanı</li>
                                                <li>Su ve Mama Kapları</li>
                                                <li>Kuş Yemleri</li>
                                                <li>Kedi ve Köpek Yatakları</li>
                                                <li>Yavru Kedi Mamaları</li>
                                                <li>Akvaryum Balık Yemi</li>
                                                <li>Kedi Tuvaleti</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="tab-link">
                                <a className="category-header" href=""
                                    onMouseEnter={() => handleMouseEnter('Kozmetik')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Kozmetik
                                </a>
                                <div
                                    className={`sub-menu-1 ${openMenu === 'Kozmetik' ? 'open' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('Kozmetik')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <ul>
                                                <li><b>Makyaj</b></li>
                                                <li>Göz Makyajı</li>
                                                <li>Ten Makyajı</li>
                                                <li>Dudak Makyajı</li>
                                                <li>Makyaj Seti</li>
                                                <li>Oje & Aseton</li>
                                                <li>Fondöten</li>
                                                <li>Ruj</li>
                                                <li>Dudak Kalemi</li>
                                                <li>Maskara</li>
                                                <li>Eyeliner</li>
                                                <li>Göz Kalemi</li>
                                                <li>Kapatıcılar</li>
                                                <li>Allık</li>
                                                <li>Highlighter</li>
                                                <li>BB & CC Krem</li>
                                                <li>Kontür ve Paletler</li>
                                                <li>Bronzer</li>
                                                <li>Pudra</li>
                                                <li>Takma Tırnak</li>
                                                <li>Far Paleti</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Cilt Bakımı</b></li>
                                                <li>Yüz Kremi</li>
                                                <li>Yüz Temizleme</li>
                                                <li>Yüz Maskesi</li>
                                                <li>Göz Bakımı</li>
                                                <li>Güneş Koruyucu</li>
                                                <li>Cilt Serumu</li>
                                                <li>El & Ayak Bakımı</li>
                                                <li>Tonikler</li>
                                                <li>Nemlendiriciler</li>
                                                <li>Yüz Maskeleri</li>
                                                <li>Peeling</li>
                                                <li>El Kremleri</li>
                                                <li>Vücut Losyonları</li>
                                                <li>Selülit Kremleri</li>
                                                <li>Makyaj Temizleyici</li>
                                                <li>Güneş Kremleri</li>
                                                <li>At Kılı Fırçaları</li>
                                                <li>Bronzlaştırıcılar</li>
                                                <li>Cilt Sıkılaştırıcılar</li>
                                                <li>Vücut Spreyleri</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Saç Bakımı</b></li>
                                                <li>Şampuan</li>
                                                <li>Saç Şekillendirici</li>
                                                <li>Saç Serumu & Maskesi</li>
                                                <li>Saç Boyası</li>
                                                <li>Mor Şampuan</li>
                                                <li>Kuru Şampuan</li>
                                                <li>Saç Köpüğü</li>
                                                <li>Saç Kremi</li>
                                                <li>Saç Bakım Yağı</li>
                                                <li>Fön Suyu</li>
                                                <li>Saç Bakım Spreyi</li>
                                                <li>Renk Açıcı</li>
                                                <li>Geçici Saç Boyaları</li>
                                                <li>Saç Makası</li>
                                                <li>Tarak</li>
                                                <li>Saç Bantları</li>
                                                <li>Toka</li>
                                                <li>Saç Vitamini</li>
                                                <li>Saç Toniği</li>
                                                <li>Wax</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>

                                                <li><b>Kişisel Bakım</b></li>
                                                <li>Duş Jelleri</li>
                                                <li>Banyo Sabunları</li>
                                                <li>Şampuan</li>
                                                <li>Pamuk</li>
                                                <li>Vücut Spreyleri</li>
                                                <li>Parfüm</li>
                                                <li>Deodorant</li>
                                                <li>Ağız Bakım Suyu</li>
                                                <li>Diş Fırçası</li>
                                                <li>Diş Macunu</li>
                                                <li>Diş İpi</li>
                                                <li>Şarjlı Diş Fırçaları</li>
                                                <li>Törpüler</li>
                                                <li>Kaş Makası</li>
                                                <li>Günlük Ped</li>
                                                <li>Mesane Pedi</li>
                                                <li>Kese</li>
                                                <li>Banyo Lifi</li>
                                                <li>Diş Beyazlatıcı</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Gıda Takviyeleri</b></li>
                                                <li>Parfüm & Deodorant</li>
                                                <li>Parfüm</li>
                                                <li>Parfüm Setleri</li>
                                                <li>Deodorant</li>
                                                <li>Vücut Spreyi</li>
                                                <li>Roll-On</li>
                                            </ul>
                                            <ul>
                                                <li><b>Makyaj Aksesuarları</b></li>
                                                <li>Makyaj Fırçaları</li>
                                                <li>Makyaj Süngerleri</li>
                                                <li>Makyaj Çantaları</li>
                                                <li>Makyaj Aynaları</li>
                                                <li>Cımbız</li>
                                                <li>Kirpik Kıvırıcı</li>
                                                <li>Manikür & Pedikür Setleri</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Epilasyon & Tıraş</b></li>
                                                <li>Tüy Dökücü</li>
                                                <li>Ağda</li>
                                                <li>Tıraş Bıçağı</li>
                                                <li>Epilatör</li>
                                                <li>Tıraş Köpüğü</li>
                                                <li>Ağda Bantları</li>
                                                <li>Tüy Dökücü Krem</li>
                                            </ul>

                                            <ul>
                                                <li><b>Genel Bakım</b></li>
                                                <li>Cinsel Sağlık</li>
                                                <li>Hijyenik Ped</li>
                                                <li>Vücut Bakımı</li>
                                                <li>El ve Ayak Bakımı</li>
                                                <li>Duş Jeli ve Kremi</li>
                                                <li>Bakım Yağları</li>
                                                <li>Ayak Törpüleri</li>
                                                <li>Katı Sabun</li>
                                                <li>Sıvı Sabun</li>
                                                <li>Pamuk</li>
                                                <li>El Dezenfektanı</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="tab-link">
                                <a className="category-header" href=""
                                    onMouseEnter={() => handleMouseEnter('Ayakkabı&Çanta')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Ayakkabı & Çanta
                                </a>
                                <div
                                    className={`sub-menu-1 ${openMenu === 'Ayakkabı&Çanta' ? 'open' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('Ayakkabı&Çanta')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <ul>
                                                <li><b>Kadın Ayakkabı</b></li>
                                                <li>Spor Ayakkabı</li>
                                                <li>Topuklu Ayakkabı</li>
                                                <li>Günlük Ayakkabı</li>
                                                <li>Bot & Bootie</li>
                                                <li>Sandalet</li>
                                                <li>Terlik</li>
                                                <li>Sneaker</li>
                                                <li>Babet</li>
                                                <li>Loafer</li>
                                                <li>Anne Ayakkabısı</li>
                                                <li>Taşlı Sandalet</li>
                                                <li>Hastane Terlikleri</li>
                                                <li>Topuklu Terlik</li>
                                                <li>Topuklu Bot</li>
                                                <li>Çizme</li>
                                                <li>Kovboy Çizmesi</li>
                                                <li>Dolgu Topuk Ayakkabı</li>
                                                <li>Kar Botu</li>
                                                <li>Yağmur Botu</li>
                                                <li>Panduf</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Erkek Ayakkabı</b></li>
                                                <li>Spor Ayakkabı</li>
                                                <li>Günlük Ayakkabı</li>
                                                <li>Klasik Ayakkabı</li>
                                                <li>Bot</li>
                                                <li>Sneaker</li>
                                                <li>Koşu Ayakkabısı</li>
                                                <li>Krampon</li>
                                                <li>Loafer</li>
                                                <li>Halı Saha Ayakkabısı</li>
                                                <li>Sandalet</li>
                                                <li>Bot</li>
                                                <li>Çizme</li>
                                                <li>Postal</li>
                                                <li>Basketbol Ayakkabısı</li>
                                                <li>Terlik</li>
                                                <li>Ev Terliği</li>
                                                <li>Panduf</li>
                                                <li>Deniz Ayakkabısı</li>
                                                <li>Süet Ayakkabı</li>
                                                <li>Yürüyüş Ayakkabısı</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Çocuk Ayakkabı</b></li>
                                                <li>Spor Ayakkabı</li>
                                                <li>Günlük Ayakkabı</li>
                                                <li>Babet</li>
                                                <li>Bot</li>
                                                <li>Sneaker</li>
                                                <li>Sandalet</li>
                                                <li>Terlik</li>
                                                <li>Panduf</li>
                                                <li>Çizme</li>
                                                <li>Basketbol Ayakkabısı</li>
                                                <li>Krampon</li>
                                            </ul>
                                            <ul>
                                                <li><b>Çocuk Çanta</b></li>
                                                <li>Sırt Çantası</li>
                                                <li>Okul Çantası</li>
                                                <li>Çekçekli Çanta</li>
                                                <li>Beslenme Çantası</li>
                                                <li>Lisanslı Çantalar</li>
                                                <li>Bel Çantası</li>
                                                <li>Postacı Çanta</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Erkek Aksesuar</b></li>
                                                <li>Saat</li>
                                                <li>Güneş Gözlüğü</li>
                                                <li>Cüzdan</li>
                                                <li>Kemer</li>
                                                <li>Şapka</li>
                                                <li>Bileklik</li>
                                                <li>Kravat</li>
                                                <li>Kolye</li>
                                                <li>Rozet</li>
                                                <li>Papyon</li>
                                            </ul>
                                            <ul>
                                                <li><b>Kadın Aksesuar</b></li>
                                                <li>Saat</li>
                                                <li>Takı</li>
                                                <li>Şapka</li>
                                                <li>Güneş Gözlüğü</li>
                                                <li>Saç Aksesuarları</li>
                                                <li>Kemer</li>
                                                <li>Gümüş Kolye</li>
                                                <li>Hasır Bilezik</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Kadın Çanta</b></li>
                                                <li>Omuz Çantası</li>
                                                <li>Sırt Çantası</li>
                                                <li>Cüzdan</li>
                                                <li>Spor Çantası</li>
                                                <li>Bel Çantası</li>
                                                <li>El Çantası</li>
                                                <li>Portföy</li>
                                                <li>Bez Çanta</li>
                                                <li>Kartlık</li>
                                                <li>Abiye Çanta</li>
                                                <li>Postacı Çantası</li>
                                                <li>Plaj Çantası</li>
                                                <li>Laptop Çantası</li>
                                                <li>Kapitone Çanta</li>
                                                <li>Evrak Çantası</li>
                                                <li>Kutu Çanta</li>
                                                <li>Makyaj Çantası</li>
                                                <li>Peluş Çanta</li>
                                                <li>Hasır Çanta</li>
                                            </ul>
                                            <ul>
                                                <li><b>Valiz & Bavul</b></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Erkek Çanta</b></li>
                                                <li>Sırt Çantası</li>
                                                <li>Postacı Çantası</li>
                                                <li>Cüzdan & Kartlık</li>
                                                <li>Spor Çantası</li>
                                                <li>Laptop Çantası</li>
                                                <li>Bel Çantası</li>
                                                <li>Omuz Çantası</li>
                                                <li>Portföy Çanta</li>
                                                <li>Tıraş Çantası</li>
                                                <li>Olta Çantası</li>
                                                <li>Okul Çantası</li>
                                                <li>Valiz</li>
                                                <li>Outdoor Çanta</li>
                                                <li>El Çantası</li>
                                            </ul>
                                            <ul>
                                                <li><b>Lüks & Designer</b></li>
                                                <li>Lüks Çanta</li>
                                                <li>Lüks Ayakkabı</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="tab-link">
                                <a className="category-header" href=""
                                    onMouseEnter={() => handleMouseEnter('Elektronik')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Elektronik
                                </a>
                                <div
                                    className={`sub-menu-1 ${openMenu === 'Elektronik' ? 'open' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('Elektronik')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <ul>
                                                <li><b>Küçük Ev Aletleri</b></li>
                                                <li>Süpürge</li>
                                                <li>Robot Süpürge</li>
                                                <li>Dikey Süpürge</li>
                                                <li>Ütü</li>
                                                <li>Kahve Makinesi</li>
                                                <li>Çay Makinesi</li>
                                                <li>Blender Seti</li>
                                                <li>Tost Makinesi</li>
                                                <li>Doğrayıcı & Rondo</li>
                                                <li>Su Isıtıcı & Kettle</li>
                                                <li>Mikser & Mikser Seti</li>
                                                <li>Airfryer & Fritöz</li>
                                            </ul>
                                            <ul>
                                                <li><b>Giyilebilir Teknoloji</b></li>
                                                <li>Akıllı Saat</li>
                                                <li>Akıllı Bileklik</li>
                                                <li>VR Gözlük</li>
                                            </ul>
                                            <ul>
                                                <li><b>Telefon</b></li>
                                                <li>Cep Telefonu</li>
                                                <li>Android Cep Telefonları</li>
                                                <li>iPhone iOS Cep Telefonları</li>
                                                <li>Telefon Kılıfları</li>
                                                <li>Şarj Cihazları</li>
                                                <li>Powerbank</li>
                                                <li>Araç İçi Telefon Tutucu</li>
                                                <li>iPhone Kılıflar</li>
                                                <li>Kulaklıklar</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Foto & Kamera</b></li>
                                                <li>Aksiyon Kamera</li>
                                                <li>Fotoğraf Makinesi</li>
                                                <li>Video Kamera</li>
                                                <li>Şipşak Fotoğraf Makinesi</li>
                                                <li>Dijital Fotoğraf Makinesi</li>
                                                <li>Fotoğraf Makinesi Lensleri</li>
                                                <li>Hafıza Kartı</li>
                                            </ul>
                                            <ul>
                                                <li><b>TV & Görüntü & Ses</b></li>
                                                <li>Televizyon</li>
                                                <li>Smart TV</li>
                                                <li>QLED TV</li>
                                                <li>OLED TV</li>
                                                <li>TV Kumandaları</li>
                                                <li>Soundbar</li>
                                                <li>Projeksiyon Cihazı</li>
                                                <li>Media Player</li>
                                                <li>Hoparlör</li>
                                                <li>Kulaklık</li>
                                                <li>Uydu Alıcısı</li>
                                                <li>Çanak Anten</li>
                                                <li>HDMI Kablo</li>
                                                <li>Akım Korumalı Prizler</li>
                                                <li>Kablo & Adaptör</li>
                                                <li>LNB</li>
                                                <li>TV Ekran Koruyucu</li>
                                                <li>TV Askı Aparatı</li>
                                                <li>Kablolu Hoparlör</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Beyaz Eşya</b></li>
                                                <li>Buzdolabı</li>
                                                <li>Çamaşır Makinesi</li>
                                                <li>Bulaşık Makinesi</li>
                                                <li>Kurutma Makinesi</li>
                                                <li>Derin Dondurucu</li>
                                                <li>Ankastre Setler</li>
                                                <li>Kombi</li>
                                                <li>Mikrodalga Fırın</li>
                                                <li>Aspiratör</li>
                                                <li>Mini & Midi Fırın</li>
                                                <li>Ankastre Davlumbaz</li>
                                                <li>Ankastre Ocak</li>
                                            </ul>
                                            <ul>
                                                <li><b>Bilgisayar & Tablet</b></li>
                                                <li>Bilgisayarlar</li>
                                                <li>Tablet</li>
                                                <li>Bilgisayar Bileşenleri</li>
                                                <li>Monitör</li>
                                                <li>Yazıcı & Tarayıcı</li>
                                                <li>Ağ & Modem</li>
                                                <li>Klavye</li>
                                                <li>Mouse</li>
                                                <li>Grafik Tablet</li>
                                                <li>SSD</li>
                                                <li>RAM</li>
                                                <li>Ekran Kartı</li>
                                                <li>Çocuk Çizim Tableti</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Kişisel Bakım Aletleri</b></li>
                                                <li>Saç Düzleştirici</li>
                                                <li>Saç Maşası</li>
                                                <li>Saç Kurutma Makinesi</li>
                                                <li>Tıraş Makinesi</li>
                                                <li>Tartı</li>
                                                <li>Epilasyon Aletleri</li>
                                                <li>IPL Lazer Epilasyon</li>
                                            </ul>
                                            <ul>
                                                <li><b>Oyunculara Özel</b></li>
                                                <li>Playstation</li>
                                                <li>Xbox</li>
                                                <li>Nintendo</li>
                                                <li>Playstation Oyunları</li>
                                                <li>Konsol Aksesuarları</li>
                                                <li>Oyuncu Bilgisayarı</li>
                                                <li>Oyuncu Donanımları</li>
                                                <li>Oyuncu Monitörleri</li>
                                                <li>Oyuncu Koltuğu</li>
                                                <li>Oyuncu Kulaklığı</li>
                                                <li>Oyuncu Mouse</li>
                                                <li>Oyuncu Klavyesi</li>
                                                <li>Bilgisayar Oyunları</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Elektronik Aksesuarlar</b></li>
                                                <li>Bilgisayar Aksesuar</li>
                                                <li>Telefon Aksesuarları</li>
                                                <li>TV Aksesuarları</li>
                                                <li>Veri Depolama</li>
                                            </ul>
                                            <ul>
                                                <li><b>Klima & Isıtıcılar</b></li>
                                                <li>Klima</li>
                                                <li>Kombi</li>
                                                <li>Isıtıcılar</li>
                                                <li>Vantilatör</li>
                                                <li>Şofben</li>
                                                <li>Termosifon</li>
                                                <li>Hava Temizleyici</li>
                                                <li>Hava Nemlendirici</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="tab-link">
                                <a className="category-header" href=""
                                    onMouseEnter={() => handleMouseEnter('Spor ve Outdoor')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Spor ve Outdoor
                                </a>
                                <div
                                    className={`sub-menu-1 ${openMenu === 'Spor ve Outdoor' ? 'open' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('Spor ve Outdoor')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <ul>
                                                <li><b>Spor Üst Giyim</b></li>
                                                <li>Spor Tişört</li>
                                                <li>Ceket & Yelek</li>
                                                <li>Yağmurluk</li>
                                                <li>Spor Sütyeni</li>
                                                <li>Sweatshirt</li>
                                                <li>Atlet</li>
                                                <li>Forma</li>
                                                <li>Spor Mont</li>
                                                <li>Spor Şapka</li>
                                            </ul>
                                            <ul>
                                                <li><b>Spor Alt Giyim</b></li>
                                                <li>Eşofman Takımı</li>
                                                <li>Tayt</li>
                                                <li>Şort</li>
                                                <li>Termal Giyim</li>
                                                <li>Çorap</li>
                                                <li>Spor Pantolon</li>
                                                <li>Terlik</li>
                                                <li>Eşofman</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Spor Ayakkabı</b></li>
                                                <li>Sneaker</li>
                                                <li>Koşu Ayakkabısı</li>
                                                <li>Halı Saha Ayakkabısı</li>
                                                <li>Basketbol Ayakkabısı</li>
                                                <li>Yürüyüş Ayakkabısı</li>
                                                <li>Outdoor Ayakkabı</li>
                                                <li>Tenis Ayakkabısı</li>
                                                <li>Voleybol Ayakkabısı</li>
                                                <li>Fitness Ayakkabısı</li>
                                                <li>Deniz Ayakkabısı</li>
                                                <li>Kaykay Ayakkabısı</li>
                                                <li>Outdoor Bot</li>
                                                <li>Terlik</li>
                                                <li>Sandalet</li>
                                                <li>Çizme</li>
                                                <li>Bot</li>
                                                <li>Kar Botu</li>
                                                <li>Kayak Ayakkabısı</li>
                                                <li>Snowboard Botu</li>
                                                <li>Havuz Terliği</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Evde Spor Aletleri</b></li>
                                                <li>Elastik Bant</li>
                                                <li>El Yayı</li>
                                                <li>Mat</li>
                                                <li>Çalışma İstasyonları</li>
                                                <li>Atlama İpi</li>
                                                <li>Boks Eldiveni</li>
                                                <li>Dambıl Seti</li>
                                                <li>Eliptik Bisiklet</li>
                                                <li>Barfiks Barı</li>
                                                <li>Eldiven</li>
                                                <li>Kettlebell</li>
                                                <li>Kondisyon Bisikleti</li>
                                                <li>Yürüme Bandı</li>
                                                <li>Pilates Topu</li>
                                                <li>Kürek Çekme Aleti</li>
                                                <li>Boks Bandajı</li>
                                                <li>Crossfit</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Spor Malzemeleri</b></li>
                                                <li>Deniz & Plaj</li>
                                                <li>Kaykay</li>
                                                <li>Paten</li>
                                                <li>Kamp Malzemeleri</li>
                                                <li>Dağcılık & Tırmanış</li>
                                                <li>Aksiyon Kamera</li>
                                                <li>Çadır Uyku Tulumu</li>
                                                <li>Su Sporu Malzemeleri</li>
                                                <li>Dalış Malzemeleri</li>
                                                <li>Balıkçılık Malzemeleri</li>
                                                <li>Tenis Malzemeleri</li>
                                                <li>Kayak ve Snowboard</li>
                                                <li>Okçuluk</li>
                                                <li>Çadır</li>
                                                <li>Havlu</li>
                                                <li>Suluk</li>
                                                <li>Matlar</li>
                                                <li>Bisiklet</li>
                                                <li>Termos</li>
                                                <li>Pilates Topları</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Bisiklet</b></li>
                                                <li>Şehir Bisikleti</li>
                                                <li>Dağ Bisikleti</li>
                                                <li>Katlanabilir Bisikletler</li>
                                                <li>Yol Bisikletleri</li>
                                                <li>Çocuk Bisikletleri</li>
                                                <li>Elektrikli Bisikletler</li>
                                                <li>Bisikletçi Ekipmanları</li>
                                                <li>Bisiklet Gözlükleri</li>
                                                <li>Bisiklet Kaskları</li>
                                            </ul>
                                            <ul>
                                                <li><b>Fitness Kondisyon</b></li>
                                                <li>Pilates Malzemeleri</li>
                                                <li>Fitness Aletleri</li>
                                                <li>Kondisyon Bisikleti</li>
                                                <li>Koşu Bandı</li>
                                                <li>Yoga Malzemeleri</li>
                                                <li>Dambıl Seti</li>
                                                <li>Ağırlık Plakaları</li>
                                                <li>Barfiks</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li><b>Sporcu Besinleri</b></li>
                                                <li>Protein Tozu</li>
                                                <li>Amino Asit</li>
                                                <li>Karbonhidrat</li>
                                                <li>L-Karnitin (CLA)</li>
                                                <li>Güç ve Performans</li>
                                                <li>Gıda Takviyesi & Vitaminler</li>
                                                <li>Kreatin</li>
                                                <li>Protein Bar</li>
                                                <li>Shaker</li>
                                            </ul>
                                            <ul>
                                                <li><b>Top</b></li>
                                                <li>Basketbol Topu</li>
                                                <li>Futbol Topu</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="tab-link"><a className="category-header" href="">Çok Satanlar</a></li>
                            <li className="tab-link"><a className="category-header" href="">Flash Urunler</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    );
}

export default Navbar;