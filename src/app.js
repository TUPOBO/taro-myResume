import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.css'

class App extends Component {
  config = {
    pages: ['pages/about/index', 'pages/skills/index', 'pages/projects/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '简历',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/skills/index',
          text: 'Skills',
          iconPath: 'images/icons/skills.png',
          selectedIconPath: 'images/icons/skills-active.png'
        },
        {
          pagePath: 'pages/projects/index',
          text: 'Projects',
          iconPath: 'images/icons/projects.png',
          selectedIconPath: 'images/icons/projects-active.png'
        },
        {
          pagePath: 'pages/about/index',
          text: 'About',
          iconPath: 'images/icons/me.png',
          selectedIconPath: 'images/icons/me-active.png'
        }
      ]
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
