
window.addEventListener("scroll", function () {

    let scroll = window.scrollY;

    let title = document.getElementById("title");
    let text = document.getElementById("text");
    let button = document.getElementById("button");

    // Font size changes gradually
    let titleSize = Math.max(20, 50 - scroll / 20);
    let textSize = Math.max(14, 25 - scroll / 40);
    let buttonSize = Math.max(12, 20 - scroll / 50);


window.addEventListener("scroll", function () {

    let scroll = window.scrollY;

    let title = document.getElementById("title");
    let text = document.getElementById("text");
    let button = document.getElementById("button");

    // Font size changes gradually
    let titleSize = Math.max(20, 50 - scroll / 20);
    let textSize = Math.max(14, 25 - scroll / 40);
    let buttonSize = Math.max(12, 20 - scroll / 50);

    title.style.fontSize = titleSize + "px";
    text.style.fontSize = textSize + "px";
    button.style.fontSize = buttonSize + "px";

    // Colours change while scrolling
    if (scroll > 200) {
        document.body.style.backgroundColor = "lightblue";
        document.body.style.color = "darkblue";

        title.style.color = "crimson";
        text.style.color = "darkgreen";

        button.style.backgroundColor = "crimson";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "aliceblue";

        title.style.color = "aqua";
        text.style.color = "aliceblue";

        button.style.backgroundColor = "dodgerblue";
    }

});


    // Colours change while scrolling
    if (scroll > 200) {
        document.body.style.backgroundColor = "lightblue";
        document.body.style.color = "darkblue";

        title.style.color = "crimson";
        text.style.color = "darkgreen";

        button.style.backgroundColor = "crimson";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "aliceblue";

        title.style.color = "aqua";
        text.style.color = "aliceblue";

        button.style.backgroundColor = "dodgerblue";
    }

});
