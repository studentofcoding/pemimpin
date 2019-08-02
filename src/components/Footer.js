import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* Footer Content */}
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
                <div className="footer-contact-item_1">
                  0812-9821-9099
                </div>
                <div className="footer-contact-item_1">
                  program@pemimpin.co
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
