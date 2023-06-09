const boxContainer = document.querySelector('.box1');
const baseBox = document.querySelector('.box');
const imgContainer = document.querySelector('.img1');
const button = document.querySelector('.btn');
boxContainer.addEventListener("dragover",(e)=>{
 e.preventDefault();
});
boxContainer.addEventListener("drop",(e)=>{
    e.target.append(imgContainer);
})
button.addEventListener("click",()=>{
    baseBox.append(imgContainer);
})