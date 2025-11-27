import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  route("about", "./routes/about/index.tsx"),
  route("contact", "./routes/Contact/index.tsx"),
  route("project", "./routes/project/index.tsx"),
  route("project/:id", `./routes/project/detail.tsx`),
  route("blog", "./routes/blog/index.tsx"),
] satisfies RouteConfig;
