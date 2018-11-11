import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtBadge, AtButton } from 'taro-ui'
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
    return (
      <View className='index'>
        <Image
          style='width: 410px;height: 180px;background: #fff;'
          src={details[index].image}
        />
        <AtBadge>
          {skills.map(skill => (
            <AtButton type='secondary' size='small' key={skill}>
              {skill}
            </AtButton>
          ))}
        </AtBadge>
      </View>
    )
  }
}
