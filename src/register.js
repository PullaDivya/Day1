
import { useState } from "react";
//import { UserContext } from "./Home";
//import { globalContext } from "./App";

function Reg() {
    const [collegeIdValue, setCollegeId] = useState('');
    const [passwordValue, setPassword] = useState('');
    const [emailValue, setEmail] = useState('');
    const [genderValue, setGender] = useState('');
    const [branchValue, setBranch] = useState('');
    const [yearValue, setYear] = useState('');
    const [userValue, setUser] = useState('');
    //const{globalUserObject,setGlobalUserObject}=UserContext(globalContext)


    const getCollegeId = (event) => {
        setCollegeId(event.target.value);
        console.log(collegeIdValue);
    };

    const getPassword = (event) => {
        setPassword(event.target.value);
        console.log(passwordValue);
    };

    const getEmail = (event) => {
        setEmail(event.target.value);
        console.log(emailValue);
    };

    const getGender = (event) => {
        setGender(event.target.value);
        console.log(genderValue);
    };

    const getBranch = (event) => {
        setBranch(event.target.value);
        console.log(branchValue);
    };
    const getYear = (event) => {
        setYear(event.target.value);
        console.log(yearValue);
    };
    
    const studentData=(event)=>{
        event.preventDefault();
        const obj={
            collegeIdValue,passwordValue,emailValue,branchValue,genderValue
        }
        setUser(obj);
        console.log(obj);
        console.log(userValue);
        //setGlobalUserObject(obj);
    }
    return (
        <div className="card" style={{ align: 'center', width: '300px', padding: '20px'}}>
            <center>
            <h2>Register</h2>
            <p>Enter your details</p>
            <form  onSubmit={studentData}    style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label>CollegeId</label>
                <input type="text" onChange={getCollegeId} placeholder="Enter your name" />

                <label>Password</label>
                <input type="password" onChange={getPassword} placeholder="Password" />

                <label>Email</label>
                <input type="email" onChange={getEmail} placeholder="email" />

                <label>Branch</label>
                <select className="form-select" value={branchValue} onChange={getBranch}>
                    <option value="">Select Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                </select>

                <label>Gender</label>
                
                    <label>
                        <input type="radio" name="gender" value="male" checked={genderValue === 'male'} onChange={getGender} />
                        Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female" checked={genderValue === 'female'} onChange={getGender} />
                        Female
                    </label>

                    <label>year</label>
                <select className="form-select" value={yearValue} onChange={getYear}>
                    <option value="">Select year</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4rth">4rth</option>
                </select>
                <button type="submit" className="btn btn-dark w-100">Register</button>
                </form>
                </center>
        </div>
    );
}
export default Reg;
