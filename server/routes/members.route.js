import express from 'express'
import Members from '../models/members.model.js'

const router = express.Router()

router.route('/').get((req, res) => {
    Members.find()
    .then(member => res.json(member))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req, res) => {
    const add_new = {
        full_name: req.body.full_name,
        stage_name: req.body.stage_name,
        group_name: req.body.group_name,
        image: req.body.image
    }

    const new_members_collection = new Members({...add_new})

    new_members_collection.save()
    .then(() => res.json('New member added'))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

// find  document by ID
router.route('/:id').get((req, res) => {
    Members.findById(req.params.id)
        .then(member => res.json(member))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/update/:id').put((req, res) => {
    const update_data = req.body

    Members.findById(req.params.id)
        .then(member => {
            
            member.full_name = update_data.full_name ? update_data.full_name : member.full_name
            member.stage_name = update_data.stage_name ? update_data.stage_name : member.stage_name
            member.group_name = update_data.group_name ? update_data.group_name : member.group_name
            member.image = update_data.image ? update_data.image : member.image

            member.save()
            .then(() => res.json('Document Updated'))
            .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})

// delete document
router.route('/:id').delete((req, res) => {
    Members.findByIdAndDelete(req.params.id)
        .then(() => res.json(`Document deleted`))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

export default router