import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Space } from 'antd';
import TagsOutlined from '@ant-design/icons';
import './../../index.scss';

class Category extends React.Component{
    render() {
    return(
        <div style={{marginTop:20}}>
            <Row>
                <Col><h1>Danh mục cho thuê</h1></Col>
            </Row>
            <div className='category'>
            <Space direction="vertical">
                <Row>
                    <Space>
                    <Col >
                    <TagsOutlined style={{ fontSize: 20, color:'#8bb200' }} />
                    </Col>
                    <Col>
                        <Link  className="name" to='/' style={{borderColor:'#8bb200'}} >Cho thuê phòng trọ</Link>
                    </Col>
                    </Space>
                </Row>
                <Row>
                    <Space>
                    <Col>
                    <TagsOutlined style={{ fontSize: 20, color:'#b698ce' }} />
                    </Col>
                    <Col >
                        <Link  className="name" to='/' style={{borderColor:'#b698ce'}} >Cho thuê nhà nguyên căn</Link>
                    </Col>
                    </Space>
                </Row>
                <Row>
                    <Space>
                    <Col>
                    <TagsOutlined style={{ fontSize: 20, color:'#ff3333' }} />
                    </Col>
                    <Col>
                        <Link  className="name" to='/' style={{borderColor:'#ff3333'}}>Cho thuê căn hộ mini</Link>
                    </Col>
                    </Space>
                </Row>
                </Space>
            </div>
        </div>

    );
    }
}
export default Category;