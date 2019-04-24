const Beaches = require('./models/beaches');
const BeachesView = require('./views/beaches_view');
const AddView = require('./views/add_view');
const EditView = require('./views/edit_view');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');

  const beachesViewElement = document.querySelector('#beaches-container');
  const beachesView = new BeachesView(beachesViewElement);
  beachesView.bindEvents();

  const addBeachForm = document.querySelector('#beach-form');
  const addView = new AddView(addBeachForm);
  addView.bindEvents();

  const editView = new EditView('#edit-form');
  editView.bindEvents();

  const beaches = new Beaches();
  beaches.getData();

});
