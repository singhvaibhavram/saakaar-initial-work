import React from "react";
import '../assets/css/eventform.css'

class Eventregister extends React.Component{

    async componentDidMount() {
        const url = " http://4950d5b1.ngrok.io/v0/city"
        const response = await fetch(url)
        const cityData = await response.json()
        this.setState({cities: cityData})
    }

    state = {
        fname: "",
        lname: "",
        phnumber: "",
        cities: [],
        age: "",
        kids: "",
        cityId: "",
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
        console.log(fieldName)
        this.setState({[fieldName]: event.target.value})
        console.log(event)
    }

    handleSubmit = (e) => {
        const isValid = this.validate()
        if(isValid) {
            e.preventDefault();
            var data = JSON.stringify({
                              "first_name": this.state.fname,
                              "last_name": this.state.lname,
                              "mobile_number": this.state.phnumber,
                              "city_id": "1",
                              "age": this.state.age,
                              "kids": this.state.kids
                            });
            console.log(data)
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.addEventListener("readystatechange", function () {
              if (this.readyState === 4) {
                alert(this.responseText);
              }
            });
            xhr.open("POST", " http://4950d5b1.ngrok.io/v0/register");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Host", "45eadb93.ngrok.io");
            xhr.send(data);
        }
    }

    render() {
        return(
            <div className="eventForm">
                <div className="Desktop">Hello Desktop
                </div>
                <div className="Mobile">
                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tr>
                                <td>
                                    <input type="text" name={"first_name"} value={this.state.fname} onChange={(event) => this.handleChange(event, "fname")} placeholder={"First Name"}/>
                                </td>
                                <td>
                                    <input type="text" className={"LastName"} name={"last_name"} value={this.state.lname} onChange={(event) => this.handleChange(event, "lname")} placeholder={"Last Name"}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="number" name={"mobile_number"} value={this.state.phnumber} onChange={(event) => this.handleChange(event, "phnumber")} placeholder={"Phone Number"}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name={"city_id"} list="cityList" placeholder={"City"}/>
                                    <datalist id="cityList">
                                        {this.state.cities.map(city => (
                                            <option>{city.english} {city.hindi}</option>
                                        ))}
                                    </datalist>
                                </td>
                                <td>
                                    <input type="number" name={"age"} className={"Age"} value={this.state.age} onChange={(event) => this.handleChange(event, "age")} placeholder={"Age"}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="number" name={"kids"} value={this.state.kids} onChange={(event) => this.handleChange(event, "kids")} placeholder={"Kids"}/>
                                </td>
                            </tr>
                        </table>
                        <button className="submit-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Eventregister;
