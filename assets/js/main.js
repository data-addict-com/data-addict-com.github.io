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

  //todo : on click, copy codeblocks into clipboard
  const make_code_blocks_copy = () => {
    Array.from(document.querySelectorAll('pre')).map(e => {
      e.title = "Click to copy the whole code bock"
      e.style.cursor = 'pointer'
      create_click_event(e)
    })
  }

  const create_click_event = (e) => {
     e.addEventListener('click', (event) => {
      event.stopPropagation()

      let current_node = event.target
      const content_copied = copy(current_node)
      
      //if target = code => go to parent Node
      if (event.target.nodeName === 'CODE') current_node = event.target.parentNode

      current_node.insertBefore(copied_alert().firstChild, current_node.firstChild)

      setTimeout(function(){
          document.getElementById('copied_alert').remove()
      },1750)
    })
  }

  const copied_alert = () => {
    const html_alert = `<strong id="copied_alert" style="top: -35px;position: relative;color: black;margin: 0 auto;text-align: center;display: block;">Copied to clipboard!</strong>`
    const new_element = document.createElement('span')
    new_element.innerHTML = html_alert
    new_element.id = 'copied_alert'
    return new_element
  }

  const copy = (target) => {
    const TextToCopy = target.textContent

    var TempText = document.createElement("textarea");
    TempText.value = TextToCopy;
    document.body.appendChild(TempText);
    TempText.select();
    
    document.execCommand("copy");
    document.body.removeChild(TempText);

    return TextToCopy
  }

  const custom_alert = (content) => {
    return console.log(content)
  }

  const function_on_loading_done = () => {
    image_clickable()
    make_code_blocks_copy()
  }

  window.addEventListener('DOMContentLoaded', function_on_loading_done)


})();
