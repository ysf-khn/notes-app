'use strict';

//Selectors//
const docket = document.querySelector('.docket');
const circleContainer = document.querySelector('.circle-container');
const circle = document.querySelectorAll('.circle');
const notesContainer = document.querySelector('.notes-container');
const note = document.querySelectorAll('.note');
const btnNewNote = document.querySelector('.new-note');
const newNoteCard = document.querySelector('.new-note-card');
const heading = document.querySelector('.new-note-heading');
const btnAddNote = document.querySelector('.check');
const noteText = document.querySelector('.new-note-text');
const editNote = document.querySelector('.edit');
const starNote = document.querySelector('.star');

//Variables//
const now = new Date();
const dateNow = String(now.getDate()).padStart(2, 0);
const monthNow = String(now.getMonth() + 1).padStart(2, 0);
const yearNow = String(now.getFullYear());

//Functions//
const showNewNote = function () {
  newNoteCard.style.display = 'block';
};

const addAndRenderNote = function () {
  const html = `
<div class="note">
          <h3 class="note-heading">${heading.value}</h3>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3179/3179967.png"
            class="star"
          />
          <p class="note-text">
            ${noteText.value}
          </p>
          <div class="date-added"><b>${dateNow}-${monthNow}-${yearNow}</b></div>
          <img
            class="edit"
            src="https://cdn-icons-png.flaticon.com/128/181/181540.png"
          />
        </div>`;

  notesContainer.insertAdjacentHTML('afterbegin', html);

  heading.value = '';
  noteText.value = '';
  newNoteCard.style.display = 'none';
};

//Event Listeners//
btnNewNote.addEventListener('click', showNewNote);

btnNewNote.addEventListener('mouseover', () =>
  circleContainer.forEach(circle => (circle.style.display = 'grid'))
);

// docket.addEventListener('click', () =>
//   circleContainer.forEach(circle => (circle.style.display = 'none'))
// );
circle.forEach(circle =>
  circle.addEventListener(
    'mouseover',
    () => (newNoteCard.style.backgroundColor = 'yellow')
  )
);

btnAddNote.addEventListener('click', addAndRenderNote);
