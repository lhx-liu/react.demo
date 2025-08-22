/*
 * @file: 声音播放组件
 * @Author: liuhaixu
 * @Date: 2022-10-10 16:56:47
 * @Last Modified by: liuhaixu
 * @Last Modified time: 2022-12-08 15:16:50
 */

import { useEffect, useRef, useState } from 'react';
import voiceLeft from '../image/voiceLeft.png';
import voiceLeftGif from '../image/voiceLeftA.gif';
import voiceRight from '../image/voiceRight.png';
import voiceRightGif from '../image/voiceRightA.gif';
import './VoicePlayer.less';

export default function VoicePlayer({ data, isMe }) {
    // 是否正在播放
    const [startPalyer, setStartPalyer] = useState(false);

    const audioRef = useRef();

    useEffect(() => {
        if (audioRef && audioRef.current) {
            audioRef.current.addEventListener(
                'ended',
                function () {
                    audioRef.current.pause();
                    setStartPalyer(false);
                },
                false,
            );
        }
        return () => {
            if (audioRef && audioRef.current) {
                audioRef.current.removeEventListener(
                    'ended',
                    function () {
                        audioRef.current.pause();
                        setStartPalyer(false);
                    },
                    false,
                );
            }
        };
    }, []);

    useEffect(() => {
        if (startPalyer) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [startPalyer]);

    /**
     * 开始或播放声音
     */
    function _startPalyAudio() {
        setStartPalyer(!startPalyer);
    }

    const { voice, voiceLength } = data;
    return (
        <div className="voiceBox" onClick={_startPalyAudio} style={{ flexDirection: isMe ? 'rowrow-reverse' : 'row' }}>
            <audio hidden loop={false} ref={audioRef} src={voice}>
                您的浏览器不支持 audio 元素。
            </audio>
            {!startPalyer ? (
                <img src={isMe ? voiceRight : voiceLeft} alt="加载失败" className="voiceBox-stop" />
            ) : (
                <img src={isMe ? voiceRightGif : voiceLeftGif} alt="加载失败" className="voiceBox-stop" />
            )}
            <div className="duration">{voiceLength ? Math.floor(voiceLength / 1000) : 0}”</div>
        </div>
    );
}
