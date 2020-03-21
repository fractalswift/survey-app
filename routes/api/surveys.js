const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route   GET api/surveys
// @desc    Get all surveys
// @access  Public
router.get('/', (req, res) => res.send('Get all surveys route'));

// @route   POST api/surveys
// @desc    Create a new survey
// @access  Public
router.post(
  '/',
  [
    check('surveyName', 'Survey must have a name')
      .not()
      .isEmpty()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('Create new survey');
  }
);

module.exports = router;
