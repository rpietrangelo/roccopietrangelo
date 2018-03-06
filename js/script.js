document.getElementById("menu_list").addEventListener("click",function(e) {
  var nodes = document.getElementsByClassName("active");
  var arr = Array.prototype.slice.call(nodes);
  arr.forEach( function(node) {
      node.className = "";
  });
  if (e.target && e.target.matches("li")) {
	e.target.className = "active"; // new class name here
	document.getElementById("AMinfo").className = 'hide';
	document.getElementById("ARinfo").className = 'hide';
	document.getElementById("SKinfo").className = 'hide';
	if (e.target.id === 'AM') document.getElementById("AMinfo").className = 'show';
	if (e.target.id === 'AR') document.getElementById("ARinfo").className = 'show';
	if (e.target.id === 'SK') document.getElementById("SKinfo").className = 'show';
  }
	console.log('clicked');
});