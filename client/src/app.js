const Beaches = require('./models/beaches');
const BeachesView = require('./views/beaches_view');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');

  const beachesViewElement = document.querySelector('#beaches-container');
  const beachesView = new BeachesView(beachesViewElement);
  beachesView.bindEvents();

  const beaches = new Beaches();
  beaches.getData();

});
