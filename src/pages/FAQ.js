import React from 'react';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
 
export default function Example() {
    return (
        <Accordion 
            style=
            {{
                width:"78%",
                marginLeft:"11%",
                marginRight:"11%"
            }}
        >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton 
                        style=
                        {{
                            fontFamily:"Ubuntu", 
                            fontSize:"0.7em",
                            fontWeight:"bold",
                            backgroundColor:"#1d1d2c", 
                            color:"white", 
                            border:"#1d1d2c solid 2px", 
                            borderRadius:"10px",
                            borderBottomRightRadius:"0px",
                            borderBottomLeftRadius:"0px",
                        }}
                    >
                        Apa itu YOUNG INNOVATORS FELLOWSHIP?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style=
                    {{
                        width:"100%",
                        fontFamily:"Lato", 
                        fontSize:"0.6em",
                        backgroundColor:"white", 
                        color:"#1d1d2c"
                    }}
                >
                    <p>
                        Young Innovators Fellowship merupakan program akselerasi inovasi 
                        kepemimpinan yang terintegrasi bagi pemimpin muda yang berasal dari kampus. 
                        Saat ini, pilot program dikhususkan kepada mahasiswa tingkat akhir yang 
                        berada di Jakarta dan Bandung. Program ini meliputi pendampingan riset/skripsi 
                        yang inovatif, mentoring keahlian, dan pembekalan karir professional pasca kampus, 
                        yang akan berlangsung selama 9 bulan. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton 
                        style=
                        {{
                            fontFamily:"Ubuntu", 
                            fontSize:"0.7em",
                            fontWeight:"bold",
                            backgroundColor:"#1d1d2c", 
                            color:"white", 
                            border:"#1d1d2c solid 2px"
                        }}
                    >
                        Saya mahasiswa semester 9, apakah saya boleh daftar?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style=
                    {{
                        width:"100%",
                        fontFamily:"Lato", 
                        fontSize:"0.6em",
                        backgroundColor:"white", 
                        color:"#1d1d2c"
                    }}
                >
                    <p>
                        Boleh, selama proses penelitian belum dilakukan
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton 
                        style=
                        {{
                            fontFamily:"Ubuntu", 
                            fontSize:"0.7em",
                            fontWeight:"bold",
                            backgroundColor:"#1d1d2c", 
                            color:"white", 
                            border:"#1d1d2c solid 2px"
                        }}
                    >
                        Jika topik skripsi saya tidak sesuai 
                        dengan topik prioritas apakah saya boleh daftar?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style=
                    {{
                        width:"100%",
                        fontFamily:"Lato", 
                        fontSize:"0.6em",
                        backgroundColor:"white", 
                        color:"#1d1d2c"
                    }}
                >
                    <p>
                        Boleh, selama penelitian tersebut memiliki nilai tambah 
                        dan dampak yang besar untuk masyarakat
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton 
                        style=
                        {{
                            fontFamily:"Ubuntu", 
                            fontSize:"0.7em",
                            fontWeight:"bold",
                            backgroundColor:"#1d1d2c", 
                            color:"white", 
                            border:"#1d1d2c solid 2px"
                        }}
                    >
                        Bagaimana lini masa program Young Innovative Fellowship?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style=
                    {{
                        width:"100%",
                        fontFamily:"Lato", 
                        fontSize:"0.6em",
                        backgroundColor:"white", 
                        color:"#1d1d2c"
                    }}
                >
                    <p>
                        Program Young Innovative Fellowship akan melewati serangkaian tahapan, antara lain:
                        <li>Registrasi berkas (10 - 31 Agustus 2019)</li>
                        <li>Proses seleksi (1 - 5 September 2019)</li>
                        <li>Pengumuman peserta lolos 20 September 2019</li>
                        <li>Bootcamp peserta terpilih (30 September - 4 Oktober 2019)</li>
                        <li>Periode fellowship (30 September 2019 - 31 Mei 2020)</li>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton 
                        style=
                        {{
                            fontFamily:"Ubuntu", 
                            fontSize:"0.7em",
                            fontWeight:"bold",
                            backgroundColor:"#1d1d2c", 
                            color:"white", 
                            border:"#1d1d2c solid 2px"
                        }}
                    >
                        Berapakah peserta yang akan di terima?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style=
                    {{
                        width:"100%",
                        fontFamily:"Lato", 
                        fontSize:"0.6em",
                        backgroundColor:"white", 
                        color:"#1d1d2c"
                    }}
                >
                    <p>
                        Total peserta fellowship yang akan diterima adalah 60 orang, dengan 
                        pembagian 30 orang di regional Jakarta dan 30 orang di regional Bandung.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton 
                        style=
                        {{
                            fontFamily:"Ubuntu", 
                            fontSize:"0.7em",
                            fontWeight:"bold",
                            backgroundColor:"#1d1d2c", 
                            color:"white", 
                            border:"#1d1d2c solid 2px"
                        }}
                    >
                        Kapan batas waktu saya harus melengkapi berkas?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style=
                    {{
                        width:"100%",
                        fontFamily:"Lato", 
                        fontSize:"0.6em",
                        backgroundColor:"white", 
                        color:"#1d1d2c"
                    }}
                >
                    <p>
                        Pendaftaran akan ditutup pada 10 Agustus 2019. Kami menyarankan agar mendaftar 
                        seawal mungkin. Berkas akan dievaluasi berdasarkan waktu masuk.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton 
                        style=
                        {{
                            fontFamily:"Ubuntu", 
                            fontSize:"0.7em",
                            fontWeight:"bold",
                            backgroundColor:"#1d1d2c", 
                            color:"white", 
                            border:"#1d1d2c solid 2px"
                        }}
                    >
                        Apa saja dokumen yang harus disiapkan dalam proses pendaftaran?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style=
                    {{
                        width:"100%",
                        fontFamily:"Lato", 
                        fontSize:"0.6em",
                        backgroundColor:"white", 
                        color:"#1d1d2c"
                    }}
                >
                    <p>
                        <li>Pas Foto [JPEG/JPG/PNG]</li>
                        <li>Surat pernyataan telah menerima beasiswa [PDF]</li>
                        <li>Surat rekomendasi (opsional) [PDF]</li>
                        <li>Kartu Tanda Mahasiswa [JPEG/JPG/PNG]</li>
                        <li>Proposal penelitian [PDF]</li>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton 
                        style=
                        {{
                            fontFamily:"Ubuntu", 
                            fontSize:"0.7em",
                            fontWeight:"bold",
                            backgroundColor:"#1d1d2c", 
                            color:"white", 
                            border:"#1d1d2c solid 2px"
                        }}
                    >
                        Tahap apa saja yang ada dalam seleksi Young Innovative Fellowship?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style=
                    {{
                        width:"100%",
                        fontFamily:"Lato", 
                        fontSize:"0.6em",
                        backgroundColor:"white", 
                        color:"#1d1d2c"
                    }}
                >
                    <p>
                    Seleksi program ini terdiri dari dua tahap, yakni seleksi berkas dan wawancara.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton 
                        style=
                        {{
                            fontFamily:"Ubuntu", 
                            fontSize:"0.7em",
                            fontWeight:"bold",
                            backgroundColor:"#1d1d2c", 
                            color:"white", 
                            border:"#1d1d2c solid 2px"
                        }}
                    >
                        Siapa yang dapat memberikan rekomendasi untuk saya? 
                        berapa banyak rekomendasi yang diperlukan?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style=
                    {{
                        width:"100%",
                        fontFamily:"Lato", 
                        fontSize:"0.6em",
                        backgroundColor:"white", 
                        color:"#1d1d2c"
                    }}
                >
                    <p>
                        Pemberi rekomendasi pada umumnya adalah orang yang pendaftar yakini dapat memberikan pendapat obyektif terhadap motivasi, visi, dan kemampuan dari pendaftar. Idealnya, pemberi rekomendasi adalah seorang dosen atau pembimbing dalam konteks profesional, akademis, atau dalam kegiatan sosial kemasyarakatan. Kami menerima 
                        hingga maksimum tiga surat rekomendasi yang digabung ke dalam 1 file.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton 
                        style=
                        {{
                            fontFamily:"Ubuntu", 
                            fontSize:"0.7em",
                            fontWeight:"bold",
                            backgroundColor:"#1d1d2c", 
                            color:"white", 
                            border:"#1d1d2c solid 2px", 
                            borderRadius:"10px",
                            borderTopRightRadius:"0px",
                            borderTopLeftRadius:"0px",
                        }}
                    >
                        Saya masih memiliki pertanyaan spesifik, 
                        bagaimana cara saya menkontak panitia?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style=
                    {{
                        width:"100%",
                        fontFamily:"Lato", 
                        fontSize:"0.6em",
                        backgroundColor:"white", 
                        color:"#1d1d2c"
                    }}
                >
                    <p> 
                        Kamu dapat menghubungi tim dari pemimpin.id yang bertanggung jawa menjalankan program ini, Reza melalui 
                        Oktora (0811 1699 930).
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}