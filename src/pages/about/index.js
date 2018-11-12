import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtButton, AtFloatLayout, AtTimeline } from 'taro-ui'
import './index.css'

const Github = 'https://github.com/TUPOBO'
const Resume = ''
export default class Index extends Component {
  config = {
    navigationBarTitleText: '个人简历'
  }

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  componentWillMount() {
    wx.showShareMenu({
      withShareTicket: true
    })
  }
  onClick = () => {
    this.setState(
      {
        show: true
      },
      () => {
        console.log(this.state.show)
      }
    )
  }

  onClose = () => {
    this.setState({
      show: false
    })
  }

  handleConnect = () => {
    Taro.makePhoneCall({ phoneNumber: '18795550557' })
  }

  handleCopyResume = () => {
    this.copyUrl(Resume)
  }

  handleCopyGithub = () => {
    this.copyUrl(Github)
  }

  copyUrl = url => {
    Taro.setClipboardData({
      data: url
    })
  }

  render() {
    return (
      <View className='index'>
        <View onClick={this.onClick} className='container'>
          <Image src='/images/avator/man.png' mode='aspectFit' />
        </View>
        <Text className='text'>点击头像查看个人简介</Text>

        <AtFloatLayout
          isOpened={this.state.show}
          title='个人简介'
          onClose={this.onClose}
        >
          <View className='lists'>
            <AtTimeline
              items={[
                { title: '姓名：刘波' },
                { title: '出生年月：1992.04.15' },
                { title: Github },
                { title: '微信：lb87309356' },
                { title: '手机：18795558930' },
                {
                  title: `自我介绍：Udacity前端纳米学位在线助教，熟练掌握各项前端开发技能。
                                  具有良好的沟通能力，高度的责任感，较强的自学能力和良好的英语阅读能力。`
                }
              ]}
            />
          </View>
          <View className='button'>
            <AtButton
              size='small'
              type='secondary'
              onClick={this.handleCopyResume}
            >
              网页版简历
            </AtButton>
            <AtButton
              size='small'
              type='secondary'
              onClick={this.handleCopyGithub}
            >
              GitHub
            </AtButton>
            <AtButton
              size='small'
              type='secondary'
              onClick={this.handleConnect}
            >
              联系我
            </AtButton>
          </View>
        </AtFloatLayout>
      </View>
    )
  }
}
