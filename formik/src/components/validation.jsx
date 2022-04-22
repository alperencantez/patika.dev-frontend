import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("This can't be blank"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("This can't be blank"),
      email: Yup.string()
        .email("Invalid email address")
        .required("This can't be blank"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="text-white p-3">
      <h6 htmlFor="firstName">First Name</h6>
      <input
        id="firstName"
        name="firstName"
        type="text"
        className="mb-3"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        onBlur={formik.handleBlur}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <p>{formik.errors.firstName}</p>
      ) : null}
      <h6 htmlFor="lastName">Last Name</h6>
      <input
        id="lastName"
        name="lastName"
        type="text"
        className="mb-3"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        onBlur={formik.handleBlur}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <p>{formik.errors.lastName}</p>
      ) : null}
      <h6 htmlFor="email">Email Address</h6>
      <input
        id="email"
        name="email"
        type="email"
        className="mb-3 mx-auto"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        style={{ display: "block" }}
      />
      {formik.touched.email && formik.errors.email ? (
        <p>{formik.errors.email}</p>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
