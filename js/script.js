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
//array for all the questions
  let question = [
    {
      id:0,
      images:'./images/whopikachu.jpg',
      answer:'pikachu',
      answerImg:'./images/answerPikachu.png'
    },
    {
      id:1,
      images: "./images/whobulbasaur.jpg",
      answer:'bulbasaur',
      answerImg:'./images/answerBulbasaur.png'
    },
    {
      id:2,
      images: "./images/whodiglet.jpg",
      answer:'diglett',
      answerImg:'./images/answerDiglett.png'
    },
    {
      id:3,
      images: "./images/whoevee.png",
      answer:'eevee',
      answerImg:'./images/answerEevee.png'
    },
    {
      id:4,
      images: "./images/whojigglypuff.jpg",
      answer:'jigglypuff',
      answerImg:'./images/answerJigglypuff.jpeg'
    },
    {
      id:5,
      images: "./images/wholapras.jpg",
      answer:'lapras',
      answerImg:'./images/answerLapras.png'
    },
    {
      id:6,
      images: "./images/whomewtwo.jpg",
      answer:'mewtwo',
      answerImg:'./images/answerMewtwo.jpeg'
    },
    {
      id:7,
      images: "./images/whomimikyu.jpg",
      answer:'mimikyu',
      answerImg:'./images/answerMimikyu.png'
    },
    {
      id:8,
      images: "./images/whomudkip.png",
      answer:'mudkip',
      answerImg:'./images/answerMudkip.png'
    },
    {
      id:9,
      images: "./images/whopsyduck.png",
      answer:'psyduck',
      answerImg:'./images/answerPsyduck.png'
    },
    {
      id:10,
      images: "./images/whovaporeon.jpg",
      answer:'vaporeon',
      answerImg:'./images/answerVaporeon.png'
    },
    
  ]

  let start = true
  let id = 0
  let points = 0


function submitClicked() {
  
//input
  const answer = String(document.getElementById('answer').value)
  
  start = false


  if (id<10) {
    
    //point system
    if (answer == question[id].answer) {
      points++
    }
    
    //reveals answer
    document.getElementById('right-wrong').innerHTML = "It's " + question[id].answer + '!'
    
    document.getElementById('question-result').innerHTML = '<img src="' + question[id].answerImg + '" alt="pokemon" height="50%" width="50%"/>'

    //waits 3 seconds before showing the next question
    setTimeout (function(){
      id++
      
    document.getElementById('question-result').innerHTML = '<img src="' + question[id].images + '" alt="pokemon" height="50%" width="50%"/>'
      
      document.getElementById('right-wrong').innerHTML = ' '
      
    }, 3000)
  }
  else {
    //displays how much you got out of 11
    document.getElementById('question-result').innerHTML = '<h4> you got: </h4> <h4>' + points + '/11 </h4>'

    //depending on how much you got out of 11, you will get either a sleepy pikachu or a pikachu coming out of a pokeball
    if (points < 6) {
      document.getElementById('answers-img').innerHTML = '<img src="./images/pikachusleeppokeball.gif " alt="pokemon" height="30%" width="30%"/> '
    }
    else {
      document.getElementById('answers-img').innerHTML = '<img src="./images/pikachupokeball.gif" alt="pokemon" height="30%" width="30%"/> '
    }

    //button to return home/start
    document.getElementById('button').innerHTML = '<h5> want to retry?</h5> <a href="./index.html"> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"> retry</button></a>'

    //reset id and points to 0
    start = true
  }

  console.log(id)
  console.log(points)

  if (start == true) {
    id = 0
    points = 0
  }
}