import React from "react";
import { useLogin } from "../../../hooks/useLogin";

import { styled } from "@mui/system";
import TextfieldComp from "../../ui/atoms/Textfield/TextfieldComp";
import ButtonComp from "../../ui/atoms/Button/ButtonComp";
import TypographyComp from "../../ui/atoms/Typography/TypographyComp";

const LoginForm = styled("form")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  background: "#FFF",
  padding: "15px 20px",
  borderRadius: "10px",
  border: "1px solid #e2e2e2",
  gap: "10px",
}));

const Page = styled("div")({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledTextField = styled(TextfieldComp)(() => ({
  width: "20rem",
}));
const StyledButton = styled(ButtonComp)(() => ({}));

const Login = () => {
  const { handleLogin } = useLogin();
  const [credentials, setCredentials] = React.useState({
    userName: "",
    password: "",
  });

  const updateCredentials = ({ userName, password }) => {
    if (userName || userName === "") {
      setCredentials((prevState) => ({ ...prevState, userName }));
    }
    if (password || password === "") {
      setCredentials((prevState) => ({ ...prevState, password }));
    }
  };

  const loginHandler = (params) => {
    const { userName, password } = credentials;
    handleLogin(userName, password);
  };

  const inputFields = [
    {
      name: "userName",
      fieldProps: {
        label: "User Name",
        type: "text",
      },
    },
    {
      name: "password",
      fieldProps: {
        label: "Password",
        type: "password",
      },
    },
  ];

  return (
    <Page>
      <LoginForm
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler(credentials);
        }}
      >
        <TypographyComp variant="h4">Login</TypographyComp>
        {inputFields.map((eachField) => (
          <StyledTextField
            key={eachField.name}
            {...eachField.fieldProps}
            value={credentials[eachField.name]}
            onChange={(e) =>
              updateCredentials({ [eachField.name]: e.target.value })
            }
          />
        ))}
        <StyledButton type="submit">Login</StyledButton>
      </LoginForm>
    </Page>
  );
};

export default Login;
