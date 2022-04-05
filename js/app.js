baguetteBox.run('.gridContainer');

// (1)Get Input Element 
let inputLog = document.getElementById("search");

// (2)Add Event Listener (KeyUp)
inputLog.addEventListener('keyup', filterNames);

function filterNames() {
// (3)Get Value of Input
filterValue = document.getElementById("search").value.toLowerCase()
// (4)Target Captions
const anchors = document.querySelectorAll('a');
// (5)Loop & Log - NTS: Actually Used Later Down The Code
for (let i = 0; i < anchors.length; i++){
let captions = anchors[i].getAttribute("data-caption").toLowerCase();
let filter = captions.includes(filterValue);//Includes() Returns True or False

if (filter === true) {
  anchors[i].style.display = 'block';
} else {
    anchors[i].style.display = 'none';
};
 };
  };