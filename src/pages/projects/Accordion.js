import Taro, { Component } from '@tarojs/taro'
import { AtAccordion, AtList, AtListItem, View } from 'taro-ui'
import { projects } from '../../projects'
import './index.css'

export default class Accordion extends Component {
  handleNavigate = (e1, e2) => {
    Taro.navigateTo({
      url: `/pages/details/index?id=${e2.currentTarget.dataset.id}`
    })
    console.log(e2.currentTarget.dataset.id)
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
      </View>
    ))
  }
}
