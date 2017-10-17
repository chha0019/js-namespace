var CHHA0019 = {
    init: function () {
        console.log("script in CHHA0019 called");
        var div = document.createElement("div");
        var flagBool = false;

        div.className = "box";
        div.textContent = "CHHA0019";

        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", on_click);
        div.addEventListener("mouseover", Highlightening);
        div.addEventListener("mouseout", Highlightening);

        function Highlightening(ev) {
            this.classList.toggle("highlight");
        }

        function on_click(ev) {
            if (flagBool == true) {
                flagBool = false;
                this.style.backgroundColor = "pink";
                this.style.borderColor = "blue";
            } else {
                flagBool = true;
                this.style.backgroundColor = "blue";
                this.style.borderColor = "pink";
            }

        }

    }
}