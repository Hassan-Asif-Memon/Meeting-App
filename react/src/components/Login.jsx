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
        </div>


        <div className="right">
            
        </div>
    </div>
    </>)
}
export default Login;