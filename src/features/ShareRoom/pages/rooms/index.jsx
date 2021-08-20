import React,{ useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Filter from "../filter";
import roomInfoApi from "../../../../api/roomInfoApi";
import addressApi from "../../../../api/address";
import { Row, Col, Card, Space, Avatar, Pagination } from 'antd';
import addressApi from "../../../../api/address";
const { Meta } = Card;

function AppRooms() {
 
const history= useHistory();
const [minValue, setMin] = useState(0);
const [maxValue, setMax] = useState(3);
const [type, setType] = useState('');
const [address, setAddress] = useState('');
const [cost, setCost] = useState('');
const [check,setCheck] = useState(true);
const [data,setData]=useState([]);
const [province,setProvince]= useState([]);

const getData=()=>{
  roomInfoApi.getAll().then((res) => { setData(res)})
}
useEffect(()=>{getData();}, [])
const getProvince=() =>{
  addressApi.getAllProvince().then((res)=>{ setProvince(res)})
}
useEffect(()=>{
  getData();
  getProvince();
}, []);

const checkPagination = value => {
    if (value <= 1) {
        setMin(0)
        setMax(3)
    } else {
        setMin(maxValue)
        setMax(value*3)
    }
  };
const handleRoomDetail = id => {
  localStorage.setItem("roomId", id)
  history.push(
    {
      pathname : '/room-detail/?room-id='+id
    }
  )
}
const getNews = () => {
  return(
    data.slice(minValue, maxValue).map(room => {
      return (
        <Col style={{marginTop: 10, marginBottom: 10}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
        <Card
          hoverable
          cover={<img style={{height: 300}} alt="Modern Design" src={room.files[0].url} 
          />}
          onClick={() => handleRoomDetail(room.roomId)}
          >
          <Meta title={room.title} />  
          <p style={{color:"#7a7a52"}}>{room.acreage} m<sup>2</sup> 
          <span> - </span> 
          <span style={{color:"#ff5c33"}}> {room.roomPrice} vnđ/tháng </span>
          </p> 
          {(() => {
            if ( room.user && room.user.avatarUrl) {
              return (
                <p>
               <Avatar src={room.user.avatarUrl}></Avatar> &ensp;
               <span> {room.user.name}</span> 
               </p>
              )
            } else {
              return (
                <p>
                <Avatar src={"https://bom.to/Xa9VU0eQK352ql"}></Avatar> &ensp;
                <span> {room.user.name}</span> 
                </p>
              )
            }
          })()}        
        </Card>
      </Col>
      );
    })
    );
  }

  let minCost;
  let maxCost;
  const getCost=()=>{
    if (cost== "type1") {
      minCost=3000000;
      maxCost=5000000;
    }
    else if (cost == "type2") {
      minCost=1000000;
      maxCost=2000000;
    }
    else{
      minCost=1000000;
      maxCost=2000000;
    }
  };
  const callDataFromFilter = (itemType, itemAddress, itemPrice) => {
   setType(itemType); 
   setAddress(itemAddress);
   setCost(itemPrice);
   setCheck(false);
  };
  const getFilter = () => {
    let roomFilter=[];
    console.log(province)
   getCost();
   for (let i = 0; i < data.length; i++) {
    if ((data[i].roomType == type) && ((province[i].name == address) && (province[i].provinceId == data[i].provinceId)) && (data[i].roomPrice >= minCost) && (data[i].roomPrice <= maxCost) ) {
      roomFilter.push(data[i]);
    }
    }
   if(roomFilter.length>0) {
   return (
     roomFilter.slice(minValue, maxValue).map(room => {
       return (
         <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
         <Card
           hoverable
           cover={<img alt="Modern Design" src={room.files[0].url} 
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
     })
     );
    }
    else {
      return(
        <p style={{textAlign:"center"}}> Not found data</p>
      );
    }
  };
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Phòng trọ với giá tốt nhất</h2>
        </div>
          <Filter passDataToRoom={callDataFromFilter}/>
          <Row gutter={[16, 16]}>
          {(() => {
            if (check) {
              return (
                getNews()
              )
            } else {
              return (
                getFilter()
              )
            }
          })()}
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Pagination
               defaultCurrent={1}
               pageSize={2} 
               onChange={checkPagination}
               total={3}             
              />
            </Col>
          </Row>
      </div>
    </div>
  );
}

export default AppRooms;