<template>
  <div class="SignFlowHomepage">
    <div class="SignFlowHomepage-content">
      <div class="Card SignContainer-content">
        <div class="SignFlowHeader" style="padding-bottom: 5px">
          <div class="SignFlowHeader-slogen">
            企业内部交流平台
          </div>
        </div>
        <div class="SignContainer-inner">
          <div class="Register">
            <div>
              <div class="Register-content">
                <form>
                  <div class="SignFlow-account">
                    <div class="SignFlow-supportedCountriesSelectContainer">
                      <div class="Popover SignFlow-supportedCountriesSelect">
                        <button type="button" class="Button Select-button Select-plainButton Button--plain">中国 +86</button>
                      </div>
                    </div>
                    <span class="SignFlow-accountSeperator">&nbsp;</span>
                    <div class="SignFlowInput SignFlow-accountInputContainer">
                      <div class="SignFlow-accountInput Input-wrapper">
                        <input type="tel" value name="phoneNo" placeholder="手机号" class="Input">
                      </div>
                    </div>
                  </div>
                  <div class="Register-SMSInput">
                    <div class="SignFlow SignFlow-smsInputContainer">
                      <div class="SignFlowInput SignFlow-smsInput">
                        <div class="Input-wrapper">
                          <input type="text" value name="digits" class="Input" placeholder="输入6位短信验证码">
                        </div>
                        <button type="button" class="Button CountingDownButton SignFlow-smsInputButton Button--plain">获取短信验证码</button>
                      </div>
                    </div>
                    <div class="Register-smsBackUp">
                      <span>接受短信验证码</span>
                    </div>
                  </div>
                  <router-link to="/home">
                    <button type="submit" class="Button Register-submitButton Button--primary Button--blue">注册</button>
                  </router-link>
                </form>
                <div class="Register-footer">
                <span class="Register-declaration">
                  注册即代表同意
                  <a href="#">《隐藏政策》</a>
                </span>
                  <a href="#" class="Register-org">注册机构号</a>
                </div>
              </div>
            </div>
          </div>
          <div class="SignContainer-switch">
            已有账号？
            <span>登录</span>
          </div>
        </div>
      </div>
      <button type="button" class="Button SignFlowHomepage-downloadBtn">下载 APP</button>
    </div>
    <foot class="SignFlowHomepage-footer">
      <div class="ZhihuLinks">
        <a href="#" target="_blank" rel="noopener noreferrer">知乎专栏 ·</a>
        <a href="#" target="_blank" rel="noopener noreferrer">圆桌 ·</a>
        <a href="#" target="_blank" rel="noopener noreferrer">发现 ·</a>
        <a href="#" target="_blank" rel="noopener noreferrer">移动应用 ·</a>
        <a href="#" target="_blank" rel="noopener noreferrer">联系我们 ·</a>
        <a href="#" target="_blank" rel="noopener noreferrer">来知乎工作 ·</a>
        <a href="#" target="_blank" rel="noopener noreferrer">注册机构号</a>
      </div>
      <div class="ZhihuRights">
        <span>© 2018 知乎</span>
        <a target="_blank" ref="noopener noreferrer" href="#">京 ICP 证 110745 号</a>
        <span>
        京公网安备 11010802010035 号
        <a target="_blank" href="#" rel="noopener noreferrer">出版物经营许可证</a>
      </span>
      </div>
      <div class="ZhihuReports">
        <a target="_blank" rel="noopener noreferrer" href="#">侵权举报</a>
        <a target="_blank" rel="noopener noreferrer" href="#">网上有害信息举报专区</a>
        <a target="_blank" rel="noopener noreferrer" href="#">儿童色情信息举报专区</a>
        <span>违法和不良信息举报：010-82716601</span>
      </div>
      <div class="ZhihuIntegrity">
        <div>
          <a href="#">诚信网站示范企业</a>
        </div>
      </div>
    </foot>
  </div>
</template>

<script>
export default {
  name: 'Login-Home'
}
</script>

<style lang="scss" scoped>
  .SignFlowHomepage{
    overflow: auto;
    width: 100%;
    height: 100vh;
    padding-right: 15px;
    background-repeat: no-repeat;
    background-color: #b8e5f8;
    background-size: cover;
    .SignFlowHomepage-content{
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 2px;
      min-height: 688px;
      height: calc(100% - 42px);
      box-sizing: border-box;
      .Card{
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        box-sizing: border-box;
      }
      .SignContainer-content{
        width: 432px;
        margin: 0 auto;
        text-align: center;
        .SignFlowHeader{
          padding-top: 30px;
          .SignFlowHeader-slogen{
            margin-top: 15px;
            color: #0084ff;
            font-size: 22px;
          }
        }
        .SignContainer-inner{
          position: relative;
          .Register{
            .Register-content{
              padding: 0 40px 36px;
              font-size: 14px;
              form{
                display: block;
                margin-top: 0em;
                .SignFlow-account{
                  margin-top: 16px;
                  border-radius: 0;
                  border-bottom: 1px solid #ebebeb;
                  .SignFlow-supportedCountriesSelectContainer{
                    display: inline-block;
                    float: left;
                    transform: translateY(4px);
                    .Popover{
                      position: relative;
                      display: inline-block;
                      .Select-button{
                        color: #8590a6;
                      }
                      .Select-plainButton{
                        padding: 0;
                        border: 1px solid transparent;
                      }
                      .Select-button{
                        height: 40px;
                        line-height: 38px;
                        text-align: left;
                        box-sizing: border-box;
                        background: none;
                        outline: none;
                      }
                    }
                  }
                  .SignFlow-accountSeperator{
                    float: left;
                    width: 1px;
                    height: 22px;
                    margin: 24px 12px 0;
                    background: #ebebeb;
                    transform: translateY(-11px);
                  }
                  .SignFlow-accountInputContainer{
                    overflow: hidden;
                  }
                  .SignFlowInput{
                    position: relative;
                    .Input-wrapper{
                      position: relative;
                      display: flex;
                      width: 100%;
                      height: 48px;
                      padding: 0;
                      font-size: 14px;
                      color: #8590a6;
                      border: none;
                      box-sizing: border-box;
                      /*transform: background .2s,border .2s;*/
                      .Input{
                        height: 48px;
                        flex: 1;
                        padding: 0;
                        overflow: hidden;
                        font-family: inherit;
                        font-size: inherit;
                        font-weight: inherit;
                        background: transparent;
                        border: none;
                        outline: none;
                        resize: none;
                        color: #1a1a1a;
                        line-height: 24px;
                      }
                    }
                  }
                }
                .Register-SMSInput{
                  .SignFlow{
                    overflow: hidden;
                  }
                  .SignFlow-smsInputContainer{
                    position: relative;
                    margin-top: 12px;
                    .SignFlowInput{
                      width: auto;
                      position: relative;
                      .Input-wrapper{
                        position: relative;
                        display: flex;
                        width: 100%;
                        height: 48px;
                        padding: 0;
                        background: #fff;
                        font-size: 14px;
                        color: #8590a6;
                        border: none;
                        border-bottom: 1px solid #ebebeb;
                        border-radius: 0;
                        box-sizing: border-box;
                        transition: background .2s,border .2s;
                        .Input{
                          height: 48px;
                          line-height: 24px;
                          color: #1a1a1a;
                          flex: 1;
                          overflow: hidden;
                          font-family: inherit;
                          font-size: inherit;
                          font-weight: inherit;
                          background: transparent;
                          border: none;
                          outline: none;
                          resize: none;
                        }
                      }
                      button{
                        margin: 0;
                        padding: 0;
                        font: inherit;
                        color: inherit;
                        cursor: pointer;
                        background: none;
                        border: none;
                        outline: none;
                        /*appearance: none;*/
                      }
                      .SignFlow-smsInputButton{
                        position: absolute;
                        top: 24px;
                        right: 0;
                        padding: 4px 0;
                        color: #175199;
                        transform: translateY(-50%);
                      }
                      .Button--link,
                      .Button--plain{
                        height: auto;
                        line-height: inherit;
                        background-color: transparent;
                        border: none;
                        border-radius: 0;
                      }
                      .Button{
                        display: inline-block;
                        font-size: 14px;
                        text-align: center;
                        cursor: pointer;
                        background: none;
                        /*border: 1px solid;*/
                        /*border-radius: 3px;*/
                      }
                    }
                  }
                  .Register-smsBackUp{
                    padding-top: 12px;
                    height: 20px;
                    color: #8590a6;
                    text-align: right;
                    span{
                      display: inline-block;
                      cursor: pointer;
                    }
                  }
                }
                .Button--primary,
                .Button--blue{
                  color: #fff;
                  background-color: #0084ff;
                }
                .Register-submitButton{
                  width: 100%;
                  margin-top: 30px;
                  height: 36px;
                }
                .Button--blue{
                  border-color: #0084ff;
                }
                .Button{
                  display: inline-block;
                  padding: 0 16px;
                  font-size: 14px;
                  line-height: 32px;
                  text-align: center;
                  cursor: pointer;
                  border: 1px solid;
                  border-radius: 3px;
                }
              }
              .Register-footer{
                display: flex;
                justify-content: space-between;
                margin-top: 16px;
                line-height: 25px;
                .Register-declaration{
                  color: #8590a6;
                  a{
                    color: #8590a6;
                    text-decoration: none;
                  }
                }
                .Register-org{
                  color: #175199;
                  text-decoration: none;
                }
              }
            }
          }
          .SignContainer-switch{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            background-color: #f6f6f6;
            height: 58px;
            border-top: 1px solid #ebebeb;
            font-size: 16px;
            span{
              color: #175199;
              cursor: pointer;
            }
          }
        }
      }
      .SignFlowHomepage-downloadBtn{
        width: 432px;
        height: 42px;
        margin-top: 30px;
        background: #8590a6;
        border: none;
        color: #fff;
        cursor: pointer;
        border-radius: 3px;
        text-align: center;
      }
    }
    .SignFlowHomepage-footer{
      font-size: 12px;
      line-height: 21px;
      text-align: center;
      color: #fff;
      text-shadow: 0 1px 2px #999;
      a{
        color: inherit;
        text-decoration: none;
      }
    }
  }
</style>
