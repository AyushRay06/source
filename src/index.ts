import { Hono } from "hono"

const app = new Hono()

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

app.post("/api/vi/user/signup", (c) => {
  return c.text("Signup")
})

app.post("/api/v1/signin", (c) => {
  return c.text("Signin")
})

app.post("/api/v1/blog", (c) => {
  return c.text("blog")
})

app.put("/api/v1/blog", (c) => {
  return c.text("blog")
})

app.get("/api/v1/blog", (c) => {
  return c.text("blog")
})

app.get("/api/v1/blog", (c) => {
  return c.text("blog")
})

export default app