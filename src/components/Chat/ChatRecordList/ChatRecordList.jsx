/*
 * @file 聊天记录
 * @Author: liuhaixu
 * @Date: 2022-09-14 09:35:12
 * @Last Modified by: liuhaixu
 * @Last Modified time: 2022-10-08 14:41:27
 */
import { Empty } from 'antd';
import dayjs from 'dayjs';
import { forwardRef, Fragment, useEffect, useState } from 'react';
import Viewer from 'react-viewer';
import chatEmpty from '../image/chat_empty.png';
import MsgItem from '../MsgItem/MsgItem';
import './ChatRecordList.less';

const ChatRecordList = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [imgList, setImgList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight; //直接消息到底
    }
  }, [props.data]); //或者如果有新的消息 则也重新进行到底的操作

  /**
   * 查看大图
   * @param {Int} _id 当前消息的Id
   */
  function enlarge(_id) {
    setVisible(true);
    let _imgList = [];
    let _falg = false,
      _activeIndex = 0;
    props?.data.forEach((item) => {
      if (item?.message?.type === 'image') {
        if (!_falg) {
          _activeIndex++;
        }
        if (item?._id === _id) {
          _falg = true;
        }
        _imgList.push({ src: item?.message?.content, alt: '' });
      }
    });
    setImgList(_imgList);
    setActiveIndex(_activeIndex - 1);
  }

  /**
   * 查看大图
   * @param {Int} _id 当前消息的Id
   */
  function enlargeArr(arr, index) {
    setVisible(true);
    let _imgList = [];
    arr.forEach((_img) => {
      _imgList.push({ src: _img, alt: '' });
    });
    setImgList(_imgList);
    setActiveIndex(index);
  }

  /**
   * 关闭查看大图
   */
  function onClose() {
    setVisible(false);
    setImgList([]);
    setActiveIndex(0);
  }

  /**
   * 判断是否渲染时间 超过10分钟的新消息添加时间
   */
  function _isRenderTime(bubble, index) {
    // const tenUnix = 600000; //10分钟 毫秒
    const threeUnix = 180000; //3分钟 毫秒
    if (index === 0 || bubble.date - props.data[index - 1].date >= threeUnix) {
      return (
        <div className="load_more">
          {dayjs(bubble.date).format('MM-DD HH:mm')}
        </div>
      );
    } else {
      return <></>;
    }
  }

  return (
    <div className="list_area" ref={ref}>
      {props.data && props.data.length ? (
        <>
          {props.data &&
            props.data.length &&
            props.data.map((bubble, index) => (
              <Fragment key={bubble._id}>
                {_isRenderTime(bubble, index)}
                <MsgItem
                  {...props}
                  data={bubble}
                  msgList={props.data}
                  key={bubble._id}
                  enlarge={enlarge}
                  enlargeArr={enlargeArr}
                />
              </Fragment>
            ))}
          <Viewer
            visible={visible}
            onClose={onClose}
            images={imgList}
            activeIndex={activeIndex}
          />
        </>
      ) : (
        <Empty
          className="customEmpty"
          image={chatEmpty}
          description=""
          imageStyle={{
            height: 200,
          }}
        />
      )}
    </div>
  );
});

export default ChatRecordList;
