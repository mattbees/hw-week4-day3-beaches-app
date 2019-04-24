const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

class Beaches {
  constructor() {
    this.data = null;
  };

  getData() {
    const url = `http://localhost:3000/beaches`;
    const request = new RequestHelper(url);
    request.get()
      .then((data) => {
        this.data = data;
        PubSub.publish('Beaches:beaches-data-loaded', this.data);
      })
      .catch((message) => {
        console.error(message);
      });
  };

};

module.exports = Beaches;
