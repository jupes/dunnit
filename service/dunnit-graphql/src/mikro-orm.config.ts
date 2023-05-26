import { __prod__ } from './constants';
import { Post } from './entities/Post';

export default {
  entities: [Post],
  dbName: 'dunnit',
  user: 'postgres',
  password: 'postgres',
  debug: !__prod__,
};
