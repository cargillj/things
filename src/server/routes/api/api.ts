import {Router} from 'express'

export const api = Router()

api.get('/', (req, res) => {
    res.json({ message: 'Welcome to the things api!' })
})
