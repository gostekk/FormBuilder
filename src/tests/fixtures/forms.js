export const forms = [
  {
    _id: 'ec2a81',
    question: 'Do you own a car?',
    type: 'radio'
  },
  {
    _id: '7ebd8c',
    parentId: 'ec2a81',
    question: 'What is your car\'s model?',
    type: 'text',
    conditionType: 'eq',
    conditionValue: 'Yes'
  },
  {
    _id: 'bf5d8d',
    parentId: '7ebd8c',
    question: 'What color is your Ford',
    type: 'text',
    conditionType: 'eq',
    conditionValue: 'Ford'
  },
  {
    _id: '89bcda',
    parentId: '7ebd8c',
    question: 'How many wheels on your Ford?',
    type: 'number',
    conditionType: 'eq',
    conditionValue: 'Ford'
  },
  {
    _id: 'bce80d',
    parentId: '89bcda',
    question: 'Is your Ford road legal?',
    type: 'radio',
    conditionType: 'gt',
    conditionValue: '4'
  },
  {
    _id: '450455',
    parentId: '7ebd8c',
    question: 'Has your Toyota ben recalled?',
    type: 'radio',
    conditionType: 'eq',
    conditionValue: 'Toyota'
  },
  {
    _id: 'cb8b6f',
    question: 'What year was your building built?',
    type: 'number'
  },
  {
    _id: '30e129',
    question: 'What\'s your company name?',
    type: 'text'
  }
];

export const fullState = {
  forms: [
  {
    _id: 'ec2a81',
    question: 'Do you own a car?',
    type: 'radio'
  },
  {
    _id: '7ebd8c',
    parentId: 'ec2a81',
    question: 'What is your car\'s model?',
    type: 'text',
    conditionType: 'eq',
    conditionValue: 'Yes'
  },
  {
    _id: 'bf5d8d',
    parentId: '7ebd8c',
    question: 'What color is your Ford',
    type: 'text',
    conditionType: 'eq',
    conditionValue: 'Ford'
  },
  {
    _id: '89bcda',
    parentId: '7ebd8c',
    question: 'How many wheels on your Ford?',
    type: 'number',
    conditionType: 'eq',
    conditionValue: 'Ford'
  },
  {
    _id: 'bce80d',
    parentId: '89bcda',
    question: 'Is your Ford road legal?',
    type: 'radio',
    conditionType: 'gt',
    conditionValue: '4'
  },
  {
    _id: '450455',
    parentId: '7ebd8c',
    question: 'Has your Toyota ben recalled?',
    type: 'radio',
    conditionType: 'eq',
    conditionValue: 'Toyota'
  },
  {
    _id: 'cb8b6f',
    question: 'What year was your building built?',
    type: 'number'
  },
  {
    _id: '30e129',
    question: 'What\'s your company name?',
    type: 'text'
  }
],
error: null
}