let cliente1 = {
  nombre: "cesar",
  correo: "cesar@gmail.com",
  password: "123",
  saldo: 500,
};
let cliente2 = {
  nombre: "uriel",
  correo: "uriel@gmail.com",
  password: "321",
  saldo: 900,
};

let cliente3 = {
  nombre: "alondra",
  correo: "alondra@gmail.com",
  password: "543",
  saldo: 300,
};

let clientes = [cliente1, cliente2, cliente3];

function login() {
  let correo = document.getElementById("usuario").value;
  let contrasena = document.getElementById("password").value;
  evaluar(correo, contrasena);
}

let stateLogin = true;

function evaluar(usuario, contrasena) {
  let clienteOk = clientes.find(
    (cuentahabiente) => cuentahabiente.correo == usuario
  );
  if (clienteOk != undefined) {
    if (clienteOk.password == contrasena) location = "Cajero.html";
  } else {
    alert("El usuario y/o contraseña no son validas");
  }

  //console.log(clienteOk);

  /*if (clienteOk != undefined) {
    if (clienteOk.password == contrasena) {
      alert("Bienvenido" + clienteOk.nombre);*/
  //console.log("Welcome mr. ", clienteOk.nombre);
  // Primera forma , manejar todo en una misma pagina
  // let box = document.getElementById("loginBox");
  // box.className = "desaparecerBox"
}
