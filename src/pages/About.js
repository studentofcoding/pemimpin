import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import './Pages.css';
import Navbar from '../Navbar';
import Tncmodul from '../components/Tncmodul';
import Footer from '../components/Footer';
import founderPic from '../image/pages-section-founder.png';

// import buttonDaftar from '../components/buttonDaftar';

export default class About extends Component {
  render() {
    return (
      <div className="web-container">
        <Navbar />

        <Tncmodul/>

        {/* Pages Header */}
        <div className="pages-header">
          <div className="pages-header_header">
            <div className="pages-header_content">
              About Us
            </div>
          </div>
        </div>

        {/* Terms and Condition Header */}
        <Container style={{marginTop:"1em"}} text textAlign='justified'>
          <h2>PENJELASAN PROGRAM</h2>
          <p>
          Young Innovators Fellowship merupakan program akselerasi inovasi kepemimpinan yang terintegrasi bagi pemimpin muda yang berasal dari kampus. Saat ini, pilot program dikhususkan kepada mahasiswa tingkat akhir yang berada di Jakarta dan Bandung. Program ini meliputi pendampingan riset/skripsi yang inovatif, mentoring keahlian, dan pembekalan karir professional pasca kampus, yang akan berlangsung selama 9 bulan. 
          </p>
          <p>
          Menjadi mahasiswa tingkat akhir merupakan sebuah tantangan tersendiri bagi seluruh mahasiswa di Indonesia. Fase ini menjadi fase yang penting untuk mahasiswa bisa memberikan karya terbaiknya melalui riset pada tugas akhirnya, namun sayangnya momentum ini tidak dimanfaatkan oleh kebanyakan mahasiswa sehingga tugas akhir yang dihasilkan hanya dijadikan prasyarat untuk lulus saja.
          </p>
          <p>
          Melalui program ini pemimpin.co mendorong mahasiswa tingkat akhir untuk melakukan riset yang innovatif dan berdampak melalui tugas akhir yang dikerjakannya. Peserta program akan dibekali ilmu-ilmu mengenai penulisan naskah akademik dan ilmu-ilmu yang memperkaya pengetahuannya terkait karir.
          </p>
          <p>
          Pemimpin.id mengundang mahasiswa tingkat akhir dari Universitas di Jakarta, Bogor, Depok, dan Bandung untuk mengikuti program ini. Secara khusus kami mengundang mahasiswa tingkat akhir yang memiliki idealisme untuk menghasilkan tugas akhir yang berdampak bagi masyarakat.
          </p>

          <h2>PROGRAM DETAIL</h2>
          <ol>
            <li>
              Bootcamp
              <p>
                5 hari intensif bootcamp yang akan meningkatkan kapasitas peserta dalam riset dan penulisan naskah akademik
              </p>
            </li>
            <li>
              Offline & Online Course
              <p>
                Pemberian materi bulanan yang akan disampaikan secara offline dan online terkait softskill yang dibutuhkan untuk menghadapi dunia pasca kampus
              </p>
            </li>
            <li>
              Mentoring & Coaching
              <p>
                Pendampingan peserta selama program dengan metode mentoring dan coaching,pendampingan diprioritaskan pada karir dan lifeplan
              </p>
            </li>
            <li>
              Strategic Assignment
              <p>
                Penugasan khusus untuk menunjang ketersampaian materi yang didapat saat offline maupun online course
              </p>
            </li>
            <li>
              Professional Internship
              <p>
                Magang profesional untuk mendapatkan pengalaman kerja tambahan sebagai modal menghadapi dunia kerja yang sesungguhnya
              </p>
            </li>
          </ol>

          <h2>BENEFIT</h2>
          <ul>
            <li>
              Mendapatkan program pembinaan secara intensif dan eksklusif selama 9 bulan
            </li>
            <li>
              Pendampingan tugas akhir dalam bentuk mentoring dan coaching
            </li>
            <li>
              Mendapatkan tunjangan biaya penelitian sampai Rp10.000.000,-
            </li>
            <li>
              Mendapatkan tunjangan pendaftaran konferensi internasional sampai Rp6.000.000,- bagi penelitian yang memenuhi syarat
            </li>
            <li>
              Mendapatkan kesempatan untuk magang profesional
            </li>
          </ul>

          <h2>TIMELINE SELEKSI</h2>
          <h3>
            Batas akhir pendaftaran :
          </h3>
            <p>
              10 Agustus 2019
            </p>
          <h3>
          Seleksi :
          </h3>
            <p>
              5 -  13 Agustus 2019
            </p>
          <h3>
          Pengumuman :
          </h3>
            <p>
              24 Agustus 2019
            </p> 
        </Container>

        {/* Pages Header */}
        <div className="pages-section">
          <div className="pages-section_header">
        <Container text textAlign='justified'>
            <div className="pages-section_content">
            <h2>Founders Pemimpin.co</h2>
            <Divider/>
            <div className="pages-section-content_inner">
              <img src={founderPic} alt="Founder Face" height="70%" width="70%"/>
            </div>
            </div>
          </Container>
          </div>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    )
  }
}
