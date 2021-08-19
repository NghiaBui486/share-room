import React, { useEffect,useState } from "react";
import { Select, Button, Row, Col, Space} from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import './../../index.scss';

const { Option, OptGroup } = Select;

  function Filter({ passDataToRoom }) {
    const [itemType, setType] = useState("Room");
    const [itemAddress, setAddress] = useState("Hà Nội");
    const [itemPrice, setPrice] = useState("type2");
    const checkType = (value) => {
        if (value!= undefined) {
            setType(value);
        }
        else {
            setType("Room");
        }
       };
    const checkAddress = (value) => {
        if (value!= undefined) {
            setAddress(value);
        }
        else {
            setAddress("Hà Nội");
        }
       };
    const checkPrice = (value) => {
        if (value!= undefined) {
            setPrice(value);
        }
        else {
            setPrice("type2");
        }
       };
    
    useEffect(() => {
        checkType();
        checkAddress();
        checkPrice();        
      }, []);   
      
    return (

        <Row className="filter-room" justify="space-between">
            <Space size='small'>
            <Col span={4} className="filter-room__btn" > 
                <Button onClick={() =>passDataToRoom(itemType,itemAddress,itemPrice)}
                >Lọc <FilterOutlined /> </Button>
            </Col>
             <Col span={8}  className="filter-room__type" >
             <Select defaultValue="Room"  onSelect={checkType}> 
                 <Option value="Room">Phòng trọ, nhà trọ</Option>
                 <Option value="House">Nhà nguyên căn</Option>
            </Select>
             </Col>
             <Col span={7}  >
             <Select defaultValue="Hà Nội" style={{width:150 }}  className="select_item" onSelect={checkAddress}>
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
             <Select defaultValue="type2"  onSelect={checkPrice} className="select_item"> 
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