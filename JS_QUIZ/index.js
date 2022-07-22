var quizdata=[
{
question :'Which is not related to JS',
a:'.net',
b:'flask',
c:'django',
d:'react',
correct:'a'
},
{
    question :'Which is not a programming language',
    a:'html',
    b:'java',
    c:'python',
    d:'C++',
    correct:'a'
},
{
    question :'Which is not a framework',
    a:'react',
    b:'javascript',
    c:'angular',
    d:'django',
    correct:'b'
},
{
    question :'CSS Stands for',
    a:'Cascading Style Sheet',
    b:'Cascading Style State',
    c:'Cascading Style of Sheet',
    d:'none',
    correct:'a'
}
]
var quiz = document.getElementById('quiz')
var answer=document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currentquestion =0
var quizscore=0

loadquiz()

function loadquiz()
{
 deselect()

 question.innerHTML = quizdata[currentquestion].question
 option_a.innerHTML = quizdata[currentquestion].a
 option_b.innerHTML = quizdata[currentquestion].b
 option_c.innerHTML = quizdata[currentquestion].c
 option_d.innerHTML = quizdata[currentquestion].d
}
function deselect()
{
    answer.forEach(answer=> answer.checked=false)
}

submitbtn.addEventListener('click', ()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoptionanswer = answer.id
        }
    })
      if (selectedoption==quizdata[currentquestion].correct)
    {
        quizscore=quizscore+1
    }
    currentquestion=currentquestion+1
    if(currentquestion ==quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML = `<h1> You have answered ${quizscore} correctly out of ${quizdata.length} </h1>`
    }
    else{
        loadquiz()
    }
})