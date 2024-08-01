import { currentUser } from "@clerk/nextjs/server"
import { LuUser2 } from "react-icons/lu"

const UserIcon = async (): Promise<JSX.Element> => {
  const user = await currentUser()
  const profileImage = user?.imageUrl
  if (profileImage) {
    return <img src={profileImage} alt={profileImage} className="w-6 h-6 rounded-full object-cover" />
  }

  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />
}
export default UserIcon