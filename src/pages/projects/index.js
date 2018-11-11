import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { swiperItem } from '../../projects'
import './index.css'
import Accordion from './Accordion'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '实战项目'
  }

  render() {
    return (
      <View className='index'>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#f56'
          circular
          indicatorDots
          autoplay
          style='height: 180px;'
        >
          {swiperItem.map(item => (
            <SwiperItem id={item.id} key={item.title} onClick={this.onClick}>
              <Image
                style='height: 180px;width:400px;background: #fff;'
                src={item.src}
              />
            </SwiperItem>
          ))}
        </Swiper>
        <Accordion />
      </View>
    )
  }
}
