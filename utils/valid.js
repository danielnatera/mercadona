const valid = (name, email, password, cf_password) => {
    if(!name ||  !email || !password)
        return 'Por favor complete todos los campos'
    
    if(!validateEmail(email))
    return 'dirección e-mail inválida'
    
    if(password.length < 6)
    return 'La contraseña debe tener mínimo seis caracteres'
    
    if(password !== cf_password)
    return 'Las contraseñas no coinciden'
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid