const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Survey = require('../../models/Survey');
const SurveyBasic = require('../../models/SurveyBasic');

// @route   POST api/surveys/new
// @desc    Create a new survey
// @access  Public
router.post(
  '/new',
  [
    // Make sure survey has a name before insert to db
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
      let survey = await SurveyBasic.findOne({ surveyName });

      // If survey with this name already in db return error
      if (survey) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Survey with this name already exists' }] });
      }

      survey = new SurveyBasic({
        surveyName
      });

      await survey.save();

      res.send('Survey created!');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

//@route   GET api/surveys/basic
// @desc    Get default survey
// @access  Public
router.get('/basic', async (req, res) => {
  console.log('getting basic survey from db...');

  const survey = await SurveyBasic.findOne({ surveyName: 'Survey basic 1' });

  return res.json(survey);
});

//@route   GET api/surveys/test
// @desc    Test route
// @access  Public
router.get('/test', (req, res) => {
  return res.send('test worked');
});

module.exports = router;
