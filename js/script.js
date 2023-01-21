// Created by: sophie
// Created on: jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Final-Project-Sophie/sw.js", {
    scope: "/ICS2O-Final-Project-Sophie/",
  })
}

  let question = [
    {
      id:0,
      images:'./images/whopikachu.jpg',
      answer:'pikachu'
    },
    {
      id:1,
      images: "./images/whobulbasaur.jpg",
      answer:'bulbasaur'
    },
    {
      id:2,
      images: "./images/whodiglet.jpg",
      answer:'diglet'
    },
    {
      id:3,
      images: "./images/whoevee.png",
      answer:'eevee'
    },
    {
      id:4,
      images: "./images/whojigglypuff.jpg",
      answer:'jigglypuff'
    },
    {
      id:5,
      images: "./images/wholapras.jpg",
      answer:'lapras'
    },
    {
      id:6,
      images: "./images/whomewtwo.jpg",
      answer:'mewtwo'
    },
    {
      id:7,
      images: "./images/whomimikyu.jpg",
      answer:'mimikyu'
    },
    {
      id:8,
      images: "./images/whomudkip.png",
      answer:'mudkip'
    },
    {
      id:9,
      images: "./images/whopsyduck.png",
      answer:'psyduck'
    },
    {
      id:10,
      images: "./images/whovaporeon.jpg",
      answer:'vaporeon'
    },
    
  ]
  let start = true
  let id = 0
  let points = 0

function checkClicked() {
  const answer = String(document.getElementById('answer').value)
  
  if (id<10) {
    document.getElementById('answers-img').innerHTML = '<h5>'+answer+'</h5>'
    if (answer == question[id].answer) {
      document.getElementById('right-wrong').innerHTML = 'correct!'
      
    }
    else {
      document.getElementById('right-wrong').innerHTML = 'wrong! correct answer was ' + question[id].answer + '!'
    }
  }
}

function submitClicked() {

  const answer = String(document.getElementById('answer').value)
  const answerEvaluated = String(document.getElementById('answers-img').value)
  
  start = false

  if (id<10) {
    if (answer == question[id].answer || answerEvaluated == question[id].answer) {
      points++
    }
    id++
    document.getElementById('question-result').innerHTML = '<img src="' + question[id].images + '" alt="pokemon" height="50%" width="50%"/>'
  }
  else {
    document.getElementById('question-result').innerHTML = '<h4> you got: </h4> <h4>' + points + '/11 </h4>'
    if (points < 6) {
      document.getElementById('answers-img').innerHTML = '<img src="./images/pikachusleeppokeball.gif " alt="pokemon" height="50%" width="50%"/> <h5> want to retry?</h5>'
    }
    else {
      document.getElementById('answers-img').innerHTML = '<img src="./images/pikachupokeball.gif" alt="pokemon" height="50%" width="50%"/> <h5> want to retry?</h5>'
    }
    document.getElementById('button').innerHTML = '<a href="./index.html"> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"> retry</button></a>'
    start = true
  }

  console.log(id)
  console.log(points)

  if (start == true) {
    id = 0
    points = 0
  }
}

