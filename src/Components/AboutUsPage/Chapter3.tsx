import "./Chapter3.css"
import { getFetchDatabase } from "../../Utils/Utils";
import Execs from "./Exec";

function Chapter3(){
    var execs = getFetchDatabase("Execs");
    execs = execs.slice(1, execs.length);
    
    while(execs == undefined){
        return(
            <div>
            </div>
        )
    }
    return(
        <div className="Chapter3ContainerOne">

            <div className="Chapter3TitleContainer">
                <h1 className="Chapter3Title">Chapter 3: Meet the Team</h1>
            </div>

            <div className="Chapter3ExecsListContainer">
            <div className="Chapter3ExecsList">
            {
                execs && execs.length>0? (
                    execs.map((exec) =>{
                        return(  
                        <Execs execName={exec["Name"]} execImagePath={exec["ImagePath"]} execPosition={exec["Position"]} />)
                    }
                )
            ):(
                <>
                </>
            )
        }
            </div>
            </div>

        </div>
    )
}

export default Chapter3;