import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import {
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
  AtDrawer,
  AtButton,
  AtFloatLayout,
  AtAvatar,
  AtToast
} from 'taro-ui'
import './index.css'
import Accordion from '../projects/Accordion'

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

  render() {
    return (
      <View className='index'>
        <View onClick={this.onClick} className='container'>
          <Image src='/images/avator/man.png' mode='aspectFit' />
        </View>
        <Text>路漫漫其修远兮</Text>
        <Text>吾将上下而求索</Text>
        <AtDrawer show={this.state.show} mask onClose={this.onClose} />
        <AtFloatLayout isOpened title='这是个标题' onClose={this.handleClose}>
          <Accordion />
        </AtFloatLayout>
        <AtToast isOpened text='点击头像查看个人信息' />
      </View>
    )
  }
}
