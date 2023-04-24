import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {!user ? <button onClick={logIn}>Log in</button> : null}
      {user ? <span>{user.displayName}</span> : null}
      {user ? <button onClick={logOut}>Log out</button> : null}
    </div>
  );
}