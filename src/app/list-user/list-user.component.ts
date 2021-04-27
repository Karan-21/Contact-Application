import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service'
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private contact:ContactsService) { }

  
collection=<any>{};
  ngOnInit(): void {
   this.contact.getUser().subscribe((result)=>{
     console.warn(result);
     this.collection=result;
   });
  }

}
