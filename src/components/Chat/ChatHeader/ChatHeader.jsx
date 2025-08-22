/*
 * @file:聊天组件-头部
 * @Author: liuhaixu
 * @Date: 2022-09-06 16:39:42
 * @Last Modified by: liuhaixu
 * @Last Modified time: 2023-01-03 13:52:48
 */

import dayjs from 'dayjs';
import * as ENUM from '../Enum';
import './ChatHeader.less';

export default function ChatHeader({ data, onRecord }) {
  /**
   * 根据状态类型渲染不同的div
   * @param {Number} status 状态枚举
   */
  function _renderMsgStatus(status) {

    // 暂时先保留 后续有用到 再用
    
    const newMsg = <div className="new">新消息</div>;
    const processingMsg = <div className="processing">处理中</div>;
    const completedMsg = <div className="completed">已完成</div>;
    const beoverdueMsg = <div className="beoverdue">已过期</div>;

    const newMsgAcceptMsg = <div className="accept">已接受</div>;
    const newMsgRefuseMsg = <div className="refuse">已拒绝</div>;
    // 暂时先保留 后续有用到 再用
    const newMsgEditMsg = <div className="edit">已改约</div>;

    const msgType = data?.serviceMessages?.msgtype;

    // 只有预约面诊2是新消息  其他都是一套逻辑
    if (msgType + '' === ENUM.MESSAGE_TYPE_FACECONSULATION) {
      // 预约面诊
      switch (status + '') {
        case ENUM.MESSAGE_STATUS_YYMZ_NEW:
          return newMsg;
        case ENUM.MESSAGE_STATUS_YYMZ_NEW_ACCEPT:
          return newMsgAcceptMsg;
        case ENUM.MESSAGE_STATUS_YYMZ_NEW_REFUSE:
          return newMsgRefuseMsg;
        case ENUM.MESSAGE_STATUS_YYMZ_COMPLETED:
          return completedMsg;
        case ENUM.MESSAGE_STATUS_YYMZ_BEOVERDUE:
          return beoverdueMsg;
        default:
          return '';
      }
    } else {
      switch (status + '') {
        case ENUM.MESSAGE_STATUS_NEW:
          return newMsg;
        case ENUM.MESSAGE_STATUS_ACCEPT:
          return newMsgAcceptMsg;
        case ENUM.MESSAGE_STATUS_REFUSE:
          return newMsgRefuseMsg;
        case ENUM.MESSAGE_STATUS_COMPLETED:
          return completedMsg;
        case ENUM.MESSAGE_STATUS_BEOVERDUE:
          return beoverdueMsg;
        case ENUM.MESSAGE_STATUS_PROCESSING:
          return processingMsg;
        default:
          return '';
      }
    }
  }

  return (
    <div className="chat_header">
      <div className="msg_userinfo">
        <div className="msg_userinfo_item">
          <div className="tip">
            <span>患者姓名：</span>
            {data?.name}
          </div>
          <div className="tip">
            <span>发起时间：</span>
            {data && data.startTime
              ? dayjs(parseInt(data.startTime * 1000)).format(
                  'YYYY-MM-DD HH:mm:ss',
                )
              : ''}
          </div>
        </div>
        {onRecord && (
          <div className="msg_userinfo_item">
            <div className="tip">
              <span>回复数：</span>
              {data?.msgNum}
            </div>
            <div className="tip"></div>
          </div>
        )}
      </div>
      <div className="msg_status">{_renderMsgStatus(data?.status)}</div>
    </div>
  );
}

ChatHeader.defaultProps = {
  data: {},
};
