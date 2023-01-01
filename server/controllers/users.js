import bcrypt from 'bcryptjs';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.CONNECTION_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: { rejectUnauthorized: false },
  },
});

export const signUp = (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 12);

    sequelize
      .query(
        `
      insert into users(name, email, password)
      values('${name}', '${email}', '${hashedPassword}');

      select * from users where email = '${email}';
      `
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0][0]);
      })
      .catch((err) => {
        res.status(400).send(err.errors[0].message);
      });
  } catch (error) {
    console.log('signup error: ', error);
  }
};

export const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    sequelize
      .query(
        `
      select * from users where email = '${email}';
      `
      )
      .then(async (dbRes) => {
        const data = dbRes[0][0];

        if (!data)
          return res.status(400).send('User with entered email not found!');

        const confirmPassword = await bcrypt.compare(password, data.password);
        if (confirmPassword) res.status(200).send(data);
        else res.status(400).send('Invalid password.');
      });
  } catch (error) {
    console.log('log in: ', error);
  }
};
