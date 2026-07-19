import meetmind from "../assets/meetmind.png"
import meeting from "../assets/Meeting.jpg"
import "../components/Login.css"
function Login(){

    return(<>
    <div className="container">
        <div className="left">
            <div className="logo">
                <img src={meetmind} alt="MeetMind" />
                <div className="text">
                    <h2>MeetMind AI</h2>
                    <p>AI Meeting Notes & Task Manager</p>
                </div>
            </div>
            <img className="meeting" src={meeting} alt="Meeting" />
            <div className="paras">
                <p>Let AI handle your meeting notes</p>
                <p>so you can focus on what matters.</p>
            </div>
        </div>


        <div className="right">
            <div className="login-form">
                <h1 className="title">Welcome Back</h1>
                <h4 className="subtitle">Sign in to continue</h4>
                <div className="form">
                    <label htmlFor="email or username">Email or Username</label>
                    <input type="text" id="email-user" placeholder="Enter your email or username" />
                    <label htmlFor="password">Password</label>
                    <div className="password-box">
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                    <span>👁️</span>
                    <input type="checkbox" />
                    <p>Remember me</p>
                    <a href="#">Forgot password?</a>
                    <button>Sign In</button>
                    <div className="register">
                        <p>Don't have an account? <a href="#">Register now</a></p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>)
}
export default Login;