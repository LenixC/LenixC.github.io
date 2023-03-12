let root = document.documentElement;
let color_index = 0;

const colors = [
  //Background, Foreground
  ["#161616", "#65E265", "Green"],
  ["#544115" , "#FFB000", "Amber"],
  ["#50449B", "#887ECB", "C64"],
  ["#1A1A1A", "#D7D7D7", "Grey"]
];

function blur_toggle() {
  var blur = getComputedStyle(root).getPropertyValue('--screen-blur');
  var no_blur = getComputedStyle(root).getPropertyValue('--no-blur');
  
  var temp = blur;
  blur = no_blur;
  no_blur = temp;

  root.style.setProperty('--screen-blur', blur);
  root.style.setProperty('--no-blur', no_blur);
}

function change_colors() {
  color_index = (color_index + 1) % colors.length

  root.style.setProperty('--bg-color', colors[color_index][0])
  root.style.setProperty('--fg-color', colors[color_index][1])
  document.getElementById("color_button").innerHTML = colors[color_index][2];
}
