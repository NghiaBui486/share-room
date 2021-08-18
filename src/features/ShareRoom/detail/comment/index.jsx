import { Col } from "antd";
import React, { useState, useEffect, createElement } from "react";
import { Comment, Tooltip, Avatar } from 'antd';
import { Form, Button, List, Input } from 'antd';

import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

const { TextArea } = Input;

function CommentApp(){

    const initComment =[
        { },
      ];

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const [comments, setComment] = useState(initComment);

    
    const like = () => {
      setLikes(1);
      setDislikes(0);
      setAction('liked');
    };
  
    const dislike = () => {
      setLikes(0);
      setDislikes(1);
      setAction('disliked');
    };
    
    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
          <span onClick={like}>
            {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
            <span className="comment-action">{likes}</span>
          </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
          <span onClick={dislike}>
            {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
            <span className="comment-action">{dislikes}</span>
          </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
      ];
    
      const CommentList = ({ comments }) => (
        <List
          dataSource={comments}
          header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
          itemLayout="horizontal"
          renderItem={props => <Comment {...props} />}
        />
      );

      const Editor = ({ onChange, onSubmit, submitting, value }) => (
        <>
          <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
              Add Comment
            </Button>
          </Form.Item>
        </>
      );
      

    return (
       <Col offset="2" className="comment">
           <h1 className="">Đánh giá - Câu hỏi</h1>
           <div className="comment-content">
           <Comment
                actions={actions}
                author={<a>Han Solo</a>}
                avatar={
                    <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                    />
                }
                content={
                    <p>
                    Hello world
                    </p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
            <div className="write-comment">
            {comments.length > 0 && <CommentList comments={comments} />}
            <Comment
                avatar={
                    <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                    />
                }
                content={
                    <Editor
                    />
                }
            />
            </div>
        </div>
       </Col>
    );
}
export  default CommentApp;