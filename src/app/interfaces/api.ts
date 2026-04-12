export interface ApiResponse<T> {
  success:boolean;
  data:T;
}

export interface Category{
  slug:string;
  name:string;
  url:string;
}

export interface User{
  id:string;
  firstName:string;
  lastName:string;
  email:string;
  phone?:string;
  address?:string;
}
