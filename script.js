$(document).ready(function(){
	$("#open_editor").hide()
	hide_button_press("hide")
})

function hide_button_press(id){
	$("#" + id).click(function(){
		$("section").toggle("slow")
		$("#open_editor").slideToggle(900)
	})

	$("#open_editor").click(function(){
		$("section").toggle("slow")
		$("#open_editor").slideToggle(900)
	})
}