import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as quotesCtrl from '../controllers/quotes.js'

const router = Router()

router.get('/', isLoggedIn, quotesCtrl.index)

// router.post('/', isLoggedIn, quotesCtrl.create)

export { 
  router
}