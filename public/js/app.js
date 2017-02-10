(function() {
    "use strict";
    var app = {
        init: function() {
            // let's go
        },
    };

    $(document).ready(function() {
        app.init();

        // intégration markdown
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

        // intégration menu json
        $.getJSON("menu.json", function(data) {
            var blog = data.blog;
            var menu = data.menu;
            $("#app").append("<div><h1>" + blog + "</h1></div>");
            for (var i = 0; i < data.menu.length; i++) {
                $("#app").append("<div class='posts'><a href='" + menu[i].href + "'target='_blank'>" + menu[i].title + "</a></div>");
            }
        });

        // intégration blog json
        $.getJSON("blog.json", function(perso) {
            var titre = perso.titre;
            var posts = perso.posts;
            $("#postperso").append("<div><h3>" + titre + "</h3></div><hr>");
            for (var i = 0; i < posts.length; i++) {
                $("#postperso").append("<div class='postperso'><h4>" + posts[i].title + "</h4></div>");
                $("#postperso").append("<div class='msg'>" + posts[i].msg + " <button type='button' class='btn'><a href='/editpost?id=" + posts[i].id + "'>Editer</a></button></div><hr>");
            }
        });






    });
})();