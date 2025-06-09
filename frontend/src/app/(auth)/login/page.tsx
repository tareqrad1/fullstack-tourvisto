import { getUserInSession } from "@/app/_action"
import LoginForm from "./_components/LoginForm"
import { redirect } from "next/navigation";

const LoginPage: React.FC = async() => {
  const { token, user } = await getUserInSession();
  if(token) {
    if(user.role === 'admin') {
      return redirect('/dashboard');
    }
    return redirect('/');
  }
  return (
    <>
      <LoginForm />
    </>
  )
}

export default LoginPage

