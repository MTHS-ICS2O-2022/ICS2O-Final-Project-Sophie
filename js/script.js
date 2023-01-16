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
