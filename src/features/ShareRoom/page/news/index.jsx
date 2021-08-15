import React,{ useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import image1 from '../../../../assets/images/modern-design.jpg';
import image2 from '../../../../assets/images/clean-design.jpg';
import image3 from '../../../../assets/images/great-support.jpg';

import data from '../data.json';
import { Row, Col, Card, Space,Avatar } from 'antd';

import roomInfoApi from "../../../../api/roomInfoApi";
const { Meta } = Card;



function AppNews() {

const history= useHistory();
/* const [data,setData]=useState([]);

const getData=()=>{
  roomInfoApi.getAll().then((res) => {console.log(res)
  setData(res)})
}
useEffect(()=>{getData();}, [])
*/
var today = new Date()
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
let currentTime= date+" "+time;
let count=0;
var item = data.map((room)=> room.date)

for (let i = 0; i < item.length-1; i++) {
  for (let j = i+1; j<item.length ; j++) {
    if(item[i] > item[j]){
      let tg = item[i];
      item[i] = item[j];
      item[j] = tg;        
  }
  }
}
const news=[];
for (let i = 0; i < item.length; i++) {
  for (let j=item.length-1 ; j > item.length-4; j--) {
    if (data[i].date === item[j]) {
      news.push(data[i])
    }  
  }
}

const handleRoomDetail = id => {
  localStorage.setItem("roomId", id)
  history.push(
    {
      pathname : '/room/'+id
    }
  )
}
  return (
    <div id="news" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Phòng trọ mới nhất</h2>
        </div>
        <Row gutter={[16, 16]}>

        {
          
          news.map(room => {
          return (
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Modern Design" src={room.image_url} 
              />}
              onClick={() => handleRoomDetail(room.roomId)}
            >
              <Space direction="vertical">
              <Meta title={room.title} />  
              <p style={{color:"#7a7a52"}}>{room.acreage} m<sup>2</sup> 
              <span> - </span> 
              <span style={{color:"#ff5c33"}}> {room.roomPrice} triệu/tháng </span>
              </p> 
              <p><Avatar src={room.user.avatarUrl}></Avatar> &ensp;
              <span> {room.user.name}</span> 
              </p>
              </Space>          
            </Card>
          </Col>
          );
        })}
        </Row>
      </div>
    </div>
  );
}

export default AppNews;