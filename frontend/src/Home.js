import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBBtn,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBTypography,
  MDBCardHeader,
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Verses from "./components/Verses";
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

const Home = () => {
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
    <div style={{ textAlign: "center", margin: "5px" }}>
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
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/277442416_4459071994194409_8565933829294993435_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=2v-4hsOYh58AX_lapJ2&_nc_ht=scontent-atl3-2.xx&oh=00_AfDLIJ8CLSDApjrmw3PLa3aeCmIF5KpJy4qdNU9qlj-vzg&oe=63D233DF"
          alt="..."
        >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/241745973_3846242382144043_5555693040545901093_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=rV6v4R4ncB0AX-IQ3Gw&_nc_ht=scontent-atl3-2.xx&oh=00_AfDpE0oQrPQcM68Ga3WSKLoumxodxK__GGywHqcwODERVQ&oe=63D11E01"
          alt="..."
        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/277512116_4464251460343129_5416994464829105617_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=2DVhQFVIDo4AX9tV_FV&_nc_ht=scontent-atl3-2.xx&oh=00_AfBvX05w_MpYFb-lW-eHaX4zBiWJYkDvLyW-tbDc3YkQ1A&oe=63D268AD"
          alt="..."
        >
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </MDBCarouselItem>
      </MDBCarousel>
      <br />
      <div
        style={{
          marginLeft: "10%",
          width: "80%",
        }}
      >
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
                src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/244981360_3917831781651769_2998775317622210632_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LSmLTZelMNMAX9O9TGY&_nc_ht=scontent-atl3-2.xx&oh=00_AfDk31NHuX4WEgBqr2woJ6ReoJwf7b_XbFqN2HQTGPkcSA&oe=63D0DD39"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Эсийн бүлэг үйлчлэл</MDBCardTitle>
                <MDBCardText>
                  Хамтдаа Библи судлангаа нөхөрлөх, танилцах, бие биенийхээ
                  төлөө залбирах, сүнслэг өсөлт ..
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn href="#" outline color="success">
                  Элсэн орох
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
                src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/276281258_4459073410860934_4216192586414436511_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=3mXyQPqv_SgAX9wrusr&tn=s_dMePxR3gUoFPxe&_nc_ht=scontent-atl3-2.xx&oh=00_AfAaJ5RUc8-mpSgWzCif9Cv-kqsv9Pn8P8KwrGN_GtZfiA&oe=63D08911"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Магтаалын үйлчлэл</MDBCardTitle>
                <MDBCardText>
                  Бурханыг хамтдаа магтацгаая. WMC нь магтаалын 3 багтай бөгөөд.
                  Хөгжимдөөд зохиогоод дуулаад ...
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn href="#" outline color="success">
                  Магтаалд үйлчлэх
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
                src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/277003262_4459072410861034_8888791544468454998_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=B4qSPOa5D0AAX-u046i&_nc_ht=scontent-atl3-2.xx&oh=00_AfDFvDgM-ETdq8ocCD8x-WC3fmyXWwAbJ3qMraui9d0xgQ&oe=63D1E714"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Тэргүүн пастор</MDBCardTitle>
                <MDBCardText>
                  Huang Pil Nam Зоригоо. Тус сүмд 20 дахь жилдээ үйлчилж байна.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn href="#" outline color="success">
                  Дэлгэрэнгүй харах
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
                src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/276997201_4459071034194505_1187073774819982611_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=g6Z2UlF8uvkAX-AJXcD&_nc_ht=scontent-atl3-2.xx&oh=00_AfB8456lXErpMvwrbpkj2hohHBmD0CxUXBmFxSnSXbWJ9Q&oe=63D0E21D"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Хүндэтгэлийн чуулган</MDBCardTitle>
                <MDBCardText>
                  Бурханы үгийн сонсож түүнийн танин мэдэхийг хүсвэл Бүтэн сайн
                  өдрийн 2pm цагт үргэлж нээлттэй ...
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn href="#" outline color="success">
                  Сүмд хамрагдах
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
                src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/278011964_4485757841525824_6653069297248429454_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=dtZM1AGFsKsAX__7Apv&tn=s_dMePxR3gUoFPxe&_nc_ht=scontent-atl3-2.xx&oh=00_AfCf5qomR_TY5Z_sUL9_kS9JhNvKcP8MODYLltA7a1ytJQ&oe=63D17B37"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Залуучуудын нөхөрлөл</MDBCardTitle>
                <MDBCardText>
                  Бурханы үгийн сонсож түүнийн танин мэдэхийг хүсвэл Бүтэн сайн
                  өдрийн 2pm цагт үргэлж нээлттэй ...
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn href="#" outline color="success">
                  Нөхөрлөлд хамрагдах
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
                src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/277177859_4459071910861084_8197049579622021811_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=axod_8b__xAAX-xf8fr&_nc_ht=scontent-atl3-2.xx&oh=00_AfCVfGvRP84RuElyjnedILTpwJfLVIyKfCdViYL8Lwz52Q&oe=63D2F091"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Хүүхдийн үйлчилэл</MDBCardTitle>
                <MDBCardText>
                  Бурханы үгийн сонсож түүнийн танин мэдэхийг хүсвэл Бүтэн сайн
                  өдрийн 2pm цагт үргэлж нээлттэй ...
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn href="#" outline color="success">
                  Үйлчлэлд хамрагдах
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
      <br />
      <MDBCard style={{ textAlign: "center", width: "80%", marginLeft: "10%" }}>
        <MDBCardHeader style={{ fontSize: "24px" }}>
          <Verses words={words} />
        </MDBCardHeader>
        <MDBCardBody>
          <MDBTypography blockquote className="mb-0">
            <p>
              Cүмд тавтай морил! Бидний алсын хараа бол DMV болон бусад хүмүүс
              бүгд цэцэглэн хөгжихийн тулд бидний үеийг Есүстэй харилцах
              харилцааг өөрчлөх, бие биетэйгээ жинхэнэ нийгэмлэг болгон хөтлөх
              явдал юм.
            </p>
            <footer className="blockquote-footer">
              Тэргүүн пастор: <cite title="Source Title">Huang Pil Nam</cite>
            </footer>
          </MDBTypography>
        </MDBCardBody>
      </MDBCard>
      <br />
      <br />
      <MDBFooter className="text-center" color="white" bgColor="dark">
        <MDBContainer className="p-4">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.facebook.com/WashingtonMongolianChurch"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.google.com/maps/place/Washington+Mongolian+Church/@38.8551968,-77.1259477,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7b6c6e3128487:0x2aeeaef2e4842545!8m2!3d38.8550952!4d-77.1238393"
              role="button"
            >
              <MDBIcon fas icon="map-marker-alt" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>
          </section>

          <section className="">
            <form action="">
              <MDBRow className="d-flex justify-content-center">
                <MDBCol size="auto">
                  <p className="pt-2">
                    <strong>
                      Мэдээлэл хүлээн авыг хүсвэл хаягаа бүртгүүлээрэй
                    </strong>
                  </p>
                </MDBCol>

                <MDBCol md="5" start>
                  <MDBInput
                    contrast
                    type="email"
                    label="Email хаяг"
                    className="mb-4"
                  />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color="light" type="submit" className="mb-4">
                    Бүртгүүлэх
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>

          <section className="">
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Холбоос</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Бидний тухай
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Хүндэтгэлийн чуулган
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Хүүхдийн цуглаан
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Залуучуудын цуглаан
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Холбоос</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright: Mike Erdene,{" "}
          <a className="text-white" href="https://mikeportfolio.click">
            Developed by Mike Erdene
          </a>
        </div>
      </MDBFooter>
      <br />
    </div>
  );
};

export default Home;
