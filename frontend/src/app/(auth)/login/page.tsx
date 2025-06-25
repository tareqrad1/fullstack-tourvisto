import { getUserInSession } from "@/app/_action"
import LoginForm from "./_components/LoginForm"
import { redirect } from "next/navigation";
import Image from "next/image";

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
        <Image
              src="/bg.png"
              alt="Background"
              fill
              loading='lazy'
              className="object-cover"
              style={{ zIndex: -1}}
          />
          <div className="absolute inset-0 bg-black/40" />
        <LoginForm />
    </>
  )
}

export default LoginPage

