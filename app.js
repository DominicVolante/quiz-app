
const store = {

  questions: [
    {
      question: 'What is the capital city of Canada?',
      answers: [
        'Moscow',
        'New York',
        'Ottawa',
        'Athens'
      ],
      correctAnswer: 'c'
    },
    {
      question: 'What is the capital city of England?',
      answers: [
        'Paris',
        'Skopje',
        'London',
        'Athens'
      ],
      correctAnswer: 'c'
    },
    {
      question: 'What is the capital city of Greece?',
      answers: [
        'Belgrade',
        'Tirana',
        'Athens',
        'Sofia'
      ],
      correctAnswer: 'c'
    },
    {
      question: 'What is the capital city of Romania?',
      answers: [
        'Moscow',
        'Tirana',
        'Skopje',
        'Bucharest'
      ],
      correctAnswer: 'd'
    },
    {
      question: 'What is the capital city of Japan?',
      answers: [
        'Tokyo',
        'Hong Kong',
        'Seoul',
        'Athens',
      ],
      correctAnswer: 'a'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};


/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function questionTemplate(){
  html = `<h3>Question ${store.questionNumber} of 5</h3>
  <h2>${store.questions[num - 1].question}</h2>
  
  <div class="group01">
    <form>
    
    <label>
    <input type="radio" id="a" name="radio" class="item" value="a" required>A:
    ${store.questions[num - 1].answers[0]}</label><br>
    
    <label>
    <input type="radio" id="b" name="radio" class="item" value="b">B:
    ${store.questions[num - 1].answers[1]}</label><br>
    
    <label>
    <input type="radio" id="c" name="radio" class="item" value="c">C:
    ${store.questions[num - 1].answers[2]}
    </label><br>
    
    <label>
    <input type="radio" id="d" name="radio" class="item" value="d">D:
    ${store.questions[num - 1].answers[3]}
    </label><br>
    

  <div id="sbmt" class="submit"><button id="submitbtn" type="submit">Submit</button></div>
  </form>
    
  </div>
  <div id="nxt" class="next"><button id="nextbtn" type="button" disabled>Next</button></div>
  <div><p id="feedback"></p></div>
  <h5>${store.score} out of 5 Correct</h5>
  
  `
  return html
}


function welcomeTemplateGenerator() {

  html = `
  <h3>Do you know your Capitals?</h3>
  <div class="group01">
    <div><button id="startButton">Start</button></div>
  </div>

`

  return html;
}

function conclusionTemplateGenerator() {
  html = `<h3>You answered ${store.score} out of ${store.questions.length}</h3>
  <div class="group01">
    <div><button id="resetButton">Reset</button></div>
  </div>`

  return html
  /*
  $('.main').html(html);


  */
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function render() {
  num = store.questionNumber;
  if (store.quizStarted = false){
    html = welcomeTemplateGenerator();
  }
  if (num > 0 && num < 6){
    html = questionTemplate()
  }

  if (num === 6) {
    html = conclusionTemplateGenerator();
  }
  
  $('.main').html(html);
}



/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
//checks answer on submit
function quizStart() {
  $('main').on('click', '#startButton', function (event) {
    store.quizStarted = true;
    store.questionNumber++;
    render();
  


  
  })

  

}


function submit() {
  num = store.questionNumber;
  $('main').on('click', '.submit', function (event) {
    var checked = $("input[name='radio']:checked").val();
    event.preventDefault();
    
    if (checked === store.questions[num-1].correctAnswer) {
      store.score++;
      store.questionNumber++;
      $('#feedback').html('Correct!')
    }
    else{
      store.questionNumber++;
      $('#feedback').html(`Incorrect, the correct answer was ${store.questions[num-1].correctAnswer}`)
    }
    $('#submitbtn').attr('disabled', true);
    $('#nextbtn').removeAttr('disabled');
      })


}

function next(){
  $('main').on('click','.next',function(event){
    render();
  })
}




//Resets the test back to the welcome page
function resetTest() {
  $('.main').on('click', '#resetButton', function (event) {
    store.score = 0;
    store.questionNumber = 1;
    store.quizStarted = false;
    render();
  })
}

/**** jQuery function ****/

function main() {
  html = welcomeTemplateGenerator();
  $('.main').html(html);
  quizStart();
  submit();
  next();
  resetTest();

};

$(main);

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */





