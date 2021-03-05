import axios from "axios";
import { setinterceptor } from "@/utils/interceptor";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

function signup(data) {
  return instance.post("/signup", data);
}

function login(data) {
  return instance.post("/login", data);
}

function instanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`
  });
  return setinterceptor(instance);
}

export const posts = instanceWithAuth("posts");

export { signup, login };
