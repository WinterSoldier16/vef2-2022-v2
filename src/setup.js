
import pgtools from 'pgtools';

const config = {
  user: 'posgres',
  password: 'password',
  port: 5432,
  host: 'localhost'
}

async function create() {
  // TODO setja upp gagnagrun + gögn
  pgtools.createdb(config, "database", function(err, res) {
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    console.log(res);
  });
}

create().catch((err) => {
  console.error('Error creating running setup', err);
});
