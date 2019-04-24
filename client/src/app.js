const Beaches = require('./models/beaches');
const BeachesView = require('./views/beaches_view');
const AddView = require('./views/add_view');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');

  const beachesViewElement = document.querySelector('#beaches-container');
  const beachesView = new BeachesView(beachesViewElement);
  beachesView.bindEvents();

  const addBeachElement = document.querySelector('#add_button');
  const addView = new AddView(addBeachElement);
  addView.bindEvents();

  const beaches = new Beaches();
  beaches.getData();

});
