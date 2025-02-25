import React from 'react'
import LogoBaitullahPutih from '../../assets/images/logo-baitullah putih.png'
import { AiOutlineInstagram, AiFillYoutube, AiFillFacebook, AiOutlineTikTok } from 'react-icons/ai'
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
            <p className="footer-text">
              <strong>Download</strong> aplikasi untuk <br /> mendapatkan banyak kemudahan
            </p>
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
            <p className="footer-text">Umroh</p>
            <p className="footer-text">Umroh Plus</p>
            <p className="footer-text">Haji Khusus</p>
            <p className="footer-text">Wisata Halal</p>
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
              <AiOutlineInstagram size={25} />
              <AiFillYoutube size={25} />
              <AiFillFacebook size={25} />
              <AiOutlineTikTok size={25} />
          </div>
          <p className="footer-copyright">© 2025 <strong>Baitullah.co.id.</strong> All Rights Reserved</p>
          <div className="footer-policy">
            <p className="footer-text">Privacy Policy Terms & Condition</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
