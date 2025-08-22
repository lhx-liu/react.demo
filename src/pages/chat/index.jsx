/*
 * @Description: 流程设计器
 * @Author: liuhaixu
 * @Date: 2025-08-08 15:08:10
 * @Last Modified by: liuhaixu
 * @Last Modified time: 2025-08-21 21:28:35
 */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Chat from '../../components/Chat/index';

const _initChatList = [
  {
    _id: 1,
    date: 1755777600000,
    user: {
      id: 1,
      avatar: 'https://img95.699pic.com/element/40113/4394.png_860.png',
      nickname: 'king',
      desc: '这是我的第一条信息',
    },
    message: { type: 'text', content: 'hello joker!' },
  },
  {
    _id: 2,
    date: 1755777660000,
    user: {
      id: 2,
      avatar:
        'https://img-baofun.zhhainiao.com/pcwallpaper_ugc_mobile/static/8caf600f71d95fcce80426958cfba305.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_640%2ch_1138',
      nickname: 'joker',
      desc: '这是我的第一条信息',
    },
    message: { type: 'text', content: 'hello king! ' },
  },
];

function Index() {
  const contact = {
    id: 1,
    avatar: 'https://img95.699pic.com/element/40113/4394.png_860.png',
    nickname: 'king',
    message: '这是一条信息',
    date: '02-11',
    desc: '大家好 我是 king',
  };
  const my = {
    id: 2,
    avatar:
      'https://img-baofun.zhhainiao.com/pcwallpaper_ugc_mobile/static/8caf600f71d95fcce80426958cfba305.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_640%2ch_1138',
    nickname: 'joker',
    message: '这是一条信息',
    date: '02-11',
    desc: '大家好 我是 joker',
  };

  const [chatList, setChatList] = useState(_initChatList);

  const _sendMsg = (msg) => {
    setChatList((list) => [...list, msg]);
  };

  return (
    <div className="chat" style={{ width: '100vw', height: '100vh' }}>
      <Chat
        ChatHeader={<div>聊天头部</div>}
        contact={contact} //当前聊天对象
        me={my} //本人对象
        commonWords={['你好', '吃了吗？']} //快捷发送短语List
        onRecord={false} //是否只展示聊天记录 true适配管理端 false适配医生端
        chatList={chatList} //需要渲染的聊天记录
        onSend={(msg) => {
          _sendMsg(msg);
        }} //点击发送消息的回掉函数
        inputHeight={'300px'} //聊天框默认高度
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}

export default Index;
