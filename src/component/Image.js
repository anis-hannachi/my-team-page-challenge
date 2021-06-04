import React from 'react';
import '../Style.css'


const Image = (props) => {

    return (
        <div className="images">
            <div>
                <img className={props.teamMember.classImage} src={props.teamMember.img} />
            </div>
            <div className={props.teamMember.className} >{props.teamMember.name}</div>
            <div className={props.teamMember.classPosition} >{props.teamMember.position} </div>
        </div>
    )
}

export default Image