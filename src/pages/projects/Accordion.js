import Taro, { Component } from '@tarojs/taro'
import { AtAccordion, AtList, AtListItem, View, AtToast } from 'taro-ui'
import { projects } from '../../projects'
import './index.css'

export default class Accordion extends Component {
  state = {
    show: false
  }
  handleNavigate = (e1, e2) => {
    if (+e2.currentTarget.dataset.id === 8) {
      this.setState({
        show: true
      })
    } else {
      Taro.navigateTo({
        url: `/pages/details/index?id=${e2.currentTarget.dataset.id}`
      })
      console.log(e2.currentTarget.dataset.id)
    }
  }
  render() {
    return projects.map((item, index) => (
      <View key={item.title} className='container'>
        <AtAccordion
          title={item.title}
          data-index={index}
          className={item.title}
          open={this.state.open}
        >
          <AtList>
            {item.projects.map(project => (
              <AtListItem
                onClick={this.handleNavigate}
                key={project.id}
                title={project.title}
                arrow='right'
                thumb={project.thumb}
                data-id={project.id}
              />
            ))}
          </AtList>
        </AtAccordion>
        <View className='border' />
        <AtToast isOpened={this.state.show} text='该项目就是此小程序' />
      </View>
    ))
  }
}
