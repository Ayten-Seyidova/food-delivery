import * as React from "react";
import { ProfileContainerDiv } from "./ProfileContainer.styled";

import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../../store/slice/loginSlice";
import { loginCreateAPI } from "../../../api/login";

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
      onSubmit={(values) => {
        setTimeout(() => {
          loginCreateAPI(values)
            .then(() => props.dispatch(getUserData(values)))
            .catch(() => console.log("error"));
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className="myForm">
          <span>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="fullName"
              name="fullName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullName}
            />
          </span>
          {errors.fullName && touched.fullName && errors.fullName}
          <span>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </span>
          {errors.email && touched.email && errors.email}
          <span>
            <label htmlFor="userName">Username</label>
            <input
              type="userName"
              name="userName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userName}
            />
          </span>
          {errors.userName && touched.userName && errors.userName}
          <span>
            <label htmlFor="contact">Contact Number</label>
            <input
              type="contact"
              name="contact"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.contact}
            />
          </span>
          {errors.contact && touched.contact && errors.contact}
          <span>
            <label htmlFor="address">Address</label>
            <input
              type="address"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
          </span>
          {errors.address && touched.address && errors.address}
          <button type="submit">Save</button>
        </form>
      )}
    </Formik>
  </div>
);

const ProfileContainer = () => {
  const user = useSelector((state) => state.loginSlice.user);
  const dispatch = useDispatch();

  return (
    <ProfileContainerDiv>
      <h1 style={{ fontWeight: 600, fontSize: 30, color: "#4F4F4F" }}>
        Profile
      </h1>
      <Basic user={user} dispatch={dispatch} />
    </ProfileContainerDiv>
  );
};

export default ProfileContainer;
