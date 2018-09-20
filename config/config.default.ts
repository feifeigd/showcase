import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537412627000_2779';

  // add your egg config in here
  config.middleware = [
    'robot'
  ];

  // 
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping:{
      '.tpl': 'nunjucks'
    }
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0'
  };

  config.robot = {
    ua: [
      /Baiduspider/i
    ]
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
