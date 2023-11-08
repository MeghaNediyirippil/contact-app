import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/model/myContact';
import { MyGroup } from 'src/model/myGroup';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{

  contactId:string=''   //to hold the id of the contact
  contact:MyContact={} //to hold contact details (to hold the data in the type of model-MyContact) (the data is present as onject so use{} )
  groups:MyGroup[]=[] // To hold  all the group details  -  It is appear as array in console so use []  (create empty array)

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);   //contactId:"1"
      console.log(data.contactId);  //1
      this.contactId=data.contactId;

      //call api for getting particular contact details
      this.api.viewContactDetails(this.contactId).subscribe((result:any)=>{
        console.log(result); //contact detail as an onject      so we need to change tp array
        this.contact=result;

        //call api for getiing group information
        this.api.getAllGroups().subscribe((data:any)=>{
          console.log(data);
          this.groups=data
        })

       
        
      })

      
      
    })
    
  }
  //function is not working inside onInit so give it outside
  updateConctact(){
    this.api.updateContact(this.contactId,this.contact).subscribe((result:any)=>{
      console.log(result);
      this.route.navigateByUrl('/')
      
    })
  }

}
