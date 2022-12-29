const express = require('express');
const router = express.Router();

// Load Receipe model
const Receipe = require('../../models/Receipe');

// @route GET api/receipes/test
// @description tests receipes route
// @access Public
router.get('/test', (req, res) => res.send('receipe route testing!'));

// @route GET api/receipes
// @description Get all receipes
// @access Public
router.get('/', async (req, res) => {
  await Receipe.find()
    .then((receipes) => res.status(200).json(receipes))
    .catch((err) =>
      res.status(404).json({ noreceipesfound: 'No receipes found' })
    );
});

// @route GET api/receipes/:id
// @description Get single receipe by id
// @access Public
router.get('/:id', async (req, res) => {
  await Receipe.findById(req.params.id)
    .then((receipe) => res.status(200).json(receipe))
    .catch((err) =>
      res.status(404).json({ noreceipefound: 'No receipe found' })
    );
});

// @route GET api/receipes
// @description add/save receipe
// @access Public
router.post('/', async (req, res) => {
  await Receipe.create(req.body)
    .then((receipe) =>
      res.status(201).json({ msg: 'receipe added successfully' })
    )
    .catch((err) =>
      res.status(409).json({ error: 'Unable to add this receipe' })
    );
});

// @route GET api/receipes/:id
// @description Update receipe
// @access Public
router.put('/:id', async (req, res) => {
  await Receipe.findByIdAndUpdate(req.params.id, req.body)
    .then((receipe) => res.status(204).json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/receipes/:id
// @description Delete receipe by id
// @access Public
router.delete('/:id', async (req, res) => {
  await Receipe.findByIdAndRemove(req.params.id, req.body)
    .then((receipe) =>
      res.status(200).json({ mgs: 'receipe entry deleted successfully' })
    )
    .catch((err) => res.status(404).json({ error: 'No such a receipe' }));
});

module.exports = router;
