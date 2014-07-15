var form = document.getElementById("to_do_form");
var list = document.getElementById('list');
var title = document.getElementById('to_do_title');
var description = document.getElementById('to_do_description');

var addItem = function(title, description){
	var newList = document.createElement('li');
	var newSpan = document.createElement('span')
	var clearButton = document.createElement('button')
	clearButton.innerHTML = "X"
	newSpan.innerHTML = ': ';

	list.appendChild(newList);
	newList.appendChild(title);
	newList.appendChild(newSpan);
	newSpan.appendChild(description);
	newList.appendChild(clearButton)

	clearButton.onclick = function(event){
		list.removeChild(newList)
	}
}

form.onsubmit = function(event){
	event.preventDefault();

	var addTitleNode = document.createTextNode(this.title.value);
	var descriptionNode = document.createTextNode(this.description.value);

	console.log(addTitleNode);
	console.log(descriptionNode);

	addItem(addTitleNode, descriptionNode)

	this.title.value = "";
	this.description.value = "";

}

