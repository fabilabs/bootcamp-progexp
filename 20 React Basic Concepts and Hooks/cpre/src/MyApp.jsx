import "./MyApp.css"
import Button from "./Button.jsx"
import User from "./User.jsx"
import Admin from "./Admin.jsx"
import Login from "./Login.jsx"

const isLoggedIn = false;

function MyApp() {
  let adminSite;
  if (isLoggedIn) {
    adminSite = <Admin />
  } else {
    adminSite = <Login />
  }

  return (
    <>
      <p>Bienvenidos a mi app!</p>
      <Button />
      <User />
      {adminSite}

      {/* {isLoggedIn ? (
        <Admin />
      ) : (
        <Login />
      )} */}
    </>
  )
}

export default MyApp
