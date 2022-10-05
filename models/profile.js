import mongoose from 'mongoose'

const Schema = mongoose.Schema

const goalSchema = new Schema({
  exerGoal: String,
  time: Date,
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  goals: [goalSchema],
  quote: { type: Schema.Types.ObjectId, ref: "Quote" }
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
