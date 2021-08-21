import { Component } from '@angular/core';
import { NewService } from './new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cruddemo2';
  allUser: any;
  isEdit=false
  userObj={name:'',mobile:'',email:'',password:'',id:''}
  constructor(private newservice:NewService){}
  ngOnInit(): void {   
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getLatestUser();
      }
      addUser(formObj:any){
        console.log(formObj);
         this.newservice.createUser(formObj).subscribe((response:any)=>{
           this.getLatestUser();
             })
       }
       getLatestUser(){
         this.newservice.getAllUser().subscribe((response)=>{
           this.allUser=response
         })
       }
       deleteUser(user:any){
         this.newservice.deleteUser(user).subscribe(()=>{
           this.getLatestUser();
           alert ('are you sure you want to delete')
         })
       }
       
       editUser(user:any){
         this.userObj=user;
         this.isEdit=true
       }

       updateUser(){
         this.isEdit=!this.isEdit;
         this.newservice.updateUser(this.userObj).subscribe(()=>{
           this.getLatestUser();
         })
       }
      
    }