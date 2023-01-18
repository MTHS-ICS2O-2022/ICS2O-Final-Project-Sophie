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

function submitClicked() {

  const answer = String(document.getElementById('answer').value)
  const pics = [
    url ('../images/whobulbasaur.jpg'),
    url ('../images/whodiglet.jpg'),
    url ('../images/whoevee.png'),
    url ('../images/whojigglypuff.jpg'),
    url ('../images/wholapras.jpg'),
    url ('../images/whomewtwo.jpg'),
    url ('../images/whomimikyu.jpg'),
    url ('../images/whopsyduck.png'),
    url ('../images/whovaporeon.jpg'),
    url ('../images/whomudkip.png'),
  ]
  
  sessionstorage.count++


  
  
}