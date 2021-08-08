import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Componente[] = [
    {
      icon: 'checkmark-done-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
