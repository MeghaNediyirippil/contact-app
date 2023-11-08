import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/model/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})

export class ContactManagerComponent implements OnInit{

  loginDate:any=[];  //to hold system current date
  searchKey:string=''  //to hold the input data or search value

//to hold  contacts detail
  allContacts:any=[];
  //string interpolation
  heading:string='Contact Details List';
//api dependency injection
    constructor(private api:ApiService){
      this.loginDate=new Date();
    }



  ngOnInit(): void {
    this.getAllContacts()
  }

  getAllContacts(){
    this.api.getAllContact().subscribe((data:MyContact)=>{
      console.log(data);//array of contact
      
    this.allContacts=data;
      
      
    })

  }


 //to check search binding working or not 
  // nameChange(){
  //   alert("Name change")
  // }

  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }
  deleteContact(contactId:any){
    this.api.delectContact(contactId).subscribe((result:any)=>{
      alert('Delete successfully')
      this.getAllContacts()
    })
  }

}
