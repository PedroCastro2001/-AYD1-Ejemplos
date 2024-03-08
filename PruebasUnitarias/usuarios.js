function validarDatosUsuario(usuario) {
    if (!usuario || typeof usuario !== 'object') {
      throw new Error('Se requiere un objeto de usuario válido');
    }
  
    if (!usuario.nombre || typeof usuario.nombre !== 'string') {
      throw new Error('El nombre de usuario es obligatorio y debe ser una cadena de caracteres');
    }
  
    if (!usuario.apellido || typeof usuario.apellido !== 'string') {
      throw new Error('El apellido de usuario es obligatorio y debe ser una cadena de caracteres');
    }
  
    if (!usuario.email || typeof usuario.email !== 'string' || !usuario.email.includes('@')) {
      throw new Error('El correo electrónico es obligatorio y debe ser una dirección de correo válida');
    }
  
    if (!usuario.contraseña || typeof usuario.contraseña !== 'string' || usuario.contraseña.length < 8) {
      throw new Error('La contraseña es obligatoria y debe tener al menos 8 caracteres');
    }
  
    if (!usuario.país || typeof usuario.país !== 'string') {
      throw new Error('El país de usuario es obligatorio y debe ser una cadena de caracteres');
    }
  
    if (!usuario.fechaNacimiento || typeof usuario.fechaNacimiento !== 'string') {
      throw new Error('La fecha de nacimiento de usuario es obligatoria y debe ser una cadena de caracteres');
    }
  
    return true;
  }

  
  module.exports = {validarDatosUsuario};
  