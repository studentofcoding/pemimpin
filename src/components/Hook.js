// ? Class Components
// state + setState(...)

// ? Functional Components
// useState(...)

import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Message, Header, Container, Form, Input, TextArea, Select, Divider } from 'semantic-ui-react';
import dateFormat from'dateformat';
import axios from 'axios';
import config from '../config';

import Navbar from '../Navbar';
import Footer from './Footer';

import './Formregister.css';

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
  { key: 'h', text: 'Forum Indonesia Muda', value: 'Forum Indonesia Muda' },
  { key: 'i', text: 'Lainnya', value: '' }
]

// universityOptions dropdown
// TODO Value ambil dari API Database
// const universityOptions = [
//   { key: '1', text: 'Universitas Indonesia', value: 'Universitas Indonesia' },
//   { key: '2', text: 'Institut Pertanian Bogor', value: 'Institut Pertanian Bogor' },
//   { key: '3', text: 'Universitas Negeri Jakarta', value: 'Universitas Negeri Jakarta' },
//   { key: '4', text: 'Institut Teknologi Bandung', value: 'Institut Teknologi Bandung' },
//   { key: '5', text: 'Universitas Padjajaran', value: 'Universitas Padjajaran' },
//   { key: '6', text: 'Universitas Pendidikan Indonesia', value: 'Universitas Pendidikan Indonesia' },
//   { key: '7', text: 'Lainnya', value: '' }
// ]

const UNIVERSITY_MAP = [
  {'Universitas Indonesia': 1},
  {'Institut Pertanian Bogor': 2},
  {'Universitas Negeri Jakarta': 3},
  {'Insitut Teknologi Bandung': 4},
  {'Universitas Padjajaran': 5},
  {'Universitas Pendidikan Indonesia': 6}
]

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
  university: "",
  university_id: "",
  university_list: "",
  university_other: "",
  university_letter: "",
  scholarship_letter: "",
  faculty: "",
  score: "",
  essay_topic: "",
  essay_topic_other: "",
  proposed_essay: "",
  head_essay: "",
  errors: [],
  loading: false,
  submit: false,
 };

const Formregisterhook = props => {
  const [ state, setState ] = useState({ initialState });

  useState(() => {
    const univFetch = fetch('http://fellowship.pemimpin.id:3003/api/v1/universities')
    // university_list state
    univFetch.then(res => {
      if( res.status === 200)
      return res.json() 
    }).then( univJson => {
      const universityList = univJson.data.map(univ => ({
        key: univ.id.toString(),
        text: univ.name,
        value: univ.name
      }));

      setState({
        ...state,
        university_list: universityList
      })
      console.log(universityList);
    })
  })

  
  const displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>);
  const handleChange = (e, { name, value }) => setState({ ...state, [name]: value});
  const handleDateBirth = (date) => setState({...state, birth_date:date })
  const handleAchievement = (idx,value) => {
    let acv = state.achievements
    acv[idx] = value
    setState({ achievements: acv})
  };
  const handleSexDropdown = (e, { value }) => setState({ ...state, sex: value });
  const handleScholarshipDropdown = (e, { value }) => setState({ ...state, scholarship: value });
  // const handleUnivDropdown = (e, { value }) => setState({ ...state, university_id: value });
  const handleUnivDropdown = (e, { value }) => setState({ ...state, university: value });
  const handleEssayDropdown = (e, { value }) => setState({ ...state, essay_topic: value });

  const onUploadChange = (e, {name}) =>{
    const files=e.target.files;
    console.warn("data file", name ,files)
    setState({ ...state, [name]:files[0] });
  }

  const handleFormSubmit = () => {
    setState({ ...state, loading: true});

    const formData = new FormData();
    formData.set('name', state.username)
    formData.set('nickname', state.nickname)
    formData.set('birth_place', state.birth_place)
    formData.set('birth_date', dateFormat(state.birth_date, "yyyy-mm-dd'T'hh:mm:ss"))
    formData.set('address', state.address)
    formData.set('email', state.email)
    formData.set('phone', state.phone)
    formData.set('social_media', state.social_media)
    formData.set('emergency_phone', state.emergency_phone)
    formData.set('religion', state.religion)
    formData.set('sex', state.sex)
    formData.set('hobby', state.hobby)
    formData.set('competencies', state.competencies)
    // formData.set('achievements', state.achievements.join("\n"))
    formData.set('scientific_works', state.scientific_works)
    formData.set('scholarships', state.scholarship || state.scholarship_other)
    formData.set('faculty', state.faculty)
    formData.set('score', state.score)
    formData.set('essay_topic', state.essay_topic || state.essay_topic_other)
    formData.set('head_essay', state.head_essay)
    // formData.set('universities_id', UNIVERSITY_MAP[state.university_id])
    formData.set('university', UNIVERSITY_MAP[state.university])
    formData.set('university_other', state.university_other)
    // UPLOAD FILE
    formData.set('proposed_essay', state.proposed_essay)
    formData.set('university_letter', state.university_letter)
    formData.set('scholarship_letter', state.scholarship_letter)
    formData.set('photo', state.photo)
    formData.set('recommendation_paper', state.recommendation_paper)

    axios({
      method: 'POST',
      url: config.endpoint + '/api/v1/registration',
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    }).then((response) => {
      // TODO, show to user that request is success
      setState({ ...state, initialState, submit:true});
      setState({ ...state, loading: false});
      // Hide message after 3s
      setTimeout(() => setState({ ...state, submit:false}), 3000);
      console.log('request success')
    }).catch((response) => {
      // TODO, show to user that request is failed
      setState({ ...state, errors:[response]})
      setState({ ...state, loading: false});
      console.log('request failed', response)
    });
  }

  // const handleInputError = (errors, inputName) => {
  //   return errors.some(error =>
  //       error.message.toLowerCase().includes(inputName)
  //   )
  //       ? 'error'
  //       : '';
  // };

    console.log(state,"currentState");
    const {
      username, nickname, birth_place, birth_date, address, email, phone, emergency_phone, social_media, religion, hobby, scholarship, scholarship_other, sex, scientific_works, competencies, achievements, university, university_id, university_list, university_other, essay_topic, essay_topic_other,score, faculty, recommendation_paper, proposed_essay, head_essay, photo, scholarship_letter, university_letter,
      loading,
      errors,
      submit
    } = state;

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
        <Form style={{marginBottom: "3em", marginTop:"3em"}} unstackable onSubmit={handleFormSubmit}>

        {/* Form UMUM Section */}
        <Header>UMUM</Header>
          <Form.Group widths='equal'>
            <Form.Field
              name="username"
              control={Input}
              label='Nama Lengkap'
              value={username}
              placeholder='contoh : Yonathan Evan C.'
              onChange={handleChange}
              required
            />
            <Form.Field
              name="nickname"
              control={Input}
              label='Nama Panggilan'
              value={nickname}
              placeholder='contoh: Evan'
              onChange={handleChange}
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
              onChange={handleSexDropdown}
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
              onChange={onUploadChange}
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
                onChange={handleChange}
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
                  onChange={ handleDateBirth }
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
            onChange={handleChange}
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
              onChange={handleChange}
              required
            />
            <Form.Field
              control={Input}
              label='Nomor Hp'
              value={phone}
              placeholder='contoh : 08123412341234'
              name="phone"
              type="number"
              onChange={handleChange}
              required
            />
            <Form.Field
              control={Input}
              label='Nomor Telepon Darurat'
              value={emergency_phone}
              placeholder='contoh : 08123412341234'
              name="emergency_phone"
              type="number"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Field
            id='form-input-control-sosmed'
            control={Input}
            label='Instagram Account'
            value={social_media}
            placeholder='contoh : yonathan.evan'
            name="social_media"
            type="username"
            onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
            onChange={handleChange}
            required
          />
          {/* Jika dia memilih scholarship lainnya (length-1) valuenya menjadi scholarship_other */}
          {/* {achievements.map((element,idx) => {
            const labels = idx === 0 ? '3 Prestasi Terbaik' : "";
            return(<Form.Field
              key={'form-input-control-achievements_'+(idx+1)}
              id={'form-input-control-achievements_'+(idx+1)}
              control={Input}
              label={labels}
              value={achievements[idx]}
              placeholder='contoh : Nama Pencapaian | Penyelenggara | Tahun'
              name={"achievements_"+(idx+1)}
              onChange={ (e, {name,value}) => handleAchievement(idx,value)}
              required
            />)
          })} */}
          <Form.Field
            id='form-input-control-scientific-works  '
            control={TextArea}
            label='Karya Ilmiah Yang Pernah Dipublikasikan'
            value={scientific_works}
            placeholder='contoh : Judul Karya Ilmiah | Tahun'
            name="scientific_works"
            type="username"
            onChange={handleChange}
          />
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
            onChange={onUploadChange}
            />
          </Form.Field>
          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              options={scholarshipOptions}
              label={{ children: 'Beasiswa Yang Pernah Diterima', htmlFor: 'form-select-control-beasiswa' }}
              placeholder='Bidik Misi'
              search
              onChange={handleScholarshipDropdown}
              value={scholarship}
              searchInput={{ id: 'form-select-control-beasiswa'}}
              required
            />
            {/* Jika dia memilih scholarship lainnya (length-1) valuenya menjadi scholarship_other */}
            {scholarship === scholarshipOptions[scholarshipOptions.length-1].value && (
              <Form.Field
              control={Input}
              value={scholarship_other}
              placeholder='Masukan Beasiswamu'
              label="Beasiswa Lainnya"
              name="scholarship_other"
              type="username"
              onChange={handleChange}
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
              onChange={onUploadChange}
              />
            </Form.Field>
          </Form.Group>

          <Divider />

          {/* Form AKADEMIK Section */}
          <Header>AKADEMIK</Header>

          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              options={university_list}
              label={{ children: 'Daftar Universitas', htmlFor: 'form-select-control-university' }}
              placeholder='Pilih Universitas'
              search
              onChange={handleUnivDropdown}
              // value={university_id}
              value={university}
              searchInput={{ id: 'form-select-control-university' }}
              required
            />
            {/* {university_id === '' && university_list.value && (
              <Form.Field
              control={Input}
              value={university_other}
              placeholder='Universitas Lainnya'
              label="Universitas Lainnya"
              name="university_other"
              type="username"
              onChange={handleChange}
            />
            )} */}
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
              onChange={onUploadChange}
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
              onChange={handleChange}
              required
            />
            <Form.Field
              control={Input}
              value={score}
              placeholder='contoh : 3.52'
              label='IPK'
              name="score"
              type="number"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Field
            name="head_essay"
            control={TextArea}
            value={head_essay}
            placeholder='contoh : Dampak IOT terhadap akses Internet di masyarakat'
            label='Judul Skripsi'
            type="username"
            onChange={handleChange}
            required
          />
          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              options={essaytopicOptions}
              label={{ children: 'Topik Skripsi', htmlFor: 'form-select-control-essay-topic' }}
              placeholder='Pilih Topik'
              search
              onChange={handleEssayDropdown}
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
            onChange={handleChange}
          />
            )}
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            name="proposed_essay"
            control={Input}
            label='Upload Proposal Skripisi'
            value={proposed_essay}
            placeholder='Upload Proposal Skripisi'
            required
          >
            <Input
            type="file"
            name="proposed_essay"
            onChange={onUploadChange}
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
          disabled={loading}
          className={loading ? 'loading' : ''}
          >
            {loading ? 'Mengirim Datamu ke Server...' : 'Kirim Datamu'}
        </Form.Button>
        </Form>
            {/* {...state.errors.length > 0 && (
              <Message error>
                  <h3>Error</h3>
                  {displayErrors(errors)}
              </Message>
            )}
            {...state.errors.length < 1 && submit === true && (
              <Message
                success
                header='Welcome to Young Innovators Fellowship, Next Leader!'
                content='Kami akan memberi update ke-Emailmu jika kamu terpilih ke tahap selanjutnya.'
              />
            )} */}

        {/* <pre>{JSON.stringify({ username, nickname, birth_place, birth_date, address, email, phone, emergency_phone, social_media, religion, hobby, scholarship, scholarship_other, sex, scientific_works, competencies, achievements, university_id, essay_topic, essay_topic_other, score, faculty }, null, 20)}</pre> */}
        {/* <strong>dataSubmitted:</strong> */}
        {/* <pre>{JSON.stringify({ submittedName, submittedNickname, submittedBirth_place, submittedBirth_date,submittedAddress, submittedEmail, submittedPhone, submittedEmegency_Phone, submittedSocial_media, submittedReligion, submittedHobby, submittedScholarship, submittedScholarship_Other, submittedSex, submittedScientific_works,submittedCompetencies, submittedAchievements, submittedRecommendation_paper, submittedUniversity_id,submittedProposed_essay, submittedEssay_topic,submittedEssay_topic_other, submittedScore, submittedFaculty }, null, 20)}</pre> */}
      </Container>
      <Footer />
    </div>
  )
}


export default Formregisterhook;

