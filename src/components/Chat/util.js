/*
 * @file: 工具方法
 * @Author: liuhaixu
 * @Date: 2022-09-14 16:15:45
 * @Last Modified by: liuhaixu
 * @Last Modified time: 2022-09-15 11:19:04
 */

export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
