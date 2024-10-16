// Get the modal
var modal = document.getElementById("donate-modal");

// Get the button that opens the modal
var btn = document.getElementById("donateBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const projects = document.querySelectorAll('.project');
    let currentIndex = 0;

    function showProject(index) {
      projects.forEach((project, i) => {
        project.classList.toggle('active', i === index);
      });
    }

    document.querySelector('.left-arrow').addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
      showProject(currentIndex);
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
      currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
      showProject(currentIndex);
    });

    // Initial display
    showProject(currentIndex);
