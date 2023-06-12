import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Osoba2Service, osoba2 } from 'src/app/osoba2.service';

@Component({
  selector: 'app-unesi-pod',
  templateUrl: './unesi-pod.component.html',
  styleUrls: ['./unesi-pod.component.css']
})
export class UnesiPodComponent {

osoba:osoba2=
{
  id:0,
  username:'',
  password: '',
  number:0
}

constructor( private osobaServ2:Osoba2Service)
{

  localStorage.setItem("token","aaaa")
}

form=new FormGroup(
  {
    Username:new FormControl('',[Validators.required]),
    Password:new FormControl('',[Validators.minLength(2)]),
    Num:new FormControl('',[Validators.maxLength(3)])
  }
)



get Username()
{
  return this.form.get('Username')
}



get Password()
{
  return this.form.get('Password')
}



get Num()
{
  return this.form.get('Num')
}


addOsobu()
{

  this.osoba=
{
  id:0,
  username:this.Username?.value!,
  password: this.Password?.value!,
  number:+this.Num?.value!
}
this.osobaServ2.AddOsoba(this.osoba).subscribe
(
  res=>{console.log(res)}
)



}




}
