import React from 'react'
import '../css/style.css'

import Member from './Member'

const List = ({members}) => {
    return (
        <>
            <div className='list-container'>
                {
                    members?.map(member => {
                        return <Member key={member._id} member={member}/>
                    })
                }
            </div>
        </>
    )
}

export default List
