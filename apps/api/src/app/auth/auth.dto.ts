export interface RegisterDto {
  username: string;
  password: string;
  roleID: number;
}

export interface LoginDto {
  username: string;
  password: string;
}

export interface JwtPayload {
  username: string;
  roleID: number;
}

export interface GetUserDTO {
  username: string;
  roleID: number;
}
