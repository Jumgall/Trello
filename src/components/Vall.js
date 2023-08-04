function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === "") {
        error.email = "Кечирип кой бирок туура эмес !! Emaill !!"
    }
    if (!email_pattern.test(values.email)) {
        error.email = "Кечирип кой бирок туура эмес !! Emaill !!"
    }
    if (values.password === "") {
        error.password = "Кечирип кой бирок туура эмес !! Password !!"
    }
    if (!password_pattern.test(values.password)) {
        error.password = "Кечирип кой бирок туура эмес !! Password !!"
    }
    if (values.confirm_password === "" || values.confirm_password !== values.password) {
        error.confirm_password = "Password not matched !! Password !!"
    }
    return error;
}
export default Validation;