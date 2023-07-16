const db = require('./DB');

async function getAllStudents() {
  const sql = 'SELECT * FROM students';

  try {
    const result = await db.connection.query(sql);
    return JSON.stringify(result);
  } catch (err) {
    throw err;
  }
}

async function addStudent(body) {
  const name = body.name;
  const sql = 'INSERT INTO students (Name) VALUES (?)';
  const values = [name];

  try {
    const result = await db.connection.query(sql, values);
    return JSON.stringify(result);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllStudents,
  addStudent
};
