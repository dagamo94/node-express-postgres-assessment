const knex = require("../db/connection");

const commentsTable = "comments";

function list() {
  // your solution here
  return knex(commentsTable).select("*");
}

function listCommenterCount() {
  // your solution here
  return knex("comments as c")
    .join("users as u", "c.commenter_id", "u.user_id")
    .select("user_email as commenter_email")
    .count("c.comment")
    .groupBy("commenter_email")
    .orderBy("commenter_email");
}

function read(commentId) {
  // your solution here
  return knex("comments as c")
    .join("users as u", "c.commenter_id", "u.user_id")
    .join("posts as p", "p.post_id", "c.post_id")
    .select("c.comment", "p.post_body as commented_post", "c.comment_id", "u.user_email as commenter_email")
    .where({"c.comment_id": commentId})
    .first();
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
