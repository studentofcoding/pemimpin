import React, { useState } from 'react';
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react';

const initialState = {
  selected_status: false,
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
        let email = list.email;
        let score = list.score;
        let head_essay = list.head_essay;
        return {
          name,
          university : university, 
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
        name,
        university, 
        score,
        head_essay,
        email 
      } = list
      return (
        <Table.Row key={id} textAlign='center'>
          <Table.Cell collapsing>
            <Checkbox slider />
          </Table.Cell>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{university}</Table.Cell>
          <Table.Cell>{score}</Table.Cell>
          <Table.Cell>{head_essay}</Table.Cell>
          <Table.Cell>{email}</Table.Cell>
        </Table.Row>
      )
    })
  }

  // Waiting change in university_list
  if (datalist === '') { return '' }

  return (
    <Table basic='very' celled definition>
      <Table.Header >
        <Table.Row textAlign='center'>
          <Table.HeaderCell>Tandai Kandidat</Table.HeaderCell>
          <Table.HeaderCell>Nama Kandidat</Table.HeaderCell>
          <Table.HeaderCell>Universitas</Table.HeaderCell>
          <Table.HeaderCell>IPK</Table.HeaderCell>
          <Table.HeaderCell>Judul Skripsi</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {dataTable()}
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan='5'>
            <Button
              floated='right'
              icon
              labelPosition='left'
              primary
              size='small'
            >
              <Icon name='user' /> Add User
            </Button>
            <Button size='small'>Approve</Button>
            <Button disabled size='small'>
              Approve All
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}

export default CandidateList;