import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//* models
// import { User } from "../../../models/model/user.class.model.js";
import { ROLES } from "../../../models/enum/role.enum.model.js";

const RegisterForm = () => {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirm: "",
        role: ROLES.USER,
    };

    const registerSchema = Yup.object().shape({
        username: Yup.string()
            .min(6, "UserName too short")
            .max(15, "UserName Too Long")
            .required("UserName Is Required"),
        email: Yup.string()
            .email("Invalid Email Format")
            .required("Email Is Required"),
        role: Yup.string()
            .oneOf([ROLES.USER, ROLES.ADMIN], "you must select a role")
            .required("Role is required"),
        password: Yup.string()
            .required("Password is Required")
            .min(8, "Passsword too short"),
        confirm: Yup.string()
            .when("password", {
                is: (value) => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "¡Password must Match!"
                ),
            })
            .required("you must confirm the password"),
    });
    const submit = (values) => {
        console.log("register user" + values);
    };

    return (
        <div className="col-12 min-vw-100 d-flex flex-column justify-content-center align-items-center">
            <h4>Register Form</h4>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    submit();
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={registerSchema}
            >
                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                }) => (
                    <Form className="col-3">
                        <div className="form-floating mb-3">
                            <Field
                                className="form-control"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="example@email.com"
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
                                id="username"
                                type="text"
                                name="username"
                                placeholder="username"
                            />
                            <label htmlFor="username">username</label>
                            {errors.username && touched.username && (
                                <div style={{ color: "red" }}>
                                    <ErrorMessage
                                        name="username"
                                        component={"div"}
                                    />
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="form-floating mb-3">
                                <Field
                                    className="form-control"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="password"
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
                            <div className="form-floating mb-3">
                                <Field
                                    className="form-control"
                                    id="confirm"
                                    name="confirm"
                                    placeholder="confimr your password"
                                    type="password"
                                />
                                <label htmlFor="confirm">
                                    Confirm Your password
                                </label>
                                {errors.confirm && touched.confirm && (
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage
                                            name="confirm"
                                            component={"div"}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Register Account
                            </button>
                            {isSubmitting ? (
                                <p style={{ color: "blue" }}>
                                    Sending your credentials...
                                </p>
                            ) : null}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;
