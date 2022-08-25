import * as React from "react";
import { ProfileContainerDiv } from "./ProfileContainer.styled";

import { Formik } from "formik";
import { useSelector } from "react-redux";

const Basic = (props) => (
  <div>
    <Formik
      initialValues={props.user}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        //   }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="fullName"
            name="fullName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullName}
          />
          {errors.fullName && touched.fullName && errors.fullName}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <label htmlFor="userName">Username</label>
          <input
            type="userName"
            name="userName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userName}
          />
          {errors.userName && touched.userName && errors.userName}
          <label htmlFor="contact">Contact Number</label>
          <input
            type="contact"
            name="contact"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.contact}
          />
          {errors.contact && touched.contact && errors.contact}
          <label htmlFor="address">Address</label>
          <input
            type="address"
            name="address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
          />
          {errors.address && touched.address && errors.address}
          <button type="submit">
            Save
          </button>
        </form>
      )}
    </Formik>
  </div>
);

const ProfileContainer = () => {
  const user = useSelector((state) => state.loginSlice.user);
  return (
    <ProfileContainerDiv>
      <h1>Profile</h1>
      <div></div>
      <Basic user={user} />
    </ProfileContainerDiv>
  );
};

export default ProfileContainer;
