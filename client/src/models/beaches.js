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
        console.dir(this.data); // this is an array
        PubSub.publish('Beaches:beaches-data-loaded', this.data);
      })
      .catch((message) => {
        console.error(message);
      });
  };

  postBeach(beach) {
    const url = `http://localhost:3000/beaches`;
    const request = new RequestHelper(url);
    request.post(beach)
      .then((beaches) => {
        console.dir(beaches); // this is an object, not an array. List doesn't update.
        PubSub.publish('Beaches:beaches-data-loaded', beaches);
      })
      .catch(console.error);
  };

  deleteBeach(id) {
    const url = `http://localhost:3000/beaches/${id}`;
    const request = new RequestHelper(url);
    request.delete()
      .then((beaches) => {
        console.dir(beaches); // this is an object, not an array. List doesn't update.
        PubSub.publish('Beaches:beaches-data-loaded', beaches);
      })
      .catch(console.error);
  };


};

module.exports = Beaches;
