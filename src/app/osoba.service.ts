import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OsobaService {

  constructor(private http:HttpClient) { }

url="url"
getAllOsobe()
{
return this.http.get<any[]>("https://localhost:7106/api/Osoba")
}

getOsobaById(id:number)
{
  return this.http.get<any[]>(this.url+"/"+id)
}

addOsoba(osoba:any)
{
  return this.http.post<any[]>("https://localhost:7106/api/Osoba/AddPost",osoba)
}

updateOsoba(osoba:osoba)
{ 

  return this.http.put<any>("https://localhost:7106/api/Osoba/update",osoba)
}

deleteOsoba(id:number)
{
  
  return this.http.delete<any>("https://localhost:7106/api/Osoba/delete/"+id)
}










}


export interface osoba 
{
id:number;
username:string;
lozinka:string;
ime:string;
prezime:string;



}