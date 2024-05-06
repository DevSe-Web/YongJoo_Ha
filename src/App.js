import chevron_right from './image/chevron_right.png'
import comment from './image/comment.png'
import css from './image/css.png'
import desktop from './image/desktop_windows.png'
import emoji from './image/emoji_people.png'
import home from './image/home.png'
import html_icon from './image/html_icon.png'
import javascript from './image/javascript.png'
import language from './image/language.png'
import polymer from './image/polymer.png'
import psychology from './image/psychology.png'
import myPicture from './image/myPicture.jpg'
import search from './image/search.png'
import smart_toy from './image/smart_toy.png'
import smartphone from './image/smartphone.png'
import three_point from './image/three_point.png'
import web_asset from './image/web_asset.png'
import web from './image/web.png'
import java_icon from './image/java_icon.png'
import vsc_icon from './image/vsc_icon.png'
import android_icon from './image/Android_icon.png'
import sql_icon from './image/sql_icon.png'
import react_icon from './image/react_icon.png'
import css_icon from './image/css_icon.png'
import intellij_icon from './image/intellij_icon.jpg'
import javascript_icon from './image/javascript_icon.png'

import './MyBlog.css'

function App() {
    return (
        <div style={{ display: 'flex' }}>
            {/* leftVar */}
            <div className="leftVar">
                {/* picture */}
                <div className="profile">
                    <img src={myPicture} height="180px" width="150px" alt='증사' />
                </div>

                {/* blog name, name */}
                <div className="myname">
                    <span class="bname">
                        Yong Dev
                        <img src={psychology} alt='블로그 아이콘' />
                    </span>
                    <span className="name">용주</span>
                </div>

                {/* home, search, 방명록 */}
                <div className="sidebar_menu">
                    <ul className="sidebar_ul">
                        <li className="sidebar_li">
                            <div>
                                <a href="#"><img src={home} className="icon" alt='home' /></a>
                            </div>

                        </li>
                        <li className="sidebar_li">
                            <div>
                                <a href="#"><img src={search} className="icon" alt='search' /></a>
                            </div>

                        </li>
                        <li className="sidebar_li">
                            <div>
                                <a href="#"><img src={comment} className="icon" alt='comment' /></a>
                            </div>

                        </li>
                    </ul>
                </div>

                <hr />

                {/* 분류, 게시글 만들 때마다 하나씩 자동으로 생기게 만들기 */}
                <ul>
                    {/* 전체보기(ROOT) */}
                    <li className="root">
                        <a href="#">ROOT</a>
                    </li>

                    <hr />

                    <li className="category">
                        <div><img src={three_point} alt='점점점' /></div>
                        <div>&nbsp;Programming</div>
                    </li>
                    <li className="container">
                        <div className="hori">
                            <span className="container_text">Web</span>
                        </div>
                        <ul>
                            <li className="text">
                                <a href="#">&nbsp;HTML</a>
                            </li>
                            <li className="text">
                                <a href="#">&nbsp;CSS</a>
                            </li>
                        </ul>
                    </li>

                    <li className="container">
                        <div className="hori">
                            <span className="container_text">App</span>
                        </div>
                        <ul>
                            <li className="text">
                                <a href="#">&nbsp;Android</a>
                            </li>
                        </ul>
                    </li>

                    <li className="container">
                        <div className="hori">
                            <span className="container_text">Language</span>
                        </div>
                        <ul>
                            <li className="text">
                                <a href="#">&nbsp;C</a>
                            </li>
                            <li className="text">
                                <a href="#">&nbsp;Java</a>
                            </li>
                            <li className="text">
                                <a href="#">&nbsp;Javascript</a>
                            </li>
                        </ul>
                    </li>

                    <hr />

                    <li className="category">
                        <div><img src={three_point} alt='점점점' /></div>
                        <div>&nbsp;Data</div>
                    </li>
                    <li className="container">
                        <div className="hori">
                            <span className="container_text">DBMS</span>
                        </div>
                        <ul>
                            <li className="text">
                                <a href="#">&nbsp;Oracle SQL</a>
                            </li>
                        </ul>
                    </li>

                    <hr />

                    <li className="category">
                        <div><img src={three_point} alt='점점점' /></div>
                        <div>&nbsp;Dev Kit</div>
                    </li>
                    <li className="container">
                        <div className="hori">
                            <span className="container_text">IDE</span>
                        </div>
                        <ul>
                            <li className="text">
                                <a href="#">&nbsp;VSCode</a>
                            </li>
                            <li className="text">
                                <a href="#">&nbsp;IntelliJ</a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>

            {/* main */}
            <div className="main">
                {/* header */}
                <div className="header">
                    <div className='main_menu'>
                        <div>
                            Develop
                        </div>
                        <div>
                            DevOps
                        </div>
                        <div>
                            Devkit
                        </div>
                    </div>
                    <div>
                        <span className="mh_bname">
                            Yong Dev
                            <img src={psychology} alt='블로그 아이콘' />
                        </span>
                    </div>
                    <div>
                        <div>
                            <img src={search} alt='검색' className='mh_icon' />
                        </div>
                    </div>
                </div>

                {/* Who am I? */}
                <div className='introduce_M'>
                    <div className='intr_picture'>
                        <img src={myPicture} alt='내사진'></img>
                    </div>

                    <div className='intr_information'>
                        <div>
                            adw
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                {/* 사용하는 언어 */}
                <div className='uselanguage'>
                    {/* What I use */}
                    <div className='introduce_L'>
                        <span>What I use</span>
                    </div>


                    {/* 사용하는 언어, IDE 등 */}
                    {/* <java, javascript, html, VSCode, Oracle SQL */}
                    <div className='use'> {/* 패딩주고 */}
                        {/* flex나 grid줘서 정렬.
                    사진 밑에다 이름 ㄱ */}

                        <div className='item'>
                            <img src={html_icon} alt='html'></img>
                            <span>HTML</span>
                        </div>

                        <div className='item'>
                        <img src={css_icon} alt='CSS'></img>
                            <span>CSS</span>
                        </div>

                        <div className='item'>
                        <img src={javascript_icon} alt='Javascript'></img>
                            <span>Javascript</span>
                        </div>

                        <div className='item'>
                        <img src={java_icon} alt='Java'></img>
                            <span>Java</span>
                        </div>

                        <div className='item'>
                        <img src={react_icon} alt='React'></img>
                            <span>React</span>
                        </div>

                        <div className='item'>
                        <img src={sql_icon} alt='Oracle SQL'></img>
                            <span>Oracle SQL</span>
                        </div>

                        <div className='item'>
                        <img src={android_icon} alt='Android Studio'></img>
                            <span>Android Studio</span>
                        </div>

                        <div className='item'>
                        <img src={vsc_icon} alt='VSCode'></img>
                            <span>VSCode</span>
                        </div>

                        <div className='item'>
                        <img src={intellij_icon} alt='IntelliJ'></img>
                            <span>IntelliJ</span>
                        </div>
                    </div>

                </div>

                {/* <!-- 최신 글 --> */}
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
