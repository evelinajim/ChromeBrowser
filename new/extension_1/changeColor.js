if (!document.URL.includes("easternct.edu")) {
    // rgba specifies a 'red', 'green', 'blue', and 'alpha' value,
    // where 'alpha' controls the opacity
    //let color  = 'rgba(238,130,238, .3)';
    //document.body.style.backgroundColor = color;
}else{
	var bg = document.getElementsByClassName("main-menu-bg")[0];
	bg.style.backgroundColor = "green";
	
	
	
	let sliderpics = document.getElementsByClassName("impact home sliders")[0];
	sliderpics.remove();
	
	
	
	    // add links for commonly used web pages
    let links = [{text: 'email', link: 'https://www.office.com/?auth=2&home=1'},
                 {text: 'blackboard', link: 'https://easternct.blackboard.com/'},
                 {text: 'gdancik.github', link: 'http://gdancik.github.io'}];
   
    // create string that will contain the HTML for the links
    let string = '<ul style = "padding:0px;">\n';
    for (let li of links) {
        string += '<li><a href = "' + li.link + '">' + li.text + '</a></li>';
    }
    string += '</ul>';

    // create a div to hold the elements
    let div = document.createElement('div');

    // set the links string to the innerHTML
    div.innerHTML = string;

    // style the div
    div.className = 'headerCTA header-column';
    div.style.zIndex = '1000';
    div.style.position = 'fixed';
    div.style.top = '20%';
    div.style.left = '0%';
    div.style.backgroundColor = 'magenta';
    div.style.padding = '1%';
    div.style.border = 'solid 1px black';

    // append the div to the body so that it is displayed on the page
    document.body.append(div)
}

