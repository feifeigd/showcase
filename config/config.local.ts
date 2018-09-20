import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };
  return config;
};
