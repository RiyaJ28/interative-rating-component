const userSelection = document.querySelector(".title");
const d = document.getElementsByClassName(".d");
const ty = document.querySelector(".text");
const button = document.querySelector(".button");
const submit = document.querySelector(".sub")

var x = document.querySelectorAll(".r").length;
var z = 0;
for (var i = 0; i < x; i++) {
    document.querySelectorAll(".r")[i].addEventListener("click", function () {
        var rating = this.innerHTML;
        z = rating;
        ratingAnimation(z);

        document.querySelector(".submit").addEventListener("click", (event) => {
            if (z != 0) {
                var container = document.querySelector(".container");
                container.style.display = 'flex';
                container.style.flexDirection ="column";
                container.style.alignItems = 'center';
                container.style.justifyContent = 'center';
                container.style.borderRadius = '20px';
                container.style.color = 'orange';

                userSelection.textContent = `You selected ${z} out of 5`;
                userSelection.style.borderRadius = "100px";
                userSelection.style.backgroundColor = "grey";
                userSelection.style.fontSize = "15px";
                userSelection.style.padding = "5px";
                

                document.querySelector(".star").setAttribute("src" , "images/illustration-thank-you.svg");
                document.querySelector(".star").style.borderRadius = '0';

                ty.textContent = "Thank You";
                ty.style.fontSize ="30px";
                ty.style.color = "white";
                ty.style.fontWeight= "700";

                button.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
                button.style.color ="white";


                submit.style.visibility ="hidden";
                
            }
        })


    });
}

function ratingAnimation(rating) {
    if (rating == 1) {
        var element = document.getElementById("one");
        element.classList.toggle("orange");
        element.classList.toggle("r");
        document.getElementById("two").classList.remove("orange");
        document.getElementById("two").classList.add("r");
        document.getElementById("three").classList.remove("orange");
        document.getElementById("three").classList.add("r");
        document.getElementById("four").classList.remove("orange");
        document.getElementById("four").classList.add("r");
        document.getElementById("five").classList.remove("orange");
        document.getElementById("five").classList.add("r");
    } else if (rating == 2) {
        var element = document.getElementById("two");
        element.classList.toggle("orange");
        element.classList.toggle("r");
        document.getElementById("one").classList.remove("orange");
        document.getElementById("one").classList.add("r");
        document.getElementById("three").classList.remove("orange");
        document.getElementById("three").classList.add("r");
        document.getElementById("four").classList.remove("orange");
        document.getElementById("four").classList.add("r");
        document.getElementById("five").classList.remove("orange");
        document.getElementById("five").classList.add("r");

    } else if (rating == 3) {
        var element = document.getElementById("three");
        element.classList.toggle("orange");
        element.classList.toggle("r");
        document.getElementById("one").classList.remove("orange");
        document.getElementById("one").classList.add("r");
        document.getElementById("two").classList.remove("orange");
        document.getElementById("two").classList.add("r");
        document.getElementById("four").classList.remove("orange");
        document.getElementById("four").classList.add("r");
        document.getElementById("five").classList.remove("orange");
        document.getElementById("five").classList.add("r");
    } else if (rating == 4) {
        var element = document.getElementById("four");
        element.classList.toggle("orange");
        element.classList.toggle("r");
        document.getElementById("one").classList.remove("orange");
        document.getElementById("one").classList.add("r");
        document.getElementById("two").classList.remove("orange");
        document.getElementById("two").classList.add("r");
        document.getElementById("three").classList.remove("orange");
        document.getElementById("three").classList.add("r");
        document.getElementById("five").classList.remove("orange");
        document.getElementById("five").classList.add("r");
    } else if (rating == 5) {
        var element = document.getElementById("five");
        element.classList.toggle("orange");
        element.classList.toggle("r");
        document.getElementById("one").classList.remove("orange");
        document.getElementById("one").classList.add("r");
        document.getElementById("two").classList.remove("orange");
        document.getElementById("two").classList.add("r");
        document.getElementById("four").classList.remove("orange");
        document.getElementById("four").classList.add("r");
        document.getElementById("three").classList.remove("orange");
        document.getElementById("three").classList.add("r");
    }

}
