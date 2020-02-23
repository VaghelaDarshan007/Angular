import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  name: string = "Darshan";

  constructor() { }
  onSubmit(eventData){
    this.name = eventData.value;
  }
  ngOnInit(): void {
  }

}
