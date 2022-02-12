const imgArray = new Array();
var currentslide = 0;

imgArray[0] = new Image();
imgArray[0].src = 'images/showcase/radio.jfif';

imgArray[1] = new Image();
imgArray[1].src = 'images/comfydog.png';

imgArray[2] = new Image();
imgArray[2].src = 'images/showcase/sconce.jfif';

function nextImage(element)
{
  if(currentslide !== imgArray.length){
      document.getElementById(element.id).src = imgArray[currentslide].src;
      currentslide++;
  }
  if(currentslide >= imgArray.length){
      currentslide = 0;
  }
}