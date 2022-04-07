function hash_text_changed() {
    var text = document.getElementById('text').value;
    console.log("text changed generating hash");
    if(text == ""){
        console.warn("textbox is empty");
        document.getElementById('hash').innerHTML = "Hashes will be displayed here";
        return;
    }
    var md5 = CryptoJS.MD5(text).toString();
    var sha1 = CryptoJS.SHA1(text).toString();
    var sha224 = CryptoJS.SHA224(text).toString();
    var sha256 = CryptoJS.SHA256(text).toString();


    console.log({md5: md5, sha1: sha1, sha224: sha224, sha256: sha256});
    document.getElementById('hash').innerHTML = "<strong>MD5: </strong>" + md5 + "<br><hr><strong>SHA1: </strong>" + sha1 + "<br><hr><strong>SHA224: </strong>" + sha224 + "<br><hr><strong>SHA256: </strong>" + sha256;
}
function hash_file_changed(file) {
    var file = document.getElementById('input_file').files[0];
    console.log("file changed generating hash");
    if(file == undefined){
        console.warn("file input is empty");
        document.getElementById('hash').innerHTML = "Hashes will be displayed here";
        return;
    }
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e) {
        console.log("file read");
        var text = e.target.result;
        var md5 = CryptoJS.MD5(text).toString();
        var sha1 = CryptoJS.SHA1(text).toString();
        var sha224 = CryptoJS.SHA224(text).toString();
        var sha256 = CryptoJS.SHA256(text).toString();
        console.log({md5: md5, sha1: sha1, sha224: sha224, sha256: sha256});
        document.getElementById('hash').innerHTML = "<strong>MD5: </strong>" + md5 + "<br><hr><strong>SHA1: </strong>" + sha1 + "<br><hr><strong>SHA224: </strong>" + sha224 + "<br><hr><strong>SHA256: </strong>" + sha256;    
    }
}
