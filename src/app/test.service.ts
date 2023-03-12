// test service ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  public testValue (){
    return "This Is Test Method in Service"
  }
}
