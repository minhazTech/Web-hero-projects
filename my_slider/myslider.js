const img = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg"
    
]

 let imgIndex = 0;

 const imgElement = document.getElementById("imgSlider");

 setInterval(() => {
    if(imgIndex >= img.length){
        imgIndex = 0;
    }
    const imgUrl = img[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    // console.log(imgUrl);
    imgIndex++;

 }, 1000)