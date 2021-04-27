import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private router:ActivatedRoute, private contact:ContactsService) { }
  
  collect=<any>{};
  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.contact.getCurrentUser(this.router.snapshot.params.id).subscribe((result)=>{
        console.log(result);
        this.collect=result
    })
  }

}
