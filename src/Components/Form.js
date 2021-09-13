
import React from 'react'
import { ToggleButton, ToggleButtonGroup, Button } from 'react-bootstrap'


const Form = () => {
    return (
      
        <form>
        <label htmlFor='name'>Name</label>
        <input id='name' />
        <Button type='submit'>Submit</Button>
        <br/><br/>
        <label htmlFor='genre'>Favorite genre of music</label>
        <ToggleButtonGroup type='checkbox' name='genre'>
          <ToggleButton value={'hip_hop'}>Hip Hop</ToggleButton>
          <ToggleButton value={'jazz'}>Jazz</ToggleButton>
          <ToggleButton value={'country'}>Country</ToggleButton>
        </ToggleButtonGroup>
        <br/><br/>
    <Button variant="outline-primary">Primary</Button>{' '}
    <Button variant="outline-secondary">Secondary</Button>{' '}
    <Button variant="outline-success">Success</Button>{' '}
    <Button variant="outline-warning">Warning</Button>{' '}
    <Button variant="outline-danger">Danger</Button>{' '}
    <Button variant="outline-info">Info</Button>{' '}
    <Button variant="outline-light">Light</Button>{' '}
    <Button variant="outline-dark">Dark</Button>
   
      </form>
        
    )
}

export default Form
