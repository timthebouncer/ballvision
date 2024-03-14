import { useState } from 'react'
import ballLogo from '/ballLogo-round.png'
import './App.css'
import {Input, Pagination} from 'antd';
import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import YoutubeOutlined from "@ant-design/icons/lib/icons/YoutubeOutlined";
import MenuFoldOutlined from "@ant-design/icons/lib/icons/MenuFoldOutlined";
import {videoList} from "./data/data";
import Search from "antd/es/input/Search.js";
import {FacebookFilled, InstagramFilled, YoutubeFilled} from "@ant-design/icons";
import MenuComponent from "./components/Menu.jsx";

function App() {
    const [isHideText, setIsHideText] = useState(true)

  return (
    <>
        <nav className='nav-wrapper'>
            <div className='title'>
                {/*<MenuFoldOutlined />*/}
                <MenuComponent />

                <div className='logo-wrapper'>
                    <a href="https://vitejs.dev" >
                        <img src={ballLogo} className="logo" alt="Vite logo" />
                    </a>
                    <h2>BBall_Vision</h2>
                </div>

            </div>
        </nav>
        <div className="header">
         <Search placeholder="請輸入想要觀看的球星影片關鍵字"  style={{ width: '20rem' }}  />
        </div>
        <div className="container">

            <div className="layout videoContainer">
                {
                    videoList.map(item=>{
                        return (
                            <div className='video-wrapper'>
                                {/*<h3>{item.title}</h3>*/}
                                <div className='iframe-wrapper'>
                                    <iframe
                                      style={{border:'none'}}
                                      id="inlineFrameExample"
                                      title="Inline Frame Example"
                                      width="100%"
                                      height="500"
                                      src={item.videoUrl}>
                                    </iframe>
                                </div>
                                <div className={isHideText && item.intro.length > 75 ? 'intro-text hide-text':'intro-text'}>
                                    {item.intro}

                                </div>
                                {/*{*/}
                                {/*    item.intro.length > 75 && <div className='seeMoreBtn-wrapper'>*/}
                                {/*        <button*/}
                                {/*            className='seeMoreBtn'*/}
                                {/*            onClick={()=>setIsHideText(!isHideText)}>{isHideText ? '查看更多':'查看更少'}</button>*/}
                                {/*    </div>*/}
                                {/*}*/}


                            </div>
                        )
                    })
                }
            </div>
            {/*<div className="layout SideContainer">*/}
            {/*    <div>推薦影片</div>*/}
            {/*    <div>熱門影片</div>*/}
            {/*</div>*/}
            <div className='pagination'>
                <Pagination defaultCurrent={1} total={videoList.length+20}  />
            </div>

        </div>
        <div className="footer">
            <div className='about'>
                <div className="footer-logo-wrapper">
                    <a href="https://vitejs.dev">
                        <img src={ballLogo} className="logo" alt="Vite logo" />
                    </a>
                    <h2 style={{color: '#000'}}>BBall_Vision</h2>
                </div>
                <div className="service-wrapper">
                    <div>
                        收錄精華以及您不知道的NBA大小事
                        <h4>籃球傳教士 | NBA消息 | 球員報導</h4>
                    </div>
                    <div className="service-info">
                        <a href="">廣告合作</a>
                        <a href="">服務條款及隱私權政策</a>
                        <a href="">聯絡我們</a>
                    </div>

                </div>
            </div>
            <div className='copyright'>
                <div>
                    @_bball_vision 籃球視界 版權所有
                </div>
                <div className='social-icon-wrapper'>
                    <FacebookFilled className='social-icon' />
                    <InstagramFilled className='social-icon' />
                    <YoutubeFilled className='social-icon' />
                </div>
            </div>
        </div>

    </>
  )
}

export default App
