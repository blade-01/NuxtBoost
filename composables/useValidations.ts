import { object, string, ref as yref, array, date } from "yup";
export default function () {
  // Validation messages
  const validation = {
    required: (field: string) => `${field} is required`,
    alphabet: (field: string) => `${field} should only contain alphabets`,
    url: (field: string) => `${field} should be a valid URL - https://...`,
    min: (field: string, limit?: number) =>
      `${field} must be at least ${limit} characters`,
    max: (field: string, limit?: number) =>
      `${field} must be at most ${limit} characters`,
    password:
      "Provide a password with at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
    password_confirmation: "Please ensure your passwords match"
  };

  // Validation schema
  const mainSchema = object({
    first_name: string()
      .matches(/^[^\d]*$/, validation.alphabet("First name"))
      .required(validation.required("First name"))
      .min(1)
      .max(100),
    last_name: string()
      .matches(/^[^\d]*$/, validation.alphabet("Last name"))
      .required(validation.required("Last name"))
      .min(1, validation.min("Last name", 1))
      .max(100, validation.max("Last name", 100)),
    email: string()
      .required(validation.required("Email"))
      .email(validation.required("Email"))
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        validation.required("Email")
      ),
    portfolio: string()
      .url(validation.url("Portfolio"))
      .required(validation.required("Portfolio")),
    currency: string()
      .required(validation.required("Currency"))
      .min(1, validation.min("Currency", 1)),
    // Make sure to include at least 8 characters with at least one letter and one number
    password: string()
      .required(validation.password)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:";'<>,.?\\/|!"#$%&'()*+,-./:;<=>?@^_`{|}~])(?=.{8,})/,
        validation.password
      ),
    password_confirmation: string()
      .required(validation.password_confirmation)
      .oneOf([yref("password")], validation.password_confirmation),
    message: string()
      .required(validation.required("Message"))
      .min(1, validation.min("Message", 1))
      .max(100, validation.max("Message", 100)),
    gender: string().required(validation.required("Gender")),
    country: array()
      .of(string().required())
      .test(
        "length",
        validation.required("Country"),
        (value: any) => value.length > 0
      )
      .required(validation.required("Country")),
    city: array()
      .of(string().required())
      .test(
        "length",
        validation.required("Country"),
        (value: any) => value.length > 0
      )
      .required(validation.required("City")),
    date: date().required(validation.required("Date")),
    month: date().required(validation.required("Month")),
    year: date().required(validation.required("Year")),
    date_time: date().required(validation.required("Date Time")),
    time: date().required(validation.required("Time")),
    multiple: array()
      .of(date().required())
      .required(validation.required("Multiple Dates"))
      .test(
        "length",
        validation.required("Multiple Dates"),
        (value: any) => value.length > 0
      ),
    range: array()
      .of(date().required())
      .required(validation.required("Date Range"))
      .test(
        "length",
        validation.required("Date Range"),
        (value: any) => value.length > 0
      )
  });

  return { mainSchema };
}
