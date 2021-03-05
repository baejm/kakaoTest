import { posts } from "@/api";

function fetchPosts() {
  return posts.get();
}

function CreatePost(data) {
  return posts.post("/", data);
}

function DeletePost(id) {
  return posts.delete(id);
}

function fetchPost(id) {
  return posts.get(id);
}

function EditPost(id, data) {
  return posts.put(id, data);
}

export { fetchPosts, CreatePost, DeletePost, fetchPost, EditPost };
