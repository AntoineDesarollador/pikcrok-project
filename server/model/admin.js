
import pool from "../config/database";

class User {
  static findByEmail(email, callback) {
    pool.query('SELECT * FROM admin WHERE email = ?', [email], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  }
}


export default User;
