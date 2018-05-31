var images = [];
const src = [
  "./images/header-logo.png",
  "./images/main-post-jpg",
  "./images/tiny-post-1.jpeg",
  "./images/tiny-post-2.jpeg",
  "./images/tiny-post-3.jpeg",
  "./images/tiny-post-4.jpeg",   
  "./images/logo.png",
  "./images/post-1.jpeg",
  "./images/post-2.jpeg"
];
        
for(var i=0, l=src.length; i<l; i++) {
  images[i] = new Image();
  images[i].src = src[i];
}




