import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Select, Button, Row, Col, Space} from 'antd';
import { FilterOutlined, } from '@ant-design/icons';
import './../../index.scss';
  

const { Option, OptGroup } = Select;

  function Filter({handleGetRoom }) {
    const [Type, setType] = useState("Room");
    const [Address, setAddress] = useState("Bình Định");
    const [Cost, setCost] = useState("type2");
    const handleType = (value) => {
        if (value!= undefined) {
            setType(value);
        }
        else
        {
            setType("Room");
        }
       };
    const handleAddress = (value) => {
        if (value!= undefined) {
            setAddress(value);
        }
        else
        {
            setAddress("Bình Định");
        }
       };
    const handleCost = (value) => {
        if (value!= undefined) {
            setCost(value);
        }
        else
        {
            setCost("type2");
        }
       };
    
    useEffect(() => {
        handleType();
        handleAddress();
        handleCost();        
      }, []);   
      
    return (

        <Row className="filter-room" justify="space-between">
            <Space size='small'>
            <Col span={4} className="filter-room__btn" > 
                <Button onClick={() =>handleGetRoom(Type,Address,Cost)}
                >Lọc <FilterOutlined /> </Button>
            </Col>
             <Col span={8}  className="filter-room__type" >
             <Select defaultValue="Room"  onSelect={handleType}> 
                 <Option value="Room">Phòng trọ, nhà trọ</Option>
                 <Option value="House">Nhà nguyên căn</Option>
            </Select>
             </Col>
             <Col span={7}  >
             <Select defaultValue="Hà Nội" style={{width:150 }}  className="select_item" onSelect={handleAddress}>
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
             <Select defaultValue="type2"  onSelect={handleCost} className="select_item"> 
                 <Option value="type1">3tr - 5tr</Option>
                 <Option value="type2">2tr - 3tr</Option>
                 <Option value="type3">1tr - 2tr</Option>
            </Select>
             </Col>
             </Space>

        </Row>
        )
}
export default Filter;