import React , { useState } from 'react';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import './../../index.scss';
import { List, Avatar, Row, Col, Divider } from 'antd';


const data = [
    {
      title: ' Title 1',
    },
    {
      title: ' Title 2',
    },
    {
      title: ' Title 3',
    },
    {
      title: ' Title 4',
    },
    {
      title: ' Title 5',
    },
  ];


  function New() {
    return (
            <div>
            <Row>
                <Col className='format-title'>
                <h1>Tin mới đăng</h1>
                </Col>
            </Row>
            <div className='new'>
            <List
                itemLayout="vertical"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    style={{padding:10}}
                    avatar={<Avatar src="https://bom.to/rsTmX2aFe6zyGr" shape="square" size={60 } />}
                    title={<Link to='/detail-room'>{item.title}</Link>}
                    description={
                    <p style={{color:'#0b7143'}}>700k/tháng 
                    <span> - </span>
                    <span style={{color:'#7a7a52'}}>7 phút trước</span>
                    </p>}
                    />
                    <Divider></Divider>
                </List.Item>
                
                )}
               
             />
            </div>
            </div>

);
}


    export default New;