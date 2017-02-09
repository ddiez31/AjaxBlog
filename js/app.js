(function() {
    "use strict";
    var app = {
        init: function() {
            // let's go
        },
    };

    $(document).ready(function() {
        app.init();

        $.ajax({
            type: "GET",
            url: "example.md",
            success: convert,
            error: function() {
                alert("404 Not Found - Oops something went wrong !");
            }
        });

        function convert(data) {
            var converter = new showdown.Converter();
            var html = converter.makeHtml(data);
            $("#md").append(html);
        };


        $.getJSON("menu.json", function(data) {
            var blog = data.blog;
            var menu = data.menu;
            $("#app").append("<div><h1>" + blog + "</h1></div>");
            for (var i = 0; i < data.menu.length; i++) {
                $("#app").append("<div class='posts'><a href='" + menu[i].href + "'target='_blank'>" + menu[i].title + "</a></div>");
            }
        });





    });
})();