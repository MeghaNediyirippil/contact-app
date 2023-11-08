import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{

      contactId:string=''  //to hold the id of the contact
      contact:any=[]  //to hold contact information
      groupId:string=''  //to hold the group id of the contact
      groupName:string=''  //to hold the group name of the contact

      constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);  //Id:"3"
      console.log(data.Id);
      this.contactId=data.Id

      this.api.viewContactDetails(this.contactId).subscribe((result:any)=>{
        console.log(result); //contact details - object
        this.contact=result

        this.groupId=result.GroupID
        console.log(this.groupId);

        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
          console.log(data);
        this.groupName=data.name
        console.log(this.groupName);  //Company
        
          
        })
        

        // this.api.getGroupName()
        
      })
      
    })
  }
}
