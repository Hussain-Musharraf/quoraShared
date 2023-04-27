import React from 'react'
import "./login.css";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/image/Quora-logo.png";

const Login = () => {
  const navigate = useNavigate();
  // const [email,setEmail] = useState();
  // const [password,setPassword] = useState();

  // const [emailError, setEmailError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);

  // const emailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSubmit =(e)=>{
    e.preventDefault();
    navigate('/home')
  }
  // const handleEmail=(e)=>{
  //   let change2= e.target.value;
  //   if(!change2.match(emailRegex)){
  //     setEmailError(true);
  //   }else{
  //     setEmailError(false);
  //   }
  //   setEmail(change2)
  // }


  // const handleEmail=(e)=>{
  //   let change1= e.target.value;
  //   if(change1.length<3){
  //     setNameError(true);
  //   }else{
  //     setNameError(false)
  //   }
  //   setName(change1);
  // }
  return (
    <div className='bdy'>
        <div className='logo'>
            <img src={logo} alt="logo" width="200px"/>
            <h3>A place to share knowledge and better understand the world</h3>
            <form onSubmit={handleSubmit} className='lgnDiv'>
                <label htmlFor="">Login Here : </label>
                <br />
                <br />
                <div className='login1'>
                  <div>
                    <label htmlFor="">Email: </label>
                    <input placeholder='Your email' style={{marginLeft:17}} required/>
                  </div>
                  {/* {nameError ? <span style={{color:"red"}}>Name must be greater than 2 character</span>:''} */}
                  <br /><br />
                  <div>
                    <label htmlFor="">Password:</label>
                    <input placeholder='Your password' required/>
                  </div>
                  {/* {emailError ?<span style={{color:"red"}}>Invalid Email</span>:''} */}
                  <br /><br />
                  <div>
                    <input type="submit" value="Login" className='submitBtn'/>
                  </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login