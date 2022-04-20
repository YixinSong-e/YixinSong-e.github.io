import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: '开源产品品牌名称',
      briefIntroduction: '关于开源产品的简单介绍',
      buttons: [
        {
          text: '立即开始',
          link: '/zh-cn/docs/demo1.html',
          type: 'primary',
        },
        {
          text: '查看Github',
          link: '',
          type: 'normal',
        },
        {
          text: 'text',
          link: '',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: '开源产品的介绍',
      desc: '开源产品的简单介绍，提供一些该产品的优点、特性描述等',
      img: '/img/architecture.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '特性1',
          content: '特性1的简单概括',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '特性2',
          content: '特性2的简单概括',
        },
        {
          img: '/img/feature_service.png',
          title: '特性3',
          content: '特性3的简单概括',
        },
        {
          img: '/img/feature_hogh.png',
          title: '特性4',
          content: '特性4的简单概括',
        },
        {
          img: '/img/feature_runtime.png',
          title: '特性5',
          content: '特性5的简单概括',
        },
        {
          img: '/img/feature_maintenance.png',
          title: '特性6',
          content: '特性6的简单概括',
        },
      ],
    },
    start: {
      title: '快速开始',
      desc: '简单描述',
      img: '/img/quick_start.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/demo1.html',
      },
    },
    users: {
      title: '用户',
      desc: <span>简单描述</span>,
      list: [
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'DuVisor',
      briefIntroduction: 'A user-level hypervisor through delegated virtualization on RISC-V',
      buttons: [
        {
          text: 'What is DuVisor?',
          link: '/en-us/docs/Documentation/motivation.html',
          type: 'primary',
        },
        {
          text: 'Who are we?',
          link: '/en-us/docs/developers/developers_dev.html',
          type: 'normal',
        },
      ],
      buttons2:[
        {
          text: 'Why DuVisor?',
          link: '/en-us/docs/developers/developers_dev.html',
          type: 'n',
        },
      ],
    },
    introduction: {
      title: 'DuVisor',
      desc: 'A User-Level Hypervisor Through HU-Extension on RISC-V ',
      img: '/img/cover.jpeg',
    },
    
    features: {
      title: 'Why DuVisor',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'High Security',
          content: 'A deprivileged hypervisor eliminates the kernel’s attack surface introduced by virtualization. The one-to-one service model further enhances the isolation between VMs and the fault tolerance of the entire system.',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'Near-native Performance',
          content: 'Getting rid of redundant mode switching completely unleash the potential performance of virtualization. The integrated design further enhances the cooperation between modules to make the code more efficient.',
        },
        {
          img: '/img/feature_service.png',
          title: 'Agile Development',
          content: 'Benefit from the thriving software environment in user space, DuVisor is no longer restricted by the kernel development environment and can freely choose the programming language and existing libraries. The project currently uses Rust to ensure security and takes advantage of the powerful testing framework it provides to improve the quality of the project.',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'Flexible Operations and Maintenance',
          content: 'DuVisor can be upgraded without rebooting the host system. New features and functionalities can be deployed more quickly. Cloud services will have better fault tolerance benefiting from DuVisor\'s strong isolation.',
        }
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'some description text',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/demo1.html',
      },
    },
    users: {
      title: 'users',
      desc: <span>some description</span>,
      list: [
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
      ],
    },
  },
};
