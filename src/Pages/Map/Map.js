import React, { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import SearchBox from "../../Components/SearchBox/SearchBox";
import StrokeButton from "../../Components/Button/StrokeButton";

const { kakao } = window;

const Map = () => {
  const title = "지도";
  
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <>
      <div
        id="myMap"
        style={{
          width: "100%",
          height: "90vh",
        }}
      ></div>
      <SearchBox title={title}/>
      <StrokeButton title={title} color={"#ffffff"} src={process.env.PUBLIC_URL + "/Images/Map/CurrentIcon.svg"}/>
      <Footer title={title} />
    </>
  );
};

export default Map;
