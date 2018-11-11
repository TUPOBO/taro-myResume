import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtBadge, AtTag, AtTimeline } from 'taro-ui'
import details from '../../details'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      id: 0
    }
  }

  componentWillMount() {
    const id = this.$router.params.id
    this.setState({ id })
  }

  componentDidMount() {
    Taro.setNavigationBarTitle({
      title: details[this.state.id].title
    })
  }

  render() {
    const index = +this.state.id
    const skills = details[index].skills
    const content = details[index].content
    return (
      <View className='index'>
        <View className='image'>
          <Image
            style='width: 410px;height: 180px;background: #fff;'
            src={details[index].image}
          />
        </View>
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
        <View className='text'>
          <Text>{content}</Text>
        </View>
        <AtTimeline
          items={[
            { title: '刷牙洗脸' },
            { title: '吃早餐' },
            { title: '上班' },
            { title: '睡觉' }
          ]}
        />
      </View>
    )
  }
}
