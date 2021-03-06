import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Message, Header, Container, Form, Input, TextArea, Select, Divider } from 'semantic-ui-react';
import dateFormat from'dateformat';
import axios from 'axios';
import config from '../../../config';

// import Navbar from '../components/Navbar';
// import Footer from './Footer';

import './Formregister.css';

// ? sexOptions dropdown
const sexOptions = [
  { key: 'm', text: 'Male', value: 'Male' },
  { key: 'f', text: 'Female', value: 'Female' },
]

// ? scolarshipOption dropdown
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

// ? essaytopicOptions dropdown
const essaytopicOptions = [
  { key: 'a', text: 'Pendidikan', value: 'Pendidikan' },
  { key: 'b', text: 'Kesejahteraan Sosial', value: 'Kesejahteraan Sosial' },
  { key: 'c', text: 'Kepemimpinan', value: 'Kepemimpinan' },
  { key: 'd', text: 'Lingkungan', value: 'Lingkungan' },
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
  university_list: "",
  university_other: "",
  university_letter: "",
  scholarship_letter: "",
  faculty: "",
  year_in: "",
  score: "",
  essay_topic: "",
  essay_topic_other: "",
  proposed_essay: "",
  head_essay: "",
  errors: [],
  isUnivlist_assign: false,
  loading: false,
  submit: false,
 };

class Formregister extends Component {
  state = initialState;

  componentDidMount() {
    const univFetch = fetch('http://fellowship.pemimpin.id:3003/api/v1/universities')
    // university_list state
    univFetch.then(res => {
      if( res.status === 200)
      return res.json() 
    }).then( univJson => {
      const universityList = univJson.data.map(univ => {
        let text = univ.name;
        if (!text) text = "Lainnya";
        return {
          key: univ.id.toString(),
          text: text,
          value: univ.id.toString()
        }
      })
      // ? set university_list value from API Database & use it in Dropdown 
      this.setState({
        university_list: universityList,
        isUnivlist_assign: true
      })

      console.log(this.state.university_list);
    })
  }
  
  displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>);
  handleChange = (e, { name, value }) => this.setState({ [name]: value});
  handleDateBirth = (date) => this.setState({birth_date:date})
  handleAchievement = (idx,value) => {
    let acv = this.state.achievements
    acv[idx] = value
    this.setState({ achievements: acv})
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

  handleFormSubmit = () => {
    this.setState({ loading: true, isUnivlist_assign: true });

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
    formData.set('year_in', this.state.year_in)
    formData.set('faculty', this.state.faculty)
    formData.set('score', this.state.score)
    formData.set('essay_topic', this.state.essay_topic || this.state.essay_topic_other)
    formData.set('head_essay', this.state.head_essay)
    formData.set('universities_id', this.state.university_id)
    formData.set('university_other', this.state.university_other)
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
      // ? Keep university_list value and Change the other states to Initial
      this.setState({ 
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
        university_other: "",
        university_letter: "",
        scholarship_letter: "",
        faculty: "",
        year_in: "",
        score: "",
        essay_topic: "",
        essay_topic_other: "",
        proposed_essay: "",
        head_essay: "",
        errors: [],
        loading: false,
        submit: true
      });
      this.setState({ loading: false});
      // ? Hide Success message after 3s
      setTimeout(() => this.setState({ submit:false }), 3000);
      console.log('request success')
    }).catch((response) => {
      // ? Show to user that request is failed
      this.setState({ errors:[response ]})
      this.setState({ loading: false });
      console.log('request failed', response)
    });
  }

  render() {
    console.log(this.state,"currentState");
    const {
      username, nickname, birth_place, birth_date, address, email, phone, emergency_phone, social_media, religion, hobby, scholarship, scholarship_other, sex, scientific_works, competencies, achievements , university_id, university_list, isUnivlist_assign, university_other, essay_topic, essay_topic_other,score, faculty, year_in, recommendation_paper, proposed_essay, head_essay, photo, scholarship_letter, university_letter,
      loading,
      errors,
      submit
    } = this.state;

    // ? Waiting for API Fetch to university_list happen and only render it after that
    if (university_list === '' && isUnivlist_assign === false) { return '' }

    return (
      <div className="web-container">
        
        {/* Pages Header */}
        {/* <div className="pages-header">
          <div className="pages-header_header">
              Lengkapi data dirimu dibawah ini
            <div className="pages-header_content">
            </div>
          </div>
        </div> */}

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
                // className={this.handleInputError(errors, 'username')}
                required
              />
              <Form.Field
                name="nickname"
                control={Input}
                label='Nama Panggilan'
                value={nickname}
                placeholder='contoh: Evan'
                onChange={this.handleChange}
                // className={this.handleInputError(errors, 'nickname')}
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
                // error={{ content: 'Mohon masukan foto terbarumu', pointing: 'below' }}
                name="photo"
                control={Input}
                label='Upload Pas Photo'
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
              label='Instagram Account'
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
            {/* Jika dia memilih scholarship lainnya (length-1) valuenya menjadi scholarship_other */}
            {achievements.map((element,idx) => {
              const labels = idx === 0 ? '3 Prestasi Terbaik' : "";
              return(<Form.Field
                key={'form-input-control-achievements_'+(idx+1)}
                id={'form-input-control-achievements_'+(idx+1)}
                control={Input}
                label={labels}
                value={achievements[idx]}
                placeholder='contoh : Nama Pencapaian | Penyelenggara | Tahun'
                name={"achievements_"+(idx+1)}
                onChange={ (e, {name,value}) => this.handleAchievement(idx,value)}
                required
              />)
            })}
            <Form.Field
              id='form-input-control-scientific-works  '
              control={TextArea}
              label='Karya Ilmiah Yang Pernah Dipublikasikan'
              value={scientific_works}
              placeholder='contoh : Judul Karya Ilmiah | Tahun'
              name="scientific_works"
              type="username"
              onChange={this.handleChange}
            />
            <Form.Field
              name="recommendation_paper"
              control={Input}
              label='Upload Surat Rekomendasi'
              value={recommendation_paper}
              placeholder='Upload Surat Rekomendasi'
            >
              <Input
              type="file"
              name="recommendation_paper"
              onChange={this.onUploadChange}
              />
            </Form.Field>
            <Form.Group widths='equal'>
              <Form.Field
                control={Select}
                options={scholarshipOptions}
                label={{ children: 'Beasiswa Yang Pernah Diterima', htmlFor: 'form-select-control-beasiswa' }}
                placeholder='Bidik Misi'
                search
                onChange={this.handleScholarshipDropdown}
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
                onChange={this.handleChange}
              />
              )}
              <Form.Field
                name="scholarship_letter"
                // error={{ content: 'Mohon masukan surat pernyataan beasiswamu', pointing: 'below' }}
                control={Input}
                label='Upload Surat Pernyataan Beasiswa'
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
                onChange={this.handleUnivDropdown}
                value={university_id}
                searchInput={{ id: 'form-select-control-university' }}
                required
              />
              {university_id === university_list[university_list.length-1].value && (
                <Form.Field
                control={Input}
                value={university_other}
                placeholder='Universitas Lainnya'
                label="Universitas Lainnya"
                name="university_other"
                type="username"
                onChange={this.handleChange}
              />
              )}
              <Form.Field
                name="university_letter"
                // error={{ content: 'Mohon masukan foto ktm-mu', pointing: 'below' }}
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
                value={year_in}
                placeholder='contoh : 2014'
                label='Tahun Angkatan'
                name="year_in"
                type="number"
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
            <Form.Field
              name="head_essay"
              control={TextArea}
              value={head_essay}
              placeholder='contoh : Dampak IOT terhadap akses Internet di masyarakat'
              label='Judul Skripsi'
              type="username"
              onChange={this.handleChange}
              required
            />
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
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field
              name="proposed_essay"
              // error={{ content: 'Mohon masukan proposal skripsimu', pointing: 'below' }}
              control={Input}
              label='Upload Proposal Skripisi'
              value={proposed_essay}
              placeholder='Upload Proposal Skripisi'
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
            disabled={loading}
            className={loading ? 'loading' : ''}
            >
              {loading ? 'Mengirim Datamu ke Server...' : 'Kirim Datamu'}
          </Form.Button>
          </Form>
              {errors.length > 0 && (
                <Message 
                  error
                  header='Masukkan datamu dengan lengkap'
                  content='Mohon cek semua data yang perlu kamu upload kembali (Pas Photo, Surat Pernyataan Beasiswa, KTM, dan Proposal Skripsi)'
                />
              )}
              {errors.length < 1 && submit === true && (
                <Message
                  success
                  header='Welcome to Young Innovators Fellowship, Next Leader!'
                  content='Kami akan memberi update ke-Emailmu jika kamu terpilih ke tahap selanjutnya.'
                />
              )}
        </Container>
      </div>
    )
  }
}

export default Formregister;