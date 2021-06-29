import {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Form = () => {
    const [full_name, set_fullname] = useState('')
    const [stage_name, set_stage_name] = useState('')
    const [group_name, set_group_name] = useState('')
    const [image, set_image] = useState('')

    const add_request = async member => {
        try {
            const res = await axios.post('/api/members/add', member)
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

    const add_new = e => {
        e.preventDefault()

        if(!full_name || !stage_name || !group_name || !image) {
            return Swal.fire({
                icon: 'error',
                text: 'Please fill out the form'
            })
        }

        add_request({full_name, stage_name, group_name, image})

        set_fullname('')
        set_stage_name('')
        set_group_name('')
        set_image('')
    }

    return (
        <form onSubmit={add_new} className='form'>
            <div className='input-div'>
                <label htmlFor="">Full Name</label>
                <input value={full_name} onChange={e => set_fullname(e.target.value)} type="text"/>
            </div>
            <div className='input-div'>
                <label htmlFor="">Stage Name</label>
                <input value={stage_name} onChange={e => set_stage_name(e.target.value)} type="text"/>
            </div>
            <div className='input-div'>
                <label htmlFor="">Group Name</label>
                <input value={group_name} onChange={e => set_group_name(e.target.value)} type="text"/>
            </div>
            <div className='input-div'>
                <label htmlFor="">Image Link</label>
                <input value={image} onChange={e => set_image(e.target.value)} type="text"/>
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default Form
