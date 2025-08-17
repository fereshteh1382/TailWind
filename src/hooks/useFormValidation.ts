
type FormValues = {
    fname: string;
    lname: string;
    tel: string;
    email: string;
    username: string;
    password: string;

}
type FormErrors = {
    fname?: string;
    lname?: string;
    tel?: string;
    email?: string;
    username?: string;
    password?: string;
}
export default function useFormValidation(values: FormValues) {
    
    const errors: FormErrors = {};

    if (!values.fname.trim()) {
        errors.fname = 'FirstName is required';
    }else if (!/^[a-zA-Zآ-ی\s]*$/.test(values.fname)){
        errors.fname ='Please enter letters only.';
    }

    if (!values.lname.trim()) {
        errors.lname = 'LastName is required';
    }else if (!/^[a-zA-Zآ-ی\s]*$/.test(values.lname)){
        errors.lname ='Please enter letters only.';
    }
    if (!values.tel.trim()) {
        errors.tel = 'Tel is required';
    }else if (!/^[0-9۰-۹]*$/.test(values.tel)){
        errors.tel ='Please enter only numbers.';
    }
    if (!values.username.trim()) {
        errors.username = 'Username is required';
    }
    if (!values.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid email format';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }
    return errors;

}
