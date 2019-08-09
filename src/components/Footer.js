import React, { Component } from 'react';

// import Imgtujuan_1 from '../image/Tujuan_1-small.png';
// import Imgtujuan_2 from '../image/Tujuan_2-small.png';

import footer_1 from '../image/Footer_1.png';
import footer_2 from '../image/Footer_2.png';

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* Footer Content */}
        <div className="footer_grid_inner">
          <div className="footer-logo-container">
            <img src={footer_1} alt="Pemimpin.co" className="footer-logo_1"/>
            <img src={footer_2} alt="Pemimpin.co" className="footer-logo_2"/>
          </div>
        </div>
        <footer className="footer_grid">
          <div className="footer-about-container">
            <div className="footer-about_header">
              PEMIMPIN.CO
            </div>
            <div className="footer-about_body">
              Pemimpin.co adalah salah satu inisiatif dari DeepSpace konsorsium
              untuk perubahan sosial di Indonesia.
            </div>
            <div className="footer-about_alamat">
              Jln. Melawai X No.9, RT.2/RW.6, Melawai, Kota Jakarta Selatan, 
              DKI Jakarta 12160
            </div>
          </div>
          <div className="footer-contact-container">
            <div className="footer-contact_container">
              <div className="footer-contact_header">
                Kontak kami
              </div>
              <div className="footer-contact_item">
                <div className="contact-container_grid">
                  {/* <div className="footer-contact_container_icon">
                  </div> */}
                  <div className="footer-contact-item">
                    <i class="material-icons md-light">smartphone</i>
                    0812-9821-9099
                  </div>
                </div>
                <div className="contact-container_grid">
                  {/* <div className="footer-contact_container_icon">
                  </div> */}
                  <div className="footer-contact-item">
                    <i class="material-icons md-light">email</i>
                    program@pemimpin.co
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
