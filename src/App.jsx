import { useState } from 'react'
import ballLogo from '/ballLogo.png'
import './App.css'

import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import YoutubeOutlined from "@ant-design/icons/lib/icons/YoutubeOutlined";
import MenuFoldOutlined from "@ant-design/icons/lib/icons/MenuFoldOutlined";
import {videoList} from "./data/data";

function App() {
    const [isHideText, setIsHideText] = useState(true)

  return (
    <>
        <div className="container">
            <div className="layout header">
                <div className='title'>
                    <a href="https://vitejs.dev">
                        <img src={ballLogo} className="logo" alt="Vite logo" />
                    </a>
                    <h1>BBall_Vision</h1>
                </div>
                <div className="sub-title">
                    收錄精華以及您不知道的NBA大小事
                </div>
                <h4 className='sub-title'>籃球傳教士 | NBA消息 | 球員報導</h4>
            </div>
            <div className="layout videoContainer">
                {
                    videoList.map(item=>{
                        return (
                            <div className='video-wrapper'>
                                <h3>{item.title}</h3>
                                <iframe
                                    id="inlineFrameExample"
                                    title="Inline Frame Example"
                                    width="99%"
                                    height="500"
                                    src={item.videoUrl}l>
                                </iframe>
                                <div className={isHideText && item.intro.length > 75 ? 'intro-text hide-text':'intro-text'}>
                                    {item.intro}

                                </div>
                                {
                                    item.intro.length > 75 && <div className='seeMoreBtn-wrapper'>
                                        <button
                                            className='seeMoreBtn'
                                            onClick={()=>setIsHideText(!isHideText)}>{isHideText ? '查看更多':'查看更少'}</button>
                                    </div>
                                }


                            </div>
                        )
                    })
                }
            </div>
            <div className="layout SideContainer"></div>
            <div className="layout footer">
                <div>
                    <h3 className='about'>關於我們</h3>
                    <div className="service-wrapper">
                        <a href="">廣告合作</a>
                        <a href="">服務條款及隱私權政策</a>
                        <a href="">聯絡我們</a>
                        <div>
                            <InstagramOutlined />
                            <FacebookOutlined />
                            <YoutubeOutlined />
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    @_bball_vision 籃球視界 版權所有
                </div>
            </div>
        </div>

    </>
  )
}

export default App
