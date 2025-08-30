import { Injectable } from '@angular/core';

declare let alertify : any;

@Injectable({
  providedIn: 'root'
})
export class Alertify {
  success(message:string)
  {
    alertify.success(message)
  }

   error(message:string)
  {
    alertify.danger(message)
  }
   warning(message:string)
  {
    alertify.warning(message)
  }
}
