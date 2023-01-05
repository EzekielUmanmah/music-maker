import dotenv from 'dotenv';
dotenv.config();
import bcrypt from 'bcryptjs';
const { CONNECTION_URL } = process.env;
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(CONNECTION_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: { rejectUnauthorized: false },
  },
});

export const seed = async (req, res) => {
  const hashedPassword = await bcrypt.hash('asdf', 12);

  sequelize
    .query(
      `
    drop table if exists users;
    drop table if exists clips;

    create table users (
      user_id serial primary key,
      name varchar,
      email varchar not null unique,
      password varchar not null
    );

    create table clips (
      clip_id serial primary key,
      title varchar,
      clip text,
      user_id int references users(user_id)
    );

    insert into users (name, email, password)
    values('Ezekiel', 'umanmah234@gmail.com', '${hashedPassword}');
      `
    )
    .then((resDb) => {
      console.log('Db seeded!');
      console.log('resDb: ', resDb);
      res.sendStatus(200);
    })
    .catch((err) => console.log(`Db seeding error: ${err}`));
};
