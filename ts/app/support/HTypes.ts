import { IAuth, RoutesEnum, SConst } from "../../EntryPoint";

export type THttpMethod = SConst.HTTP_METHOD_POST | SConst.HTTP_METHOD_GET | SConst.HTTP_METHOD_DELETE |
	SConst.HTTP_METHOD_PUT | SConst.HTTP_METHOD_PATCH

export type TUserTest = SConst.TEST_ROLE_NORMAL_USER | SConst.TEST_ROLE_NEW_USER |
	SConst.TEST_ROLE_ADMIN_USER | undefined

export interface IHttpStatus { cdStatus: number, dsStatus: string }

export interface ILoggedUser { tokens: { accessToken: string; refreshToken: string; }, user: IAuth; }

export type TDate = "DateSec" | "DateDay" | "DateMili"
