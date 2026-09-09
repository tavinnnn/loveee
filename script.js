function openPhoto(image,title,description){
  document.getElementById("modalImage").src=image;
  document.getElementById("modalTitle").textContent=title;
  document.getElementById("modalDescription").textContent=description;
  document.getElementById("modal").classList.add("active");
  document.body.style.overflow="hidden";
}
function closePhoto(){
  document.getElementById("modal").classList.remove("active");
  document.body.style.overflow="";
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closePhoto()});
