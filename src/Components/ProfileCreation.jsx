import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function ProfileCreation() {
    const navigate = useNavigate()
    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phno, setPhNo] = useState('');
    const [dob, setDOB] = useState('');
    const [password, setPassword] = useState('');
    const [cpwd, setCpwd] = useState('');

    // States for checking the errors
    const [ submitted,setSubmitted] = useState(false);
    const [cancelled]=useState(true);

    // Handling the name change
    const handleName = (event) => {
        setName(event.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (event) => {
        setEmail(event.target.value);
        setSubmitted(false);
    };

    // Handling the Phone-Number change
    const handlePhNo = (event) => {
        setPhNo(event.target.value);
        setSubmitted(false);
    }

    // Handling the password change
    const handleDOB = (event) => {
        setDOB(event.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (event) => {
        setPassword(event.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handleConfirmPassword = (event) => {
        setCpwd(event.target.value);
        setSubmitted(false);
    };

    //Handling the form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === '' || email === '' || phno==='' || dob==='' || password !== cpwd) {
        setSubmitted(false)
        alert("Your profile creation not completed. Please enter all required values in field")
        } else {
        setSubmitted(true);
        alert(`Hey ${name}, your profile created successfully...!!`)
        navigate('/')
        }
    };

    const handleCancel=()=>{
        navigate('/')
    }


    return (
        <div className="form">
        <div>
            <h1>Profile Creation</h1>
        </div>

        <form className='form'><center>
            <table className='table'>
            <tr>
                <td>
                    {/* Labels and inputs for form data */}
                    <label className="label">Name</label>
                </td>
                <td>
                    <input onChange={handleName} className="input"
                        value={name} type="text" required/><br />
                </td>
            </tr>
            <tr>
                <td>
                    <label className="label">Email</label>
                </td>
                <td>
                    <input onChange={handleEmail} className="input"
                        value={email} type="email" required/><br />
                </td>
            </tr>
            <tr>
                <td>
                    <label className="label">Phone Number</label>
                </td>
                <td>
                    <input onChange={handlePhNo} className="input"
                        value={phno} type="tel" required/><br />                    
                </td>
            </tr>

            <tr>
                <td>
                <label className="label">Date Of Birth</label>
                </td>
                <td>
                    <input onChange={handleDOB} className="input"
                        value={dob} type="date" required/><br />
                </td>
            </tr>

            <tr>
                <td>
                    <label className="label">Password</label>
                </td>
                <td>
                    <input onChange={handlePassword} className="input"
                        value={password} type="password" required/><br />    
                </td>
            </tr>

            <tr>
                <td>
                    <label className="label">Confirm Password</label>
                </td>
                <td>
                    <input onChange={handleConfirmPassword} className="input"
                        value={cpwd} type="password" required/><br />                
                </td>
            </tr>

            <tr>
                <td>
                    <label className='label'>Upload Profile Picture</label>
                </td>
                <td>
                <input type="file" className='input' required/>
                </td>
            </tr>
        </table>
        </center>
        
        <div>
            <button onClick={handleSubmit} className="btn" value={submitted}>
                    Submit
            </button>

            <button onClick={handleCancel} className="btn" value={cancelled}>
                    Cancel
            </button>
        </div>
        </form>
        </div>
    );
}
