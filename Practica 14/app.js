num = prompt("Escribe un numero")

out = isNaN(num)

var j = 1
var input
switch (num) {
    case out == true:
        alert("debe escribir un numero")
        break;

    case "2":
        while (j == 1) {
            console.log("valor de i: " + j)
            j++
        }
        break;

    case "3":
        do {
            input = prompt("Para salir presiona s")
        } while (input != "s");
        break;

    case "16":
        alert("eres muy joven")
        break;

    case "26":
        alert("todo un adulto")
        break;

    case "45":
        alert("en tu mejor momento")
        break;

    case "18":
        for (let i = 0; i < 10; i++) {
            console.log("valor de i: " + i)
        }
        break;

    default:
        alert("no cumple ninguna condicion")
        break;
}