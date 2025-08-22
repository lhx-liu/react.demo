/*
 * @file:输入框上侧快捷工具
 * @Author: liuhaixu
 * @Date: 2022-09-14 14:58:12
 * @Last Modified by: liuhaixu
 * @Last Modified time: 2025-08-21 20:42:39
 */
import EmojiPopover from '../EmojiPopover/EmojiPopover';
import ImgPopover from '../ImgPopover/ImgPopover';
import Shortcut from '../Shortcut/Shortcut';
import './ChatToolBar.less';

export default function ChatToolBar({
  tools = [],
  commonWords,
  onEmojiSelect,
  onImage,
  sendShortcut,
}) {
  return (
    <div className="chat-toolbar">
      {typeof onEmojiSelect === 'function' && (
        <EmojiPopover onSelect={onEmojiSelect} />
      )}
      {typeof onImage === 'function' && <ImgPopover onImage={onImage} />}
      {commonWords && (
        <Shortcut commonWords={commonWords} sendShortcut={sendShortcut} />
      )}
      {tools.map((tool) => tool)}
    </div>
  );
}
