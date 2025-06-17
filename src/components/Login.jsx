const Login =()=>{
    return (
       <div className="login">
        <h2>Login</h2><br></br>
        <form>
          Email:  <input type="email" placeholder="email" /><br></br>
         Password:   <input type="password" placeholder="password" /><br></br>
            <button type="submit">Login</button>
            <a href="">forget password</a>
        </form>
       </div>
    )
}
export default Login;