// import React from 'react'
import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';


    export default function Create() {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [checkbox, setCheckbox] = useState(false);
// sending data to the API
        const postData = () => {
 // use Axios to send the POST request.
            axios.post(`https://653fbb9245bedb25bfc11d93.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        })
            console.log(firstName);
            console.log(lastName);
            console.log(checkbox);
    }
        return (
            <div>
    
    
    <Form>
        <Form.Field className="create-form">
            <label>First Name</label>
            <input placeholder='First Name'  onChange={(e) => setFirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name'  onChange={(e) => setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button onClick={postData} type='submit'>Submit</Button>
    </Form>
    </div>

    
)
        }
