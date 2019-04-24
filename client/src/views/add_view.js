const Beaches = require('../models/beaches');
class AddView {

  constructor(element) {
    this.element = element;
  };

  bindEvents() {
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const newBeach = {};
      newBeach.name = evt.target['name'].value;
      newBeach.grid_ref = evt.target['grid_ref'].value;
      newBeach.swell_frequency = evt.target['swell_frequency'].value;

      const beaches = new Beaches();
      beaches.postBeach(newBeach);
      console.dir('ADDVIEW TRIGGERED');
      this.element.reset();
    });
  };

};


module.exports = AddView;
