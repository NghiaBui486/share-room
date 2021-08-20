import { Col } from "antd";
import React, { useEffect, useState } from "react";
import iconMap from '../../../../assets/images/mapIcon.png';
import ShowMoreText from "react-show-more-text";
import roomInfoApi from "../../../../api/roomInfoApi";

function DescribeApp(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const [data, setData] = useState([]);
  const [address, setAddress] = useState();
  useEffect(() => {
    const roomId = urlParams.get('room-id');
    roomInfoApi.getInfoRoom(roomId).then((res) => {
      setData(res);
    })
  }, [])
    return (
        <div className="content-describe">
        <Col offset={3}>
        <h><b>{data.title}</b></h>
        <span className="dateTime-create">{data.date}</span>
        <p style={{color:"red"}}>
          <span>{data.roomPrice} triệu/tháng</span>
          <br />
          <span>Diện tích: {data.acreage} m<sup>2</sup></span>
        </p>
        <p> <img src={iconMap} /> 
           <span> Đường xyz, Thành phố Hồ Chí Minh</span>
        </p>
        <div className="describe">
        <ShowMoreText
                /* Default options */
                lines={3}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="my-anchor-css-class"
                expanded={false}
                width={650}
                truncatedEndingComponent={"... "}
            >
                {data.roomDescribe}
            </ShowMoreText>
        </div>
        </Col>
        </div>
        
    );
}
export  default DescribeApp;