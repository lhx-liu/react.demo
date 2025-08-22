/*
 * @file:消息内容
 * @Author: liuhaixu
 * @Date: 2022-09-14 09:47:17
 * @Last Modified by: liuhaixu
 * @Last Modified time: 2022-12-30 10:14:29
 */

import errorPng from '../image/error.png';
import msgLoadingPng from '../image/loading.png';
import VoicePlayer from '../VoicePlayer/VoicePlayer';
import './MsgBubble.less';

export default function MsgBubble({
  data,
  isMe,
  enlarge,
  errFlag,
  msgLoading,
}) {
  const { message } = data;

  /**
   * 根据消息类型渲染不同
   * @param {Object} msg 消息
   */
  const renderContent = (msg) => {
    // 根据不同类型消息特殊处理
    const { type, content } = msg;
    if (type === 'text') {
      return <span dangerouslySetInnerHTML={{ __html: content }}></span>;
    } else if (type === 'image') {
      return (
        <img
          title="点击可查看大图"
          className="img_content"
          src={content}
          onClick={() => {
            enlarge(data._id);
          }}
        />
      );
    } else if (type === 'voice') {
      return <VoicePlayer data={msg?.content} isMe={isMe} />;
    } else {
      console.error('未知消息类型');
      return null;
    }
  };

  return (
    <div
      className={
        message.type === 'image'
          ? 'text_content_nobackground'
          : 'text_content' +
            ' ' +
            'arrow' +
            ' ' +
            (isMe ? 'arrow_right' : 'arrow_left')
      }
    >
      {errFlag && (
        <img src={errorPng} className="msgBubbleErr" title="消息发送失败"></img>
      )}
      {msgLoading && (
        <img
          src={msgLoadingPng}
          className="msgBubbleLoading"
          title="消息发送中"
        ></img>
      )}

      {renderContent(message)}
    </div>
  );
}
