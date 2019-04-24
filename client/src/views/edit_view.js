const Beaches = require('../models/beaches');
const PubSub = require('../helpers/pub_sub');

class EditView {

  constructor(element) {
    this.element = element;
  };

  bindEvents() {
    PubSub.subscribe('BeachesView:edit-beach-selected', (event) => {
      document.querySelector('#edit_name').placeholder = `${event.detail.name}`;
    });
  };

};

module.exports = EditView;
