import React from 'react';
import UserInfo from './UserInfo';
import { Row, Col } from 'antd';
import RoomList from './RoomList';
import styled from 'styled-components';

const SidebarStyled = styled.div`
    background: #3f0e40;
    color: white;
    height: 100vh;
`;
export default function Slidebar() {
    return (
        <SidebarStyled>
            <Row>
                <Col span={24}>
                    <UserInfo />
                </Col>
                <Col span={24}>
                    <RoomList />
                </Col>
            </Row>
        </SidebarStyled>
    );
}
