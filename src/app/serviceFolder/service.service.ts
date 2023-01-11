import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }


  
  async   dataManipulation(methods:string,urlName:string,body:any){
 
    if(methods==="GET"){
      console.log("inside")
        let result = await fetch("http://localhost:8080/" + urlName);
      
        return result.json();
    }
    else if(methods==="POST"){
        let param = {
            method:methods,
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(body)
        };
        await fetch("http://localhost:8080/" + urlName,param);
    
    }
    else if(methods === "DELETE"){
      await fetch("http://localhost:8080/" + urlName,{
        method:methods,
        headers :{
          "Content-Type" : "application/json"
        }
      });
  
    }
    
}

}
