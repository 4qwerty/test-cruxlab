
const getPasswordsButton = document.querySelector('button')
const div = document.createElement('div');
div.className = "alert";

getPasswordsButton.addEventListener('click', function() {
    const file = document.getElementById('file').files[0];
    const reader = new FileReader();

    reader.readAsText(file);
    reader.onload = function() {
        passChecker(reader.result)
    }
    reader.onerror = function() {
        alert(reader.error);
    }
})
function passChecker(list) {
    let validPass = 0;

    list.split("\n").forEach((str) => {
        const splitStr = str.split(" ");
        const symbol = splitStr[0];
        const min = splitStr[1].split("-")[0];
        const max = splitStr[1].split("-")[1].split(":")[0];
        const password = splitStr[2];

        if (
            password.split(symbol).length - 1 >= min &&
            password.split(symbol).length - 1 <= max
        ) {
            validPass++;
        }
    });

    div.innerHTML = `Кількість валідних паролів: ${validPass}`;
    document.body.append(div);
    setTimeout(() => div.remove(), 1500);
}
