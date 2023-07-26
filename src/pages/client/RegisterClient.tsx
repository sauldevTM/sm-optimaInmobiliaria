import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
function RegisterClient() {
  return (
    <div className="p-2 md:p-0">
      <h1 className="text-3xl mb-5">Register User</h1>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          docType: "",
          docNumber: "",
          occupation: "",
          nationality: "",
          email: "",
          phone: 0,
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastname: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          docType: Yup.string()
            .oneOf(["dni", "ci", "passCard", "other"], "Invalid document type")
            .required("Required"),
          docNumber: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          occupation: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          nationality: Yup.string()
            .oneOf(["peru", "usa", "brazil", "spain"], "Invalid country")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          phone: Yup.number()
            .min(111111111, "Must be 9 characters or more")
            .max(999999999999, "Must be 12 characters or less")
            .required("Required"),
        })}
      >
        {({ touched, errors }) => (
          <Form className="space-y-3" noValidate>
            <div className="grid gap-2 md:grid-cols-3 md:gap-6">
              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    touched.name &&
                    errors.name &&
                    "text-red-700 dark:text-red-500"
                  }`}
                >
                  Name
                </label>
                <Field type="text" name="name" className="input-format" />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="mt-2 text-sm text-red-600 dark:text-red-500"
                />
              </div>
              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    touched.lastname &&
                    errors.lastname &&
                    "text-red-700 dark:text-red-500"
                  }`}
                >
                  Lastname
                </label>
                <Field type="text" name="lastname" className="input-format" />
                <ErrorMessage
                  name="lastname"
                  component="p"
                  className="mt-2 text-sm text-red-600 dark:text-red-500"
                />
              </div>
              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    touched.lastname &&
                    errors.lastname &&
                    "text-red-700 dark:text-red-500"
                  }`}
                >
                  Lastname
                </label>
                <Field name="docType" as="select" className="input-format">
                  <option value="">Select a document type</option>
                  <option value="dni">Dni</option>
                  <option value="ci">CI</option>
                  <option value="passCard">Passport card</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage
                  name="docType"
                  component="p"
                  className="mt-2 text-sm text-red-600 dark:text-red-500"
                />
              </div>
            </div>
            <div className="grid gap-2 md:grid-cols-3 md:gap-6">
              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    touched.docNumber &&
                    errors.docNumber &&
                    "text-red-700 dark:text-red-500"
                  }`}
                >
                  N° Document
                </label>
                <Field type="text" name="docNumber" className="input-format" />
                <ErrorMessage
                  name="docNumber"
                  component="p"
                  className="mt-2 text-sm text-red-600 dark:text-red-500"
                />
              </div>
              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    touched.occupation &&
                    errors.occupation &&
                    "text-red-700 dark:text-red-500"
                  }`}
                >
                  Occupation
                </label>
                <Field type="text" name="occupation" className="input-format" />
                <ErrorMessage
                  name="occupation"
                  component="p"
                  className="mt-2 text-sm text-red-600 dark:text-red-500"
                />
              </div>
              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    touched.nationality &&
                    errors.nationality &&
                    "text-red-700 dark:text-red-500"
                  }`}
                >
                  Nationality
                </label>
                <Field name="nationality" as="select" className="input-format">
                  <option value="">Select a country</option>
                  <option value="peru">Peru</option>
                  <option value="usa">United State</option>
                  <option value="brazil">Brazil</option>
                  <option value="spain">España</option>
                </Field>
                <ErrorMessage
                  name="nationality"
                  component="p"
                  className="mt-2 text-sm text-red-600 dark:text-red-500"
                />
              </div>
            </div>
            <div className="grid gap-2 md:grid-cols-3 md:gap-6">
              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    touched.email &&
                    errors.email &&
                    "text-red-700 dark:text-red-500"
                  }`}
                >
                  Email
                </label>
                <Field type="email" name="email" className="input-format" />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="mt-2 text-sm text-red-600 dark:text-red-500"
                />
              </div>
              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    touched.phone &&
                    errors.phone &&
                    "text-red-700 dark:text-red-500"
                  }`}
                >
                  Phone
                </label>
                <Field type="tel" name="phone" className="input-format" />
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="mt-2 text-sm text-red-600 dark:text-red-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterClient;
