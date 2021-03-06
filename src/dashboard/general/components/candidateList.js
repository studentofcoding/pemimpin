import React, { useState } from 'react';
import { Checkbox, Table, Container } from 'semantic-ui-react';
import './candidateList.css';

const initialState = {
  datalist: '',
  activeMenu: 'Dashboard'
 };

function CandidateList() {
  const [ state, setState ] = useState(initialState);

  useState(() => {
    var regisData = fetch('http://localhost:3003/api/v1/registration')
    regisData.then(res => {
      if( res.status === 200)
      return res.json() 
    }).then( res => { 
      const dataList = res.data.map(list => {
        let name = list.name;
        let university = list.university_other || list.universities_id.toString();
        let year_in = list.year_in;
        let email = list.email;
        let score = list.score;
        let head_essay = list.head_essay;
        let isAccepted = list.isAccepted;
        return {
          isAccepted,
          name,
          university : university, 
          year_in,
          score,
          head_essay,
          email
        }
      })
      setState({
        ...state,
        datalist: dataList
      })
      console.log(dataList);
    })
  })

  console.log(state,"currentState");
  const {
    datalist
  } = state;

  const dataTable = () => {
    return state.datalist.map((list, index) => {
      const { 
        id,
        isAccepted,
        name,
        university,
        year_in,
        score,
        head_essay,
        email 
      } = list
      return (
      <Table.Row key={id} textAlign='left'>
        <Table.Cell collapsing textAlign='center'>
          <Checkbox slider>{isAccepted}</Checkbox>
        </Table.Cell>
        <Table.Cell singleLine>{name}</Table.Cell>
        <Table.Cell singleLine>{university}</Table.Cell>
        <Table.Cell textAlign='center'>{year_in}</Table.Cell>
        <Table.Cell textAlign='center'>{score}</Table.Cell>
        <Table.Cell singleLine textAlign='center'>{head_essay}</Table.Cell>
        <Table.Cell singleLine textAlign='center'>{email}</Table.Cell>
      </Table.Row>
      )
    })
  }

  // Waiting change in university_list
  if (datalist === '') { return '' }

  return (
    <Container text>
      <Table size='small'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Pilih Kandidat</Table.HeaderCell>
            <Table.HeaderCell>Nama</Table.HeaderCell>
            <Table.HeaderCell singleLine>Universitas</Table.HeaderCell>
            <Table.HeaderCell singleLine>Tahun Angkatan</Table.HeaderCell>
            <Table.HeaderCell>IPK</Table.HeaderCell>
            <Table.HeaderCell singleLine>Judul Skripsi</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {dataTable()}
        </Table.Body>
      </Table>
    </Container>
      
  );
}

export default CandidateList;