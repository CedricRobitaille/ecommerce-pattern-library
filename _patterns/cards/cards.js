    var colors = ['#C38376', '#D1CBAA', '#95CAD9', '#A9A1E8', '#B7E2B3', '#F8AC9C', '#9ECB86', '#C7AD8A', '#D88A93', '#8DD1AC', '#75DDC1'];
    var cards=document.querySelectorAll(".card-color");

[].forEach.call(cards, (elem)=>{
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  var btn = elem.querySelector(".btn");
  var card = elem.querySelector(".card-color");
  var input = elem.querySelector(".input");

  if (btn) {
    btn.style.color = random_color;
  }
  if (input) {
    input.style.color = random_color;
  }

  elem.style.backgroundColor = random_color;

})
