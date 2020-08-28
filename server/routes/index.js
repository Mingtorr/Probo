const express = require('express');
const router = express.Router();
var mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2ajrrhtlvj',
    database: 'probo'
});
connection.connect(function(err){
    if(err) console.error('mysql connection error : ' + err);
    else console.log('mysql is connected successfully!');
}); //mysql 연결



router.post('/log', function (req, res) {
    let id = req.body.id;
    let pw = req.body.pw;
    connection.query('select user_key,id,pw,nickname,email from usertable where id=?', [id], function (err, rows, fields) {

        let log = new Object();
        log.key = row[0].user_key;
        log.id = rows[0].id;
        log.email = rows[0].email;
        log.nickname = row[0].nickname;
        log.success = false;

        if (row[0] === undefined) { //쿼리항목이안나오면
            res.send(log);
        } else if (rows[0].pw === pw) { //일치할때
            log.success = true;
            console.log(log);
            res.send(log);
        } else { //비번이 안맞을 때
            res.send(log);
        }


    })

})
router.post('/checkid', function (req, res) {
  let user_id = req.body.id;

  console.log(req.body.id);
  let sql = 'select id from usertable where id=?'
  connection.query(sql, [user_id], function (err, rows, fields) {
      console.log(rows);
      let checkid = new Object();
      checkid.tf =false;

      if (rows[0] === undefined) { //중복되는게 없으면
          checkid.tf = true;  //없음 사용가능
          // console.log(rows[0]);
          res.send(checkid);
      }

      else {
          
          checkid.tf = false;
          checkid.id = rows[0].id;
          // console.log("2"+checkid);
          res.send(checkid);
      }
  })
});

router.post('./sign', function (req, res) {
    let id = req.body.id;
    let pw = req.body.pw;
    let email = req.body.email;
    let nickname = req.body.nickname;

    connection.query('select user_key,id,pw,nickname,email from usertable where id=?',[id],function (err,rows,fields){

        let sign = new Object();
        sign.id = row[0].id;
        sign.pw = row[0].pw;
        sign.email = row[0].email;
        sign.nickname = row[0].nickname;
        
        sign.pwtf = false;   // 비밀번호 두개가 일치하는지

        
    })

})




module.exports = router;
