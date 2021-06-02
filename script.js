var colors = ["red", "orange", "yellow", "pink", "purple", "blue", "brown"];
var interval = 500;

function randomizeTextColor(element) {
    var text = $(element).text();
    $(element).empty();
    for (var i = 0; i < text.length; i++) {
        var color = colors[Math.floor(colors.length * Math.random())];
        var letter = $("<span>", {
            text: text.charAt(i),
            css: {
                color: color
            }
        });
        $(element).append(letter);
    }
}

function randomize(selector) {
    $(selector).each(function() {
        randomizeTextColor(this);
    });
}

$(randomize(".rainbow"));