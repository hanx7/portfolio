import React from 'react';
import {useState} from "react";
// import './App.css';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import {sendMessageRequest} from "../networking/message";

function ContaceMeForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");

    const submit =  (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        sendMessageRequest ( firstName, lastName, message )
            .then( (r) => {console.log(r);} )
            .catch( (error) => {console.log(error);})

    }


    return (
        <div className="App">
            <Typography gutterBottom variant="h3" align="center">
                contact me
            </Typography>
            <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            Fill up the form and our team will get back to you within 24 hours.
                        </Typography>
                        <form onSubmit={(event) =>{
                                    console.log("submit");
                                    submit(event);
                                }}>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required
                                               onChange={ (e) => {setFirstName(e.target.value)}}
                                    />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required
                                               onChange={ (e) => {setLastName(e.target.value)}}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required
                                               onChange={(e) =>{setMessage(e.target.value)}}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth
                                            // onClick={ () =>{
                                            //     console.log("submit");
                                            //     submit();
                                            // }}
                                    >
                                        Submit
                                    </Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}

export default ContaceMeForm;