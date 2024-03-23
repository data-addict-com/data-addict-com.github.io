(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  lamp.addEventListener("click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });


  //make all images clickable
  const image_clickable =() => {

    // Get all <img> elements
    var images = document.querySelectorAll('img');
    
    // Loop through each image
    images.forEach(function(image) {

      // Add title to the image
      image.title = "Click to open in a new tab"
      

      // Create a new <a> element
      var link = document.createElement('a');
      
      // Set its href attribute to the image source
      link.href = image.src;
      
      // Set its target attribute to "_blank" to open in a new tab
      link.target = '_blank';
      
      // Append the image as a child of the <a> element
      link.appendChild(image.cloneNode(true));


      
      // Replace the original <img> element with the new <a> element
      image.parentNode.replaceChild(link, image);

    })

  }

  window.addEventListener('DOMContentLoaded', image_clickable)

  //todo : on click, copy codeblocks into clipboard


})();
