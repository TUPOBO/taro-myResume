const details = [
  {
    id: 0,
    title: '弹珠游戏',
    image: '/images/details/ball.jpg',
    skills: ['JavaScript', 'Canvas', '面向对象'],
    content: `本项目使用原生JavaScript和HTML5的Canvas，利用面向对象的原理实现了一个简易的弹珠游戏。该游戏实现了游戏开始界面，游戏暂停和不同级别的关卡
    `,
    feathers: [
      {
        title: '开始菜单',
        icon: 'check-circle'
      },
      {
        title: '游戏暂停',
        icon: 'check-circle'
      },
      {
        title: '碰撞检测',
        icon: 'check-circle'
      },
      {
        title: '游戏关卡',
        icon: 'check-circle'
      },
      {
        title: '游戏结束',
        icon: 'check-circle'
      }
    ],
    gitHub: 'https://codesandbox.io/s/3zv7pj0v5'
  },
  {
    id: 1,
    title: '青蛙跳河',
    image: '/images/details/frog.jpg',
    skills: ['JavaScript', 'Canvas', '面向对象'],
    content: `本项目为Udacity前端进阶纳米学位的实战项目之一，利用面向对象原理实现了简单的青蛙跳河游戏
    `,
    feathers: [
      {
        title: '人物移动',
        icon: 'check-circle'
      },
      {
        title: '游戏重置',
        icon: 'check-circle'
      },
      {
        title: '碰撞检测',
        icon: 'check-circle'
      },
      {
        title: '重置改变虫子速度',
        icon: 'check-circle'
      }
    ],
    gitHub: 'https://github.com/TUPOBO/Classic-Arcade-Game-Clone'
  },

  {
    id: 2,
    title: '宠物领养',
    image: '/images/details/dog.jpg',
    skills: ['React', 'Redux', 'Reach Router', 'Parcel', 'Emotion.js'],
    content: `本项目使用parcels、React和Reach Router等技术，利用petFinder的API，实现了一个宠物收养网站。该项目还涉及到了Jest测试、选择性加载组件等React生态圈内的技术`,
    feathers: [
      {
        title: '点击放大镜，旋转速度加倍',
        icon: 'check-circle'
      },
      {
        title: '实时查询宠物收养信息',
        icon: 'check-circle'
      },
      {
        title: '利用React中Portals实现模态框',
        icon: 'check-circle'
      },
      {
        title: '使用Jest测试React',
        icon: 'check-circle'
      },
      {
        title: '利用React-Redux实现状态管理',
        icon: 'check-circle'
      },
      {
        title: '可选择性的加载组件提高网站性能',
        icon: 'check-circle'
      },
      {
        title: '使用Parcel作为打包工具',
        icon: 'check-circle'
      }
    ],
    gitHub: 'https://github.com/TUPOBO/master-complete-react-v4'
  },
  {
    id: 3,
    title: '共享单车管理后台',
    image: '/images/details/bike.jpg',
    skills: [
      'React',
      'Redux',
      'React-Router',
      'Mock',
      'Antd',
      'Echart',
      'BMap',
      'webpack'
    ],
    content: `本项目使用了React和Antd框架，利用Mock进行模拟API调用，实现了共享单车管理后台。`,
    feathers: [
      {
        title: '了解并应用Antd框架的常用组件',
        icon: 'check-circle'
      },
      {
        title: '利用Echart绘制图表',
        icon: 'check-circle'
      },
      {
        title: '利用百度地图实现共享单车区域图',
        icon: 'check-circle'
      },
      {
        title: '实现角色的增删该查',
        icon: 'check-circle'
      }
    ],
    gitHub: 'https://github.com/TUPOBO/React-bike-manager'
  },
  {
    id: 4,
    title: '个人博客',
    image: '/images/details/blog.jpg',
    skills: ['React', 'Gatsby', 'Surge'],
    content: '利用Gatsby静态网页生成器实现个人博客',
    feathers: [
      {
        title: '渲染MarkDown',
        icon: 'check-circle'
      },
      {
        title: '搜索博客文章',
        icon: 'check-circle'
      },
      {
        title: '图片懒加载',
        icon: 'check-circle'
      }
    ],
    gitHub: 'https://tupobo.surge.sh/'
  },
  {
    id: 5,
    title: '简易计算器',
    image: '/images/details/jisuan.jpg',
    skills: ['Vue'],
    content: '利用vue实现简单的计算器',
    feathers: [
      {
        title: '加减乘除',
        icon: 'check-circle'
      }
    ],
    gitHub: 'hahaha'
  },
  {
    id: 6,
    title: 'TodoList',
    image: '/images/details/list.jpg',
    skills: ['Vue', 'Webpack'],
    content: '使用webpack，从零开始配置，实现vue版的TodoList',
    feathers: [
      {
        title: '增删待做事项',
        icon: 'check-circle'
      }
    ],
    gitHub: 'https://github.com/TUPOBO/mooc-vue-ssr'
  },
  {
    id: 7,
    title: '涂魄图书',
    image: '/images/details/book.jpg',
    skills: ['Vue', 'Mpvue', 'Koa2', 'MySQL', '豆瓣API', '腾讯云'],
    content: '该小程序利用mpvue框架，腾讯云服务器和豆瓣API实现了简易图书馆',
    feathers: [
      {
        title: '扫码添加图书',
        icon: 'check-circle'
      },
      {
        title: '图书轮播图',
        icon: 'check-circle'
      },
      {
        title: '点击放大图书缩略图',
        icon: 'check-circle'
      },
      {
        title: '评论功能（未上线）',
        icon: 'check-circle'
      }
    ],
    gitHub: 'hahaha'
  }
]

export default details
