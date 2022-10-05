import { Router } from 'express'
import * as quotesCtrl from '../controllers/quotes.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', isLoggedIn, quotesCtrl.new)

router.post('/', isLoggedIn, quotesCtrl.create)

export { 
  router
}