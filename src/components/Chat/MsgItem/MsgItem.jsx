/*
 * @file:消息数据
 * @Author: liuhaixu
 * @Date: 2022-09-14 09:47:17
 * @Last Modified by: liuhaixu
 * @Last Modified time: 2022-12-09 14:53:32
 */
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import dayjs from 'dayjs';
import MsgBubble from '../MsgBubble/MsgBubble';
import './MsgItem.less';
import errorPng from '../image/error.png';

export default function MsgItem({ data, me, enlarge, enlargeArr }) {
  const isMe = data?.user?.id === me?.id;

  return (
    <div
      className="msg-item flex"
      style={{ flexDirection: isMe ? 'row-reverse' : 'row' }}
    >
      <div
        className="avatar"
        style={{ alignItems: isMe ? 'flex-end' : 'flex-start' }}
      >
        <div
          className="avatar_info"
          style={{ flexDirection: isMe ? 'row-reverse' : 'row' }}
        >
          {data && data.user && data.user.avatar ? (
            <img
              src={data.user.avatar}
              style={{ marginLeft: isMe ? '10px' : '' }}
            />
          ) : (
            <Avatar size={32} icon={<UserOutlined />} />
          )}
          <div
            className="comment_area"
            style={{ flexDirection: isMe ? 'row-reverse' : 'row' }}
          >
            <span
              className="nickname_text"
              style={{ marginLeft: isMe ? '10px' : '' }}
            >
              {data.user.nickname}
            </span>
            <span className="date_text">
              {dayjs(data.date).format('MM-DD HH:mm')}
            </span>
          </div>
        </div>
      </div>
      <div
        className="text_area"
        style={{ alignItems: isMe ? 'flex-end' : 'flex-start' }}
      >
        <MsgBubble
          isMe={isMe}
          data={data}
          enlarge={enlarge}
          enlargeArr={enlargeArr}
          errFlag={data.error}
          msgLoading={data.loading}
        />
      </div>
    </div>
  );
}
