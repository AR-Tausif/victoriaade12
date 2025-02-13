import { Card, Col, Row } from "antd";
import { CloseOutlined, DeleteOutlined } from "@ant-design/icons";
import { Lists } from "../components/lists";
import { MapDotIcon } from "../components/icons";
import "./styles/posts.css";
export const AccountDetailsById = () => {
  const images = [
    "https://andrewstuder.com/wp-content/uploads/2020/04/AF3I3830-scaled.jpg",
    "https://andrewstuder.com/wp-content/uploads/2020/04/AF3I3830-scaled.jpg",
  ];
  return (
    <Row gutter={16}>
      <Col span={10}>
        <Card bordered={false}>
          {/* profile intro with name and email */}
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: "#010101",
            }}
          >
            <p
              style={{
                alignSelf: "flex-end",
              }}
            >
              <CloseOutlined />
            </p>
            <img
              src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
              alt="profile picture"
              style={{
                width: 85,
                height: 85,
                borderRadius: "100%",
                objectFit: "cover",
              }}
            />
            <h5 style={{ fontSize: 14, fontWeight: 600, textAlign: "center" }}>
              Anna Suraiya
            </h5>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              tausif.ritu1@gmail.com
            </p>
          </div>

          <div className="">
            <Lists />
          </div>
        </Card>
      </Col>
      <Col span={14}>
        <Card>
          <Row>
            <Col span={12}>
              <Card
                style={{ width: "340", height: "400px", }}
              >
                <div className="" style={{ height: "400px" }}>
                  <div
                    className="card-heading-section"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="" style={{ display: "flex", gap: 10 }}>
                      <img
                        src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
                        alt="profile picture"
                        style={{
                          width: 37,
                          height: 37,
                          borderRadius: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div className="" style={{}}>
                        <h5 style={{ fontSize: 14, fontWeight: 600 }}>
                          Bliss Beauty Studio
                        </h5>
                        <div
                          style={{
                            display: "flex",
                            gap: 4,
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#727272",
                          }}
                        >
                          <p style={{ marginTop: 3 }}>
                            <MapDotIcon size="11.10" />
                          </p>
                          <p style={{ fontWeight: 700 }}>123/A- Florida, USA</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className=""
                      style={{ fontSize: 16, color: "#010101" }}
                    >
                      <DeleteOutlined />
                    </div>
                  </div>
                  <div></div>
                  {/* <div className="" style={{display:"flex", justifyContent:"space-between", gap:4, alignItems:"center", position:"relative", width:"100%", overflow:"hidden"}}>
                    <img src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" alt="image" style={{maxWidth:"100%", height:"auto", borderRadius:8, objectFit:"cover"}} />
                    <img src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" alt="image" style={{maxWidth:"100%", height:"auto", borderRadius:8, objectFit:"cover"}} />
                </div> */}

                  <Post images={images}></Post>
                </div>
              </Card>
            </Col>
            <Col span={12}></Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

const Post = ({ images }: { images: string[] }) => {
  return (
    <div className={`image-container ${images.length === 1 ? "single" : ""}`}>
      {images.map((image: string, index: number) => (
        <img key={index} src={image} alt={`post-img-${index}`} />
      ))}
    </div>
  );
};

export default Post;

{/* <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "500px",
  }}
>
  {images.map((image: string, index: number) => (
    <img
      style={{ height: "100%", width: "auto" }}
      key={index}
      src={image}
      alt={`post-img-${index}`}
    />
  ))}
</div>; */}
