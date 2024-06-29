import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'  // <--provides this service in the root EnvironmentInjector
  })
export class SubscribeService{
    onSubscribeClicked(type:string){
    alert('Thank you for '+type+' subscribing . You can access the services now.')
    }
}