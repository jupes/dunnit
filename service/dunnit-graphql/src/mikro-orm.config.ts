import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { Options } from "@mikro-orm/core";

const config: Options = {
  entities: [Post],
  dbName: "dunnit",
  type: "postgresql",
  user: "user",
  password: "password",
  debug: !__prod__,
};

export default config;
