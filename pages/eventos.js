let total = document.getElementById("total");

document.getElementById("categoria").value

function pagar(){
    let cantidad = document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;
    switch (categoria){
        case "Estudiante":
            total.value = cantidad * 200 * 0.2;
            break;
        case "Trainee":
            total.value = cantidad * 200 * 0.5;
            break;
        case "Junior":
            total.value = cantidad * 200 * 0.85;
            break;
        default:
            console.log("Revisar los datos ingresados");
    }
    console.log(total.value);
    document.getElementById("total").value = "Total a pagar $ " + total.value;
}
  

document.getElementById("resumen").onclick = pagar;
