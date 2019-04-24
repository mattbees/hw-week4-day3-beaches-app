const Beaches = require('../models/beaches');
const PubSub = require('../helpers/pub_sub');

class EditView {

  constructor(element) {
    this.element = element;
  };

  bindEvents() {
    PubSub.subscribe('BeachesView:edit-beach-selected', (event) => {
      console.log('BeachesView:edit-beach-selected WORKING', event.detail);;
    });
  };

};

module.exports = EditView;
