import { Router } from 'express'
import * as workoutsCtrl from '../controllers/workouts.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

router.get('/', workoutsCtrl.index)

router.get('/:id', workoutsCtrl.show)

router.get('/:id/edit', isLoggedIn, workoutsCtrl.edit)

router.post('/', workoutsCtrl.create)

router.put('/:id', isLoggedIn, workoutsCtrl.update)


export {
  router
}