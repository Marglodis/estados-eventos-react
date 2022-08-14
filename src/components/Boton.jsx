import Swal from 'sweetalert2'
import React from "react";

function Boton({ user, pass }) {
  if (pass !== "252525") return null;

  const message = () => {
    if(user === "")  return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese un nombre de usuario, por favor!',
      });

    Swal.fire('Bienvenid@',`${user}`,'success');
  };
  return (
    <>
      <button variant="primary" type="button" onClick={message}>Login</button>
    </>
  );
}

export default Boton;