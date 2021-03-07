colors = ["#1b262c", "#0f4c75", "#00b7c2", "#fdcb9e"]

$(document).ready(function(){
    enter_section("page", "main")
})

function create_div(id, parent_id, text){
    $("<div id=" + id + ">" + text + "</div>").appendTo("#" + parent_id)
}

function enter_section(id, parent_id){
    create_div(id, parent_id, "")
    $("#" + id).css({
        "width" : "100%",
        "height" : "20%",
        "background-color" : colors[1],
        "align-items" : "center",
        "justify-content" : "center"
    })
    input_section(id)
}

function input_section(parent_id){
    let id = parent_id + "_input_section"
    create_div(id, parent_id, "")
    $("#" + id).css({
        "width" : "55%",
        "height" : "50%",
        "background-color" : colors[0],
        "border-radius" : "10px 40px 40px 10px"
    })
    create_div(id + "_title", id, "Title:")
    $("#" + id + "_title").css({
        "color" : "white",
        "width" : "10%",
        "height" : "100%",
        "font-size" : "2vw",
        "test-align" : "center",
        "justify-content" : "center",
        "align-items" : "center",
    })
    create_div(id + "_title_input_section", id, "")
    console.log(id)
    $("#" + id + "_title_input_section").css({
        "width" : "30%",
        "height" : "100%",
        "justify-content" : "center",
        "align-items" : "center"
    })
    $("<input id=" + id + "_title_input" + "></input>").appendTo("#" + id + "_title_input_section")
    $("#" + id + "_title_input").css({
        "height" : "20%",
        "width" : "85%"
    })

    create_div(id + "_content", id, "Content:")
    $("#" + id + "_content").css({
        "color" : "white",
        "width" : "14%",
        "height" : "100%",
        "font-size" : "2vw",
        "test-align" : "center",
        "justify-content" : "center",
        "align-items" : "center",
    })
    create_div(id + "_content_input_section", id, "")
    console.log(id)
    $("#" + id + "_content_input_section").css({
        "width" : "30%",
        "height" : "100%",
        "justify-content" : "center",
        "align-items" : "center"
    })
    $("<input id=" + id + "_content_input" + "></input>").appendTo("#" + id + "_content_input_section")
    $("#" + id + "_content_input").css({
        "height" : "20%",
        "width" : "85%"
    })
    
    input_section_button(id+ "_button", id)
}

function input_section_button(id, parent_id){
    $("<div id=" + id + ">+</div>").appendTo("#" + parent_id)
    button_onlick(id)
    console.log(id)
    $("#" + id).css({
        "width" : "16%",
        "border" : "none",
        "outline" : "none",
        "font-size" : "4vw",
        "justify-content" : "center",
        "align-items" : "center",
        "border-radius" : "0 40px 40px 0",
        "cursor" : "pointer",
    })
}

function button_onlick(id){
    $("#" + id).click(function(){
        let title = $("#page_input_section_title_input").val()
        let content = $("#page_input_section_content_input").val()
        console.log(title, content)
    })
}