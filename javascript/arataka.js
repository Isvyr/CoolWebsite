let count = 0;

function changeImage() {
    count++;
    if (count > 1) {
        count = 0;
    }

    //console.log(count);

    switch (count) {
        case 0:
            document.getElementById("spicyImage").src = "images/intresting.jpg";
            break;
        case 1:
            document.getElementById("spicyImage").src = "images/wristHolder.jpg";
            break;
    }
}

function changeToMenu() {
    window.location.href = 'index.html';
}