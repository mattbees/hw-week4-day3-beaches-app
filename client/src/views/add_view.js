const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

class AddView {

  constructor(element) {
    this.element = element;
  };

  bindEvents() {
    const formView = document.querySelector('#beach-form');
    formView.style.visibility = 'hidden';
    // const formViewDropdown = document.querySelector('.ui', 'dropdown');
    // formViewDropdown.style.visibility = 'hidden';

    this.element.addEventListener('click', (event) => {
      document.getElementById('swell_frequency').classList.add("ui");
      this.element.style.visibility = 'hidden';
      formView.style.visibility = 'visible';
    });
  };

};

module.exports = AddView;
