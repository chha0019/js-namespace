var CHHA0019 = {
    init: function () {
        var flagBool = false;
        var d = document.createElement("div");
        d.className("box");
        d.textContent = "CHHA0019";
        document.getElementById ("boxes").appendChild(d);
        d.addEventListener("click", CHHA0019.on_click);
        d.addEventListener("mouseover", CHHA0019.Highlightening);
        d.addEventListener("mouseout", CHHA0019.Highlightening);
    },
    on_click: function (ev) {
        if (flagBool === true) {
            flagBool = false;
            ev.currentTarget.style.backgroundColor = "pink";
            ev.currentTarget.style.borderColor = "blue";
        } else {
            flagBool = true;
            this.style.backgroundColor = "blue";
            this.style.borderColor = "pink";
        }
    },

    Highlightening: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    }
};