$("#searchText").keypress(function(e) {
    if (e.keyCode === 13) {
        var searchText = $("#searchText").val();
        var url =
            "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
            searchText +
            "&format=json&callback=?";
        $.ajax({
            url: url,
            type: "GET",
            async: false,
            dataType: "json",
            success: function(data, status, jqXHR) {
                console.log(data);
                for (var i = 0; i < data[1].length; i++) {
                    $("#output").prepend(
                        "<div><div class='well'><a href=" +
                            data[3][i] +
                            "><h2>" +
                            data[1][i] +
                            "</h2>" +
                            "<p>" +
                            data[2][i] +
                            "</p></a></div></div>"
                    );
                }
            }
        });
    }
});

$("#search").on("click", function() {
    var searchText = $("#searchText").val();
    var url =
        "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
        searchText +
        "&format=json&callback=?";
    $.ajax({
        url: url,
        type: "GET",
        async: false,
        dataType: "json",
        success: function(data, status, jqXHR) {
            // console.log(data);
            for (var i = 0; i < data[1].length; i++) {
                $("#output").prepend(
                    "<div class='outputbox'><div><a href=" +
                        data[3][i] +
                        "><h2>" +
                        data[1][i] +
                        "</h2><hr>" +
                        "<p>" +
                        data[2][i] +
                        "</p></a></div></div>"
                );
            }
        }
    });
});