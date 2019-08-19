import React from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from '../../components/Navbar';
import './Pages.css';
import Footer from '../../components/Footer';
import Tncmodul from '../../components/Tncmodul';

const TnCPage = () => (
  <div className="web-container">
    <Navbar/>

    <Tncmodul/>

    {/* Pages Header */}
    <div className="pages-header">
      <div className="pages-header_header">
        <div className="pages-header_content">
          Term and Condition
        </div>
      </div>
    </div>
    
    {/* Terms and Condition Header */}
    <Container style={{marginTop:"1em"}} text textAlign='justified'>
      <h2>KETENTUAN UMUM</h2>
      <ol>
        <li>
          Mahasiswa S1 dari universitas di seluruh Indonesia
        </li>
        <li>
          Mahasiswa tingkat akhir yang sedang menyelesaikan skripsi pada tahun 2019-2020
        </li>
        <li>
          Inovatif, berkomitmen, persisten, dan bersemangat
        </li>
        <li>
          Memiliki kemampuan menganalisa masalah yang baik
        </li>
        <li>
          Siap mengikuti program pembinaan selama 9 bulan
        </li>
        <li>
          Hak cipta hasil penelitian tetap berada pada peneliti dan kampus, akan tetapi pemimpin.id diberikan hak untuk mempublikasikan sebagian atau seluruh hasil skripsi.
        </li>
        <li>
          Pemimpin.id memiliki hak menggunakan hasil penelitian tersebut untuk kepentingan pengembangan ekosistem kepemipinan di Indonesia dengan tetap memperhatikan etika ilmiah dan bebas dari unsur kejahatan akademik.
        </li>
        <li>
          Bagi yang pernah mendapatkan beasiswa ataupun alumni program/pelatihan kepemimpinan tingkat nasional akan diutamakan
        </li>
      </ol>

      <h2>PERSYARATAN ADMINISTRATIF</h2>
      <ol>
        <li>
          Mengisi formulir yang disediakan
        </li>
        <li>
          Melampirkan pas foto formal
        </li>
        <li>
          Melampirkan surat pernyataan telah menerima beasiswa dari lembaga pemberi beasiswa sebelumnya
        </li>
        <li>
          Melampirkan surat rekomendasi (optional)
        </li>
        <li>
          Melampirkan fotocopy Kartu Tanda Mahasiswa (KTM)
        </li>
        <li>
          Melampirkan proposal penelitian sesuai dengan sistematika proposal penelitian yang ditentukan
        </li>
      </ol>

      <h2>KETENTUAN KHUSUS PENELITIAN</h2>
      <ol>
        <li>
          Penelitian selambat-lambatnya dapat diselesaikan selama masa program (9 bulan)
        </li>
        <li>
          Memiliki dampak sosial kepada masyarakat secara langsung maupun tidak langsung
        </li>
        <li>
          Proposal penelitian bersifat original
        </li>
        <li>
          Tema skripsi yang diprioritaskan :
          <ul>
            <li>
              Pendidikan :
              <ol>
                <li>
                  Kajian pengaruh kinerja guru terhadap anak didik
                </li>
                <li>
                  Kajian dampak penggunaan teknologi pembelajaran (zenius, ruang guru, dll) terhadap pembelajaran anak
                </li>
                <li>
                  Kajian peran pengasuhan orang tua terhadap karakter anak
                </li>
              </ol>
            </li>
            <li>
              Kesejahteraan Sosial
              <ol>
                <li>
                  Kesejahteraan sosial dan pengaruhnya terhadap pengembangan SDM di Indonesia
                </li>
                <li>
                  Community development sebagai strategi pemerataan kesejahteraan sosial di Indonesia
                </li>
                <li>
                  Dampak dari kebijakan sosial terhadap peningkatan kesejahteraan sosial di Indonesia
                </li>
              </ol>
            </li>
            <li>
              Kepemimpinan
              <ol>
                <li>
                  Social impact leadership (character, ability, dan skill)
                </li>
                <li>
                  Peran Pemimpin untuk menciptakan dampak sosial dan tantangannya
                </li>
                <li>
                  Kajian hubungan antara pimpinan perusahaan dan corporate social responsibility
                </li>
              </ol>
            </li>
            <li>
              Lingkungan
              <ol>
                <li>
                  Kajian pengolahan sampah anorganik
                </li>
                <li>
                  Bahan alternatif kantong plastik
                </li>
                <li>
                  Solusi polusi metropolitan 
                </li>
                <li>
                  Solusi budaya pencemaran badan sungai Citarum
                </li>
              </ol>
            </li>
            <li>
              Manajemen Bencana
              <ol>
                <li>
                  Desain shelter yang sesuai dengan kondisi geografi Indonesia
                </li>
                <li>
                  Sistem mitigasi bencana alam
                </li>
                <li>
                  Mapping dan analisa pasca bencana dengan foto udara
                </li>
              </ol>
            </li>
            <li>
              IT, Teknologi Terapan, dan Inovasi
              <ol>
                <li>
                  Blockchain
                </li>
                <li>
                  Machine Learning
                </li>
              </ol>
            </li>
          </ul>
        </li>
        <li>
          Sistematika proposal penelitian terdiri dari :
          <ul>
            <li>
              Judul
            </li>
            <li>
              Ringkasan eksekutif (executive summary)
            </li>
            <li>
              Latar belakang masalah
            </li>
            <li>
              Perumusan masalah
            </li>
            <li>
              Tujuan
            </li>
            <li>
              Dampak ke masyarakat
            </li>
            <li>
              Ruang lingkup
            </li>
            <li>
              Kerangka teori 
            </li>
            <li>
              Metodologi (teknik pengumpulan data, sasaran riset, data yang dihimpun, dan teknik analisis data) 
            </li>
            <li>
              Jadwal penelitian
            </li>
            <li>
              Anggaran dana 
            </li>
            <li>
              Daftar pustaka
            </li>
          </ul>
        </li>
      </ol>

      <h2>KEWAJIBAN PESERTA SELAMA PROGRAM</h2>
      <ul>
        <li>
          Wajib mengikuti seluruh rangkaian program YIF
        </li>
        <li>
          Wajib mengerjakan seluruh tugas yang telah diberikan selama rangkaian program YIF
        </li>
        <li>
          Selama mengikuti program wajib menaati semua peraturan dan norma yang diberlakukan
        </li>
      </ul>

      <h2>HAK PESERTA SELAMA PROGRAM</h2>
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
          Mendapatkan tunjangan pendaftaran konferensi internasional sampai Rp6.000.000,- (bagi penelitian yang memenuhi syarat)
        </li>
        <li>
          Mendapatkan kesempatan untuk magang profesional
        </li>
      </ul>
    </Container>
    <Footer />
  </div>
)

export default TnCPage;