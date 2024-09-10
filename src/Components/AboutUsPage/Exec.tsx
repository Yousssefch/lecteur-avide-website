import "./Exec.css"
import { Image } from "react-bootstrap";

function Execs({execName, execPosition, execImagePath}: {execName: string, execPosition:string, execImagePath:string}){
    return(
        <div className="ExecContainer">
            <div className="ExecImageContainer">
                <Image src={execImagePath} className="ExecImage"/>
            </div>
            
            <div className="ExecNameContainer">
            <h1 className="ExecName">{execName}</h1>
            </div>

            <div className="ExecNameUnderline" />

            <div className="ExecPositionContainer">
            <h2 className="ExecPosition">"{execPosition}"</h2>
            </div>
        </div>
    )
}
export default Execs;