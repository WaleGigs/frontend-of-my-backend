import logo from './logo.svg';
import './App.css';
import axios from 'axios'
function Signup() {
  const signUp = async () => {
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
    axios.post("http://localhost:5760/users/signup", data).then((res) => {
      console.log(res)
      alert(res.data.message)
    }).catch((err) => {
      console.log(err)
      alert(err.response.data.message)
    })
  }



  return (
   
<div className='wrapper container'>
  
  <div className='title-text'>
          <div className='title login log'><i>React Form</i></div>
          <div className='title signup log'><i>React Form</i></div>
        </div>
        <center> <div> <a  href="#"><img id="lgo" src={logo} alt=""/></a></div></center>
  <div className='form-container'>
 
  
          <div className="form-inner">
          <form action="#" className="login">
              <pre>
              </pre>
              <div className="field">
                <input id="firstName" type="text" placeholder="First Name" />
              </div>
              <div className="field">
                <input id="lastName" type="text" placeholder="Second Name" />
              </div>
              <div className="field">
                <input id="email" type="text" placeholder="Email Address" />
              </div>
              <div className='field'>
                <input id="password" type="password"  placeholder="Password" />
               
              </div>
              <div className='pass-link'><a href="#">Forgot password?</a></div>
              {/* <button onClick={money} style={{backgroundColor:"rebeccapurple"}}>ChangeName</button>  */}
             <button type="button"    id="butt"  className='btn btn-primary m mx-auto' onClick={signUp}>Login</button> 
             
            </form>
  
  
           
          </div>
  
  </div>
  
  </div>
  );
}

export default Signup;
