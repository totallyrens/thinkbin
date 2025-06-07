import './Login.css';
import Header from '../../components/Header/Header.jsx'

const Login = () => {
  return (
    <>
      <Header />
      <h1>Login</h1>
      <div className="form-wrapper">
        <form action="">
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname" value="John" />
          
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" value="Doe" />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default Login;
