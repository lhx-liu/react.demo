/*
 * @file: 输入框
 * @Author: liuhaixu
 * @Date: 2022-09-14 15:10:23
 * @Last Modified by: liuhaixu
 * @Last Modified time: 2025-08-21 21:16:24
 */
import { useRef, useState } from 'react';
import ChatToolBar from '../ChatToolBar/ChatToolBar';
import { uuid } from '../util';
import { Resizable } from 're-resizable';
import './ChatInput.less';
/**
 * @param {Object} me 当前"我"的信息
 * @param {Function} onSend 发送函数
 * @param {Number} inputHeight 高度
 * @param {Function} printChat 打印函数
 * @param {Array} commonWords 快捷语
 * @param {Array} checkQuestion 问诊单
 */
export default function ChatInput({
  me,
  onSend = () => {},
  inputHeight,
  commonWords,
  checkQuestion,
}) {
  const [text, setText] = useState('');
  const [isShift, setIsShift] = useState(false);
  const [isAllowSend, setIsAllowSend] = useState(false);
  const inputRef = useRef(null);

  const textChangeHandle = (e) => {
    const isAllowSend = !!e.target.value.trim();
    const text = e.target.value;

    setText(text);
    setIsAllowSend(isAllowSend);
  };

  const sendHandle = () => {
    if (!isAllowSend) {
      return;
    }
    const date = new Date().valueOf();
    const msgData = {
      _id: uuid(),
      date: date,
      user: me,
      message: {
        type: 'text',
        content: text,
      },
    };
    onSend(msgData);
    resetText();
  };

  const resetText = () => {
    setText('');
    setIsAllowSend(false);
  };

  const keyDownHandle = (e) => {
    if (e.keyCode === 16) {
      setIsShift(true);
    }

    if (e.keyCode === 13 && !isShift) {
      e.preventDefault();
      sendHandle();
    }
  };

  const keyUpHandle = (e) => {
    if (e.keyCode === 16) {
      setIsShift(false);
    }
  };

  const emojiSelectHandle = (emoji) => {
    setText(text + emoji);
    inputRef?.current?.focus();
    setIsAllowSend(true);
  };

  const onImage = (file) => {
    try {
      const date = new Date().valueOf();
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        const msgData = {
          _id: uuid(),
          date: date,
          user: me,
          message: {
            type: 'image',
            content: reader.result,
          },
        };
        onSend(msgData);
      };
    } catch (error) {
      console.error('发送信息失败，获取图片信息失败', error);
    }
  };

  const sendShortcut = (shortcutText) => {
    setText(text + shortcutText);
    inputRef?.current?.focus();
    setIsAllowSend(true);
  };

  /**
   * 发送问卷调查
   * @param {Object} question 问卷详情
   */
  const sendCheckQuestion = (question) => {
    const date = new Date().valueOf();
    const msgData = {
      _id: uuid(),
      date: date,
      user: me,
      message: {
        type: 'question',
        content: question,
      },
    };
    onSend(msgData);
    resetText();
  };
  return (
    <Resizable
      defaultSize={{ width: '100%', height: inputHeight }}
      minHeight={inputHeight}
      enable={{
        top: true, //只有顶部可以拖动
      }}
    >
      <div className="chat_input">
        <ChatToolBar
          onEmojiSelect={emojiSelectHandle}
          onImage={onImage}
          commonWords={commonWords}
          checkQuestion={checkQuestion}
          sendShortcut={sendShortcut}
          sendCheckQuestion={sendCheckQuestion}
        />
        <textarea
          ref={inputRef}
          className="input_area"
          onKeyUp={keyUpHandle}
          onKeyDown={keyDownHandle}
          onChange={textChangeHandle}
          value={text}
          placeholder="请输入..."
        ></textarea>
        <div className="but_area">
          <button className="but" onClick={sendHandle} disabled={!isAllowSend}>
            发送
          </button>
        </div>
      </div>
    </Resizable>
  );
}
