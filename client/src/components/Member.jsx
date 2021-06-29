import React from 'react'
import {Link} from 'react-router-dom'
import '../css/style.css'


const Member = ({member}) => {
    return (
        <Link to={`/profile/${member._id}`} className='link-container'>
            <span className='member-container'>
                <h1>{member.stage_name}</h1>
                {/* <h2>Full name: {member.full_name}</h2>
                <h2>Group name: {member.group_name}</h2> */}
                <img src={member.image} alt="" />
            </span>
        </Link>
    )
}

export default Member
