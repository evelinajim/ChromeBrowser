images = [chrome.extension.getURL("images/me.jpg")];


var smimages = document.getElementsByTagName('img'); 
for(var i = 0; i < smimages.length; i++) {
	smimages[i].src = images[0];
}
