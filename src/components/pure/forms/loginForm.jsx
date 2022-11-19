import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid Email Format")
        .required("Email Is Required"),
    password: Yup.string()
        .required("Password is Required")
        .min(8, "Password too short"),
});

const LoginForm = () => {
    const initialCredentials = {
        email: "",
        password: "",
    };
    return (
        <div className="col-12 min-vw-100 d-flex flex-column justify-content-center align-items-center">
            <h4> Login Form </h4>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ touched, errors, isSubmitting }) => {
                    return (
                        <Form className="col-3">
                            <div className="form-floating mb-3">
                                <Field
                                    className="form-control"
                                    id="email"
                                    type="email"
                                    name="email"
                                />
                                <label htmlFor="email">Email</label>
                                {errors.email && touched.email && (
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage
                                            name="email"
                                            component={"div"}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <Field
                                    className="form-control"
                                    id="password"
                                    type="password"
                                    name="password"
                                />
                                <label htmlFor="password">Password</label>
                                {errors.password && touched.password && (
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage
                                            name="password"
                                            component={"div"}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="d-grid">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Loggin Account
                                </button>
                                {isSubmitting ? (
                                    <p style={{ color: "blue" }}>
                                        we logging you...
                                    </p>
                                ) : null}
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default LoginForm;
