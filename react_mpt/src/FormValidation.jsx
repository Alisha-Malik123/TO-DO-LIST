import { useState } from "react";

function FormValidation() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()
    const [Eerror, setEerror] = useState('')
    const [Eerrorpassword, setEerrorPassword] = useState('')
    console.log('Eerrorpassword', Eerrorpassword)
    console.log("this is my passwd", password)
    console.log("this is my email", email)
    const submithandler = (event) => {
        event.preventDefault()
        let valid = true;
        if (email === '') {
            setEerror('please enter the email')
valid = false;
        }
        else {
            setEerror('')

        }
        if (password === '') {

            setEerrorPassword('please enter the passoewrd')
            valid = false;
        }
        else {

            setEerrorPassword('')
            
        }
        if (valid){
            alert('sign is success')
        }
    }
    return (
        <div style={{ marginTop: '100px' }}>
            <h1>FORM Validation</h1>
            <label> Email</label>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <p style={{ color: 'red' }}>{Eerror}</p>
            <label> Password</label>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <p>{Eerrorpassword}</p>

            <button onClick={submithandler}> SUBMIT</button>
        </div>
    );
}
export default FormValidation;