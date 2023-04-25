const addBtn = document.querySelector('.add');
const clearBtn = document.querySelector('.clear');
const popUp = document.querySelector('.pop-up');
const textarea = document.querySelector('textarea');
const error = document.querySelector('.error');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const notes = document.querySelector('.notes');
const select = document.querySelector('select');
const showPopUp = () => {
	popUp.classList.add('showModal');
};

const create = () => {
	if (select.value != 0 && textarea.value !== '') {
		const newNote = document.createElement('div');
		newNote.classList.add('note');
		notes.appendChild(newNote);

		const noteHeader = document.createElement('h3');
		noteHeader.classList.add('noteHeading');
		newNote.appendChild(noteHeader);
		const textNote = document.createElement('p');
		textNote.classList.add('note-text');
		textNote.textContent = textarea.value;
		newNote.appendChild(textNote);
		if (select.value == 'shopping') {
			newNote.classList.add('lime');
			noteHeader.classList.add('lime2');
			noteHeader.textContent = 'Zakupy';
			const close = document.createElement('button')
			close.classList.add('btn-close')
			close.innerHTML = '<i class="lni lni-close"></i>';
			newNote.appendChild(close);
			close.addEventListener('click', () => {
				close.parentElement.remove()
			})
		} else if (select.value == 'work') {
			newNote.classList.add('gold');
			noteHeader.classList.add('gold2');
			noteHeader.textContent = 'Praca';
			const close = document.createElement('button')
			close.classList.add('btn-close')
			close.innerHTML = '<i class="lni lni-close"></i>';
			newNote.appendChild(close);
			close.addEventListener('click', () => {
				close.parentElement.remove()
			})
		} else if (select.value == 'other') {
			newNote.classList.add('blue');
			noteHeader.classList.add('blue2');
			noteHeader.textContent = 'Inne';
			const close = document.createElement('button')
			close.classList.add('btn-close')
			close.innerHTML = '<i class="lni lni-close"></i>';
			newNote.appendChild(close);
			close.addEventListener('click', () => {
				close.parentElement.remove()
			})
		}
		error.style.visibility = 'hidden';
		closePopUp();
	} else {
		error.style.visibility = 'visible';
	}
};

const deleteEverything = () => {
	notes.innerHTML = '';
};

const closePopUp = () => {
	textarea.value = '';
	select.value = '0';
	popUp.classList.remove('showModal');
};


cancelBtn.addEventListener('click', closePopUp);
clearBtn.addEventListener('click', deleteEverything);
saveBtn.addEventListener('click', create);
addBtn.addEventListener('click', showPopUp);
