document.addEventListener("DOMContentLoaded", function(event) { 
    console.log( "J.s check :(" );



var images = 
['/pictures/picture3.jpg', '/pictures/picture1.jpg', '/pictures/picture2.jpg' ]

var index =0;



function buildimage() {

	document.getElementById('slidetwo').src.backgroundImage = url('+images[index]+');
}


		function changeimage () {
			index++
			if (index >= images.length) index=0;
			document.getElementById('slidetwo').src.backgroundImage = url(' + images[index] +');
			console.log(changeimage);

		}



});