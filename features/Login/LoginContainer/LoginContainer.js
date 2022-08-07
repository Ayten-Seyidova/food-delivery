import { useTranslation } from "react-i18next";
import {
  ErrorText,
  LogDiv,
  LoginDiv,
  LoginImage,
  LoginImg,
} from "./LoginContainer.styled";
import React from "react";
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../../../store/slice/loginSlice";
import { loginAPI, loginCreateAPI } from "../../../pages/api/login";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const LoginContainerPage = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const [image, setImage] = React.useState("login");

  const handleImage = (page) => {
    setImage(page);
  };

  const [icon, setIcon] = React.useState("password");

  const handleIcon = (visibility) => {
    setIcon(visibility);
  };

  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  React.useEffect(() => {
    getLogin();
  }, []);

  const getLogin = () => {
    loginAPI
      .then((res) => {
        dispatch(setLogin(res.data.login));
      })
      .catch((err) => {});
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.userName) {
        errors.userName = t("nameRequired");
      }
      if (!values.password) {
        errors.password = t("passwordRequired");
      }
      if (values.password.length < 8) {
        errors.password = t("passwordLength");
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      let breakCondition = false;
      let oldUser = state.loginSlice.data;

      for (let oldItem of oldUser) {
        if (
          oldItem.userName === values.userName &&
          oldItem.password === values.password &&
          !breakCondition
        ) {
          localStorage.setItem("isLogin", true);
          dispatch(setLogin(true));
          resetForm();
          breakCondition = true;
          router.push("/");
          return;
        }
      }

      if (!breakCondition) {
        toast.error(t("nameOrPassError"), {
          autoClose: 2000,
          pauseOnHover: true,
        });
        breakCondition = true;
      }
    },
  });

  const formikRegister = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.fullName) {
        errors.fullName = t("fullNameRequired");
      }
      if (!values.userName) {
        errors.userName = t("nameRequired");
      }
      if (!values.email) {
        errors.email = t("emailRequired");
      }
      if (!values.password) {
        errors.password = t("passwordRequired");
      }
      if (values.password.length < 8) {
        errors.password = t("passwordLength");
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      let breakCondition = false;
      let oldUserName = state.loginSlice.data;

      oldUserName.map((oldItem) => {
        if (oldItem.userName === values.userName && !breakCondition) {
          toast.error(t("unique username"), {
            autoClose: 2000,
            pauseOnHover: true,
          });
          breakCondition = true;
        }
      });

      if (!breakCondition) {
        let item = {
          fullName: values.fullName,
          userName: values.userName,
          email: values.email,
          password: values.password,
        };
        loginCreateAPI(item)
          .then((res) => {
            let newArray = [...state.loginSlice.data, item];
            dispatch(setLogin(newArray));
          })
          .catch(() => {});

        setImage("login");
        setValue(0);
        resetForm();
        toast.success(t("registered"), {
          autoClose: 1000,
          pauseOnHover: true,
        });
        breakCondition = true;
      }
    },
  });

  return (
    <LoginDiv>
      <LoginImage>
        {
          {
            login: (
              <LoginImg
                src={require(`../../../public/Image/components/login.svg`)}
                alt="login"
              />
            ),
            register: (
              <LoginImg
                src={require(`../../../public/Image/components/register.svg`)}
                alt="login"
              />
            ),
          }[image]
        }
      </LoginImage>
      <LogDiv>
        <div>
          <AppBar className="app-bar" position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab
                label={t("login")}
                onClick={() => handleImage("login")}
                {...a11yProps(0)}
              />
              <Tab
                label={t("register")}
                onClick={() => handleImage("register")}
                {...a11yProps(1)}
              />
            </Tabs>
          </AppBar>
          <TabPanel className="tab-pabel" value={value} index={0}>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-item">
                <label>{t("username")}</label>
                <input
                  placeholder="rahimlisarkhan"
                  id="userName"
                  name="userName"
                  onChange={formik.handleChange}
                  value={formik.values.userName}
                />
                {formik.errors.userName && (
                  <ErrorText>{formik.errors.userName}</ErrorText>
                )}
              </div>
              <div>
                <label>{t("password")}</label>
                <div className="position-relative">
                  <input
                    placeholder="********"
                    className="mb-0"
                    type={icon}
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {
                    {
                      text: (
                        <div
                          className="eye-icon"
                          onClick={() => handleIcon("password")}
                        >
                          <VisibilityIcon />
                        </div>
                      ),
                      password: (
                        <div
                          className="eye-icon"
                          onClick={() => handleIcon("text")}
                        >
                          <VisibilityOffIcon />
                        </div>
                      ),
                    }[icon]
                  }
                </div>
                {formik.errors.password && (
                  <ErrorText>{formik.errors.password}</ErrorText>
                )}
              </div>
              <div>
                <button type="submit">{t("log in")}</button>
              </div>
            </form>
          </TabPanel>
          <TabPanel className="tab-pabel" value={value} index={1}>
            <form onSubmit={formikRegister.handleSubmit}>
              <div className="form-item">
                <label>{t("fullName")}</label>
                <input
                  placeholder="Sarkhan Rahimli"
                  id="fullName"
                  name="fullName"
                  onChange={formikRegister.handleChange}
                  value={formikRegister.values.fullName}
                />
                {formikRegister.errors.fullName && (
                  <ErrorText>{formikRegister.errors.fullName}</ErrorText>
                )}
              </div>
              <div className="form-item">
                <label>{t("username")}</label>
                <input
                  placeholder="rahimlisarkhan"
                  name="userName"
                  onChange={formikRegister.handleChange}
                  value={formikRegister.values.userName}
                />
                {formikRegister.errors.userName && (
                  <ErrorText>{formikRegister.errors.userName}</ErrorText>
                )}
              </div>
              <div className="form-item">
                <label>{t("email")}</label>
                <input
                  placeholder="rahimlisarkhan@gmail.com"
                  type="email"
                  id="email"
                  name="email"
                  onChange={formikRegister.handleChange}
                  value={formikRegister.values.email}
                />
                {formikRegister.errors.email && (
                  <ErrorText>{formikRegister.errors.email}</ErrorText>
                )}
              </div>
              <div>
                <label>{t("password")}</label>
                <div className="position-relative">
                  <input
                    placeholder="********"
                    className="mb-0"
                    type={icon}
                    name="password"
                    onChange={formikRegister.handleChange}
                    value={formikRegister.values.password}
                  />
                  {
                    {
                      text: (
                        <div
                          className="eye-icon"
                          onClick={() => handleIcon("password")}
                        >
                          <VisibilityIcon />
                        </div>
                      ),
                      password: (
                        <div
                          className="eye-icon"
                          onClick={() => handleIcon("text")}
                        >
                          <VisibilityOffIcon />
                        </div>
                      ),
                    }[icon]
                  }
                </div>
                {formikRegister.errors.password && (
                  <ErrorText>{formikRegister.errors.password}</ErrorText>
                )}
              </div>
              <div>
                <button type="submit">{t("register")}</button>
              </div>
            </form>
          </TabPanel>
        </div>
      </LogDiv>
      <ToastContainer />
    </LoginDiv>
  );
};

export default LoginContainerPage;
