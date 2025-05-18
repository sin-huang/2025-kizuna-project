import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';

// 從環境變數中取得密鑰
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) =>
{
    const token = req.headers['authorization']?.split(' ')[1];
    if(!token){
        return res.status(401).json({ message: '未帶 token'});
    }

    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        res.status(401).json({message: 'token 無效或過期', reason: err.message});
    }
}

export default authMiddleware;