import React, { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function Header() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">Phòng trọ nhanh cho sinh viên</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
              <Link href="#hero" title="Trang chủ" />
              <Link href="#about" title="Giới thiệu" />
              <Link href="#news" title="Mới nhất" />
              <Link href="#feature" title="Phòng trọ" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Giá cả" />
              <Link href="#contact" title="Liên hệ" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Trang chủ" />
              <Link href="#about" title="Giới thiệu" />
              <Link href="#news" title="Mới nhất" />
              <Link href="#feature" title="Phòng trọ" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Giá cả" />
              <Link href="#contact" title="Liên hệ" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Header;
