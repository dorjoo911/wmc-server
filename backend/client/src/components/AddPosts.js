import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBTabsContent,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

export default function AddPost() {
  const id = localStorage.getItem("idToken");
  const token = localStorage.getItem("SavedToken");
  const infoToken = jwt_decode(token);
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [deadline, setdeadline] = useState("");
  const [msg, setmsg] = useState("");

  const addpost = async () => {
    const date = new Date(deadline);
    const formattedDate = date.getTime();
    try {
      if (title !== "" && description !== "" && deadline !== "") {
        await axios.post(`/posts`, {
          title: title,
          description: description,
          deadline: formattedDate.toString(),
          userName: infoToken.fullname,
          userId: id,
        });
        navigate(`/listpost`);
      } else {
        setmsg("All fields must filled !!!");
      }
    } catch (error) {}
  };
  const cancelpost = () => {
    navigate(`/listpost`);
  };
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabsContent>
        <p className="text-center mt-3" style={{ color: "red" }}>
          {msg}
        </p>
        <MDBInput
          wrapperClass="mb-4"
          label="Title"
          id="form1"
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <MDBInput
          wrapperClass="mb-4"
          label="description"
          id="form1"
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <MDBInput
          wrapperClass="mb-4"
          label="deadline"
          id="form1"
          type="date"
          value={deadline}
          onChange={(e) => setdeadline(e.target.value)}
        />

        <MDBBtn className="mb-2 w-50" onClick={addpost}>
          Post request
        </MDBBtn>
        <MDBBtn outline className="mb-2 w-50" onClick={cancelpost}>
          Cancel request
        </MDBBtn>
      </MDBTabsContent>
    </MDBContainer>
  );
}
