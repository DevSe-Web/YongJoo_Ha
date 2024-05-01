import chevron_right from './image/chevron_right.png'
import comment from './image/comment.png'
import css from './image/css.png'
import desktop from './image/desktop_windows.png'
import emoji from './image/emoji_people.png'
import home from './image/home.png'
import html from './image/html_icon.png'
import javascript from './image/javascript.png'
import language from './image/language.png'
import polymer from './image/polymer.png'
import psychology from './image/psychology.png'
import ryan from './image/ryan.jpg'
import search from './image/search.png'
import smart_toy from './image/smart_toy.png'
import smartphone from './image/smartphone.png'
import three_point from './image/three_point.png'
import web_asset from './image/web_asset.png'
import web from './image/web.png'

import './MyBlog.css'

function App() {
  return (
    <div>
      <div>
        <div style={{ display: 'flex' }}>
          <div className="leftVar">
            <div className="profile">
              <img src= {ryan} height="120px" width="150px" alt="profile" />
            </div>

            <div className="myname">
              <span className="bname">
                Yong Dev
                <img src={psychology} alt="blog logo" />
              </span>
              <span className="name">용주</span>
            </div>

            <div className="sidebar_menu">
              <ul className="sidebar_ul">
                <li className="sidebar_li">
                  <div>
                    <img src={home} className="icon" alt="home" />
                  </div>
                </li>
                <li className="sidebar_li">
                  <div>
                    <img src={search} className="icon" alt="search" />
                  </div>
                </li>
                <li className="sidebar_li">
                  <div>
                    <img src={comment} className="icon" alt="comments" />
                  </div>
                </li>
              </ul>
            </div>

            <hr />

            <ul>
              <li className="root">
                <div>ROOT (0)</div>
              </li>

              <hr />

              <li className="category">
                <div>
                  <img src={three_point} alt="more" />
                  &nbsp;Programming
                </div>
              </li>
              <li className="container">
                <div className="hori">
                  <span className="container_text">Web</span>
                </div>
                <ul>
                  <li className="text">
                    <span> &nbsp;HTML</span>
                  </li>
                  <li className="text">
                    <span> &nbsp;CSS</span>
                  </li>
                </ul>
              </li>

              <li>
                <div className="hori">
                  <span className="container_text">App</span>
                </div>
                <ul>
                  <li className="text">
                    <span> &nbsp;Android</span>
                  </li>
                </ul>
              </li>

              <li>
                <div className="hori">
                  <span className="container_text">Language</span>
                </div>
                <ul>
                  <li className="text">
                    <span> &nbsp;C</span>
                  </li>
                  <li className="text">
                    <span> &nbsp;Java</span>
                  </li>
                  <li className="text">
                    <span> &nbsp;Javascript</span>
                  </li>
                </ul>
              </li>

              <hr />

              <li className="category">
                <div>
                  <img src={three_point} alt="more" />
                  &nbsp;Data
                </div>
              </li>
              <li>
                <div className="hori">
                  <span className="container_text">DBMS</span>
                </div>
                <ul>
                  <li className="text">
                    <span> &nbsp;Oracle SQL</span>
                  </li>
                </ul>
              </li>

              <hr />

              <li className="category">
                <div>
                  <img src={three_point} alt="more" />
                  &nbsp;Dev Kit
                </div>
              </li>
              <li>
                <div className="hori">
                  <span className="container_text">IDE</span>
                </div>
                <ul>
                  <li className="text">
                    <span> &nbsp;VSCode</span>
                  </li>
                  <li className="text">
                    <span> &nbsp;IntelliJ</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="header">
          <div>Develop</div>
          <div>DevOps</div>
          <div>Devkit</div>
          <div>
            <span className="bname">
              Yong Dev
              <img src={psychology} alt="블로그 아이콘" />
            </span>
          </div>
          <div>
            <div>
              <img src={search} className="icon" alt="돋보기" />
            </div>
          </div>
        </div>

        <div>
          <div>
            <span>What I use</span>
          </div>

          <div> {/* 여기에 "패딩주고" 주석이 있었으며, 실제 CSS나 스타일 객체로 구현해야 합니다. */}
            <div>
              {/* "java" */}
            </div>
            <div>
              {/* "javascript" */}
            </div>
            <div>
              {/* "html" */}
            </div>
            <div>
              {/* "VSCode" */}
            </div>
            <div>
              {/* "IntelliJ" */}
            </div>
            <div>
              {/* "Oracle SQL" */}
            </div>
          </div>
        </div>

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
