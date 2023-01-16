const dropDownMenuBtn = document.querySelector('.burger-btn');
const dropDownMenu = document.querySelector('.dropdown-nav');
const dropDownMenuBtnTopLine = document.querySelector('.burger-btn__line:nth-child(1)');
const dropDownMenuBtnMiddleLine = document.querySelector('.burger-btn__line:nth-child(2)');
const dropDownMenuBtnBottomLine = document.querySelector('.burger-btn__line:nth-child(3)');

dropDownMenuBtn.addEventListener('click', evt => {
  evt.stopPropagation();
  dropDownMenuBtn.classList.toggle('active');
  if(dropDownMenuBtn.classList.contains('active')) {
    dropDownMenuBtnTopLine.classList.add('active');
    dropDownMenuBtnMiddleLine.classList.add('active');
    dropDownMenuBtnBottomLine.classList.add('active');
    dropDownMenu.style.display = 'flex';
  } else {
    dropDownMenuBtnTopLine.classList.remove('active');
    dropDownMenuBtnMiddleLine.classList.remove('active');
    dropDownMenuBtnBottomLine.classList.remove('active');
    dropDownMenu.style.display = 'none';
  }
});
document.addEventListener('click', evt => {
  if(evt.target.classList.contains('drop-down-nav__item') || evt.target.classList.contains('nav__link')) return;
    dropDownMenuBtn.classList.remove('active');
    dropDownMenuBtnTopLine.classList.remove('active');
    dropDownMenuBtnMiddleLine.classList.remove('active');
    dropDownMenuBtnBottomLine.classList.remove('active');
    dropDownMenu.style.display = 'none';
});


