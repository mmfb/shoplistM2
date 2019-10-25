// in the future it will be chosen by the user
var shopListId = 1;
window.onload = function() {
    var itemListElem = document.getElementById("itemList");
    $.ajax({
        url: "/api/shoplist/"+shopListId+"/items/",
        method: "get",
        success: function(res,status) {
            var html = "";
            for(i in res) {
                html += "<li>"+res[i]+"</li>";
            }
            itemListElem.innerHTML = html;
        },
        error: function(err) {

        }
    });
};