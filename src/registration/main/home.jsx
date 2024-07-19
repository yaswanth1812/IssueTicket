import React, { useEffect, useState } from 'react';
import CustomNavbar from '../../navbar/navbar';
import { Button, Col, FormControl, FormGroup, FormLabel, InputGroup, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './home.css'; 
import { useUser } from '../../contextuse/usercontext';

const Home = () => {
    const {user,setUser} = useUser()
    const[firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [department,setDepartment] = useState('');
    const [userId,setUserId] = useState('');
    const [description,setDescription] = useState('');

    
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        alert('Uploaded file:', file);
    };

    useEffect(()=>{
        setFirstname(user.firstname);
        setLastname(user.lastname);
        setEmail(user.email);
        setDepartment(user.department);
        setUserId(user.userId);
        setDescription(user.description);

    },[user]);

     const handleSubmit = ()=>{
        const storedata = JSON.parse(localStorage.getItem('user'));
        if(storedata && storedata.email === '' && storedata.department === '' && storedata.description === ''){
            alert('you are missing some block')
        }
        else{
            setUser(storedata);
            alert('your response was submitted')
        }
     }



    return (
        <>
            <CustomNavbar />
            <div className='cont'>
                <h1>IT SERVICE TICKET</h1>
                <p>Please provide the details of the problem</p>
                <div>
                    <InputGroup className="mb-3 input-group-spacing">
                        <InputGroup.Text>NAME</InputGroup.Text>
                        <FormControl aria-label="First name"
                        placeholder='First name'
                        value={firstname} 
                        onChange={(e)=> setFirstname(e.target.value)}>    
                        </FormControl>
                        <FormControl aria-label="Last name" 
                        placeholder='Last name'
                        value={lastname}
                        onChange={(e)=>setLastname(e.target.value)}>
                        </FormControl>
                    </InputGroup>

                    <Form>
                        <FormGroup as={Row} className="mb-3 form-group-spacing" controlId="formPlaintextEmail">
                            <FormLabel column sm="2">
                                Email
                            </FormLabel>
                            <Col sm="10">
                                <Form.Control type="text" 
                                placeholder='text here' 
                                value={email}
                                onChange={(e)=>setEmail(e.target.valueAsNumber)}/>
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} className="mb-3 form-group-spacing" controlId="formPlaintextDepartment">
                            <FormLabel column sm="2">
                                Department
                            </FormLabel>
                            <Col sm="10">
                                <Form.Control type="text" 
                                placeholder='text here' 
                                value={department}
                                onChange={(e)=>setDepartment(e.target.value)}/>
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} className="mb-3 form-group-spacing" controlId="formPlaintextUserId">
                            <FormLabel column sm="2">
                                User ID
                            </FormLabel>
                            <Col sm="10">
                                <Form.Control type="text"
                                 placeholder='text here'
                                 value={userId} 
                                 onChange={(e)=>setUserId(e.target.value)}/>
                            </Col>
                        </FormGroup>

         <FormGroup as={Row} className="mb-3 form-group-spacing" controlId="formPlaintextDescription">
             <FormLabel column sm="2">
               Description
            </FormLabel>
                            <Col sm="10">
                                <FormControl as="textarea" 
                                placeholder="Enter description" 
                                value={description}
                                onChange={(e)=>setDescription(e.target.value)}/>
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} className="mb-3 form-group-spacing" controlId="formPlaintextScreenshot">
                            <FormLabel column sm="2">
                                Upload Screenshot
                            </FormLabel>
                            <Col sm="10">
                                <Form.Control type="file" onChange={handleFileUpload} />
                                <Form.Text className="text-muted">
                                    Upload a screenshot related to the issue (optional).
                                </Form.Text>
                            </Col>
                        </FormGroup>
                    </Form>

                    <Button onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Home;
