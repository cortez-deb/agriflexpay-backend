import { Response,Request } from "express";
import ResponseService from "../funct/responce";
import  BusinessplanService  from "../services/businessplan";


export default class BusinessPlanController{
    static async create(req:Request,res:Response){
        try{
            const businessplan = await BusinessplanService.create({plan:req.body});
            if(!businessplan){
                return ResponseService.error({res,error:"Business Plan not created"})
            }
            return ResponseService.success({res,data:businessplan})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }
    static async update(req:Request,res:Response){
        try{
            const id = req.params.id;
            const businessplan = await BusinessplanService.update({id,...req.body});
            if(!businessplan){
                return ResponseService.error({res,error:"Business Plan not updated"})
            }
            return ResponseService.success({res,data:businessplan})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }
    static async fetch(req:Request,res:Response){
        try{
            const id = req.params.id;
            const businessplan = await BusinessplanService.fetch({id});
            if(!businessplan){
                return ResponseService.error({res,error:"Business Plan not found"})
            }
            return ResponseService.success({res,data:businessplan})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }
    static async fetchAll(req:Request,res:Response){
        try{
            const businessplans = await BusinessplanService.fetchAll();
            if(!businessplans){
                return ResponseService.error({res,error:"Business Plans not found"})
            }
            return ResponseService.success({res,data:businessplans})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }
    static async delete(req:Request,res:Response){
        try{
            const id = req.params.id;
            const businessplan = await BusinessplanService.delete({id});
            if(!businessplan){
                return ResponseService.error({res,error:"Business Plan not deleted"})
            }
            return ResponseService.success({res,data:businessplan})
        }
        catch(error){
            return ResponseService.error({res,error})
        }
    }

}