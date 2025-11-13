import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../user/user.model';
import { config } from '../../config/env';

export const AuthServices = {
    registerUser: async (payload: any) => {
        const { name, email, password } = payload;
        const hashedPassword = await bcrypt.hash(password, 14);
        const user = await User.create({ name, email, password: hashedPassword });
        return user;
    },
    loginUser: async (payload: any) => {
        const { email, password } = payload;
        console.log('checking email password', email, password);
        const user = await User.findOne({ email }).select("+password");
        if (!user) throw new Error("User not found");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');

        const token = jwt.sign({ id: user._id, email: user.email }, config.jwt_secret, {
            expiresIn: '7d'
        });

        console.log('checking user and token', user, token);

        return { token, user };
    }
}