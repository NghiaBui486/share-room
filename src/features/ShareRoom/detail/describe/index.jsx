import { Col } from "antd";
import React from "react";
import iconMap from '../../../../assets/images/mapIcon.png';
import ShowMoreText from "react-show-more-text";

function DescribeApp(){
    return (
        <div className="content-describe">
        <Col offset={3}>
        <h><b>Phòng trọ ABC</b></h>
        <span className="dateTime-create">Ngày đăng</span>
        <p style={{color:"red"}}><span>15 triệu/tháng</span> 
        <span> - </span>
        <span> 40  m<sup>2</sup> </span></p>
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
                Lorem ipsum dolor sit amet, consectetu Labore et dolore magna amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </ShowMoreText>
        </div>
        </Col>
        </div>
        
    );
}
export  default DescribeApp;