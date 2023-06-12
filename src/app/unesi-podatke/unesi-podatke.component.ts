import { Component } from '@angular/core';
import { OsobaService, osoba } from '../osoba.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidators} from './custom.Validators';

@Component({
  selector: 'app-unesi-podatke',
  templateUrl: './unesi-podatke.component.html',
  styleUrls: ['./unesi-podatke.component.css']
})
export class UnesiPodatkeComponent {

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




constructor(private osobaService:OsobaService)
{}


addOsobu()
{

this.osobaService.addOsoba(this.osoba).subscribe(
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
