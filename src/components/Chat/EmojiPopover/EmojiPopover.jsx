/*
 * @file:选择表情包
 * @Author: liuhaixu
 * @Date: 2022-09-14 15:05:26
 * @Last Modified by: liuhaixu
 * @Last Modified time: 2023-01-03 14:02:48
 */
import { useEffect, useState } from 'react';
import './EmojiPopover.less';
import { EMOJILIST } from '../Enum';

export default function EmojiPopover({ onSelect }) {
  const [visible, setVisible] = useState(false);

  const switchEmojiModal = (vis) => {
    setVisible(vis);
  };

  const iconClickHandle = (emoji) => {
    onSelect(emoji);
  };

  /**
   * 监听函数
   * @param {Object} e 监听参数
   */
  const eventListener = (e) => {
    if (e.target.getAttribute('datatype') === 'emoji') {
      switchEmojiModal(true);
    } else {
      switchEmojiModal(false);
    }
  };

  useEffect(() => {
    addEventListener('click', eventListener);
    return () => {
      removeEventListener('click', eventListener);
    };
  }, []);

  return (
    <div className="emoji-popover" title="表情">
      <div
        className="emoji_wrapper"
        style={{ display: visible ? 'block' : 'none' }}
      >
        {EMOJILIST.map((emoji) => (
          <span
            onClick={iconClickHandle.bind(null, emoji)}
            className="emoji_item"
            datatype={emoji}
            key={emoji}
          >
            {emoji}
          </span>
        ))}
      </div>
      <div className="tool_icon emoji" datatype="emoji"></div>
    </div>
  );
}
