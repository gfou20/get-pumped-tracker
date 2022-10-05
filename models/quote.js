import mongoose from "mongoose"

const Schema = mongoose.Schema

const quoteSchema = new Schema({
  content: { type: String},
}, {
  timestamps: true
})

const Quote = mongoose.model('Quote', quoteSchema)

export {
  Quote
}