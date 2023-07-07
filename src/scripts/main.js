'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const burgerIcon = document.getElementById('burger-icon');
  const burgerMenu = document.getElementById('burger-menu');
  const cross = document.getElementById('cross');
  const body = document.getElementById('body');

  const games = document.getElementById('burger-games');
  const features = document.getElementById('burger-features');
  const reviews = document.getElementById('burger-reviews');
  const subscribe = document.getElementById('burger-subscribe');

  games.addEventListener('click', function() {
    burgerMenu.classList.remove('show');
    body.classList.remove('hidden');
  });

  features.addEventListener('click', function() {
    burgerMenu.classList.remove('show');
    body.classList.remove('hidden');
  });

  reviews.addEventListener('click', function() {
    burgerMenu.classList.remove('show');
    body.classList.remove('hidden');
  });

  subscribe.addEventListener('click', function() {
    burgerMenu.classList.remove('show');
    body.classList.remove('hidden');
  });
  
  burgerIcon.addEventListener('click', function() {
    burgerMenu.classList.add('show');
    body.classList.add('hidden');
  });

  cross.addEventListener('click', function() {
    burgerMenu.classList.remove('show');
    body.classList.remove('hidden');
  });
});
