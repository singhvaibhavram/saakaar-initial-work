import React from "react";
import superagent from "superagent";
import '../assets/css/eventform.css';
import Select from 'react-select';
import { Form, Button, Row, Col, ToggleButtonGroup, ToggleButton, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


let isLoadingExternally = false;

class Eventregister extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            phnumber: "",
            cities: [],
            age: "",
            kids: "",
            cityId: "",
            language : "english"
        }
    }

     componentDidMount() {
         isLoadingExternally = true;
         superagent
             .get("https://api.saakaarcommunity.com/v0/city")
             .end((err, res) => {
                 if(!err){
                     console.log(res);
                     this.setState({
                         cities: res.body
                     }, () => {
                         isLoadingExternally = false;
                     });
                 } else{
                     isLoadingExternally = false;
                 }
             });
    }


    validate = () =>{
        if(this.state.phnumber.length !== 10){
            alert("Phone Number should be 10 digits")
            return false;
        }

        if(!this.state.fname){
            alert("First Name Cannot be blank")
            return false;
        }

        if(!this.state.lname){
            alert("Last Name Cannot be blank")
            return false;
        }

        if(!this.state.age){
            alert("Age Cannot be blank")
            return false;
        }

        if(!this.state.kids){
            alert("Kids Cannot be blank")
            return false;
        }

        return true;
    }

    handleChange = (event, fieldName) => {
        console.log(event)
        if(fieldName === "cityId"){
            this.setState({[fieldName]: event.ID});
        }else{
            this.setState({[fieldName]: event.target.value});
        }

    }

    handleSubmit = (e) => {
        const isValid = this.validate()
        if(isValid) {
            e.preventDefault();
            superagent
                .post("https://api.saakaarcommunity.com/v0/register")
                .send({"first_name": this.state.fname, "last_name": this.state.lname,"mobile_number": this.state.phnumber,"city_id": this.state.cityId,"age": this.state.age,"kids": this.state.kids})
                .set('accept', 'json')
                .set('access-Control-Allow-Origin', '*')
                .end((err, res) => {
                   if(!err){
                       console.log(res);
                       alert("Successful");
                   } else{
                       console.error(err);
                       alert("fail");
                   }
                });
        }
    }

    render() {
        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <div >
                    <Typography component="h1" variant="h5">

                    </Typography>
                    <Typography component="h1" variant="h5">
                        
                    </Typography>
                    <FormLabel component="legend">
                        {this.state.language === 'hindi' ? "भाषा चुनें" : "Choose Language"}
                    </FormLabel>
                    <RadioGroup aria-label="language" name="language" value={this.state.language} onChange={(event) => this.handleChange(event, "language")}>
                        <Row>
                            <Col>
                                <FormControlLabel value="english" control={<Radio />} label="English" />
                            </Col>
                            <Col>
                                <FormControlLabel value="hindi" control={<Radio />} label="Hindi" />
                            </Col>
                        </Row>
                    </RadioGroup>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formFirstName">
                                    <Form.Label>{this.state.language === 'hindi' ? "पहला नाम" : "First Name"}</Form.Label>
                                    <Form.Control
                                        name={"first_name"}
                                        value={this.state.fname}
                                        type="text"
                                        placeholder={ this.state.language === 'hindi' ? "पहला नाम दर्ज करें" : "Enter First Name"}
                                        onChange={(event) => this.handleChange(event, "fname")}
                                    />

                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formLastName">
                                    <Form.Label>{this.state.language === 'hindi' ? "अंतिम नाम" : "Last Name"}</Form.Label>
                                    <Form.Control
                                        name={"first_name"}
                                        value={this.state.lname}
                                        type="text"
                                        placeholder={ this.state.language === 'hindi' ? "अंतिम नाम दर्ज करें" : "Enter Last Name"}
                                        onChange={(event) => this.handleChange(event, "lname")}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group controlId="formPhoneNumber">
                                    <Form.Label>{this.state.language === 'hindi' ? "मोबाइल नंबर" : "Mobile Number"}</Form.Label>
                                    <Form.Control
                                        name={"phone_number"}
                                        value={this.state.phnumber}
                                        type="mobile"
                                        placeholder={ this.state.language === 'hindi' ? "मोबाइल नंबर दर्ज करें" : "Enter Mobile Number"}
                                        onChange={(event) => this.handleChange(event, "phnumber")}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>

                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group controlId="FormCity">
                                    <Form.Label>{this.state.language === 'hindi' ? "शहर चुनें" : "Choose City"}</Form.Label>
                                    <Select
                                        getOptionLabel={this.state.language === 'hindi' ? ({ hindi }) => hindi : ({ english }) => english}
                                        getOptionValue={({ ID }) => ID}
                                        options={this.state.cities}
                                        isLoading={isLoadingExternally}
                                        onChange={(event) => this.handleChange(event, "cityId")}
                                    />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="formAge">
                                    <Form.Label>{this.state.language === 'hindi' ? "आयु" : "Age"}</Form.Label>
                                    <Form.Control
                                        name={"age"}
                                        value={this.state.age}
                                        type="number"
                                        placeholder={ this.state.language === 'hindi' ? "आयु दर्ज करें" : "Enter Age"}
                                        onChange={(event) => this.handleChange(event, "age")}
                                    />
                                </Form.Group>
                            </Col>

                        </Row>

                        <Row>
                            <Col>
                                <Form.Group controlId="formKids">
                                    <Form.Label>{this.state.language === 'hindi' ? "बच्चों की संख्या" : "No. of Kids"}</Form.Label>
                                    <Form.Control
                                        name={"kids"}
                                        value={this.state.kids}
                                        type="number"
                                        placeholder={ this.state.language === 'hindi' ? "बच्चों की संख्या दर्ज करें" : "Enter No. of Kids"}
                                        onChange={(event) => this.handleChange(event, "kids")}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            {this.state.language === 'hindi' ? "प्रस्तुत" : "Submit"}
                        </Button>
                    </Form>
                </div>
            </Container>


        );
    }
}

export default Eventregister;
