
window.addEventListener("DOMContentLoaded", function(){
  const widgets = document.getElementsByClassName("elem_container");
  const length=widgets.length;

for(let i=0; i<length; i++){

  widgets[i].addEventListener("mouseenter", (e) => {
       e.target.children[2].classList.add("show");
  });

widgets[i].addEventListener("mouseleave", (e) => {
  e.target.children[2].classList.remove("show");
});
}
});









