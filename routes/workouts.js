import { Router } from 'express'
import * as workoutsCtrl from '../controllers/workouts.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

router.get('/', workoutsCtrl.index)

router.get('/:id', workoutsCtrl.show)

router.post('/', workoutsCtrl.create)

router.patch('/:id/flip-pump', isLoggedIn, workoutsCtrl.flipPump)


export {
  router
}