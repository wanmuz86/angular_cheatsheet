import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Muzaffar app';
  number = 0;
  message = '';
  items = [{
  	name:"Learn Angular",
  	place:"ADA",
  	completed:true
  },
  {
  	name:"Have Dinner",
  	place:"KFC",
  	completed:false
  },
  {
  	name:"Watch Movies",
  	place:"Jaya One",
  	completed:false
  }
  ]

ngOnInit(){
	console.log('page loaded');
}

newItem = {
	name:'',
	place:'',
	description:'',
	completed:false
}
selectedItem = {
	name:'',
	place:'',
	description:'',
	completed:false
}
  increment(){
  	this.number++;
  	this.message = '';
  }
  decrement(){
  	if (this.number >0){
  	this.number--;
  	}
  	else {
  		this.message ='Number cannot be smaller than 0';
  	}
  }

  reset(){
  	this.number = 0;
  	this.message = '';
  }
  savePressed(){
  	this.items.push(this.newItem);
  	this.newItem = {
	name:'',
	place:'',
	description:'',
	completed:false
}
  }
  itemSelected(item){
  	console.log(item);
  	this.selectedItem = item;
  }
}
