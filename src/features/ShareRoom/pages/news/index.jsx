import React,{ useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Row, Col, Card, Space, Avatar } from 'antd';
import roomInfoApi from "../../../../api/roomInfoApi";

const { Meta } = Card;

function AppNews() {
const history= useHistory();
const [data,setData]=useState([]);
const getData=()=>{
  roomInfoApi.getAll().then((res) => {setData(res)})
}
useEffect(()=>{getData();}, [])

var itemDate = data.map((room)=> room.date)

for (let i = 0; i < itemDate.length-1; i++) {
  for (let j = i+1; j<itemDate.length ; j++) {
    if(itemDate[i] > itemDate[j]){
      let tg = itemDate[i];
      itemDate[i] = itemDate[j];
      itemDate[j] = tg;        
  }
  }
}
const news=[];
for (let i = 0; i < itemDate.length; i++) {
  for (let j=itemDate.length-1 ; j > itemDate.length-4; j--) {
    if (data[i].date === itemDate[j]) {
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
              cover={<img alt="Modern Design" src={room.files[0].url} 
              />}
              onClick={() => handleRoomDetail(room.roomId)}
              >              
              <Meta title={room.title} style={{textAlign:"center"}}/>           
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