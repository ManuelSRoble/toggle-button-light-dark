const mode = document.querySelector('.dark-light');
const page = document.querySelector('.page')
const myParagraph = document.querySelector('.para')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode'); // Toggle dark-mode class on body
  page.classList.toggle('dark-mode');
  myParagraph.classList.toggle('dark-mode'); // Toggle dark-mode class on paragraph
  btn.classList.toggle('dark-mode') // toggle dark-mode class on button
});
