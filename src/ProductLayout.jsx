import { Link, Outlet } from "react-router-dom";

export function ProductLayout() {
  return (
    <>
      <Link to="/product/1">Product 1</Link>
      <br />
      <Link to="/product/2">Product 2</Link>
      <br />
      <Link to="/product/new">New Book</Link>
      <Outlet context={{ hello: "World" }} />
    </>
  );
}
