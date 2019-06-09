const inputName = document.querySelector('#input-name');
const inputScore = document.querySelector('#input-score');
const btnCancel = document.querySelector('#btn-cancel');
const btnAdd = document.querySelector('#btn-add');
const alertCtr = document.querySelector('ion-alert-controller');
const courseLists = document.querySelector('#course-lists');

const clear = () => {
    inputName.value = '';
    inputScore.value = '';
}
btnAdd.addEventListener('click', () => {
    const enteredName = inputName.value;
    const enteredScore = inputScore.value;

    if (enteredName.trim().length <= 0 || enteredScore.trim().length <= 0 || enteredScore <= 0) {
        alertCtr.create({
            header: "Action required",
            message: "Please add a course name/score",
            buttons: ['Okay']
        }).then(elemAlert => {
            elemAlert.present();
        });
        return;
    }

    newLists = document.createElement('ion-item');
    newLists.textContent = enteredName + ' => ' + enteredScore;

    courseLists.appendChild(newLists)
    clear();

});

btnCancel.addEventListener('click', clear);