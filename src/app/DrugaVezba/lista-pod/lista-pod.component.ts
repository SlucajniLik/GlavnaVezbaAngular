import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { osoba } from 'src/app/osoba.service';
import { Osoba2Service, osoba2 } from 'src/app/osoba2.service';

@Component({
  selector: 'app-lista-pod',
  templateUrl: './lista-pod.component.html',
  styleUrls: ['./lista-pod.component.css']
})
export class ListaPodComponent implements OnInit {


osobe?:osoba2[]
vrednost?:string
constructor(private osobaServ2:Osoba2Service,private router:Router)
{

}


ngOnInit()
{

this.osobaServ2.GetAllOsobe().subscribe(
  x=>{
    this.osobe=x
  }
)


}

Izbrisi(id:number)
{


this.osobaServ2.DeleteOsoba(id).subscribe(
  res=>{console.log(res)}
)


const objWithIndex=this.osobe?.findIndex((obj)=>obj.id==id)

if(objWithIndex!>-1)
{

this.osobe?.splice(objWithIndex!,1)

}

}


Izmeni(id:number)
{
  this.router.navigate(["updateOsobu2/"+id])
}

Filtriraj()
{
  console.log(+this.vrednost!+"ddddd")
 this.osobaServ2.FilterOsoba(+this.vrednost!).subscribe(
  res=>{
    this.osobe=res
  }
 )
}


}
