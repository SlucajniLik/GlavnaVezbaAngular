import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jedna-osoba',
  templateUrl: './jedna-osoba.component.html',
  styleUrls: ['./jedna-osoba.component.css']
})
export class JednaOsobaComponent {


route?:ActivatedRoute
routeParam:any
routeId:any
routeIdn:any
constructor(routee:ActivatedRoute,router:Router)
{
this.route=routee
this.routeParam=this.route?.snapshot.paramMap;
this.routeId=this.routeParam.get('id')

this.route.queryParamMap.subscribe(
  p=>(this.routeIdn=p.get('page')??1)
)

}











}
