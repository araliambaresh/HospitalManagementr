import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnChanges ,OnInit{

  account = false;
  @Input() showLogin = true;
  changeLogin = true;
  userPanel = false;
ngOnInit(){
console.log(this.showLogin)
}
  ngOnChanges(changes: SimpleChanges): void {
      if(changes['showLogin']){
        this.showLogin = changes['showLogin'].currentValue;
        console.log( this.showLogin);
      }
  }
 showUserPanel(){
  this.userPanel = ! this.userPanel;
 }

showAccount(){
  this.account= !this.account;
}
changeNavBar(){
  this.showLogin = true;
}
}
