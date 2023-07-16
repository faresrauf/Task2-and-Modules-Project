const db = require('./DB');

async function getCoursesByStudentID(id) {
        const sql = `
        SELECT c.name 
        FROM students_courses as R
        JOIN courses as c ON c.ID = R.CourseID
        WHERE R.StudentID = ?; 
        ` ;
        const values = [id];

        try {
        const result = await db.conenction.query(sql,values);
        return JSON.stringify(result);
        } catch(err) {
            throw Error('Database Error');
        }
    }

module.exports.getCoursesByStudentID = getCoursesByStudentID;