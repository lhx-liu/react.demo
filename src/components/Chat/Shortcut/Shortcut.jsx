/*
 * @file:快捷语
 * @Author: liuhaixu
 * @Date: 2022-09-14 09:47:17
 * @Last Modified by: liuhaixu
 * @Last Modified time: 2022-12-15 16:16:09
 */
import { Popover } from 'antd';
import './Shortcut.less';

export default function Shortcut({ commonWords, sendShortcut }) {
  const content = (
    <ul className="short_box">
      {commonWords && commonWords.length ? (
        commonWords.map((phrase) => (
          <li key={phrase}>
            <span onClick={() => sendShortcut(phrase)}>{phrase}</span>
          </li>
        ))
      ) : (
        <span>您暂未设置常用语</span>
      )}
    </ul>
  );
  return (
    <Popover
      content={content}
      title=""
      trigger="click"
      overlayClassName="popover"
      placement="topRight"
    >
      <div className="shortcut"></div>
    </Popover>
  );
}
