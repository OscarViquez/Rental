

const longParagraph = document.getElementById("long__paragraph");

// What Page loads =======================================================>
if (longParagraph.style.display === "block") {
  longParagraph.style.display = "block"
} else {
  longParagraph.style.display = "none";
}

// Google Map ============================================================>



// hide/ show toggle button =======================================================>
function hideToggle() {
  var longParagraph = document.getElementById("long__paragraph");
  if (longParagraph.style.display === "none") {
    longParagraph.style.display = "block";
  } else {
    longParagraph.style.display = "none ";
  }
};

// Navigation =======================================================>
const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})






































                                                                                                                                                        