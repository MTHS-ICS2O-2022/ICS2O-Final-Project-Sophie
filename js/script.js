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

const answer = String(document.getElementById('answer').value)
  let stage = [
    {
      answer:'pikachu'
    },
    {
      img: "./img/whobulbasaur.jpg",
      answer:'bulbasaur'
    },
    {
      img: "./img/whodiglet.jpg",
      answer:'diglet'
    },
    {
      img: "./img/whoevee.png",
      answer:'eevee'
    },
    {
      img: "./img/whojigglypuff.jpg",
      answer:'jigglypuff'
    },
    {
      img: "./img/wholapras.jpg",
      answer:'lapras'
    },
    {
      img: "./img/whomewtwo.jpg",
      answer:'mewtwo'
    },
    {
      img: "./img/whomimikyu.jpg",
      answer:'mimikyu'
    },
    {
      img: "./img/whomudkip.png",
      answer:'mudkip'
    },
    {
      img: "./img/whopsyduck.png",
      answer:'psyduck'
    },
    {
      img: "./img/whovaporeon.jpg",
      answer:'vaporeon'
    },
  ]
  let count = 0
  let points = 0
  

function submitClicked() {

  if (answer == stage[count].answer) {
    points++
  }
  
  count++

    document.getElementById('pokeimg').src = stage[count].img
}