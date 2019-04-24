const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

class BeachesView {

  constructor(element) {
    this.element = element;
  };

  bindEvents() {
    PubSub.subscribe('Beaches:beaches-data-loaded', (event) => {
      console.log('Beaches:beaches-data-loaded WORKING');
    });
  };

};

module.exports = BeachesView;
