/*
 * @file: 图片选择
 * @Author: liuhaixu
 * @Date: 2022-09-14 15:23:51
 * @Last Modified by: liuhaixu
 * @Last Modified time: 2022-09-14 16:48:18
 */
import { useRef } from 'react';
import './ImgPopover.less';

export default function ImgPopover({ onImage }) {
  const fileSelector = useRef(null);

  const selectImg = () => {
    if (fileSelector.current) {
      fileSelector.current.click();
    }
  };

  const fileHandle = (event) => {
    const files = event.target.files;
    onImage(files[0]);
    // 清空value防止下次选择同样时不调用·
    fileSelector.current.value = '';
  };
  return (
    <div className="img-popover" onClick={selectImg} title="图片">
      <input
        type="file"
        accept="image/*"
        ref={fileSelector}
        onChange={fileHandle}
      />
    </div>
  );
}
