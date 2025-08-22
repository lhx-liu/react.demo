// 消息类型
export const MESSAGE_TYPE_GRAPHICVOICE = '1'; //图文语音咨询
export const MESSAGE_TYPE_PHONE = '13'; //电话咨询
export const MESSAGE_TYPE_FACECONSULATION = '9'; //预约面诊
export const MESSAGE_TYPE_DIALOGUE = '6'; //对话

// 消息状态枚举
export const MESSAGE_STATUS_ALL = '-1'; //全部
export const MESSAGE_STATUS_NEW = '0'; //新消息
export const MESSAGE_STATUS_PROCESSING = '6'; //问诊中
export const MESSAGE_STATUS_COMPLETED = '1'; //已结束
export const MESSAGE_STATUS_ACCEPT = '3'; //已接受
export const MESSAGE_STATUS_REFUSE = '4'; //已拒绝
export const MESSAGE_STATUS_BEOVERDUE = '5'; //已过期

// 消息状态枚举-图文语音咨询
export const MESSAGE_STATUS_TWYYZX_NEW = '0'; //新消息
export const MESSAGE_STATUS_TWYYZX_PROCESSING = '6'; //进行中
export const MESSAGE_STATUS_TWYYZX_COMPLETED = '1'; //已结束
export const MESSAGE_STATUS_TWYYZX_BEOVERDUE = '5'; //已过期

// 消息状态枚举-对话
export const MESSAGE_STATUS_DH_PROCESSING = '6'; //进行中
export const MESSAGE_STATUS_DH_COMPLETED = '1'; //已结束

// 消息状态枚举-预约面诊
export const MESSAGE_STATUS_YYMZ_COMPLETED = '1'; //已结束
export const MESSAGE_STATUS_YYMZ_NEW = '2'; //新消息
export const MESSAGE_STATUS_YYMZ_NEW_ACCEPT = '3'; //新消息-已接受
export const MESSAGE_STATUS_YYMZ_NEW_REFUSE = '4'; //新消息-已拒绝
export const MESSAGE_STATUS_YYMZ_BEOVERDUE = '5'; //已过期

// 消息状态枚举-电话咨询
export const MESSAGE_STATUS_DHZX_COMPLETED = '1'; //已结束
export const MESSAGE_STATUS_DHZX_NEW = '0'; //新消息
export const MESSAGE_STATUS_DHZX_EDIPTNEWDATA = '6'; //已改约
export const MESSAGE_STATUS_DHZX_REFUSE = '4'; //预约失败-已拒绝
export const MESSAGE_STATUS_DHZX_BEOVERDUE = '5'; //已过期


// 表情
export const  EMOJILIST = [
    '😀',
    '😃',
    '😄',
    '😁',
    '😆',
    '😅',
    '😂',
    '🤣',
    '😊',
    '😇',
    '🙂',
    '🙃',
    '😉',
    '😌',
    '😍',
    '😘',
    '😗',
    '😙',
    '😚',
    '😋',
    '😛',
    '😝',
    '😜',
    '🤓',
    '😎',
    '😏',
    '😒',
    '😞',
    '😔',
    '😟',
    '😕',
    '🙁',
    '😣',
    '😖',
    '😫',
    '😩',
    '😢',
    '😭',
    '😤',
    '😠',
    '😡',
    '😳',
    '😱',
    '😨',
    '😰',
    '😥',
    '😓',
    '🤗',
    '🤔',
    '🤥',
    '😶',
    '😐',
    '😑',
    '😬',
    '🙄',
    '😯',
    '😦',
    '😧',
    '😮',
    '😲',
    '😴',
    '🤤',
    '😪',
    '😵',
    '🤐',
    '🤢',
    '🤧',
    '😷',
    '🤒',
    '🤕',
];