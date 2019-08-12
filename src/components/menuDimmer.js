import React, { Component } from 'react'
import { Dimmer, Header, Icon } from 'semantic-ui-react'

export default class menuDimmer extends Component {
  state = {}

  render() {
    const { active } = this.state
  
    return (
      <div>
        <Dimmer active={active} onClickOutside={menuClose} page>
          <Header as='h2' icon inverted>
            <Icon name='heart' />
            Dimmed Message!
            <Header.Subheader>Dimmer sub-header</Header.Subheader>
          </Header>
        </Dimmer>
      </div>
    )
  }
}