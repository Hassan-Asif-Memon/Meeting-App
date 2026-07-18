import meetmind from "../assets/meetmind.png"
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
        </div>
    </div>
    </>)
}
export default Login;