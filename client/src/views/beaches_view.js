const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

class BeachesView {

  constructor(element) {
    this.element = element;
  };

  bindEvents() {
    PubSub.subscribe('Beaches:beaches-data-loaded', (event) => {
      this.render(event.detail);
    });
  };

  render(beaches) {
    beaches.forEach((beach) => {
      const card = this.createCard(beach);
      this.element.appendChild(card);
    });
  };


  createCard(beach) {
    const card = document.createElement('div');
    card.classList.add('ui', 'card');
    // card.classList.add('card'); // necessary because JS won't allow spaces in class name

    const content = document.createElement('div');
    content.classList.add('content');

    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = `${beach.name}`;

    const meta = document.createElement('div');
    meta.classList.add('meta');
    meta.innerHTML = `<ul><li>Grid reference: ${beach.grid_ref}</li>
                        <li>Swell frequency: ${beach.swell_frequency}</li>`;

    content.appendChild(header);
    content.appendChild(meta);
    card.appendChild(content);

    return card;
  };


};

module.exports = BeachesView;
