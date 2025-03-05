import { NextFunction, Request, Response } from "express";
import { BasePermission } from "../../../../core/permissions/base";

export function HasPermission(permission: BasePermission[]) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    descriptor.value = function (req: Request, res: Response) {};

    return descriptor;
  };
}
