import React from 'react'
import Image from './Image.js'
import '../Style.css'


const Images = (props) => {
    return (
        <div>
            {props.teamMembers.map(member =>
                <Image teamMember={member} />
            )}
        </div>
    )
}

export default Images