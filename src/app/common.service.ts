import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

public massage= new BehaviorSubject(0)
  public currentMessage =this.massage.asObservable()




  public massage1= new BehaviorSubject(0)
  public currentMessage1 =this.massage1.asObservable()



  
  constructor( private serv1 :HttpClient) { }




  sendDataService(dt:any){
    return this.massage.next(dt)

  }


  getDtService(){
    return this.currentMessage
  }





  sendDataService1(dt:any){
    return this.massage1.next(dt)

  }


  getDtService1(){
    return this.currentMessage1
  }


  
  getApi(){
    return this.serv1.get('http://localhost:3000/userData');
  }



  sendDtApi(data:any) {
    console.log(data)
   

   return this.serv1.post('http://localhost:3000/userData',data);

  }
  deleteDataApi(id:any){
    return this.serv1.delete('http://localhost:3000/userData'+id)
  }

  
upDateDataApi(data:any){
  return this.serv1.put('http://localhost:3000/userData'+data. id ,data)
} 





}
