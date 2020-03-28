    var colors = ['#FFA5DB', '#F7A5FF', '#A5BAFF', '#A5E1FF', '#A5FFF9', '#A5FFCA', '#E7FFA5', '#FFF0A5', '#FFCCA5', '#FFB3A5', '#FFA5C3', '#D3A5FF', '#ADA5FF', '#A5C2FF', '#A5DBFF', '#A5FFF7', '#BAFFA5', '#E1FFA5', '#FFF9A5'];
    var cards=document.querySelectorAll(".card-color");

[].forEach.call(cards, (elem)=>{
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  var btn = elem.querySelector(".btn");
  var card = elem.querySelector(".card-color");
  var inputs = elem.querySelectorAll(".input");
  var button = elem.querySelector(".buttons")


  if (btn) {
    btn.style.color = random_color;
  }

  if (button) {
    button.style.color = random_color;
  }

  if (inputs) {
    [].forEach.call(inputs, (inp)=>{
      inp.style.color = random_color;
    });
  }

  elem.style.backgroundColor = random_color;

})
