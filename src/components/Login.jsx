const Login =()=>{
    return (
       <div className="login">
        <h2>Login</h2><br></br>
        <form>
          Email:  <input type="email" placeholder="Enter your email" /><br></br>
         Password:   <input type="password" placeholder=" Enter your password" /><br></br>
            <button type="submit">Login</button>
            <a href="">forget password</a>
        </form>
       </div>
    )
}
export default Login;