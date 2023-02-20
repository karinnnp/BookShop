export type UserBodyType = {
    email: string;
    password: string;
}

export type UserDetailType = {
    coin: number
};
  
export type UserType = {
  status: "SUCCESS" | "ERROR" | "FAILED";
  message: string;
  details: UserDetailType | string;
};