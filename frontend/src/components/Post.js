import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBPopover,
  MDBPopoverHeader,
  MDBPopoverBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBBadge,
  MDBIcon,
  MDBInput,
  MDBCardText,
} from "mdb-react-ui-kit";
import axios from "axios";
import Review from "./Review";
import Verses from "./Verses";
const words = [
  "Proverbs 16:24 Pleasant words are like a honeycomb, sweetness to the soul and health to the bones.",
  "John 1:1 In the beginning was the Word, and the Word was with God, and the Word was God",
  "James 1:22 But be ye doers of the word, and not hearers only, deceiving your own selves.",
  "Ephesians 6:17 And take the helmet of salvation, and the sword of the Spirit, which is the word of God",
  "1 John 3:18 My little children, let us not love in word, neither in tongue; but in deed and in truth",
  "Psalm 56:10 In God will I praise his word: In the LORD will I praise his word",
  "Psalm 105:19 Until the time that his word came: The word of the LORD tried him.",
  "Zechariah 1:13 And the LORD answered the angel that talked with me with good words and comfortable words.",
  "Matthew 12:37 For by thy words thou shalt be justified, and by thy words thou shalt be condemned.",
  "Colossians 3:17 And whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him.",
];
export default function Post({ posts, id }) {
  const token = localStorage.getItem("SavedToken");
  const infoToken = jwt_decode(token);
  const [comment, setcomment] = useState("");
  const [toggle, settoggle] = useState(true);

  const deletePost = async (id) => {
    await axios.delete(`/posts/${id}`);
    window.location.reload();
  };

  const commentout = async (id) => {
    await axios.put(`/posts/${id}`, {
      userId: infoToken.id,
      userName: infoToken.fullname,
      comment: comment,
      date: Date.now().toString(),
    });
    window.location.reload();
  };

  const close = () => {
    settoggle(false);
  };
  const open = () => {
    settoggle(true);
  };
  const pray = async (id) => {
    axios.put(`/posts/${id}`, {
      userId: infoToken.id,
      userName: infoToken.fullname,
      date: Date.now().toString(),
    });
    window.location.reload();
  };
  return (
    <>
      {posts.map((post) => (
        <MDBCard alignment="center" key={post._id}>
          <MDBCardHeader
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <MDBBtn outline>
              <MDBIcon fas icon="cross" /> joined prayers
              <MDBBadge className="ms-2" color="danger">
                {post.prayers.length ? post.prayers.length : 0}
              </MDBBadge>
            </MDBBtn>
            Added by: {post.userName}
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>{post.title}</MDBCardTitle>
            <MDBPopover
              color="secondary"
              btnChildren="Read description"
              placement="top"
            >
              <MDBPopoverHeader>{post.title}</MDBPopoverHeader>
              <MDBPopoverBody>{post.description}</MDBPopoverBody>
            </MDBPopover>
            <MDBBtn
              href="#"
              outline
              color="success"
              onClick={() => {
                pray(post._id);
              }}
            >
              willing to pray
            </MDBBtn>
          </MDBCardBody>
          <MDBCardFooter className="text-muted" style={{ textAlign: "right" }}>
            <MDBCard
              shadow="0"
              border="info"
              background="white"
              className="mb-3"
              style={{ textAlign: "left", height: "200px" }}
            >
              <MDBCardHeader
                style={{
                  fontFamily: "Copperplate, Papyrus, fantasy",
                  color: "brown",
                }}
              >
                <Verses words={words} />
              </MDBCardHeader>
              <MDBCardBody style={myComponent1}>
                {/* <MDBCardTitle></MDBCardTitle> */}
                <MDBCardText style={myComponent2}>
                  <Review reviews={post.review} />
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <label style={{ color: "blue" }}>Due date: </label>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }).format(post.deadline)}{" "}
            <MDBPopover outline btnChildren="Comment out" onClick={open}>
              {toggle ? (
                <>
                  <MDBPopoverBody>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="comment"
                      id="form2"
                      type="text"
                      placeholder="your text here:"
                      value={comment}
                      onChange={(e) => setcomment(e.target.value)}
                    />
                  </MDBPopoverBody>
                  <MDBPopoverHeader>
                    <MDBBtn
                      onClick={() => {
                        commentout(post._id);
                      }}
                      outline
                      color="success"
                      className="mx-2"
                    >
                      Submit
                    </MDBBtn>
                    <MDBBtn
                      onClick={close}
                      outline
                      color="danger"
                      className="mx-2"
                    >
                      Cancel
                    </MDBBtn>
                  </MDBPopoverHeader>
                </>
              ) : null}
            </MDBPopover>
            {post.userId === id ? (
              <MDBBtn
                onClick={() => {
                  deletePost(post._id);
                }}
                outline
                className="mx-2"
                color="danger"
              >
                Delete
              </MDBBtn>
            ) : null}
          </MDBCardFooter>
        </MDBCard>
      ))}
    </>
  );
}
const myComponent1 = {
  height: "100%",
  width: "100%",
  overflow: "hidden",
};
const myComponent2 = {
  height: "100%",
  width: "100%",
  overflow: "auto",
  paddingRight: "20px",
};
