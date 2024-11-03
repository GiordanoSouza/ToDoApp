import React, {useState} from 'react'
import styles from './Login.module.css'
import login from '../../assets/login.png'
import { Link , useNavigate } from 'react-router-dom'
import { getErrorMessage } from '../../util/GetError'
import {Button, Input} from 'antd'


function Register() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [FirstName,setFirstName] = useState('');
    const [LastName,setLastName] = useState('');
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async () => {
        try{
            setLoading(true);
            const data = {
                FirstName,
                LastName,
                username,
                password
            }
            const response = await AuthServices.registerUser(data);
            setLoading(false);
            message.success('Ligma Successfully Registered');
        }catch(err){
            console.log(err)
            message.error(getErrorMessage(err));   
        }
        console.log("register")
    }
  return (
    <div>
        <div className={styles.login__card}>
            <img src={login} alt="" />
            <h2>Register</h2>
            <div className={styles.input__inline__wrapper}>
                <Input 
                placeholder="First Name" 
                value={FirstName} 
                onChange={(e) => setFirstName(e.target.value)} />
                <Input 
                placeholder="Last Name" 
                style={{marginLeft: "10px"}}
                value={LastName} 
                onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className={styles.input__wrapper}>
                <Input 
                placeholder="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className={styles.input__wrapper}>
                <Input.Password
                placeholder="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div class name={styles.input__info}style={{ marginBottom: "10px"}} >
                Existing User? <Link to="/login">Login</Link>
            </div>
            <Button loading={loading} type = "primary" size="large" disabled={!username || !password} onClick={handleSubmit}>Register</Button>
        </div>
    </div>
  )
}

export default Register