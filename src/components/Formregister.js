import React, { Component } from 'react'
import { Message, Header, Container, Form, Input, TextArea, Select, Divider } from 'semantic-ui-react';

// import axios from 'axios';

import Navbar from '../Navbar';

// sexOptions dropdown
const sexOptions = [
  { key: 'm', text: 'Male', value: 'Laki-laki' },
  { key: 'f', text: 'Female', value: 'Perempuan' },
]

// scolarshipOption dropdown
const scholarshipOptions = [
  { key: 'bm', text: 'Bidik Misi', value: 'Bidik Misi' },
  { key: 'rk', text: 'Rumah Kepemimpinan', value: 'Rumah Kepemimpinan' },
  { key: 'bn', text: 'Bakti Nusa', value: 'Bakti Nusa' },
  { key: 'be', text: 'Beastudi Etos', value: 'Beastudi Etos' },
  { key: 'kse', text: 'Karya Salemba Empat', value: 'Karya Salemba Empat' },
  { key: 'ksyb', text: 'Kader Surau YBM BRI', value: 'Kader Surau YBM BRI' },
  { key: 'ls', text: 'LAZ Salman', value: 'LAZ Salman' }
]

// universityOptions dropdown
const universityOptions = [
  { key: '1', text: 'Universitas Indonesia', value: 'Universitas Indonesia' },
  { key: '2', text: 'Institut Pertanian Bogor', value: 'Institut Pertanian Bogor' },
  { key: '3', text: 'Universitas Negeri Jakarta', value: 'Universitas Negeri Jakarta' },
  { key: '4', text: 'Institut Teknologi Bandung', value: 'Institut Teknologi Bandung' },
  { key: '5', text: 'Universitas Padjajaran', value: 'Universitas Padjajaran' },
  { key: '6', text: 'Universitas Pendidikan Indonesia', value: 'Universitas Pendidikan Indonesia' },
  { key: '7', text: 'Lainnya', value: 'Lainnya' }
]

// essaytopicOptions dropdown
const essaytopicOptions = [
  { key: 'pen', text: 'Pendidikan', value: 'Pendidikan' },
  { key: 'ks', text: 'Kesejahteraan Sosial', value: 'Kesejahteraan Sosial' },
  { key: 'kep', text: 'Kepemimpinan', value: 'Kepemimpinan' },
  { key: 'ling', text: 'Linkungan', value: 'Linkungan' },
  { key: 'mb', text: 'Manajemen Bencana', value: 'Manajemen Bencana' },
  { key: 'it', text: 'IT, Teknologi Terapan, dan Inovasi', value: 'IT, Teknologi Terapan, dan Inovasi' }
]

class Formregister extends Component {
  state = { 
    username: "",
    nickname: "",
    birth_place: "",
    birth_date: "",
    address: "",
    email: "",
    phone: "",
    photo: "",
    emergency_phone: "",
    social_media: "",
    religion: "",
    hobby: "",
    sex: "",
    scholarship: "",
    scholarship_other: "",
    recommendation_paper: "",
    competencies: "",
    achievements: "",
    scientific_works: "",
    university_id: "",
    faculty: "",
    score: "",
    essay_topic: "",
    essay_topic_other: "",
    proposed_essay: "",
    submittedName: "", 
    submittedNickname: "", 
    submittedBirth_place: "", 
    submittedBirth_date: "",
    submittedAddress: "", 
    submittedEmail: "", 
    submittedPhone: "", 
    submittedEmegency_Phone: "", 
    submittedSocial_media: "", 
    submittedReligion: "", 
    submittedHobby: "", 
    submittedScholarship: "", 
    submittedSex: "", 
    submittedScientific_works: "", 
    submittedCompetencies: "", 
    submittedAchievements: "", 
    submittedRecommendation_paper: "", 
    submittedUniversity_id: "",
    submittedProposed_essay: "", 
    submittedEssay_topic: "", 
    submittedScore: "", 
    submittedFaculty: "",
    errors: [],
    loading: false
   };

  displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = (e, { name, value }) => this.setState({ [name]: value});

  handleSexDropdown = (e, { value }) => this.setState({ sex: value });
  handleScholarshipDropdown = (e, { value }) => this.setState({ scholarship: value });
  handleUnivDropdown = (e, { value }) => this.setState({ university_id: value });
  handleEssayDropdown = (e, { value }) => this.setState({ essay_topic: value });

  handleFormSubmit = () => {
    const { 
      username, nickname, birth_place, birth_date, address, email, phone, emergency_phone, social_media, religion, hobby, scholarship, scholarship_other,  sex, scientific_works, competencies, achievements, recommendation_paper, university_id, photo, proposed_essay, essay_topic, essay_topic_other, score, faculty } = this.state;

    this.setState({ 
      username: "",
      nickname: "",
      birth_place: "",
      birth_date: "",
      address: "",
      email: "",
      phone: "",
      emergency_phone: "",
      social_media: "",
      religion: "",
      hobby: "",
      sex: "",
      submittedName: username,
      submittedNickname: nickname,
      submittedBirth_place: birth_place,
      submittedBirth_date: birth_date,
      submittedAddress: address,
      submittedEmail: email,
      submittedPhone: phone,
      submittedEmegency_Phone: emergency_phone,
      submittedSocial_media: social_media,
      submittedReligion: religion,
      submittedHobby: hobby,
      submittedSex: sex,
      submittedScholarship: scholarship,
      submittedScholarship_Other: scholarship_other,
      submittedScientific_works: scientific_works,
      submittedCompetencies: competencies,
      submittedAchievements: achievements,
      submittedRecommendation_paper: recommendation_paper,
      submittedUniversity_id: university_id,
      submittedPhoto: photo,
      submittedProposed_essay: proposed_essay,
      submittedEssay_topic: essay_topic,
      submittedEssay_topic_other: essay_topic_other,
      submittedScore: score,
      submittedFaculty: faculty
     })
  }

  // formisValid = ({ username, email, university, question }) => username && email && university && question;

  handleInputError = (errors, inputName) => {
    return errors.some(error =>
        error.message.toLowerCase().includes(inputName)
    )
        ? 'error'
        : '';
  };

  render() {
    const { 
      username, nickname, birth_place, birth_date, address, email, phone, emergency_phone, social_media, religion, hobby, scholarship, scholarship_other, sex, scientific_works, competencies, achievements, university_id, essay_topic, essay_topic_other, score, faculty, 
      submittedName,
      submittedNickname,
      submittedBirth_place,
      submittedBirth_date,
      submittedAddress,
      submittedEmail,
      submittedPhone,
      submittedEmegency_Phone,
      submittedSocial_media,
      submittedReligion,
      submittedHobby,
      submittedScholarship,
      submittedScholarship_Other,
      submittedSex,
      submittedScientific_works,
      submittedCompetencies,
      submittedAchievements,
      submittedRecommendation_paper,
      submittedUniversity_id,
      submittedProposed_essay,
      submittedEssay_topic,
      submittedEssay_topic_other,
      submittedScore,
      submittedFaculty,
      loading, 
      errors 
    } = this.state;

    return (
      <div className="web-container">
        <Navbar/>

        {/* Pages Header */}
        <div className="pages-header">
          <div className="pages-header_header">
            <div className="pages-header_content">
              Form Pendaftaran
            </div>
          </div>
        </div>

        <Container style={{marginTop:"-1em"}} text textAlign='justified'>
          <Form style={{marginBottom: "3em", marginTop:"3em"}} unstackable onSubmit={this.handleFormSubmit}>

          {/* Form UMUM Section */}
          <Header>UMUM</Header>
            <Form.Group widths='equal'>
              <Form.Field
                name="username"
                control={Input}
                label='Nama Lengkap'
                value={username}
                placeholder='contoh : Yonathan Evan C.' 
                onChange={this.handleChange}
                className={this.handleInputError(errors, 'username')}
              />
              <Form.Field
                name="nickname"
                control={Input}
                label='Nama Panggilan'
                value={nickname}
                placeholder='contoh: Evan'
                onChange={this.handleChange}
                className={this.handleInputError(errors, 'nickname')}
              />
              <Form.Field
                control={Select}
                options={sexOptions}
                label={{ children: 'Jenis Kelamin', htmlFor: 'form-select-control-gender' }}
                placeholder='Laki-laki/Perempuan'
                search
                onChange={this.handleSexDropdown}
              
                value={sex}
                searchInput={{ id: 'form-select-control-gender' }}
              />
            </Form.Group>
            {/* <Form.Field
              name="photo"
              control={Input}
              label='Pas Photo'
              value={photo}
              placeholder='Upload Pas Photo'
            /> */}
            <Form.Group widths='equal'>
              <Form.Field
                  name="birth_place"
                  control={Input}
                  label='Tempat Lahir'
                  value={birth_place}
                  placeholder='contoh : Jakarta'
                  onChange={this.handleChange}
                
                />
                <Form.Field
                  control={Input}
                  label='Tanggal Lahir'
                  value={birth_date}
                  placeholder='contoh : 16041996'
                  name="birth_date"
                  onChange={this.handleChange}
                
                />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label='Alamat'
              value={address}
              placeholder='contoh : Jl. Kuningan 1 no. 25, Jakarta Pusat, 13150'
              name="address"
              onChange={this.handleChange}
            
            />
            <Form.Group widths='equal'>
              <Form.Field
                id='form-input-control-email'
                control={Input}
                label='Email'
                value={email}
                placeholder='contoh : nathan@gmail.com'
                name="email"
                type="email"
                onChange={this.handleChange}
              
              />
              <Form.Field
                control={Input}
                label='Nomor Hp'
                value={phone}
                placeholder='contoh : 08123412341234'
                name="phone"
                type="number"
                onChange={this.handleChange}
              
              />
              <Form.Field
                control={Input}
                label='Nomor Telepon Darurat'
                value={emergency_phone}
                placeholder='contoh : 08123412341234'
                name="emergency_phone"
                type="number"
                onChange={this.handleChange}
              
              />
            </Form.Group>
            <Form.Field
              id='form-input-control-sosmed'
              control={Input}
              label='Instagram account'
              value={social_media}
              placeholder='contoh : yonathan.evan'
              name="social_media"
              type="username"
              onChange={this.handleChange}
            />
            <Form.Group widths='equal'>  
              <Form.Field
                id='form-input-control-religion'
                control={Input}
                label='Agama'
                value={religion}
                placeholder='contoh : Kristen Protestan'
                name="religion"
                type="username"
                onChange={this.handleChange}
              />
              <Form.Field
                id='form-input-control-hobby'
                control={Input}
                label='Hobby'
                value={hobby}
                placeholder='contoh : Programming, dan Hiking'
                name="hobby"
                type="username"
                onChange={this.handleChange}
              
              />
            </Form.Group>

            <Divider/>

            {/* Form KOMPETENSI Section */}
            <Header>KOMPETENSI</Header>

            <Form.Field
              id='form-input-control-competencies'
              control={Input}
              label='Kompetensi'
              value={competencies}
              placeholder='contoh : Design Grafis, Riset Kualitatif, dll'
              name="competencies"
              type="username"
              onChange={this.handleChange}
            />
            <Form.Field
              id='form-input-control-achievements'
              control={TextArea}
              label='3 prestasi terbaik'
              value={achievements}
              placeholder='contoh : Pencapaian | Penyelenggara | Tahun'
              name="achievements"
              onChange={this.handleChange}
            
            />
            <Form.Field
              id='form-input-control-scientific-works  '
              control={TextArea}
              label='Karya Ilmiah yang pernah dipublikasikan'
              value={scientific_works}
              placeholder='contoh : Judul Karya Ilmiah | Tahun'
              name="scientific_works"
              type="username"
              onChange={this.handleChange}
            />
            <Form.Group widths='equal'>
              <Form.Field
                control={Select}
                options={scholarshipOptions}
                label={{ children: 'Pilih Beasiswamu', htmlFor: 'form-select-control-beasiswa' }}
                placeholder='Bidik Misi'
                search
                onChange={this.handleScholarshipDropdown}             
                value={scholarship}
                searchInput={{ id: 'form-select-control-beasiswa'}}
              />
              <Form.Field
                control={Input}
                value={scholarship_other}
                placeholder='Masukan Beasiswamu'
                label="Beasiswa Lainnya"
                name="scholarship_other"
                type="username"
                onChange={this.handleChange}
              />
              {/* <Form.Field
                id='form-input-control-scholarship'
                control={Input}
                value={scholarship}
                placeholder='Upload Surat Beasiswa'
                label="Upload Surat Beasiswa"
                name="scholarship"
                type="username"
                onChange={this.handleChange}
              
              /> */}
            </Form.Group>
            {/* <Form.Field
              id='form-input-control-recom-paper'
              control={Input}
              value={recommendation_paper}
              placeholder='Upload Surat Rekomendasi'
              name="recom-paper"
              onChange={this.handleChange}
            
            /> */}

            <Divider />

            {/* Form AKADEMIK Section */}
            <Header>AKADEMIK</Header>

            <Form.Group widths='equal'>
              <Form.Field
                control={Select}
                options={universityOptions}
                label={{ children: 'Daftar Universitas', htmlFor: 'form-select-control-university' }}
                placeholder='Pilih Universitas'
                search
                onChange={this.handleUnivDropdown}           
                value={university_id}
                searchInput={{ id: 'form-select-control-university' }}
              />
              <Form.Field
                control={Input}
                value={faculty}
                placeholder='contoh : Digital Design'
                label='Fakultas'
                name="faculty"
                type="username"
                onChange={this.handleChange}                
              />
              <Form.Field
                control={Input}
                value={score}
                placeholder='contoh : 3.52 / 4.00'
                label='IPK'
                name="score"
                type="number"
                onChange={this.handleChange}           
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field
                control={Select}
                options={essaytopicOptions}
                label={{ children: 'Topik Skripsi', htmlFor: 'form-select-control-essay-topic' }}
                placeholder='Pilih Topik'
                search
                onChange={this.handleEssayDropdown}              
                value={essay_topic}
                searchInput={{ id: 'form-select-control-essay-topic' }}
              />
              <Form.Field
                control={Input}
                value={essay_topic_other}
                placeholder='contoh : Genetika'
                label='Topik Lainnya'
                name="essay_topic_other"
                type="username"
                onChange={this.handleChange}
              />
              {/* <Form.Field
                id='form-input-control-essay-topic'
                control={Input}
                value={score}
                placeholder='upload draft proposal'
                label='Upload Draft Proposal'
                name="essay_topic-proposal"
                required
              /> */}
              </Form.Group>
            <Form.Button 
              style={{
                background:"#e40c2b", 
                color:"#fff", 
                marginBottom: "1em", 
                marginTop: "1em",
                width: "100%"
              }}
              size="medium" 
              content='Kirim Data'
              disabled={loading}
              className={loading ? 'loading' : ''}
              />
          </Form>
              {errors.length > 0 && (
                <Message error>
                    <h3>Error</h3>
                    {this.displayErrors(errors)}
                </Message>
              )}
          
          <strong>onChange:</strong>
          <pre>{JSON.stringify({ username, nickname, birth_place, birth_date, address, email, phone, emergency_phone, social_media, religion, hobby, scholarship, scholarship_other, sex, scientific_works, competencies, achievements, university_id, essay_topic, essay_topic_other, score, faculty }, null, 20)}</pre>
          <strong>dataSubmitted:</strong>
          <pre>{JSON.stringify({ submittedName, submittedNickname, submittedBirth_place, submittedBirth_date,submittedAddress, submittedEmail, submittedPhone, submittedEmegency_Phone, submittedSocial_media, submittedReligion, submittedHobby, submittedScholarship, submittedScholarship_Other, submittedSex, submittedScientific_works,submittedCompetencies, submittedAchievements, submittedRecommendation_paper, submittedUniversity_id,submittedProposed_essay, submittedEssay_topic,submittedEssay_topic_other, submittedScore, submittedFaculty }, null, 20)}</pre>
        </Container>
      </div>
    );
  }
}

export default Formregister;