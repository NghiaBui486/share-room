import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Space, Card, List, Avatar } from 'antd';
import './../../index.scss';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',  //detail-title
    name: `Tên bài đăng`,
    avatar: 'https://bom.to/IKbv7z9cjfhCIt',
    content: 'Diện tích - giá cả - địa điểm - người đăng - thời gian'

  });
}

class List_post extends React.Component {
    render() {
       return (
         
          <div>
           <Row>
              <Col flex='3/5' className='h'>
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
      onChange: page => {
        console.log(page);
      },
      pageSize: 5,    
      
      

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
        {item.content}
     </List.Item>
    )}
  />
            </div>
        </div>    
       );
    }
 }



export default List_post;