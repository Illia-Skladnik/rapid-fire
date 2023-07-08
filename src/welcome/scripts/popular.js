'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const burgerIcon = document.getElementById('burger-icon2');
  const burgerMenu = document.getElementById('burger-menu2');
  const cross = document.getElementById('cross2');
  const body = document.getElementById('body2');

  const games = document.getElementById('burger-games2');
  const features = document.getElementById('burger-features2');
  const reviews = document.getElementById('burger-reviews2');
  const subscribe = document.getElementById('burger-subscribe2');

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
