const images = ['img/pic-1.jpg','img/pic-2.jpg','img/pic-3.jpg','img/pic-4.jpg', 'img/pic-5.jpg','img/pic-6.jpg']
const image = document.getElementById('image');
// slider function
const setImages= index=>{
    image.setAttribute('src',images[index])  
}

let imgcount= 0;
const previous=()=>{
    --imgcount;
    if(imgcount<0){
        imgcount=images.length-1;
    }
    setImages(imgcount);
}
const next=()=>{
    ++imgcount;
    if(imgcount==images.length){
        imgcount=0
    }
    setImages(imgcount);
}
setInterval(() => {
    imgcount++;
    if(imgcount<images.length){
         setImages(imgcount);
    }else{
        imgcount=0;
    }
}, 7000);

