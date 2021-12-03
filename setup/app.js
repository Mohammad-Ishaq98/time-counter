//set initial set up
let count = 0;
//selecting queries

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach( (btn) =>{
  //console.log(btn);
  btn.addEventListener('click', (e) =>{
    const styles = e.currentTarget.classList;

    styles.contains("btn-decrease") ? count-- : styles.contains("btn-increase") ? count++: count = 0;
    count > 0 ? value.style.color = "green": count < 0 ?  value.style.color = "red" : value.style.color = "#222";
     value.textContent = count;
  });
 });

