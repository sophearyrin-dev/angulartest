import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private shareService: SharedService) { }

  multiply(a:number, b:number){
    this.shareService.mySharedFunction();
    return a*b;
  }
}
