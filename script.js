var cvs = document.getElementById('osnova');
var ctx = cvs.getContext('2d');

var container = document.getElementById('rgb');

var R = document.getElementById('R');
var G = document.getElementById('G');
var B = document.getElementById('B');

var r = R.value;
var g = G.value;
var b = B.value;

function copy() {
  var copyHex = document.getElementById('copyHex');
  copyHex.select();
  copyHex.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

function rgbToHex(r,g,b) {
  var rgb = b | (g << 8) | (r << 16);
  return '#' + (0x1000000 + rgb).toString(16).slice(1)
}

hex = rgbToHex(r,g, b);

html = `
hex: <input type="text" id="copyHex" onclick="copy()" value="${hex}"></input>
<span>r: ${r} g: ${g} b: ${b}</span>
`;
container.innerHTML = html;

color = `rgb(${r}, ${g}, ${b})`;


cvs.style.background = color;

function Change_Color() {
  var r = R.value;
  var g = G.value;
  var b = B.value;

  hex = rgbToHex(r, g, b);

  html = `
  hex: <input type="text" id="copyHex" onclick="copy()" value="${hex}"></input>
<span>r: ${r} g: ${g} b: ${b}</span>
`;
container.innerHTML = html;

color = `rgb(${r}, ${g}, ${b})`;


cvs.style.background = color;
}