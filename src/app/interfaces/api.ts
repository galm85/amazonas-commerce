export interface ApiResponse<T> {
  success:boolean;
  data:T;
}

export interface Category{
  slug:string;
  name:string;
  url:string;
}
