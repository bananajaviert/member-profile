import axios from 'axios'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Swal from 'sweetalert2'

import Edit from './Edit'

const Profile = ({members, set_members}) => {
    const {id} = useParams()
    const [member_to_update, set_member_to_update] = useState([])
    const [modal, set_modal] = useState(false)

    useEffect(() => {
        const get_member = async () => {
            const res = await axios.get(`/api/members/${id}`)
            const data = await res.data
            set_member_to_update(data)
        }

        get_member()
    }, [])

    const update_member = async member => {
        try {
            const res = await axios.put(`/api/members/update/${id}`, member)
            const data = await res.data

            Swal.fire({
                icon: 'success',
                text: `${data}`,
                showCancelButton: true,
                confirmButtonColor: 'steelblue',
                confirmButtonText: 'View list',
                cancelButtonText: 'Add another',
                cancelButtonColor: 'green'
              }).then(result => {
                if(result.isConfirmed) {
                  return window.location = '/'
                }
              })
        } catch(error) {
            Swal.fire({
                icon: 'error',
                text: error
            })
        }
    }

    const delete_member = async id => {
        try {
            const res = await axios.delete(`/api/members/${id}`)
            const data = await res.data

            set_members(members.filter(member => {
                return member._id !== id
            }))

            Swal.fire({
                icon: 'success',
                text: `${data}`,
                showCancelButton: true,
                confirmButtonColor: 'steelblue',
                confirmButtonText: 'View list',
                cancelButtonText: 'Add another',
                cancelButtonColor: 'green'
            }).then(result => {
                if(result.isConfirmed) {
                    return window.location = '/'
                }
            })
        } catch(error) {
            Swal.fire({
                icon: 'error',
                text: error
            })
        }
    }

    return (
        <section className='profile-section'>
            <div className="details">
                <h3>Stage Name: {member_to_update.stage_name}</h3>
                <h3>Full Name: {member_to_update.full_name}</h3>
                <h3>Group: {member_to_update.group_name}</h3>
                <button onClick={() => set_modal(true)} className='edit-btn'>Edit</button>
                <button onClick={() => delete_member(member_to_update._id)} className='delete-btn'>Delete</button>
            </div>
            <img src={member_to_update.image} alt="" />
            {
                modal && <Edit update_member={update_member} member_to_update={member_to_update}
                set_modal={set_modal}/>
            }
        </section>
    )
}

export default Profile
