import Taro, { Component } from '@tarojs/taro'

import { AtToast } from 'taro-ui'

export default class Toast extends Component {
  render() {
    return <AtToast isOpened={this.props.open} text='网址已复制' />
  }
}
