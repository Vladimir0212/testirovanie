let input1 = document.querySelector("#q1Option1")
let input2 = document.querySelector("#q2Option3")
let input3 = document.querySelector("#q3Option2")
let input4 = document.querySelector("#q4Option1")
let input5 = document.querySelector("#q5Option4")
let input6 = document.querySelector("#q6Option3")
let input7 = document.querySelector("#q7Option1")
let input8 = document.querySelector("#q8Option4")
let input9 = document.querySelector("#q9Option3")
let input10 = document.querySelector("#q10Option2")
  
let countOfCorrectAnswers = 0
  
document.querySelector("#showResultsBtn").addEventListener("click", () => {
  if (input1.checked) countOfCorrectAnswers += 1
  if (input2.checked) countOfCorrectAnswers += 1
  if (input3.checked) countOfCorrectAnswers += 1
  if (input4.checked) countOfCorrectAnswers += 1
  if (input5.checked) countOfCorrectAnswers += 1
  if (input6.checked) countOfCorrectAnswers += 1
  if (input7.checked) countOfCorrectAnswers += 1
  if (input8.checked) countOfCorrectAnswers += 1
  if (input9.checked) countOfCorrectAnswers += 1
  if (input10.checked) countOfCorrectAnswers += 1
  document.querySelector("#results").style = "display: block"
  document.querySelector("#resultText").textContent = countOfCorrectAnswers.toString() + " из 10"
  countOfCorrectAnswers = 0
})
