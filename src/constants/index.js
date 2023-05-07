import {
  DollarOutlined,
  TeamOutlined,
  UserSwitchOutlined,
  ScheduleOutlined,
  ShoppingCartOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import ProfileTab from "../components/ProfileTab";
import PasswordTab from "../components/PasswordTab";
import NotificationTab from "../components/NotificationTab";
import IntegrationTab from "../components/IntegrationTab";
import BillingTab from "../components/BillingTab";

export const statistics = [
  {
    id: 1,
    title: "Bookings",
    statistics: 281,
    antdIcon: <ScheduleOutlined className="fs-24 text-primary" />,
    isHoverable: true,
    clickableCard: true,
    linkToRedirect: "/",
  },
  {
    id: 2,
    title: "Today's Users",
    statistics: "2,300",
    antdIcon: <UserSwitchOutlined className="fs-24 text-primary" />,
    isHoverable: true,
    clickableCard: true,
    linkToRedirect: "/",
  },
  {
    id: 3,
    title: "Revenue",
    statistics: "34k",
    antdIcon: <DollarOutlined className="fs-24 text-primary" />,
    isHoverable: true,
    clickableCard: true,
    linkToRedirect: "/",
  },
  {
    id: 4,
    title: "Followers",
    statistics: "+91",
    antdIcon: <TeamOutlined className="fs-24 text-primary" />,
    isHoverable: true,
    clickableCard: true,
    linkToRedirect: "/",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Project",
    dateTime: "02/10/2023 10:44AM",
  },
  {
    id: 2,
    title: "Project",
    dateTime: "02/10/2023 10:44AM",
  },
  {
    id: 3,
    title: "Project",
    dateTime: "02/10/2023 10:44AM",
  },
  {
    id: 4,
    title: "Project",
    dateTime: "02/10/2023 10:44AM",
  },
];

export const OrderOverviewData = [
  {
    title: <div className="m-0 text-bolder lh-20">$2400, Design changes</div>,
    description: <p className="text-black-light fs-12 m-0 pt-2">22 DEC 7:20 PMs</p>,
    status: "finish",
    icon: <UserOutlined />,
  },
  {
    title: <div className="m-0 text-bolder lh-20">New order #1832412</div>,
    description: <p className="text-black-light fs-12 m-0 pt-2">22 DEC 7:20 PMs</p>,
    status: "finish",
    icon: <SolutionOutlined />,
  },
  {
    title: <div className="m-0 text-bolder lh-20">Server payments for April</div>,
    description: <p className="text-black-light fs-12 m-0 pt-2">22 DEC 7:20 PMs</p>,
    status: "finish",
    icon: <ShoppingCartOutlined />,
  },
  {
    title: (
      <div className="m-0 text-bolder lh-20">New card added for order #4395133</div>
    ),
    description: <p className="text-black-light fs-12 m-0 pt-2">22 DEC 7:20 PMs</p>,
    status: "finish",
    icon: <CreditCardOutlined />,
  },
  {
    title: (
      <div className="m-0 text-bolder lh-20">New card added for order #4395133</div>
    ),
    description: <p className="text-black-light fs-12 m-0 pt-2">22 DEC 7:20 PMs</p>,
    status: "process",
    icon: <SmileOutlined />,
  },
];

export const ProfileData = [
  {
    id: 1,
    title: "Bookings",
    statistics: 281,
    antdIcon: <ScheduleOutlined className="fs-24 text-primary" />,
    isHoverable: true,
    clickableCard: true,
    linkToRedirect: "/",
  },
  {
    id: 2,
    title: "Today's Users",
    statistics: "2,300",
    antdIcon: <UserSwitchOutlined className="fs-24 text-primary" />,
    isHoverable: true,
    clickableCard: true,
    linkToRedirect: "/",
  },
  {
    id: 3,
    title: "Revenue",
    statistics: "34k",
    antdIcon: <DollarOutlined className="fs-24 text-primary" />,
    isHoverable: true,
    clickableCard: true,
    linkToRedirect: "/",
  },

];

export const profileImgCard = [
  {
    key:1,
    imgSrc:'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
    title:'Modern',
    description:'As Uber works through a huge amount of internal management turmoil.',
    rating:4,
  },
  {
    key:2,
    imgSrc:'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-2.b4e5397c9846645ba275.jpg',
    title:'Scandinavian',
    description:'Music is something that everyone has their own specific opinion about.',
    rating:2,
  },
  {
    key:3,
    imgSrc:'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-3.74d13fcbd3c631fc7908.jpg',
    title:'Minimalist',
    description:'Different people have different taste, and various types of music all of us.',
    rating:5,
  },
  {
    key:4,
    imgSrc:'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-4.5b448fd339a14695f6aa.jpeg',
    title:'Gothic',
    description:'Why would anyone pick blue over pink? Pink is obviously a better color.',
    rating:3,
  }
]

export const profileTabsitems = [
  {
    key: '1',
    label: `Profile`,
    children: <ProfileTab/>,
  },
  {
    key: '2',
    label: `Password`,
    children: <PasswordTab/>,
  },
  {
    key: '3',
    label: `Notification`,
    children: <NotificationTab/>,
  },
  {
    key: '4',
    label: `Integration`,
    children: <IntegrationTab/>,
  },
  {
    key: '5',
    label: `Billing`,
    children: <BillingTab/>,
  },
];

export const nationalizedLanguage = [
  {
    key: '1',
    value: 'english',
    label: `🇺🇸 English (US)`,
    name:'English (US)',
    flag:'🇺🇸'
  },
  {
    key: '2',
    value: 'chinese',
    label: `🇨🇳 中国人`,
    name:'中国人',
    flag:'🇨🇳'
  },
  {
    key: '3',
    value: 'japanese',
    label: `🇯🇵 日本`,
    name:'日本',
    flag:'🇯🇵'
  },
  {
    key: '4',
    value: 'korean',
    label: `🇰🇷 한국인`,
    name:'한국인',
    flag:'🇰🇷'
  },
];

export let ProjectTag = [
  {
      field: 'Somone mentions you',
      options: [
          {
              type: 'Email',
              selected: true
          },
          {
              type: 'Browser',
              selected: false
          },
          {
              type: 'App',
              selected: false
          }
      ]
  },

  {
      field: 'Somone replies to your message',
      options: [
          {
              type: 'Email',
              selected: true
          },
          {
              type: 'Browser',
              selected: false
          },
          {
              type: 'App',
              selected: false
          }
      ]
  },
  {
      field: 'Task status updated',
      options: [
          {
              type: 'Email',
              selected: true
          },
          {
              type: 'Browser',
              selected: false
          },
          {
              type: 'App',
              selected: false
          }
      ]
  },
  {
      field: 'Task assigned to you',
      options: [
          {
              type: 'Email',
              selected: true
          },
          {
              type: 'Browser',
              selected: false
          },
          {
              type: 'App',
              selected: false
          }
      ]
  }
]

export const SalesTag = [
  {
      field: 'New product',
      options: [
          {
              type: 'Email',
              selected: true
          },
          {
              type: 'Browser',
              selected: false
          },
          {
              type: 'App',
              selected: false
          }
      ]
  },
  {
      field: 'New order placed',
      options: [
          {
              type: 'Email',
              selected: true
          },
          {
              type: 'Browser',
              selected: false
          },
          {
              type: 'App',
              selected: false
          }
      ]
  },
]

export const GeneralTag  = [
  {
      field: 'News',
      options: [
          {
              type: 'Email',
              selected: true
          },
          {
              type: 'Browser',
              selected: false
          },
          {
              type: 'App',
              selected: false
          }
      ]
  },

  {
      field: 'Account Activity',
      options: [
          {
              type: 'Email',
              selected: true
          },
          {
              type: 'Browser',
              selected: false
          },
          {
              type: 'App',
              selected: false
          }
      ]
  },
  {
      field: 'New device used to sign in',
      options: [
          {
              type: 'Email',
              selected: true
          },
          {
              type: 'Browser',
              selected: false
          },
          {
              type: 'App',
              selected: false
          }
      ]
  },
  {
      field: 'Reminders',
      options: [
          {
              type: 'Email',
              selected: true
          },
          {
              type: 'Browser',
              selected: false
          },
          {
              type: 'App',
              selected: false
          }
      ]
  }
]

export const integraionData = [
  {
    id:1,
    imageLink: 'https://elstar.themenate.net/img/thumbs/google-drive.png',
    toolName: 'Google Drive',
    toolDescription: 'Cloud storage',
    cardDescription: 'Upload your files to Google Drive',
    aboutDescription: 'Wings medium plunger pot, redeye doppio siphon froth iced. Latte, and, barista cultivar fair trade grinder caramelization spoon. Whipped, grinder to go brewed est single shot half and half. Plunger pot blue mountain et blue mountain grinder carajillo, saucer half and half milk instant strong.',
    keyFeatures: [
      'Fair trade, cortado con panna, crema foam cinnamon aged.',
      'Mug saucer acerbic, caffeine organic kopi-luwak galão siphon.',
      'To go half and half cultivar single origin ut, french press.',
      'Mocha latte flavour cortado cup kopi-luwak.'
    ],
    isInstall: true
  },
  {
    id:2,
    imageLink: 'https://elstar.themenate.net/img/thumbs/slack.png',
    toolName: 'Slack',
    toolDescription: 'Notifications and events',
    cardDescription: 'Post to a Slack channel',
    aboutDescription: 'Wings medium plunger pot, redeye doppio siphon froth iced. Latte, and, barista cultivar fair trade grinder caramelization spoon. Whipped, grinder to go brewed est single shot half and half. Plunger pot blue mountain et blue mountain grinder carajillo, saucer half and half milk instant strong.',
    keyFeatures: [
      'Fair trade, cortado con panna, crema foam cinnamon aged.',
      'Mug saucer acerbic, caffeine organic kopi-luwak galão siphon.',
      'To go half and half cultivar single origin ut, french press.',
      'Mocha latte flavour cortado cup kopi-luwak.'
    ],
    isInstall: true
  },
  {
    id:3,
    imageLink: 'https://elstar.themenate.net/img/thumbs/notion.png',
    toolName: 'Notion',
    toolDescription: 'Content management',
    cardDescription: 'Retrieve notion note to your project',
    aboutDescription: 'Wings medium plunger pot, redeye doppio siphon froth iced. Latte, and, barista cultivar fair trade grinder caramelization spoon. Whipped, grinder to go brewed est single shot half and half. Plunger pot blue mountain et blue mountain grinder carajillo, saucer half and half milk instant strong.',
    keyFeatures: [
      'Fair trade, cortado con panna, crema foam cinnamon aged.',
      'Mug saucer acerbic, caffeine organic kopi-luwak galão siphon.',
      'To go half and half cultivar single origin ut, french press.',
      'Mocha latte flavour cortado cup kopi-luwak.'
    ],
    isInstall: true
  },
  {
    id:4,
    imageLink: 'https://elstar.themenate.net/img/thumbs/jira.png',
    toolName: 'Jira',
    toolDescription: 'Project management',
    cardDescription: 'Create Jira issues',
    aboutDescription: 'Wings medium plunger pot, redeye doppio siphon froth iced. Latte, and, barista cultivar fair trade grinder caramelization spoon. Whipped, grinder to go brewed est single shot half and half. Plunger pot blue mountain et blue mountain grinder carajillo, saucer half and half milk instant strong.',
    keyFeatures: [
      'Fair trade, cortado con panna, crema foam cinnamon aged.',
      'Mug saucer acerbic, caffeine organic kopi-luwak galão siphon.',
      'To go half and half cultivar single origin ut, french press.',
      'Mocha latte flavour cortado cup kopi-luwak.'
    ],
    isInstall: false
  },
  {
    id:5,
    imageLink: 'https://elstar.themenate.net/img/thumbs/zendesk.png',
    toolName: 'Zendesk',
    toolDescription: 'Customer service',
    cardDescription: 'Exchange data with Zendesk',
    aboutDescription: 'Wings medium plunger pot, redeye doppio siphon froth iced. Latte, and, barista cultivar fair trade grinder caramelization spoon. Whipped, grinder to go brewed est single shot half and half. Plunger pot blue mountain et blue mountain grinder carajillo, saucer half and half milk instant strong.',
    keyFeatures: [
      'Fair trade, cortado con panna, crema foam cinnamon aged.',
      'Mug saucer acerbic, caffeine organic kopi-luwak galão siphon.',
      'To go half and half cultivar single origin ut, french press.',
      'Mocha latte flavour cortado cup kopi-luwak.'
    ],
    isInstall: false
  },
  {
    id:6,
    imageLink: 'https://elstar.themenate.net/img/thumbs/dropbox.png',
    toolName: 'Dropbox',
    toolDescription: 'Cloud storage',
    cardDescription: 'Exchange data with Dropbox',
    aboutDescription: 'Wings medium plunger pot, redeye doppio siphon froth iced. Latte, and, barista cultivar fair trade grinder caramelization spoon. Whipped, grinder to go brewed est single shot half and half. Plunger pot blue mountain et blue mountain grinder carajillo, saucer half and half milk instant strong.',
    keyFeatures: [
      'Fair trade, cortado con panna, crema foam cinnamon aged.',
      'Mug saucer acerbic, caffeine organic kopi-luwak galão siphon.',
      'To go half and half cultivar single origin ut, french press.',
      'Mocha latte flavour cortado cup kopi-luwak.'
    ],
    isInstall: false
  },
  {
    id:7,
    imageLink: 'https://elstar.themenate.net/img/thumbs/github.png',
    toolName: 'Github',
    toolDescription: 'Code repositories',
    cardDescription: 'Exchange files with a GitHub repository',
    aboutDescription: 'Wings medium plunger pot, redeye doppio siphon froth iced. Latte, and, barista cultivar fair trade grinder caramelization spoon. Whipped, grinder to go brewed est single shot half and half. Plunger pot blue mountain et blue mountain grinder carajillo, saucer half and half milk instant strong.',
    keyFeatures: [
      'Fair trade, cortado con panna, crema foam cinnamon aged.',
      'Mug saucer acerbic, caffeine organic kopi-luwak galão siphon.',
      'To go half and half cultivar single origin ut, french press.',
      'Mocha latte flavour cortado cup kopi-luwak.'
    ],
    isInstall: false
  },
  {
    id:8,
    imageLink: 'https://elstar.themenate.net/img/thumbs/gitlab.png',
    toolName: 'Gitlab',
    toolDescription: 'Code repositories',
    cardDescription: 'Exchange data with Zendesk',
    aboutDescription: 'Wings medium plunger pot, redeye doppio siphon froth iced. Latte, and, barista cultivar fair trade grinder caramelization spoon. Whipped, grinder to go brewed est single shot half and half. Plunger pot blue mountain et blue mountain grinder carajillo, saucer half and half milk instant strong.',
    keyFeatures: [
      'Fair trade, cortado con panna, crema foam cinnamon aged.',
      'Mug saucer acerbic, caffeine organic kopi-luwak galão siphon.',
      'To go half and half cultivar single origin ut, french press.',
      'Mocha latte flavour cortado cup kopi-luwak.'
    ],
    isInstall: true
  },
  {
    id:9,
    imageLink: 'https://elstar.themenate.net/img/thumbs/figma.png',
    toolName: 'Figma',
    toolDescription: 'Design tools',
    cardDescription: 'Exchange screenshots with Figma',
    aboutDescription: 'Wings medium plunger pot, redeye doppio siphon froth iced. Latte, and, barista cultivar fair trade grinder caramelization spoon. Whipped, grinder to go brewed est single shot half and half. Plunger pot blue mountain et blue mountain grinder carajillo, saucer half and half milk instant strong.',
    keyFeatures: [
      'Fair trade, cortado con panna, crema foam cinnamon aged.',
      'Mug saucer acerbic, caffeine organic kopi-luwak galão siphon.',
      'To go half and half cultivar single origin ut, french press.',
      'Mocha latte flavour cortado cup kopi-luwak.'
    ],
    isInstall: false
  },
  {
    id:10,
    imageLink: 'https://elstar.themenate.net/img/thumbs/adobe-xd.png',
    toolName: 'Adobe XD',
    toolDescription: 'Design tools',
    cardDescription: 'Exchange screenshots with Adobe XD',
    aboutDescription: 'Wings medium plunger pot, redeye doppio siphon froth iced. Latte, and, barista cultivar fair trade grinder caramelization spoon. Whipped, grinder to go brewed est single shot half and half. Plunger pot blue mountain et blue mountain grinder carajillo, saucer half and half milk instant strong.',
    keyFeatures: [
      'Fair trade, cortado con panna, crema foam cinnamon aged.',
      'Mug saucer acerbic, caffeine organic kopi-luwak galão siphon.',
      'To go half and half cultivar single origin ut, french press.',
      'Mocha latte flavour cortado cup kopi-luwak.'
    ],
    isInstall: false
  },
  {
    id:11,
    imageLink: 'https://elstar.themenate.net/img/thumbs/sketch.png',
    toolName: 'Sketch',
    toolDescription: 'Design tools',
    cardDescription: 'Exchange screenshots with Sketch',
    aboutDescription: 'Wings medium plunger pot, redeye doppio siphon froth iced. Latte, and, barista cultivar fair trade grinder caramelization spoon. Whipped, grinder to go brewed est single shot half and half. Plunger pot blue mountain et blue mountain grinder carajillo, saucer half and half milk instant strong.',
    keyFeatures: [
      'Fair trade, cortado con panna, crema foam cinnamon aged.',
      'Mug saucer acerbic, caffeine organic kopi-luwak galão siphon.',
      'To go half and half cultivar single origin ut, french press.',
      'Mocha latte flavour cortado cup kopi-luwak.'
    ],
    isInstall: false
  },
  {
    id:12,
    imageLink: 'https://elstar.themenate.net/img/thumbs/hubspot.png',
    toolName: 'Hubspot',
    toolDescription: 'Content management',
    cardDescription: 'Exchange data with Hubspot',
    aboutDescription: 'Wings medium plunger pot, redeye doppio siphon froth iced. Latte, and, barista cultivar fair trade grinder caramelization spoon. Whipped, grinder to go brewed est single shot half and half. Plunger pot blue mountain et blue mountain grinder carajillo, saucer half and half milk instant strong.',
    keyFeatures: [
      'Fair trade, cortado con panna, crema foam cinnamon aged.',
      'Mug saucer acerbic, caffeine organic kopi-luwak galão siphon.',
      'To go half and half cultivar single origin ut, french press.',
      'Mocha latte flavour cortado cup kopi-luwak.'
    ],
    isInstall: true
  },
  {
    id:13,
    imageLink: 'https://elstar.themenate.net/img/thumbs/zapier.png',
    toolName: 'Zapier',
    toolDescription: 'Notifications and events',
    cardDescription: 'Integrate with hundreds of services.',
    aboutDescription: 'Wings medium plunger pot, redeye doppio siphon froth iced. Latte, and, barista cultivar fair trade grinder caramelization spoon. Whipped, grinder to go brewed est single shot half and half. Plunger pot blue mountain et blue mountain grinder carajillo, saucer half and half milk instant strong.',
    keyFeatures: [
      'Fair trade, cortado con panna, crema foam cinnamon aged.',
      'Mug saucer acerbic, caffeine organic kopi-luwak galão siphon.',
      'To go half and half cultivar single origin ut, french press.',
      'Mocha latte flavour cortado cup kopi-luwak.'
    ],
    isInstall: false
  },
]

export const cardData = [
  {
    id:1,
    cardImg: '	https://elstar.themenate.net/img/others/img-8.png',
    cardHoldername: 'Ron Vargas',
    cardNumber: '4111 6545 6548 6321',
    expDate: '2024-05-23T13:40:21+05:30',
    cvv: '321',
    isDefault: true
  },
  {
    id:2,
    cardImg: '	https://elstar.themenate.net/img/others/img-9.png',
    cardHoldername: 'Alvero Moreno',
    cardNumber: '5182 5684 5687 4568',
    expDate: '2025-04-18T13:40:21+05:30',
    cvv: '159',
    isDefault: false
  },
];

export const upiData = [
  {
    id: 1,
    upiIcon: 'https://elstar.themenate.net/img/others/img-10.png',
    upi: 'ronnie_vergas@infotech.io',
    redirectLink:'https://www.paypal.com/in/home'
  }
]