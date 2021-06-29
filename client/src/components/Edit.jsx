import {useState, useEffect} from 'react'

const Edit = ({update_member, member_to_update, set_modal}) => {
    const [full_name, set_fullname] = useState('')
    const [stage_name, set_stage_name] = useState('')
    const [group_name, set_group_name] = useState('')
    const [image, set_image] = useState('')

    const submit_form = e => {
        e.preventDefault()

        const new_data = {
            full_name: full_name,
            stage_name: stage_name,
            group_name: group_name,
            image: image
        }

        update_member({...new_data})
    }

    return (
        <div className="modal-bg">
            <button onClick={() => set_modal(false)} className='close-btn'>X</button>
            <form onSubmit={submit_form} className='form modal-form'>
                <div className='input-div'>
                    <label htmlFor="">Full Name</label>
                    <input
                    value={full_name}
                    onChange={e => set_fullname(e.target.value)}
                    type="text"
                    placeholder={member_to_update.full_name}/>
                </div>
                <div className='input-div'>
                    <label htmlFor="">Stage Name</label>
                    <input value={stage_name}
                    onChange={e => set_stage_name(e.target.value)}
                    type="text"
                    placeholder={member_to_update.stage_name}/>
                </div>
                <div className='input-div'>
                    <label htmlFor="">Group Name</label>
                    <input value={group_name}
                    onChange={e => set_group_name(e.target.value)}
                    type="text"
                    placeholder={member_to_update.group_name}/>
                </div>
                <div className='input-div'>
                    <label htmlFor="">Image Link</label>
                    <input value={image}
                    onChange={e => set_image(e.target.value)}
                    type="text"
                    placeholder={member_to_update.image}/>
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default Edit
