const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  surveyName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },

  surveyTagLine: {
    type: String,
    default: 'Survey tagline'
  },

  surveyDescription: {
    type: String,
    default: 'Survey description'
  },

  section_1: [
    {
      title: {
        type: String,
        default: 'Section 1'
      },

      question_1: {
        type: String,
        default: 'Question 1'
      },
      question_2: {
        type: String,
        default: 'Question 2'
      },
      question_3: {
        type: String,
        default: 'Question 3'
      },
      question_4: {
        type: String,
        default: 'Question 4'
      }
    }
  ],
  section_2: [
    {
      title: {
        type: String,
        default: 'Section 2'
      },

      question_1: {
        type: String,
        default: 'Question 1'
      },
      question_2: {
        type: String,
        default: 'Question 2'
      },
      question_3: {
        type: String,
        default: 'Question 3'
      },
      question_4: {
        type: String,
        default: 'Question 4'
      }
    }
  ],
  section_3: [
    {
      title: {
        type: String,
        default: 'Section 3'
      },

      question_1: {
        type: String,
        default: 'Question 1'
      },
      question_2: {
        type: String,
        default: 'Question 2'
      },
      question_3: {
        type: String,
        default: 'Question 3'
      },
      question_4: {
        type: String,
        default: 'Question 4'
      }
    }
  ],
  section_4: [
    {
      title: {
        type: String,
        default: 'Section 4'
      },

      question_1: {
        type: String,
        default: 'Question 1'
      },
      question_2: {
        type: String,
        default: 'Question 2'
      },
      question_3: {
        type: String,
        default: 'Question 3'
      },
      question_4: {
        type: String,
        default: 'Question 4'
      }
    }
  ]
});

module.exports = Survey = mongoose.model('survey', SurveySchema);
