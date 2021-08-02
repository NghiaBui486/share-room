import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Select, Button, Row, Col, Space} from 'antd';
import { FilterOutlined, } from '@ant-design/icons';
import "./index.scss";
  

const { Option, OptGroup } = Select;

  function handleChange(value) {
   
    console.log(`selected ${value}`);
  }


  

  class Filter extends React.Component {
      render(){
   // const [select_1, setSeLect_1] = useState("Loại phòng");
    return (

        <Row className="content" justify="space-between">
            <Space size='small'>
            <Col span={4} className="btn_filter" > 
                <Button>Lọc <FilterOutlined /> </Button>
            </Col>
             <Col span={8}  className="select_item" >
             <Select defaultValue="Phòng trọ, nhà trọ"  onChange={handleChange}> 
                 <Option value="Phòng trọ, nhà trọ">Phòng trọ, nhà trọ</Option>
                 <Option value="Nhà nguyên căn">Nhà nguyên căn</Option>
            </Select>
             </Col>
             <Col span={7}  >
             <Select defaultValue="Hà Nội" style={{width:150 }}  className="select_item" onChange={handleChange}>
                    <OptGroup label="Khu vực miền Bắc">
                        <Option value="Hà Nội">Hà Nội</Option>
                        <Option value="Hải Phòng">Hải Phòng</Option>
                    </OptGroup>
                    <OptGroup label="Khu vực miền Trung">
                        <Option value="Đà Nẵng">Đà Nẵng</Option>
                        <Option value="Bình Định">Bình Định</Option>
                    </OptGroup>
                    <OptGroup label="Khu vực miền Nam">
                        <Option value="TP.Hồ Chí Minh">TP.Hồ Chí Minh</Option>
                        <Option value="Cần Thơ">Cần Thơ</Option>
                    </OptGroup>
                </Select>
             </Col>
             <Col span={5} >
             <Select defaultValue="1tr - 1tr500"  onChange={handleChange} className="select_item"> 
                 <Option value="1tr - 1tr500">1tr - 1tr500</Option>
                 <Option value="800k - 1tr">800k - 1tr</Option>
                 <Option value="500k - 800k">500k - 800k</Option>
            </Select>
             </Col>
             </Space>

        </Row>

       
        

        )
}
  }

export default Filter;