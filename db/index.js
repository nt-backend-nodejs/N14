import sql3 from 'sqlite3'




const sqlite = sql3.verbose();





const db = new sqlite.Database(':memory:');


db.serialize(() => {
  db.run(`
    CREATE TABLE user (
    username TEXT,
    password TEXT,
    name TEXT,
    age INTEGER
    )`
  );

  // const stmt = db.prepare("INSERT INTO user VALUES (?, ?)");
  // for (let i = 0; i < 10; i++) {
  //   stmt.run("Ipsum " + i, Math.floor(Math.random() * 100 + 10));
  // }
  // stmt.finalize();

  // db.each("SELECT * FROM user", (err, row) => {
  //   console.log(row);
  // });
});



export class DB {

  async create(username, password, name, age,) {
    return await db
      .prepare("INSERT INTO user VALUES (?, ?, ? ,?)")
      .run(username, password, name, age)
      .finalize()
  }
  async getOne(username) {
    const user = await db
      .prepare("SELECT * FROM user WHERE username == (?)")
      .run(username)
      .finalize()
    return user
  }

  async getAll() {
    return db.each("SELECT * FROM user", (err, row) => {
      // console.log(row);

      return row
    });
  }


}


// db.close();