import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtProgress, AtCard, AtTabs, AtTabsPane } from 'taro-ui'
import skills from '../../skills'
import './index.css'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '开发技能'
  }
  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const tabList = [{ title: '语言' }, { title: '框架' }, { title: '工具' }]
    return (
      <View className='index'>
        <AtTabs
          current={this.state.current}
          tabList={tabList}
          onClick={this.handleClick.bind(this)}
        >
          <AtTabsPane current={this.state.current} index={0}>
            {skills[0].map(skill => (
              <AtCard extra={skill.extra} title={skill.title} key={skill.title}>
                <AtProgress
                  percent={`${skill.percent}`}
                  status={skill.status}
                  color={skill.color}
                />
              </AtCard>
            ))}
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            {skills[1].map(skill => (
              <AtCard extra={skill.extra} title={skill.title} key={skill.title}>
                <AtProgress
                  percent={`${skill.percent}`}
                  status={skill.status}
                  color={skill.color}
                />
              </AtCard>
            ))}
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            {skills[2].map(skill => (
              <AtCard extra={skill.extra} title={skill.title} key={skill.title}>
                <AtProgress
                  percent={`${skill.percent}`}
                  status={skill.status}
                  color={skill.color}
                />
              </AtCard>
            ))}
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
