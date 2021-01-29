var gallery=document.getElementById("gallery")
var select=document.getElementById("select")
var dsp=document.getElementById("dsp")
var imgArr=[]
for(var i=0;i<14;i++){
    imgArr.push(`images/${i+1}.png`)

    gallery.innerHTML += `<div class="pics" id="${i}" onclick='imagePressed(this.id)'><img src="thumbnails/${i+1}.png" alt="galleryimage"></div>`
}
function imagePressed(id){

    if(id<0){
        id=13
    }
    dsp.innerHTML=`<img src=${imgArr[id]} alt="galleryimage"  height="100%"><br>
                    <button class="leftbtn" onclick="imagePressed(${(id-1)%14})" >&#8592;</button>
                   <button  class="rightbtn" onclick="imagePressed(${(id+1)%14})">&#8594;</button>`
    select.style.display="block"
}
function imageReleased(){
    if (event.target === event.currentTarget) 
        select.style.display='none'
}
document.onkeydown = function(evt) {
    
    evt = evt || window.event;
    if (evt.key == "Escape") {
        select.style.display='none'
    }
};