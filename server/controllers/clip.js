import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.CONNECTION_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: { rejectUnauthorized: false },
  },
});

export const getClips = (req, res) => {
  const { user_id } = req.params;

  sequelize
    .query(
      `
    select * from clips where user_id = ${user_id}
  `
    )
    .then((dbRes) => {
      res.status(200).send(dbRes[0]);
    })
    .catch((err) => console.log(err));
};

export const createClip = (req, res) => {
  const { title, clip, user_id } = req.body;

  sequelize
    .query(
      `
    insert into clips(user_id, title, clip)
    values(${user_id}, '${title}', '${clip}');

  `
    )
    .then((dbRes) => res.status(200).send(dbRes))
    .catch((err) => res.status(400).send(err));
};

export const updateClip = (req, res) => {
  console.log(req.body);
  const { title, clip_id } = req.body;

  sequelize
    .query(
      `
   update clips set title = '${title}' where clip_id = ${clip_id};
  `
    )
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(400).send(err));
};

export const deleteClip = (req, res) => {
  const { clip_id } = req.params;

  sequelize
    .query(
      `
    delete from clips where clip_id = ${clip_id};
  `
    )
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(400).send(err));
};
