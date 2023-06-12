import { Component } from '@angular/core';
import { OsobaService, osoba } from '../osoba.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidators } from '../unesi-podatke/custom.Validators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-osoba',
  templateUrl: './update-osoba.component.html',
  styleUrls: ['./update-osoba.component.css']
})
export class UpdateOsobaComponent {

  osoba:osoba=
  {  id:0,
    username:'',
    lozinka:'',
    ime:'',
    prezime:''
  }
  form=new FormGroup({
  Username:new FormControl('',[Validators.required,customValidators.proveriUsername]),
  Lozinka:new FormControl('',[Validators.required]),
  Ime:new FormControl('',[Validators.minLength(3)]),
  Prezime:new FormControl('',[Validators.minLength(3)])
  
  
  
  
  })
  
  routeId:any;
  
  
  constructor(private osobaService:OsobaService,private route:ActivatedRoute)
  {

this.routeId=this.route.snapshot.paramMap.get("id")


  }
  
  
  UpdateOsobu()
  {
  this.osoba.id=this.routeId
  this.osobaService.updateOsoba(this.osoba).subscribe(
    res=>{console.log(res)},
    error=>{console.log(error)}
  )
  
  console.log(this.osoba.ime)
  console.log(this.form)
  }
  
  
  get Username()
  {
    return this.form.get('Username')
  }
  
  get Lozinka()
  {
    return this.form.get('Lozinka')
  }
  get Ime()
  {
    return this.form.get('Ime')
  }
  get Prezime()
  {
    return this.form.get('Prezime')
  }
}
