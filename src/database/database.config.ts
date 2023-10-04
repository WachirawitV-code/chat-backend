import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: './data.sqlite3',
  autoLoadModels: true,
  synchronize: true,
};
