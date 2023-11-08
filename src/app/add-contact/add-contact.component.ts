import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/model/myContact';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  // contactName:string='';
  contact:MyContact={} //all contacts details as in the form object

  allGroups:any=[]  //all contacts details as in the form object

  constructor(private api:ApiService, private router:Router){
    this.contact.GroupID="Select A Group"
  }
  ngOnInit(): void {
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data);
      this.allGroups=data
      
    })
  }

  addContact(){
    this.api.addContact(this.contact).subscribe((result:any)=>{
      this.router.navigateByUrl('')
    })
  }

}
