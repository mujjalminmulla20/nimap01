import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {



  editing: boolean = false;
  profileImageUrl: string = '';










 
  public allData:any=[]
  public tableData:any=[];

  

constructor( private http :CommonService){

this.getData()

console.log(this.tableData)

}



getData(){
  this.http.getApi().subscribe({
   next: (res:any)=>{
    // console.log(res)
    this.tableData=res
   },
   error:(err:any)=>{
    console.log(err)
   }
  })
}

ngOnInit(){
  this.http.getDtService()
  this.http.getDtService().subscribe({
    next:(res:any)=>{
      this.tableData=res
      // console.log(this.tableData)
    }
  })

  // console.log(this.tableData)
}






startEditing() {
  this.editing = true;
}

cancelEditing() {
  this.editing = false;
}

onFileSelected(event: any) {
  const file: File = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e: any) => {
    this.profileImageUrl = e.target.result;
  };

  reader.readAsDataURL(file);
}

saveImage() {
 
  console.log('Image saved:', this.profileImageUrl);
  this.editing = false;
}


UpdateDt(data:any){
  
  this.http.sendDataService1(data)
  console.log(data)



}



}

