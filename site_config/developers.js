export default {
  'en-us': {
    sidemenu: [
      {
        title: 'Developers',
        children: [
          {
            title: 'members',
            link: '/en-us/docs/developers/developers_dev.html',
          },
        ],
      },
    ],
    barText: 'Team Members',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '大标题',
        children: [
          {
            title: '示例1',
            link: '/zh-cn/docs/demo1.html',
          },
          {
            title: '示例2',
            link: '/zh-cn/docs/demo2.html',
          },
          {
            title: '目录',
            opened: true,
            children: [
              {
                title: '示例3',
                link: '/zh-cn/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: '文档',
  },
};
