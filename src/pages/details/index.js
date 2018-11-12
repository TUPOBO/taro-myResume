import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtBadge, AtTag, AtTimeline, AtCard, AtButton } from 'taro-ui'
import details from '../../details'
import './index.css'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = { id: 0 }
  }

  componentWillMount() {
    const id = this.$router.params.id
    this.setState({ id })
    wx.showShareMenu({
      withShareTicket: true
    })
  }

  componentDidMount() {
    Taro.setNavigationBarTitle({
      title: details[this.state.id].title
    })
  }

  handleCopy = () => {
    let url = details[this.state.id].gitHub
    this.copyUrl(url)
  }

  copyUrl = url => {
    Taro.setClipboardData({ data: url })
  }

  render() {
    const index = +this.state.id
    const skills = details[index].skills
    const content = details[index].content
    const feathers = details[index].feathers
    return (
      <View className='index'>
        <View className='image'>
          <Image
            style='width: 410px;height: 180px;'
            src={details[index].image}
          />
        </View>

        <View className='card'>
          <AtCard title='项目简介' isFull>
            <View className='text'>
              <Text>{content}</Text>
            </View>
          </AtCard>
          <View className='border' />

          <AtCard title='项目技术' isFull>
            <AtBadge>
              <View className='tags'>
                {skills.map(skill => (
                  <View className='tag' key={skill}>
                    <AtTag name={skill} type='primary' circle>
                      <span>{skill}</span>
                    </AtTag>
                  </View>
                ))}
              </View>
            </AtBadge>
          </AtCard>
          <View className='border' />

          <AtCard title='项目功能' isFull>
            <AtTimeline items={feathers} />
            <View className='button'>
              <AtButton type='secondary' size='small' onClick={this.handleCopy}>
                查看源码并体验在线应用
              </AtButton>
            </View>
          </AtCard>
        </View>
      </View>
    )
  }
}
