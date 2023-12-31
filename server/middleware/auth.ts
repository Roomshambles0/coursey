import jwt from 'jsonwebtoken';
import   {JwtPayload} from 'jsonwebtoken';
import { Request, Response,NextFunction,ErrorRequestHandler } from 'express';
import { json } from 'stream/consumers';
export const SECRET = 'SECr3t';  // This should be in an environment variable in a real application

export const authenticateJwt = (req:Request, res:Response, next:NextFunction) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader)
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      const decodedUser = user as JwtPayload;
      console.log(user) 
      req.headers.user = decodedUser.username;
      next();
    }) ;
  } else {
    res.status(401).json({message:"token is missing"});
  }
};

