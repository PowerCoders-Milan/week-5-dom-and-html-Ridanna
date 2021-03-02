// Use this function that is linked to the button to change the background
 
function set_background() {
    docBody = document.getElementsByTagName("body")[0];
    myBodyElements = docBody.getElementsByTagName("p");
    paragraph1 = myBodyElements[0];
    paragraph1.style.background = "blue";

    paragraph2 = myBodyElements[1];
    paragraph2.style.background = "green";

    paragraph3 = myBodyElements[2];
    paragraph3.style.background = "yellow";
}
