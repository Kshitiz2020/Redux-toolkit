import { Outlet } from "react-router-dom";

import NavbarPanel from "./NavbarPanel";
function RootLayout() {
  return (
    <>
      <NavbarPanel />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
