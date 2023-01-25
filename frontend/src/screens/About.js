import React, { useState } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();
  const [showNavText, setShowNavText] = useState(false);
  const pray = () => {
    navigate(`/auth`);
  };
  const aboutUs = () => {
    navigate(`/aboutus`);
  };
  const goHome = () => {
    navigate(`/home`);
  };
  return (
    <div style={{ margin: "5px" }}>
      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer fluid>
          <MDBNavbarBrand onClick={goHome}>
            {" "}
            <img
              src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/274369433_4372302672871342_1364061837207403963_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WYFSejGSmysAX8hKLUd&_nc_ht=scontent-atl3-2.xx&oh=00_AfB-tHS_-VoI3Jt3FRzTFIgtoXNAuHTBV-rKD1o0Q2v3-g&oe=63D0B927"
              className="img-fluid rounded-pill"
              alt=""
              style={{ width: "50px" }}
            />{" "}
            WMC
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavText(!showNavText)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavText}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" onClick={goHome}>
                  Нүүр хуудас
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={aboutUs}>Бидний тухай</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Библи судлал</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBBtn outline color="success" onClick={pray}>
              Залбиралд нэгдэх
            </MDBBtn>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>{" "}
      <br />
      <MDBCard background="dark" className="text-white">
        <MDBCardImage
          overlay
          src="https://mdbootstrap.com/img/new/slides/017.webp"
          alt="..."
        />
        <MDBCardOverlay>
          <MDBCardTitle
            style={{ fontSize: "28px", padding: "20px", textAlign: "center" }}
          >
            Washington Mongolian Church
          </MDBCardTitle>
          <MDBCardText style={{ fontSize: "24px", padding: "20px" }}>
            Манай сүмийн эрхэм зорилго нь АНУ болон олон улс орнуудад тархсан
            Монголчуудад сайн мэдээ, авралын зар тарааж, тэдэнд хэрэгтэй зүйлээр
            тусалснаар Их Эзэний хаанчлал, алдрын төлөө ажиллах явдал юм.
            Өнөөдрийн байдлаар тус чуулга нь өргөжиж үндсэн 10 хэлтсүүд,
            залуучуудын цуглаан, дунд сургуулийн цуглаан, хүүхдийн цуглаанаас
            гадна байнгын цугларалттай 12 "Гэрийн Бүлгэм"-тэй үйл ажиллагаа
            явуулж байна. Та бүхэн манай сүмд тавтай морилоорой, бидний үүд
            хаалга танд үргэлж нээлттэй байх болно. Та бидний амьдралд Бурханы
            гайхамшиг биелэлээ олох болтугай хэмээн Есүсийн нэр дээр ерөөж
            байна.
          </MDBCardText>
          <MDBCardText
            style={{ fontSize: "12px", padding: "20px", textAlign: "right" }}
          >
            WMC team
          </MDBCardText>
        </MDBCardOverlay>
      </MDBCard>
    </div>
  );
}
