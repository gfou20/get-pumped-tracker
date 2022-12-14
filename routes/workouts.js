import { Router } from 'express'
import * as workoutsCtrl from '../controllers/workouts.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

router.get('/', workoutsCtrl.index)

router.get('/:id', workoutsCtrl.show)

router.get('/:id/edit', isLoggedIn, workoutsCtrl.edit)

router.post('/', workoutsCtrl.create)

router.post('/:id/setRep', workoutsCtrl.createSetRep)

router.patch('/:id/swap-pump', isLoggedIn, workoutsCtrl.swapPump)

router.put('/:id', isLoggedIn, workoutsCtrl.update)

router.delete('/:id', isLoggedIn, workoutsCtrl.delete)
export {
  router
}