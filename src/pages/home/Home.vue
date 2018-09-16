<template>
  <div id="root">
    <div>
      <header class="Sticky AppHeader">
        <div class="AppHeader-inner">
          <a href="#">a</a>
          <nav class="AppHeader-nav">
            <a href="#" class="AppHeader-navItem is-active">首页</a>
            <a href="#" class="AppHeader-navItem is-active">发现</a>
            <a href="#" class="AppHeader-navItem is-active">话题</a>
          </nav>
          <div class="SearchBar">
            <div class="SearchBar-toolWrapper">
              <from class="SearchBar-tool">
                <div>
                  <div class="Popover">
                    <div class="SearchBar-input Input-wrapper Input-wrapper--grey">
                      <input type="text" maxlength="100" autocomplete="off" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-activedescendant="AutoComplete2-topSearch--1" id="Popover1-toggle" aria-haspopup="true" aria-owns="Popover1-content" class="Input" placeholder="英雄联盟中国赢韩国夺金" value="">
                      <div class="Input-after">
                        <button aria-label="搜索" type="button" class="Button SearchBar-searchIcon Button--primary"><svg viewBox="0 0 16 16" class="Icon Icon--search" width="16" height="16" aria-hidden="true" style="height: 16px; width: 16px;"><title></title><g><path d="M12.054 10.864c.887-1.14 1.42-2.57 1.42-4.127C13.474 3.017 10.457 0 6.737 0S0 3.016 0 6.737c0 3.72 3.016 6.737 6.737 6.737 1.556 0 2.985-.533 4.127-1.42l3.103 3.104c.765.46 1.705-.37 1.19-1.19l-3.103-3.104zm-5.317.925c-2.786 0-5.053-2.267-5.053-5.053S3.95 1.684 6.737 1.684 11.79 3.95 11.79 6.737 9.522 11.79 6.736 11.79z"></path></g></svg></button></div>
                    </div>
                  </div>
                </div>
              </from>
            </div>
            <button type="button" class="Button QuestionAskButton SearchBar-askButton Button--primary Button--blue">提问</button>
          </div>
          <div class="AppHeader-userInfo">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </header>
    </div>
    <main role="main" class="App-main">
      <div class="Topstory">
        <div class="Topstory-container">
          <div class="Topstory-mainColumn">
            <div class="Card">
              <div class="TopstoryHeader">
                <div class="TopstoryHeader-nav">
                  <button type="button" class="Button TopstoryHeader-navItem Button--plain"><svg width="16" height="16" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="Icon Icon--question" aria-hidden="true" style="height: 16px; width: 16px;"><title></title><g><g transform="translate(-3 -3)" fill="#8590A6" fill-rule="evenodd">     <path d="M3.833 6.356c0-1.66 1.334-3.007 2.993-3.007h9.348c1.653 0 2.993 1.338 2.993 3.006v8.498c0 1.66-1.266 3.467-2.812 4.03l-1.09.396c-2.08.757-5.447.76-7.53 0l-1.09-.396c-1.553-.565-2.812-2.363-2.812-4.03V6.356zm1.643.67v7.492c0 1.1.84 2.314 1.873 2.697l2.277.844c1.035.383 2.712.383 3.746 0l2.278-.845c1.036-.384 1.874-1.59 1.874-2.697V7.026c0-1.1-.897-2.003-2.003-2.003H7.48c-1.118 0-2.004.897-2.004 2.003z"></path>     <path d="M13.012 11.46l-.422.29c-.232.177-.433.53-.433.53s-.08.134-.11.398v.16h-1.63v-.24c.02-.555.11-.86.343-1.13.364-.422 1.168-.935 1.202-.956.114-.086.212-.184.284-.288.17-.23.244-.412.244-.59 0-.25-.074-.478-.22-.682-.143-.197-.41-.296-.798-.296-.385 0-.648.12-.806.368-.162.254-.243.523-.243.796l-.005.23-1.656-.003.003-.23c.043-1.007.406-1.732 1.078-2.155.424-.27 1.113-.396 1.657-.406.873.01 1.39.193 1.923.575.54.387.815.965.815 1.72 0 .422-.135.82-.4 1.18-.14.193-.442.434-.826.73z"></path>     <ellipse cx="11.226" cy="14.791" rx="1.095" ry="1.116"></ellipse>   </g></g></svg>提问</button>
                  <a href="#" target="_blank" title="回答" class="TopstoryHeader-navItem"><svg width="16" height="16" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg" class="Icon Icon--paper" aria-hidden="true" style="height: 16px; width: 16px;"><title></title><g><g fill="#8590A6" fill-rule="evenodd">     <path d="M.833 4.35c0-2.21 1.79-4 4.01-4h7.315c2.214 0 4.01 1.79 4.01 4v8.743c0 2.21-1.79 4-4.01 4H4.842c-2.214 0-4.01-1.792-4.01-4V4.35zm1.643-.32v9.383c0 1.106.897 2.006 2.003 2.006h8.04c1.118 0 2.004-.9 2.004-2.007V4.03c0-1.107-.897-2.007-2.003-2.007H4.48c-1.118 0-2.004.898-2.004 2.006z"></path><path d="M4.667 4.814h7.666v1.674H4.667V4.814zm0 2.79h7.666V9.28H4.667V7.604zm0 2.79h4.928v1.676H4.667v-1.675z"></path>   </g></g></svg>回答</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" title="写文章" class="TopstoryHeader-navItem TopstoryHeader-navItemArticle"><svg width="16" height="16" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" class="Icon Icon--write" aria-hidden="true" style="height: 16px; width: 16px;"><title></title><g><g fill="none" fill-rule="evenodd">     <path d="M9.595 2.023H4.842c-2.22 0-4.01 1.793-4.01 4.005v7.62c0 2.21 1.796 4.003 4.01 4.003h7.316c2.22 0 4.01-1.792 4.01-4.003v-7.11.51L14.523 8.72v4.253c0 1.66-1.336 3.004-3.01 3.004h-6.03c-1.66 0-3.008-1.338-3.008-3.004V6.7c0-1.657 1.336-3.002 3.01-3.002h2.467L9.595 2.03v-.007z" fill="#8590A6"></path>     <path d="M6.372 11.08c-.185-.915.2-2.238.85-2.888l6.616-6.616c.565-.565 1.472-.567 2.038 0 .56.56.56 1.477 0 2.038L9.258 10.23c-.652.65-1.975 1.034-2.888.85z" stroke="#8590A6" stroke-width="1.5"></path>     <path fill="#8590A6" d="M13.04 2.088l2.324 2.324-.987.986-2.323-2.324z"></path>   </g></g></svg>写文章</a>
                  <button type="button" class="Button TopstoryHeader-navItem Button--plain" data-za-detail-view-path-module="ToolBar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="TopstoryHeader-pinIcon"><title></title><g><path d="M12.63 2.02V0h1.35v2.02H16v1.35h-2.02V5.4h-1.35V3.36H10.6V2.02h2.03zm-.17 4.9h1.7v4.76c0 1.5-.17 2.05-.46 2.6-.3.55-.73.98-1.28 1.27-.54.3-1.1.45-2.6.45h-5.5c-1.5 0-2.05-.16-2.6-.45-.55-.3-.98-.72-1.27-1.27-.3-.55-.45-1.1-.45-2.6v-5.5c0-1.5.16-2.06.45-2.6.3-.55.72-.98 1.27-1.28.55-.3 1.1-.45 2.6-.45H9.1v1.7H4.3c-1.12 0-1.46.05-1.8.24-.26.1-.45.3-.58.55-.2.35-.26.7-.26 1.8v5.5c0 1.13.07 1.47.26 1.8.13.27.32.46.58.6.34.18.68.25 1.8.25h5.5c1.12 0 1.46-.06 1.8-.25.27-.13.46-.32.6-.58.18-.34.24-.68.24-1.8V6.9zM8.6 6.7c.7-.16 1.45.06 1.98.6.83.83.83 2.2 0 3.04l-.03.03c-.84.85-2.2.85-3.04 0l-1.92-2c-.25-.24-.64-.24-.88 0l-.04.04c-.25.28-.25.7 0 .95.15.16.37.22.57.17.4-.1.82.18.9.58.1.4-.16.82-.57.9-.7.17-1.46-.04-1.98-.58-.83-.85-.83-2.2 0-3.06l.03-.02c.86-.85 2.2-.85 3.05 0L8.6 9.3c.24.25.63.25.87 0l.03-.02c.25-.26.25-.67 0-.93-.16-.15-.37-.2-.58-.17-.4.1-.8-.16-.9-.57-.1-.4.16-.8.57-.9z"></path></g></svg>写想法</button>
                </div>
                <a href="#" class="TopstoryHeader-rightItem" title="草稿">草稿</a>
              </div>
            </div>
            <div class="TopstoryMain"></div>
          </div>
          <div class="GlobalSideBar"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  .TopstoryHeader-navItem+.TopstoryHeader-navItem{
    margin-left: 40px;
  }
  .Button--link,
  .Button--plain{
    height: auto;
    padding: 0;
    line-height: inherit;
    background-color: transparent;
    border: none;
    border-radius: 0;
  }
  .TopstoryHeader-navItem{
    display: inline-block;
    transition: color .2s ease-in;
    font-size: 16px;
    color: #1a1a1a;
  }
  button {
    padding: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .Button {
    display: inline-block;
    padding: 0 16px;
    font-size: 14px;
    line-height: 32px;
    color: #8590a6;
    text-align: center;
    cursor: pointer;
    background: none;
    border: 1px solid;
    border-radius: 3px;
  }
  .AppHeader {
    position: relative;
    min-width: 1032px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
    background-clip: content-box;
    .AppHeader-inner {
      position: relative;
      display: flex;
      width: 1000px;
      height: 52px;
      padding: 0 16px;
      margin: 0 auto;
      align-items: center;
      a {
        color: inherit;
        text-decoration: none;
      }
      .AppHeader-nav {
        display: flex;
        justify-content: space-between;
        height: 30px;
        margin-right: 18px;
        margin-left: 27px;
        color: #999;
        .AppHeader-navItem {
          padding: 0 15px;
          font-size: 15px;
          line-height: 30px;
          &:first-child {
            padding-left: 0;
            color: #444;
          }
        }
      }
      .SearchBar {
        display: flex;
        .SearchBar-toolWrapper {
          position: relative;
          z-index: 104;
          width: 326px;
          .SearchBar-tool {
            position: relative;
            float: left;
            overflow: hidden;
            .Popover {
              position: relative;
              display: block;
              .Input-wrapper {
                position: relative;
                display: flex;
                height: 34px;
                width: 326px;
                padding: 4px 10px;
                padding-left: 16px;
                border: 1px solid #ebebeb;
                border-radius: 3px;
                box-sizing: border-box;
                background: #f6f6f6;
                .Input{
                  flex: 1;
                  padding: 0;
                  overflow: hidden;
                  height: 24px;
                  line-height: 24px;
                  font-family: inherit;
                  font-weight: inherit;
                  background: transparent;
                  border: none;
                  outline: none;
                  resize: none;
                  color: #1a1a1a;
                }
                .Input-after{
                  position: absolute;
                  top: 50%;
                  right: 10px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  margin: auto;
                  .SearchBar-searchIcon{
                    display: inline-block;
                    position: absolute;
                    right: -11px;
                    top: -17px;
                    bottom: -17px;
                    background: transparent;
                    border: transparent;
                    padding: 0 12px;
                    border-bottom-left-radius: 0;
                    border-top-left-radius: 0;
                    line-height: 32px;
                    font-size: 14px;
                    text-align: center;
                    color: #8590a6;
                    cursor: pointer;
                    border-radius: 3px;
                    .Icon{
                      vertical-align: text-bottom;
                      fill: currentColor;
                    }
                  }
                }
              }
            }
            form {
              display: block;
              margin-top: 0em;
            }
          }
        }
        .SearchBar-askButton{
          display: inline-block;
          z-index: 103;
          padding: 0 14px;
          margin-left: 16px;
          line-height: 30px;
          border-radius: 3px;
          background-color: #0084ff;
          color: #fff;
          font-size: 14px;
          text-align: center;
          cursor: pointer;
        }
      }
      .AppHeader-userInfo{
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
    }
  }
  .App-main{
    display: block;
    .Topstory-container{
      display: flex;
      align-items: flex-start;
      position: relative;
      width: 1000px;
      padding: 0 16px;
      margin: 10px auto;
      background: red;
      .Topstory-mainColumn{
        margin-right: 10px;
        .Card{
          margin-bottom: 10px;
          background: #fff;
          overflow: hidden;
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(26,26,26,.1);
          box-sizing: border-box;
          .TopstoryHeader{
            display: flex;
            justify-content: space-between;
            line-height: 58px;
            padding: 0 20px;
            .TopstoryHeader-rightItem{
              color: #8590a6;
            }
            a{
              text-decoration: none;
            }
          }
        }
        .TopstoryMain{
          width: 694px;
          padding-bottom: 20px;
          background: blue;
        }
      }
    }
  }
</style>
