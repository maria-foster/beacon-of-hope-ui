import { Component, OnInit } from '@angular/core';
declare const window: any; //Maria lost $25 on this statement

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  constructor() { } 

  ngOnInit() {

    window.watsonAssistantChatOptions = {
        integrationID: "4e54cd19-756d-436f-a94b-c63d54ff98d3", // The ID of this integration.
        region: "us-south", // The region your integration is hosted in.
        serviceInstanceID: "b41622e1-8511-4076-be9c-0f76647053e7", // The ID of your service instance.
        onLoad: function(instance) { instance.render(); }
      };
    setTimeout(function(){
      const t=document.createElement('script');
      t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
      document.head.appendChild(t);
    });


  }

}


