import { Request, Response } from "express";
import {getCustomRepository} from "typeorm";
import { UsersService } from "../services/UsersService";


class UsersControllers {

  async create(request: Request, response: Response) {

    const { email } = request.body;
    const usersService = new UsersService();
    try{
    const users = await usersService.create({email});
    return response.json(users)
    }catch(err){
      return response.status(400).json({
        message: err.message
      });
    }
    

  }

}

export { UsersControllers }