let root = document.documentElement;
let ready = false;

window.addEventListener('load', function () {
  ready = true;
  document.getElementById("color_button").innerHTML = colors[localStorage.color][2];
});

const colors = [
  //Background, Foreground
  ["#161616", "#65E265", "Green"],
  ["#544115" , "#FFB000", "Amber"],
  ["#50449B", "#887ECB", "C64"],
  ["#1A1A1A", "#D7D7D7", "Grey"]
];

init();

function init() {
  if (localStorage.length == 0) {
    localStorage.setItem('blur', 1);   //Blur is on.
    localStorage.setItem('color', 0);  //Color index in on green.
  } else {
    if (localStorage.blur == 0) {
      blur_toggle(true);
    }
    color_index = localStorage.color;
    change_colors(true);
  }
}

function blur_toggle(is_init) {
  var blur = getComputedStyle(root).getPropertyValue('--screen-blur');
  var no_blur = getComputedStyle(root).getPropertyValue('--no-blur');
  
  var temp = blur;
  blur = no_blur;
  no_blur = temp;

  root.style.setProperty('--screen-blur', blur);
  root.style.setProperty('--no-blur', no_blur);
  
  if (!is_init) {
    localStorage.blur = 1 - localStorage.blur;
  }
}

function change_colors(is_init) {
  let color_index = parseInt(localStorage.color);
  if (!is_init) {
    color_index = (color_index + 1) % colors.length;
  }

  root.style.setProperty('--bg-color', colors[color_index][0]);
  root.style.setProperty('--fg-color', colors[color_index][1]);
  if (ready) {
    document.getElementById("color_button").innerHTML = colors[color_index][2];
  }
  localStorage.color = color_index;
}
