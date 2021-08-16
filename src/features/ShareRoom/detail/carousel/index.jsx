import React from 'react';
import { Button, Image, Space } from 'antd';

import { Carousel, Col, Row } from 'antd';

const items = [
  {
    key: '1',
    title: 'Web and mobile payment built for developers',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '2',
    title: 'Work better together. Schedule meetings',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '3',
    title: 'The best app to increase your productivity',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
]

function CarouselApp() {
  return (
    <div id="hero" className="heroBlockDetail">
       <Row gutter={[16, 16]}>
          <Col xs={{ span: 14 }} sm={{ span: 14 }} md={{ span: 14 }}>
            <Carousel>
            {items.map(item => {
              return (
                <div key={item.key} className="contentStyle">
                  <div className="content">
                  <Image
                    width={500}
                    height={500}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  </div>
                </div>  
              );
            })}
          </Carousel>
          </Col>
          
        </Row>
    
    </div>
  );
}

export default CarouselApp;