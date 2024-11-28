import * as yup from "yup";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

export const registrationSchema = yup.object().shape({
  email: yup.string().email('email-error').required("required"),
  password: yup.string().matches(passwordRegex, { message: 'password-error' }).required("required"),
  passwordRepeat: yup.string().oneOf([yup.ref('password'), undefined], "password-repeat-error").required("required"),
  termsAndService: yup.boolean()
})