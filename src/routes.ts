/* eslint-disable @typescript-eslint/no-unused-vars */

import { authMiddleware } from '@globals/helpers/auth-middleware';
import { Application } from 'express';


const BASE_PATH = '/api/v1';

export default (app: Application) => {
  const routes = () => {


    // app.use(BASE_PATH, authRoutes.routes());
    // app.use(BASE_PATH, authRoutes.signoutRoute());
    // app.use(BASE_PATH, authMiddleware.verifyUser, currentUserRoutes.routes());
  };
  routes();
};
