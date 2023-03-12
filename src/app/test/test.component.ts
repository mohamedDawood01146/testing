// test component ts
import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  name:string = "khaled"
  constructor(public testService:TestService){}
    ngOnInit(): void {
      this.testService.testValue()
    }
}

