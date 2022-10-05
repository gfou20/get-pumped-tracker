import mongoose from 'mongoose'

const Schema = mongoose.Schema

const setSchema = new Schema({
  sets: {
    type: Number, min: 0, max: 5
  },
  reps: {
    type: Number, min: 0, max: 100
  }
}, {
  timestamps: true
})

const workoutSchema = new Schema({
  name: String,
  pump: Boolean,
  date: Date,
  setRep: [setSchema],
  client: { type: Schema.Types.ObjectId, ref: "Profile" },
  quote: { type: Schema.Types.ObjectId, ref: "Quote" }
}, {
  timestamps: true
})

const Workout = mongoose.model('Workout', workoutSchema)

export {
  Workout
}