import userSchema from "../db/schema/user";

const userService = {
  createUser: async (data: { name: string; email: string }) => {
    try {
      const user = await userSchema.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  },
  getOneUser: async (id: string) => {
    try {
      const user = await userSchema.findById(id);
      return user;
    } catch (error) {
      throw error;
    }
  },
  getAllUsers: async () => {
    try {
      const user = await userSchema.find();
      return user;
    } catch (error) {
      throw error;
    }
  },
  updateUSer: async (id: string, data: { name: string; email: string }) => {
    try {
      const user = await userSchema.findByIdAndUpdate(id, data);
      return user;
    } catch (error) {
      throw error;
    }
  },
  deleteUser: async (id: string) => {
    try {
      const user = await userSchema.findByIdAndDelete(id);
      return user;
    } catch (error) {
      throw error;
    }
  },
};

export default userService;
