const nine = document.querySelector("#nine")

function caressNine() {
    console.log(":3")

    nine.src = "./assets/nine_happy.png"
    setTimeout(() => {
        nine.src = "./assets/nine.png"
    }, 1200);
}