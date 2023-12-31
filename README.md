# React-Quiz

## Quiz Creator/Editor Interface
- Requirements: Please use the attached json file to construct a UI/logic creating/Editing quiz.
    - 1-Quiz is represented with title,description,final score and a url which will be a youtube video.
    - 2-questions should be listed as an array which have the question text and other metadata like the feedback which should be displayed when the user correctly/in correctly answer some question.
    - 3-answers should be listed as an array which have metadata about answer as well as whether this answer is correct or not. There can be only one correct answer for each question.
    - 4-on first creating a new quiz. There shouldn’t be any id (unique identifiers) for Quiz/question/answer.
    - 5-on Editing there will be ids for each. Because all of them will be already created.
    - 6-so on adding a new quiz. assume you’re having a local repo that assigns each entity an id.
    - 7- the initial interface should list all quizzes that we’re having. With option to add a new one or edit an existing one. 
- Deliverables: (all deliverables should be placed on GIT (your personal Github account).. and we may want to check your commits and branches.)

- React code bootstrapped using create-react-app which implements the above requirements.
    - attached below sample json that your app should generate on adding / handle on editing..

### Please use functional components, demonstrate your thought process not the over use of libraries and frameworks and follow SOLID principles 

```json
{
  "created": "2020-09-09 09:26:39",
  "description": "Description",
  "id": 29,
  "modified": "2020-09-09 09:26:39",
  "questions_answers": [
    {
      "answer_id": null,
      "answers": [
        {
          "id": 122,
          "is_true": false,
          "text": "question 1 answer 1 false"
        },
        {
          "id": 123,
          "is_true": false,
          "text": "question 1 answer 2 false"
        },
        {
          "id": 124,
          "is_true": true,
          "text": "question 1 answer 3 true"
        },
        {
          "id": 125,
          "is_true": false,
          "text": "question 1 answer 4 false"
        }
      ],
      "feedback_false": "question 1 false feedback",
      "feedback_true": "question 1 true feedback",
      "id": 53,
      "text": "question 1 text"
    },
    {
      "answer_id": null,
      "answers": [
        {
          "id": 126,
          "is_true": true,
          "text": "question 2 answer 1 true"
        },
        {
          "id": 127,
          "is_true": false,
          "text": "question 2 answer 2 false"
        }
      ],
      "feedback_false": "question 2 false feedback",
      "feedback_true": "question 2 true feedback",
      "id": 54,
      "text": "question 2 text"
    },
    {
      "answer_id": null,
      "answers": [
        {
          "id": 128,
          "is_true": false,
          "text": "question 3 answer 1 false"
        },
        {
          "id": 129,
          "is_true": true,
          "text": "question 3 answer 2 true"
        },
        {
          "id": 130,
          "is_true": false,
          "text": "question 3 answer 3 false"
        }
      ],
      "feedback_false": "question 3 false feedback",
      "feedback_true": "question 3 true feedback",
      "id": 55,
      "text": "question 3 text"
    }
  ],
  "score": null,
  "title": "quiz title",
  "url": "https://www.youtube.com/watch?v=e6EGQFJLl04"
}
```