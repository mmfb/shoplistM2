    // in the future it will be chosen by the user
    var shopListId = 1;
    function saveItem() {
        var item = document.getElementsByName("item")[0].value;
        $.ajax({
            url: "/api/shoplist/"+shopListId+"/items/",
            method: "post",
            data: {
                item: item
            },
            success: function(res,status) {
                document.getElementById("done").innerHTML =
                 "Insert successful, now "+res.itemsSize+" items<br>"+
                 "<a href='/'> Back to list</a>";
            },
            error: function(err) {
                document.getElementById("done").innerHTML =
                "Something wrong <br>"+
                "<a href='/'> Back to list</a>";
    
            }
        });
    };
    