import { Component, OnInit } from '@angular/core';
import { OsobaService, osoba } from '../osoba.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-podataka',
  templateUrl: './lista-podataka.component.html',
  styleUrls: ['./lista-podataka.component.css']
})
export class ListaPodatakaComponent implements OnInit {

osobe?:osoba[]
vrednost?:string
  constructor(private osobaService:OsobaService,private router:Router )
  {

  }
  ngOnInit(): void {
    this.osobaService.getAllOsobe().subscribe(
      x=>{
        console.log(x)
        this.osobe=x
      },
      error=>{console.log(error)}
    )
  console.log(this.osobe)
  }




Izbrisi(id:number)
{


this.osobaService.deleteOsoba(id).subscribe(
  res=>{console.log(res)}
);

const objWithIndex=this.osobe?.findIndex((obj)=>obj.id==id)

if(objWithIndex!>-1)
{
this.osobe?.splice(objWithIndex!,1)
}
}


Update(id:number)
{

this.router.navigate(["updateOsobu/"+id])
}




}
