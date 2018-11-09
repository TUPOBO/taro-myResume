import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtAccordion, AtList, AtListItem } from 'taro-ui'
import projects from '../../projects'
import './index.css'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '实战项目'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

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
          <SwiperItem>
            <Image
              style='height: 180px;width:400px;background: #fff;'
              src='../../images/banner/Vanilla-JS.png'
            />
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>
              <Image
                style='height: 180px;width:400px;background: #fff;'
                src='../../images/banner/react.png'
              />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>
              <Image
                style='height: 180px;width:400px;background: #fff;'
                src='../../images/banner/vue.png'
              />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-4'>
              <Image
                style='height: 180px;width:400px;background: #fff;'
                src='../../images/banner/xcx.jpg'
              />
            </View>
          </SwiperItem>
        </Swiper>
        {projects.map(item => (
          <AtAccordion open key={item.title} title={item.title}>
            <AtList>
              {item.projects.map(project => (
                <AtListItem
                  key={project.id}
                  title={project.title}
                  arrow='right'
                  thumb={project.thumb}
                />
              ))}
            </AtList>
          </AtAccordion>
        ))}
      </View>
    )
  }
}
