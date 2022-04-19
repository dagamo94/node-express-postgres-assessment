const knex = require("../db/connection");

const POSTS_TABLE = "posts";

function create(post) {
  //your solution here
  return knex(POSTS_TABLE)
    .insert(post)
    .returning("*")
    .then(createdRecords => createdRecords[0]);
}

function read(postId) {
  return knex("posts").select("*").where({ post_id: postId }).first();
}

function update(updatedPost) {
  //your solution here
  return knex(POSTS_TABLE)
    .select("*")
    .where({post_id: updatedPost.post_id})
    .update(updatedPost, "*")
    .then(updatedRecords => updatedRecords[0]);

}

function destroy(postId) {
  //your solution here
  return knex(POSTS_TABLE).where({post_id: postId}).del();
}

module.exports = {
  create,
  read,
  update,
  delete: destroy,
};
