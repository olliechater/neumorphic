var i, acc = document.getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++) acc[i].addEventListener("click", function ()
{
	this.classList.toggle("accordionActive");
	var e = this.nextElementSibling;
	e.style.maxHeight ? e.style.maxHeight = null : e.style.maxHeight = e.scrollHeight + "px"
	e.style.padding ? e.style.padding = null : e.style.padding = "0 0 5px 0"
});
