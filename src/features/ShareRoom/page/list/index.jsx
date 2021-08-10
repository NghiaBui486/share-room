import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Space, Card, List, Avatar, Divider } from 'antd';
import './../../index.scss';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',  
    name: `Tên bài đăng`,
    avatar: 'https://bom.to/IKbv7z9cjfhCIt',
  });
}

function ListPost (){
       return (
         
          <div>
           <Row>
              <Col flex='3/5' className='format-title'>
                 <h1>Danh sách bài đăng</h1>
              </Col>
              <Col flex='2/5' className='btn'>
                <Space>
                <Button type="primary" >Mới nhất</Button>
                <Button>Video</Button>
                </Space>
              </Col>
          </Row>
          

    <div className='list_post'>
    <List 
    style={{paddingBottom:30}}
    itemLayout="vertical"
    size="large"
    pagination={{
      position:"bottom",
      pageSize: 5
      }}
    dataSource={listData}
    
    renderItem={item => (
      <List.Item
        key={item.name}
        extra={
        <img src={'https://bom.to/rsTmX2aFe6zyGr'} width={272}/>
        }
      >
        
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.name}</a>}
          
        />
        {
          <div>
            <p style={{color:'#7a7a52'}}>40m2</p>
            <p style={{color:'#ff471a'}}>1tr/tháng</p>
            <br/>
            <p style={{color:'#7a7a52'}}>
              <span><b>Nhà nguyên căn</b></span> 
              <span> - </span>
              9h trước</p>
          </div>
        }
        <Divider></Divider>
        </List.Item>
        
       )}
      />
            </div>
        </div>    
       );
      }
export default ListPost;