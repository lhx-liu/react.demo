/*
 * @file:聊天组件
 * @Author: liuhaixu
 * @Date: 2022-09-06 16:39:42
 * @Last Modified by: liuhaixu
 * @Last Modified time: 2025-08-21 21:13:08
 */
import { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatInput from './ChatInput/ChatInput';
import ChatRecordList from './ChatRecordList/ChatRecordList';
import './index.less';
/**
 * contact 封装用户信息
 * key	desc
 * id	用户标示，需要唯一
 * name	用户昵称
 * startTime 会话发起时间
 * status 会话状态
 * 以下字段不必要
 * avatar	用户头像
 * message	最近一条信息
 * date	信息更新时间
 * desc	用户简介(用于在聊天框头部显示)
 */

export default function index(props) {
  const {
    contact,
    chatList,
    style,
    onImage,
    onSend,
    commonWords,
    checkQuestion,
    onRecord,
    me,
    ChatHeader = <></>,
  } = props;
  const chatRef = useRef(null);

  function sendHandle(msgData) {
    onSend && typeof onSend === 'function'
      ? onSend(msgData)
      : console.error('onSend 不是有效函数');
  }

  //   const printChat = useReactToPrint({
  //     content: () => chatRef.current,
  //   });
  return (
    <div className="chat_box" style={style}>
      {ChatHeader}
      <ChatRecordList {...props} data={chatList} scrollToBottom ref={chatRef} />
      {!onRecord ? (
        <ChatInput
          {...props}
          onSend={sendHandle}
          onImage={onImage}
          // printChat={printChat}
          checkQuestion={checkQuestion}
          commonWords={commonWords}
          contact={contact}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

index.defaultProps = {
  style: {
    width: 600,
    height: 500,
  },
  contact: {},
  me: {},
  chatList: [],
  onSend: (msg) => console.warn('传入onSend属性，用于接收输入框内容', msg),
};
