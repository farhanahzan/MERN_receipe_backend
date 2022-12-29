const mongoose = require('mongoose');

const ReceipeSchema = new mongoose.Schema({
  id: String,
  receipeName: String,
  ingredients: [String],
  description: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Receipe = mongoose.model('receipe', ReceipeSchema);
