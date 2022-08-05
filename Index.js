/*let cliente1 = {
  nombre: "cesar",
  correo: "cesar@gmail.com",
  password: "123",
  saldo: 456,
};
let cliente2 = {
  nombre: "Migue",
  correo: "migue@gmail.com",
  password: "321321",
  saldo: 987,
};

let cliente3 = {
  nombre: "Pedro",
  correo: "pedro@gmail.com",
  password: "asa11",
  saldo: 321,
};

let clientes = [cliente1, cliente2, cliente3];

 function login() {
  let correo = form.usuario.value
  let contrasena = form.password.value
  evaluar(correo, contrasena);
}

let stateLogin = true;

function evaluar(usuario, contrasena) {
  let clienteOk = clientes.find((personas) => personas.correo == usuario);
  console.log(clienteOk);
*/

/*

function login(form) {
  if (
    (form.usuario.value == "cesar" && form.password.value == "123") ||
    (form.usuario.value == "uriel" && form.password.value == "321") ||
    (form.usuario.value == "alondra" && form.password.value == "543")
  ) {
    location = "Cajero.html";
  } else {
    alert("El usuario y/o contraseña no son validas");
  }
} */

// ser realiza la transferencia de la cuenta 1 a la cuenta 2

function movimiento1() {
  var cantidadTotal = parseInt(document.getElementById("cant").value);
  var cantidadCuenta1 = parseInt(document.getElementById("cuenta1").value);
  var cantidadCuenta2 = parseInt(document.getElementById("cuenta2").value);
  var Cantidadcuentapivote1 = parseInt(
    document.getElementById("cuenta1").value
  );
  var Cantidadcuentapivote2 = parseInt(
    document.getElementById("cuenta2").value
  );
  var CantidadPivoteTotal = (cantidadTotal = parseInt(
    document.getElementById("cant").value
  ));

  if (
    Cantidadcuentapivote1 - CantidadPivoteTotal > 9 &&
    CantidadPivoteTotal > 0
  ) {
    document.getElementById("cuenta1").value = cantidadCuenta1 - cantidadTotal;
    document.getElementById("cuenta2").value = cantidadCuenta2 + cantidadTotal;
    alert(
      "Movimiento realizado correctamente, usted ha transferido la cantidad de... $" +
        cantidadTotal +
        " pesos"
    );
  } else alert("Movimiento no permitido");
}

// ser realiza la transferencia de la cuenta 2 a la cuenta 1

function movimiento2() {
  var cantidadTotal = parseInt(document.getElementById("cant").value);
  var cantidadCuenta1 = parseInt(document.getElementById("cuenta1").value);
  var cantidadCuenta2 = parseInt(document.getElementById("cuenta2").value);
  var Cantidadcuentapivote1 = parseInt(
    document.getElementById("cuenta1").value
  );
  var Cantidadcuentapivote2 = parseInt(
    document.getElementById("cuenta2").value
  );
  var CantidadPivoteTotal = (cantidadTotal = parseInt(
    document.getElementById("cant").value
  ));
  if (CantidadPivoteTotal < 0) {
    alert("No puedes transferir montos negativos");
  }
  if (Cantidadcuentapivote2 - CantidadPivoteTotal > 9) {
    document.getElementById("cuenta1").value = cantidadCuenta1 + cantidadTotal;
    document.getElementById("cuenta2").value = cantidadCuenta2 - cantidadTotal;
    alert(
      "Movimiento realizado correctamente, usted ha transferido la cantidad de... $" +
        cantidadTotal +
        " pesos"
    );
  } else
    alert(
      "no puedes hacer el movimiento debido a que la cuenta quedaria con un saldo menor"
    );
}

//aca realizamos los depositos a la cuenta 1

function movimiento7() {
  var cantidadTotal = parseInt(document.getElementById("Dep").value);
  var cantidadCuenta1 = parseInt(document.getElementById("cuenta1").value);
  var cuenta1Temporal = parseInt(document.getElementById("cuenta1").value);
  var TemporalCantidad = parseInt(document.getElementById("Dep").value);
  if (TemporalCantidad > 2000 || TemporalCantidad < 1)
    alert(
      "Lo sientimos, no puedes depositar un saldo de... $" +
        TemporalCantidad +
        " pesos, no esta permitido"
    );
  else {
    document.getElementById("cuenta1").value = cantidadCuenta1 + cantidadTotal;
  }
}

//aca realizamos los depositos a la cuenta 2

function movimiento8() {
  var cantidadTotal = parseInt(document.getElementById("Dep").value);
  var cantidadCuenta2 = parseInt(document.getElementById("cuenta2").value);

  var cuenta2Temporal = parseInt(document.getElementById("cuenta2").value);
  var Temporal2Cantidad = parseInt(document.getElementById("Dep").value);
  if (Temporal2Cantidad > 2000 || Temporal2Cantidad < 1)
    alert(
      "Lo siento, no puedes depositar un saldo de... $" +
        Temporal2Cantidad +
        " pesos, no esta permitido"
    );
  else {
    document.getElementById("cuenta2").value = cantidadCuenta2 + cantidadTotal;
  }
}

//aca realizamos lo depositos a la cuenta 3
function movimiento9() {
  var cantidadTotal = parseInt(document.getElementById("Dep").value);
  var cantidadCuenta3 = parseInt(document.getElementById("cuenta3").value);

  var cuenta3Temporal = parseInt(document.getElementById("cuenta3").value);
  var Temporal3Cantidad = parseInt(document.getElementById("Dep").value);
  if (Temporal3Cantidad > 2000 || Temporal3Cantidad < 1)
    alert(
      "Lo siento, no puedes depositar un saldo de... $" +
        Temporal3Cantidad +
        " pesos, no esta permitido"
    );
  else {
    document.getElementById("cuenta3").value = cantidadCuenta3 + cantidadTotal;
  }
}

//aca realizamos los retiros de la cuenta 1
function movimiento10() {
  var cantidadTotal = parseInt(document.getElementById("Ret").value);
  var cantidadCuenta1 = parseInt(document.getElementById("cuenta1").value);

  var cuenta1Temporal = parseInt(document.getElementById("cuenta1").value);
  var Temporal1Cantidad = parseInt(document.getElementById("Ret").value);
  if (cuenta1Temporal - Temporal1Cantidad < 10 || Temporal1Cantidad < 1)
    alert(
      "Lo siento, no puedes realizar este retiro de... $" +
        Temporal1Cantidad +
        " pesos, no esta permitido"
    );
  else {
    document.getElementById("cuenta1").value = cantidadCuenta1 - cantidadTotal;
  }
}

//aca realizamos los retiros de la cuenta 2
function movimiento11() {
  var cantidadTotal = parseInt(document.getElementById("Ret").value);
  var cantidadCuenta2 = parseInt(document.getElementById("cuenta2").value);

  var cuenta2Temporal = parseInt(document.getElementById("cuenta2").value);
  var Temporal2Cantidad = parseInt(document.getElementById("Ret").value);
  if (cuenta2Temporal - Temporal2Cantidad < 10 || Temporal2Cantidad < 1)
    alert(
      "Lo siento, no puedes realizar este retiro de... $" +
        Temporal2Cantidad +
        " pesos, no esta permitido"
    );
  else {
    document.getElementById("cuenta2").value = cantidadCuenta2 - cantidadTotal;
  }
}

//aca realizamos los retiros de la cuenta 3
function movimiento12() {
  var cantidadTotal = parseInt(document.getElementById("Ret").value);
  var cantidadCuenta3 = parseInt(document.getElementById("cuenta3").value);

  var cuenta3Temporal = parseInt(document.getElementById("cuenta3").value);
  var Temporal3Cantidad = parseInt(document.getElementById("Ret").value);
  if (cuenta3Temporal - Temporal3Cantidad < 10 || Temporal3Cantidad < 1)
    alert(
      "Lo siento, no puedes realizar este retiro de... $" +
        Temporal3Cantidad +
        " pesos, no esta permitido"
    );
  else {
    document.getElementById("cuenta3").value = cantidadCuenta3 - cantidadTotal;
  }
}
