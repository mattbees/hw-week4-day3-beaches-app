const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const Beaches = require('../models/beaches');

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
    beaches.forEach((beach) => { // failing as objects are returned from POST, DELETE, 
      const card = this.createCard(beach);
      this.element.appendChild(card);
    });
  };


  createCard(beach) {
    const card = document.createElement('div');
    card.classList.add('ui', 'card');

    const content = document.createElement('div');
    content.classList.add('content');

    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = `${beach.name}`;

    const meta = document.createElement('div');
    meta.classList.add('meta');
    meta.innerHTML = `<ul><li>Grid reference: ${beach.grid_ref}</li>
                        <li>Swell frequency: ${beach.swell_frequency}</li>`;

    const buttons = document.createElement('div');
    buttons.classList.add('ui', 'buttons');

    const editButton = document.createElement('button');
    editButton.classList.add('ui', 'button');
    editButton.id = `edit_${beach.id}`;
    editButton.textContent = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('ui', 'button');
    deleteButton.id = `delete_${beach.id}`;
    deleteButton.textContent = 'Delete';
    this.addDeleteEvent(deleteButton, beach);

    content.appendChild(header);
    content.appendChild(meta);

    buttons.appendChild(editButton);
    buttons.appendChild(deleteButton);

    card.appendChild(content);
    card.appendChild(buttons);

    return card;
  };

  addDeleteEvent(button, beach) {
    button.addEventListener('click', (event) => {
      const beaches = new Beaches();
      beaches.deleteBeach(beach.id);
    });
  };


};

module.exports = BeachesView;
