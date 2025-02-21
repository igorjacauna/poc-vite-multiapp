import userStore from "../store/userStore";

export default function Login() {
  const login = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn({
      scope: 'profile email',
    }).then(() => {
      location.href = '/'
    }).catch(() => {
      userStore.clear();
    })
  }
  return (
    <div>
      <button onClick={login}>Entrar</button>
    </div>
  );
}