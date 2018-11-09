import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtDrawer, AtButton, AtFloatLayout, AtAvatar } from 'taro-ui'
import './index.css'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '个人简历'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <AtButton type='primary'>
          <AtDrawer
            show={this.state.show}
            right
            mask
            onClose={this.onClose.bind(this)}
            items={['菜单1', '菜单2']}
          >
            aaa
          </AtDrawer>
        </AtButton>

        <AtAvatar image='https://jdc.jd.com/img/200' size='large' />
        <AtAvatar text='凹凸实验室' />
        <AtAvatar circle image='https://jdc.jd.com/img/200' />
        <AtAvatar circle text='凹凸实验室' />
      </View>
    )
  }
}
