function chose_app_mode_file(){
    //add a class to an element
    $('#app_mode_button_file').addClass('app_mode_selected');
    //remove the class from the other elements
    $('#app_mode_button_text').removeClass('app_mode_selected');
    document.getElementById("app-content").innerHTML = `                <input type="file" id="input_file"style="margin-bottom: 10px;" onchange="hash_file_changed()">
    <div class="output">
        <p id="hash">Hashes will be displayed here</p>
    </div>`    
}
function chose_app_mode_text(){
    //add a class to an element
    $('#app_mode_button_text').addClass('app_mode_selected');
    //remove the class from the other elements
    $('#app_mode_button_file').removeClass('app_mode_selected');
    document.getElementById("app-content").innerHTML = `                <textarea placeholder="Enter text to convert to hash" id="text" oninput="hash_text_changed()"></textarea>
    <div class="output">
        <p id="hash">Hashes will be displayed here</p>
    </div>`
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function fade(element) {
    var op = 1; 
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.2;
    }, 50);
}
function unfade(element) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.2;
    }, 10);
}
window.onload = async function(){
    await unfade(document.getElementById("load"));
    await sleep(500);
    await fade(document.getElementById("load"));
    await sleep(200);
    $(".app").css("display", "block");
    await unfade(document.getElementById("app"));
}