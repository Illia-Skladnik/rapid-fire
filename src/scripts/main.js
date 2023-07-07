'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const burgerIcon = document.getElementById('burger-icon');
  const burgerMenu = document.getElementById('burger-menu');
  const cross = document.getElementById('cross');

  const games = document.getElementById('burger-games');
  const features = document.getElementById('burger-features');
  const reviews = document.getElementById('burger-reviews');
  const subscribe = document.getElementById('burger-subscribe');


  games.addEventListener('click', function() {
    burgerMenu.classList.remove('show');
  });

  features.addEventListener('click', function() {
    burgerMenu.classList.remove('show');
  });

  reviews.addEventListener('click', function() {
    burgerMenu.classList.remove('show');
  });

  subscribe.addEventListener('click', function() {
    burgerMenu.classList.remove('show');
  });
  
  burgerIcon.addEventListener('click', function() {
    burgerMenu.classList.toggle('show');
  });

  cross.addEventListener('click', function() {
    burgerMenu.classList.toggle('show');
  });
});
