import { AbstractControl, ValidationErrors } from "@angular/forms";

export class customValidators
{

static proveriUsername(control:AbstractControl):ValidationErrors|null
{

    if(!(control.value as string).includes("@"))
    {
        return null
    }
    else
    {
        return {neMozeUsername:true}
    }
}

static proveriLozinku(control:AbstractControl):ValidationErrors|null
{

    if((control.value as string).includes("a"))
    {
        return null
    }
    else
    {
        return {neMozeUsername:true}
    }
}


























}