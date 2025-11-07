import { User } from "../user/user.model"


export const AdminService = {
    allUserView: async () => {
        const allUserTrack = await User.find();
        return allUserTrack
    }
}