import { UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Tooltip, Form, Input, Alert } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context/AppProvider';
import Message from './Message';

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 56px;
    padding: 0 16px;
    align-items: center;
    border-bottom: 1px solid rgb(230, 230, 230);
    .header {
        &__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        &__title {
            margin: 0;
            font-weight: bold;
        }
        &__description {
            font-size: 12px;
        }
    }
`;

const ButtonGroupStyled = styled.div`
    display: flex;
    align-items: center;
`;

const WrapperStyled = styled.div`
    height: 100vh;
`;

const ContentStyled = styled.div`
    height: calc(100% - 56px);
    display: flex;
    flex-direction: column;
    padding: 11px;
    justify-content: flex-end;
`;

const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 2px 2px 0;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 2px;
    .ant-form-item {
        flex: 1;
        margin-bottom: 0;
    }
`;

const MessageListStyled = styled.div`
    max-height: 100%;
    overflow-y: auto;
`;

export default function ChatWindow() {
    const { selectedRoom, members, setIsInviteMemberVisible } = useContext(AppContext);

    return (
        <WrapperStyled>
            {selectedRoom.id ? (
                <>
                    <HeaderStyled>
                        <div className="header__info">
                            <p className="header__title">{selectedRoom.name}</p>
                            <span className="header__description">{selectedRoom.description}</span>
                        </div>
                        <ButtonGroupStyled>
                            <Button
                                icon={<UserAddOutlined />}
                                type="text"
                                onClick={() => setIsInviteMemberVisible(true)}
                            >
                                Mời
                            </Button>
                            <Avatar.Group size="small" maxCount={2}>
                                {members.map((member) => (
                                    <Tooltip title={member.displayName} key={member.id}>
                                        <Avatar src={member.photoUrl}>
                                            {' '}
                                            {member.photoUrl ? '' : member.displayName?.charAt(0).toUpperCase()}{' '}
                                        </Avatar>
                                    </Tooltip>
                                ))}
                            </Avatar.Group>
                        </ButtonGroupStyled>
                    </HeaderStyled>
                    <ContentStyled>
                        <MessageListStyled>
                            <Message text="text" photoUrl={null} displayName="Tung" createAt={123123123123} />
                            <Message text="text" photoUrl={null} displayName="Tung" createAt={123123123123} />
                            <Message text="text" photoUrl={null} displayName="Tung" createAt={123123123123} />
                            <Message text="text" photoUrl={null} displayName="Tung" createAt={123123123123} />
                        </MessageListStyled>
                        <FormStyled>
                            <Form.Item>
                                <Input placeholder="Nhập tin nhắn" bordered={false} autoComplete="off" />
                            </Form.Item>
                            <Button type="primary">Gửi</Button>
                        </FormStyled>
                    </ContentStyled>
                </>
            ) : (
                <Alert message="Hãy chọn phòng" type="info" showIcon style={{ margin: 5 }} closable />
            )}
        </WrapperStyled>
    );
}
