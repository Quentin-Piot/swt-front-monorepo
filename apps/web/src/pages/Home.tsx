import {useAuth} from "@/contexts/UseAuth";

export default function HomePage() {
  const {user} = useAuth()
  return <>{user?.email}</>;
}
