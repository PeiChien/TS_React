import React from 'react';
import '../css/MainParts.css'
class MainParts extends React.Component{
    render(){
        return <div className="container" id="mainPart">
            <div id="Home" className="Home">
                <h1>Home部分</h1>
            </div>
            <div id="About" className="About">
                <h1>About部分</h1>
            </div>
            <div id="Contact" className="Contact">
                <button id="easy" className="btn btn-inverse">简单难度</button>
                <button id="common" className="btn btn-inverse">普通难度</button>
                <button id="hard" className="btn btn-inverse">炼狱难度</button>
        </div>
    </div>
    }

}

export {MainParts};