import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Message, Header, Container, Form, Input, TextArea, Select, Divider } from 'semantic-ui-react';
import dateFormat from'dateformat';
import axios from 'axios';
import config from '../config'

import Navbar from '../Navbar';
import Footer from './Footer';

// sexOptions dropdown
const sexOptions = [
  { key: 'm', text: 'Male', value: 'Male' },
  { key: 'f', text: 'Female', value: 'Female' },
]

// scolarshipOption dropdown
const scholarshipOptions = [
  { key: 'a', text: 'Bidik Misi', value: 'Bidik Misi' },
  { key: 'b', text: 'Rumah Kepemimpinan', value: 'Rumah Kepemimpinan' },
  { key: 'c', text: 'Bakti Nusa', value: 'Bakti Nusa' },
  { key: 'd', text: 'Beastudi Etos', value: 'Beastudi Etos' },
  { key: 'e', text: 'Karya Salemba Empat', value: 'Karya Salemba Empat' },
  { key: 'f', text: 'Kader Surau YBM BRI', value: 'Kader Surau YBM BRI' },
  { key: 'g', text: 'LAZ Salman', value: 'LAZ Salman' },
  { key: 'h', text: 'Lainnya', value: '' }
]

// universityOptions dropdown
const universityOptions = [
  { key: '1', text: 'Universitas Indonesia', value: 'Universitas Indonesia' },
  { key: '2', text: 'Institut Pertanian Bogor', value: 'Institut Pertanian Bogor' },
  { key: '3', text: 'Universitas Negeri Jakarta', value: 'Universitas Negeri Jakarta' },
  { key: '4', text: 'Institut Teknologi Bandung', value: 'Institut Teknologi Bandung' },
  { key: '5', text: 'Universitas Padjajaran', value: 'Universitas Padjajaran' },
  { key: '6', text: 'Universitas Pendidikan Indonesia', value: 'Universitas Pendidikan Indonesia' },
  { key: '7', text: 'Lainnya', value: '' }
]
const UNIVERSITY_MAP = {
  'Universitas Indonesia': 1,
  'Institut Pertanian Bogor': 2,
  'Universitas Negeri Jakarta': 3,
  'Institut Teknologi Bandung': 4,
  'Universitas Padjajaran': 5,
  'Universitas Pendidikan Indonesia': 6,
  '': 7
}

// essaytopicOptions dropdown
const essaytopicOptions = [
  { key: 'a', text: 'Pendidikan', value: 'Pendidikan' },
  { key: 'b', text: 'Kesejahteraan Sosial', value: 'Kesejahteraan Sosial' },
  { key: 'c', text: 'Kepemimpinan', value: 'Kepemimpinan' },
  { key: 'd', text: 'Linkungan', value: 'Linkungan' },
  { key: 'e', text: 'Manajemen Bencana', value: 'Manajemen Bencana' },
  { key: 'f', text: 'IT, Teknologi Terapan, dan Inovasi', value: 'IT, Teknologi Terapan, dan Inovasi' },
  { key: 'g', text: 'Lainnya', value: '' }
]

const initialState = {
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
  achievements: ["","",""],
  scientific_works: "",
  university_id: "",
  university_letter: "",
  scholarship_letter: "",
  faculty: "",
  score: "",
  essay_topic: "",
  essay_topic_other: "",
  proposed_essay: "",
  errors: [],
  loading: false
 };

class Formregister extends Component {
  state = initialState

  displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>);
  handleChange = (e, { name, value }) => this.setState({ [name]: value});
  handleDateBirth = (date) => this.setState({birth_date:date})
  handleAchievment = (idx,value) => {
    this.state.achievements[idx] = value
    this.setState({ achievements: this.state.achievements})
  };
  handleSexDropdown = (e, { value }) => this.setState({ sex: value });
  handleScholarshipDropdown = (e, { value }) => this.setState({ scholarship: value });
  handleUnivDropdown = (e, { value }) => this.setState({ university_id: value });
  handleEssayDropdown = (e, { value }) => this.setState({ essay_topic: value });

  onUploadChange = (e, {name}) =>{
    const files=e.target.files;
    console.warn("data file", name ,files)
    this.setState({[name]:files[0]});
  }

  successRegisnotif = () => {
    return (
      <Message
        success
        header='Welcome to Young Innovators Fellowship, Next Leader!'
        content='Kami akan memberi update jika kamu terpilih ke tahap selanjutnya.'
      />
    );
  }

  handleFormSubmit = () => {

    const formData = new FormData();
    formData.set('name', this.state.username)
    formData.set('nickname', this.state.nickname)
    formData.set('birth_place', this.state.birth_place)
    formData.set('birth_date', dateFormat(this.state.birth_date, "yyyy-mm-dd'T'hh:mm:ss"))
    formData.set('address', this.state.address)
    formData.set('email', this.state.email)
    formData.set('phone', this.state.phone)
    formData.set('social_media', this.state.social_media)
    formData.set('emergency_phone', this.state.emergency_phone)
    formData.set('religion', this.state.religion)
    formData.set('sex', this.state.sex)
    formData.set('hobby', this.state.hobby)
    formData.set('competencies', this.state.competencies)
    formData.set('achievements', this.state.achievements.join("\n"))
    formData.set('scientific_works', this.state.scientific_works)
    formData.set('scholarships', this.state.scholarship || this.state.scholarship_other)
    formData.set('faculty', this.state.faculty)
    formData.set('score', this.state.score)
    formData.set('essay_topic', this.state.essay_topic || this.state.essay_topic_other)
    formData.set('universities_id', UNIVERSITY_MAP[this.state.university_id])
    // UPLOAD FILE
    formData.set('proposed_essay', this.state.proposed_essay)
    formData.set('university_letter', this.state.university_letter)
    formData.set('scholarship_letter', this.state.scholarship_letter)
    formData.set('photo', this.state.photo)
    formData.set('recommendation_paper', this.state.recommendation_paper)

    axios({
      method: 'POST',
      url: config.endpoint + '/api/v1/registration',
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    }).then((response) => {
      // TODO, show to user that request is success
      this.setState(initialState);
      console.log('request success')
    }).catch((response) => {
      // TODO, show to user that request is failed
      this.setState({errors:[response]})
      console.log('request failed', response)
    });
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
    console.log(this.state,"currentState");
    const {
      username, nickname, birth_place, birth_date, address, email, phone, emergency_phone, social_media, religion, hobby, scholarship, scholarship_other, sex, scientific_works, competencies, achievements , university_id, essay_topic, essay_topic_other,score, faculty, recommendation_paper, proposed_essay, photo, scholarship_letter, university_letter,
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
                required
              />
              <Form.Field
                name="nickname"
                control={Input}
                label='Nama Panggilan'
                value={nickname}
                placeholder='contoh: Evan'
                onChange={this.handleChange}
                className={this.handleInputError(errors, 'nickname')}
                required
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field
                control={Select}
                options={sexOptions}
                label={{ children: 'Jenis Kelamin', htmlFor: 'form-select-control-gender' }}
                placeholder='Male/Female'
                search
                onChange={this.handleSexDropdown}
                value={sex}
                searchInput={{ id: 'form-select-control-gender' }}
                required
              />
              <Form.Field
                name="photo"
                control={Input}
                label='Pas Photo'
                value={photo}
                placeholder='Upload Pas Photo 3x4'
                required
              >
                <Input
                type="file"
                name="photo"
                onChange={this.onUploadChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field
                  name="birth_place"
                  control={Input}
                  label='Tempat Lahir'
                  value={birth_place}
                  placeholder='contoh : Jakarta'
                  onChange={this.handleChange}
                  required
                />
                <Form.Field
                  control={Input}
                  label='Tanggal Lahir'
                  required
                >
                  <div style={{display:"inline-block"}}>
                  <DatePicker
                    selected={ birth_date }
                    onChange={ this.handleDateBirth }
                    name="birth_date"
                    placeholderText='contoh : 1996-04-16 (YYYY-MM-DD)'
                    dateFormat="yyyy-MM-dd hh:mm:ss"
                  />
                  </div>
                </Form.Field>
            </Form.Group>
            <Form.Field
              control={TextArea}
              label='Alamat'
              value={address}
              placeholder='contoh : Jl. Kuningan 1 no. 25, Jakarta Pusat, 13150'
              name="address"
              onChange={this.handleChange}
              required
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
                required
              />
              <Form.Field
                control={Input}
                label='Nomor Hp'
                value={phone}
                placeholder='contoh : 08123412341234'
                name="phone"
                type="number"
                onChange={this.handleChange}
                required
              />
              <Form.Field
                control={Input}
                label='Nomor Telepon Darurat'
                value={emergency_phone}
                placeholder='contoh : 08123412341234'
                name="emergency_phone"
                type="number"
                onChange={this.handleChange}
                required
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
              required
            />
            <Form.Group widths='equal'>
              <Form.Field
                id='form-input-control-religion'
                control={Input}
                label='Agama'
                value={religion}
                placeholder='contoh : Islam'
                name="religion"
                type="username"
                onChange={this.handleChange}
                required
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
                required
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
              required
            />
            {achievements.map( (element,idx) => {
              const labels = idx === 0 ? '3 prestasi terbaik' : "";
              return(<Form.Field
                key={'form-input-control-achievements_'+(idx+1)}
                id={'form-input-control-achievements_'+(idx+1)}
                control={Input}
                label={labels}
                value={achievements[idx]}
                placeholder='contoh : Nama Pencapaian | Penyelenggara | Tahun'
                name={"achievements_"+(idx+1)}
                onChange={ (e, {name,value}) => this.handleAchievment(idx,value)}
                required
              />)
            })}
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
                label={{ children: 'Beasiswa yang pernah diterima', htmlFor: 'form-select-control-beasiswa' }}
                placeholder='Bidik Misi'
                search
                onChange={this.handleScholarshipDropdown}
                value={scholarship}
                searchInput={{ id: 'form-select-control-beasiswa'}}
                required
              />
              {scholarship === scholarshipOptions[scholarshipOptions.length-1].value && (
                <Form.Field
                control={Input}
                value={scholarship_other}
                placeholder='Masukan Beasiswamu'
                label="Beasiswa Lainnya"
                name="scholarship_other"
                type="username"
                onChange={this.handleChange}
              />
              )}
              <Form.Field
                name="scholarship_letter"
                control={Input}
                label='Surat Pernyataan Beasiswa'
                value={scholarship_letter}
                placeholder='Upload Surat Pernyataan Beasiswa'
                required
              >
                <Input
                type="file"
                name="scholarship_letter"
                onChange={this.onUploadChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field
              name="recommendation_paper"
              control={Input}
              label='Surat Rekomendasi'
              value={recommendation_paper}
              placeholder='Upload Surat Rekomendasi'
            >
              <Input
              type="file"
              name="recommendation_paper"
              onChange={this.onUploadChange}
              />
            </Form.Field>

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
                required
              />
              <Form.Field
                name="university_letter"
                control={Input}
                label='Upload KTM'
                value={university_letter}
                placeholder='Upload KTM'
                required
              >
                <Input
                type="file"
                name="university_letter"
                onChange={this.onUploadChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field
                control={Input}
                value={faculty}
                placeholder='contoh : Digital Design'
                label='Fakultas / Jurusan'
                name="faculty"
                type="username"
                onChange={this.handleChange}
                required
              />
              <Form.Field
                control={Input}
                value={score}
                placeholder='contoh : 3.52'
                label='IPK'
                name="score"
                type="number"
                onChange={this.handleChange}
                required
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
                required
              />
              {essay_topic === essaytopicOptions[essaytopicOptions.length-1].value && (
                <Form.Field
                control={Input}
                value={essay_topic_other}
                placeholder='contoh : Genetika'
                label='Topik Lainnya'
                name="essay_topic_other"
                type="username"
                onChange={this.handleChange}
              />
              )}
              <Form.Field
                name="proposed_essay"
                control={Input}
                label='Upload Draft Essay'
                value={proposed_essay}
                placeholder='Upload Draft Essay'
                required
              >
                <Input
                type="file"
                name="proposed_essay"
                onChange={this.onUploadChange}
                />
              </Form.Field>
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

          {/* <pre>{JSON.stringify({ username, nickname, birth_place, birth_date, address, email, phone, emergency_phone, social_media, religion, hobby, scholarship, scholarship_other, sex, scientific_works, competencies, achievements, university_id, essay_topic, essay_topic_other, score, faculty }, null, 20)}</pre> */}
          {/* <strong>dataSubmitted:</strong> */}
          {/* <pre>{JSON.stringify({ submittedName, submittedNickname, submittedBirth_place, submittedBirth_date,submittedAddress, submittedEmail, submittedPhone, submittedEmegency_Phone, submittedSocial_media, submittedReligion, submittedHobby, submittedScholarship, submittedScholarship_Other, submittedSex, submittedScientific_works,submittedCompetencies, submittedAchievements, submittedRecommendation_paper, submittedUniversity_id,submittedProposed_essay, submittedEssay_topic,submittedEssay_topic_other, submittedScore, submittedFaculty }, null, 20)}</pre> */}
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Formregister;

