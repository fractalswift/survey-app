const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Survey = require('../../models/Survey');

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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check survey with same name doesn't already exist

    const surveyName = req.body.surveyName;

    try {
      let survey = await Survey.findOne({ surveyName });

      // If survey with this name already in db return error
      if (survey) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Survey with this name already exists' }] });
      }

      survey = new Survey({
        surveyName
      });

      await survey.save();

      res.send('Survey created!');
    } catch (err) {}
  }
);

module.exports = router;
