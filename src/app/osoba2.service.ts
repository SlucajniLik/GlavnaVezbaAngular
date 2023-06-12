import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Osoba2Service {

  constructor(private http:HttpClient) { }


url="https://localhost:7093"

GetAllOsobe()
{
  return this.http.get<any[]>(this.url+"/getAll")
}


GetOsobaByNumber(num:number)
{

 return this.http.get<any>(this.url+"/"+num)

}

AddOsoba(osoba:any)
{

 return this.http.post<any>(this.url+"/addPost",osoba)
}

UpdateOsoba(osoba:any)
{

 return this.http.put<any>(this.url+"/updatePost",osoba)
}


DeleteOsoba(num:number)
{

 return this.http.delete<any>(this.url+"/delete/"+num)
}


Login(name:string)
{

 return this.http.post<any>(this.url+"/login",name)
}



SortDescOsoba()
{

 return this.http.get<any[]>(this.url+"/sortDesc")
}



SortAscOsoba()
{

 return this.http.get<any[]>(this.url+"/sortAsc")
}



FilterOsoba(num:number)
{

 return this.http.get<any>(this.url+"/filter/"+num)
}



PageOsoba(page:number,pageSize:number)
{

 return this.http.get<any[]>(this.url+"/pagination/"+page+"/"+pageSize);
}
}




export interface osoba2{


  id:number,
  username:string,
  password: string,
  number: number

}
