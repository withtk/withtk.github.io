tailwind.config = {
  theme: {
    extend: {
      colors: {
        tomato: "tomato",
      },
    },
  },
};

function showText(text){
  document.getElementById('pppp').innerText = text;

}
function onPrev(){
  showText('onPrev');
}
function onNext(){
  showText('onNext');
}