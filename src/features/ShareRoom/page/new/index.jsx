import React , { useState } from 'react';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import './../../index.scss';
import { List, Avatar, Row, Col } from 'antd';


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


  class New extends React.Component {
    render() {
        return(

            <div>
            <Row>
                <Col className='h'>
                <h1>Tin mới đăng</h1>
                </Col>
            </Row>
            <div className='new'>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    style={{padding:10}}
                    avatar={<Avatar src="https://bom.to/rsTmX2aFe6zyGr" shape="square" size={80 } />}
                    title={<Link to='/detail-room'>{item.title}</Link>}
                    description="Data: Price + time"
                    />
                </List.Item>
                )}
             />
            </div>
            </div>

        );
    }
}

    export default New;