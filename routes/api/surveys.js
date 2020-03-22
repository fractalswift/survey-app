const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Survey = require('../../models/Survey');

router.get('/test', (req, res) => {
  res.send({ greeting: 'THIS IS THE VALUE FOR MESSAGE KEY' });
  console.log('it worked');
});

router.get('/default', async (req, res) => {
  const survey = await Survey.findOne({ surveyName: 'default4' });

  console.log(survey.surveyTagLine);

  res.send({ survey });
});

// @route   GET api/surveys
// @desc    Get demo survey
// @access  Public
router.get('/demo', async (req, res) => {
  console.log('trying...!');

  const survey = await Survey.findOne({ surveyName: 'demo' });

  console.log(survey);
  //return res.send(survey);
  return res.json(survey);

  //return res.send('hi there');
});

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
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
