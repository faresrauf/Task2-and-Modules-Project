const http = require('http');
const url = require('url');
const jsonBody = require('body/json');
const studentService = require('./studentsService');
const coursesService = require('./coursesService');

const server = http.createServer(async (req, res) => {
    if (req.url === '/students' && req.method === 'GET') {
        res.write(await studentService.getAllStudents());
        res.end();
    }

    if (req.url === '/students' && (req.method === 'POST')) {
        jsonBody(req, res, async (err, body) => {
            if (err) {
                res.statusCode = 500
                return res.end("Internal server error")
            }

            res.setHeader("content-type", "application/json")
            res.end(await studentService.addStudent(body));
        })
    }

    if (req.url === '/students/courses/:id' && (req.method === 'GET')) {
        const parsedUrl = url.parse(req.url, true);
        const path = parsedUrl.pathname;
        const id = path.split('/')[3];
        try {
            res.end(await coursesService.getCoursesByStudentID(id));
        } catch (err) {
            res.statusCode = 500;
            res.end('An internal server error ocurred');
        }
    }

}).listen(3000);

console.log("API Server listening on port 3000 in LocalHost");