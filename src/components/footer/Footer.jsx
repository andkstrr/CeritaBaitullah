import React from 'react'
import LogoBaitullahPutih from '../../assets/images/logo-baitullah putih.png'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Kolom 1 */}
          <div className="footer-col">
            <a href="#">
              <img src={LogoBaitullahPutih} alt="Cerita Baitullah" width="150px" />
            </a>
            <p className="footer-desc">
              <strong>Download</strong> aplikasi untuk <br /> mendapatkan banyak kemudahan
            </p>
            <div className="footer-partner">
              <i className="fa-solid fa-handshake footer-icon"></i>
              <span>Rekan Usaha Baitullah</span>
            </div>
            <a href="hijraPage.html" className="footer-partner-link">
              <img
                src="../assets/images/logo/logo-rekan-usaha-baitullah-01.png"
                alt="Hijra Bank"
                className="footer-partner-img"
              />
            </a>
          </div>

          {/* Kolom 2 */}
          <div className="footer-col">
            <h3 className="footer-title">Dukungan</h3>
            <p className="footer-text">Tentang Baitullah</p>
            <p className="footer-text">Hubungi Kami</p>
            <p className="footer-text">FAQ</p>
            <p className="footer-text">Kebijakan Privasi</p>
            <p className="footer-text">Cerita Baitullah</p>
          </div>

          {/* Kolom 3 */}
          <div className="footer-col">
            <h3 className="footer-title">Produk</h3>
            <a href="umrohPage.html" className="footer-link">Umroh</a>
            <a href="umrohPlusPage.html" className="footer-link">Umroh Plus</a>
            <a href="hajiKhususPage.html" className="footer-link">Haji Khusus</a>
            <a href="wisataHalalPage.html" className="footer-link">Wisata Halal</a>
          </div>

          {/* Kolom 4 */}
          <div className="footer-col">
            <h3 className="footer-title">Customer Care</h3>
            <p className="footer-text">Telepon: +62 817-007-7070</p>
            <p className="footer-text">Email: info@baitullah.co.id</p>
            <p className="footer-text">
              Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga Kementerian Perdagangan Republik Indonesia
            </p>
            <p className="footer-text">WhatsApp: +62 853-1111-1010</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="#"><img src="../assets/images/icon/icon-sosial-media-instagram-02.svg" alt="Instagram" /></a>
            <a href="#"><img src="../assets/images/icon/icon-sosial-media-youtube-04.svg" alt="YouTube" /></a>
            <a href="#"><img src="../assets/images/icon/icon-sosial-media-facebook-01.svg" alt="Facebook" /></a>
            <a href="#"><img src="../assets/images/icon/icon-sosial-media-tiktok-03.svg" alt="TikTok" /></a>
          </div>
          <p className="footer-copyright">© 2024 <strong>Baitullah.co.id.</strong> All Rights Reserved</p>
          <div className="footer-policy">
            <a href="#">Privacy Policy</a> • <a href="#">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
