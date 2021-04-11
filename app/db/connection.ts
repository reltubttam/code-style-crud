import { Sequelize } from 'sequelize';
import { POSTGRES_URL } from '../config';
import logger from '../lib/logger';

const sequelize = new Sequelize(POSTGRES_URL);

sequelize.authenticate()
  .then(() => logger.info('postgres connected'))
  .catch(err => logger.error('postgres failed to connected', err));

export default sequelize;
