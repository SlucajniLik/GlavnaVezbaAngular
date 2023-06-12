import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Osoba2Service, osoba2 } from 'src/app/osoba2.service';

@Component({
  selector: 'app-update-osobu2',
  templateUrl: './update-osobu2.component.html',
  styleUrls: ['./update-osobu2.component.css']
})
export class UpdateOsobu2Component {

  osoba:osoba2=
  {
    id:0,
    username:'',
    password: '',
    number:0
  }

  constructor( private osobaServ2:Osoba2Service,private route:ActivatedRoute)
  {}

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


  IzmeniOsobu2()
  {

    this.osoba=
  {
     id:+this.route.snapshot.paramMap.get("id")!,
    username:this.Username?.value!,
    password: this.Password?.value!,
    number:+this.Num?.value!
  }
  this.osobaServ2.UpdateOsoba(this.osoba).subscribe
  (
       res=>{console.log(res)}
  )



  }



}
