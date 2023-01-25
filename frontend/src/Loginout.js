import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBBadge,
} from "mdb-react-ui-kit";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADyvpZiHw31qSbNxOKNv_cLezyOxLlmvA
function Loginout({ user }) {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [isRegister, setIsRegister] = useState(true);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const fileInputField = useRef(null);

  useEffect(() => {
    if (user) {
      setFullname(user.fullname);
      setEmail(user.email);
      setIsRegister(false);
    }
  }, [user]);

  const Register = async (e) => {
    e.preventDefault();
    if (fullname !== "" && email !== "" && password !== "") {
      if (password === confPassword) {
        try {
          if (isRegister) {
            await axios.post("/users", {
              fullname: fullname,
              email: email,
              password: password,
            });
            handleJustifyClick("tab1");
          } else {
            await axios.put("/users", {
              fullname: fullname,
              email: email,
              password: password,
            });
          }
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      } else {
        setMsg("Password and Re-password not match!");
      }
    } else {
      setMsg("All fields need filled");
    }
  };

  // const onFileChange = (event) => {
  //   setSelectedFile({ selectedFile: event.target.files[0] });
  // };

  // const onFileUpload = () => {
  //   const formData = new FormData();
  //   formData.append("myFile", selectedFile, selectedFile.name);

  //   console.log(selectedFile);
  //   axios.post("/uploadfile", formData);
  // };

  // const fileData = () => {
  //   if (selectedFile) {
  //     return (
  //       <div>
  //         <h2>File Details:</h2>
  //         <p>File Name: {selectedFile.name}</p>
  //         <p>File Type: {selectedFile.type}</p>
  //         <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <br />
  //         <p style={{ padding: "14px", color: "blue" }}>
  //           Choose before Pressing the Upload button
  //         </p>
  //       </div>
  //     );
  //   }
  // };

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  const Auth = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", {
        email: email,
        password: password,
      });
      // console.log(res.data);
      // console.log(res.data.idToken);

      const token = res.data.data.accessToken;
      const detoken = jwt_decode(token);
      console.log(detoken, "detoken");
      localStorage.setItem("SavedToken", "Bearer " + token);
      localStorage.setItem("idToken", detoken.id);
      localStorage.setItem("detoken", detoken);
      navigate(`/listpost`);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3" style={{ color: "red" }}>
              {msg}
            </p>
          </div>
          <MDBBadge color="white" dot>
            <label style={{ color: "red" }}>❋</label>
          </MDBBadge>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form1"
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBBadge color="white" dot>
            <label style={{ color: "red" }}>❋</label>
          </MDBBadge>
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a
              href="#"
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              Forgot password?
            </a>
          </div>

          <MDBBtn className="mb-4 w-100" onClick={Auth}>
            Sign in
          </MDBBtn>

          <p
            className="text-center"
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Not a member? <a href="#!">Register</a>
          </p>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <div className="text-center mb-3">
            <p>Sign up with:</p>

            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
            <p className="text-center mt-3" style={{ color: "red" }}>
              {msg}
            </p>
          </div>
          <MDBBadge color="white" dot>
            <label style={{ color: "red" }}>❋</label>
          </MDBBadge>
          <MDBInput
            wrapperClass="mb-4"
            label="Full name"
            id="form1"
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <MDBBadge color="white" dot>
            <label style={{ color: "red" }}>❋</label>
          </MDBBadge>
          <MDBInput
            wrapperClass="mb-4"
            label="Email"
            id="form1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBBadge color="white" dot>
            <label style={{ color: "red" }}>❋</label>
          </MDBBadge>
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <MDBBadge color="white" dot>
            <label style={{ color: "red" }}>❋</label>
          </MDBBadge>
          <MDBInput
            wrapperClass="mb-4"
            label="Re-password"
            id="form1"
            type="password"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />

          <MDBInput
            wrapperClass="mb-4"
            type="file"
            ref={fileInputField}
          ></MDBInput>

          {/* <button onClick={onFileUpload}>{fileData()}Upload!</button>

          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I have read and agree to the terms"
            />
          </div> */}

          <MDBBtn className="mb-4 w-100" onClick={Register}>
            Sign up
          </MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Loginout;
