import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Retro Barcode Generator';

  imageArray = [];

  fillImageArray() {
    for(let i = 0; i < 10; i++){
      const randNum = Math.floor(Math.random() * 6 ) + 1;
      if(randNum === 1){
        this.imageArray.push('DarkSeaGreen');
      }
      else if(randNum === 2){
        this.imageArray.push('MediumAquaMarine');
      }
      else if(randNum === 3){
        this.imageArray.push('DarkBlue');
      }
      else if(randNum === 4){
        this.imageArray.push('CadetBlue');
      }
      else if(randNum === 5){
        this.imageArray.push('Chartreuse');
      }
      else if(randNum === 6){
        this.imageArray.push('Blue');
      }
      else if(randNum === 7){
        this.imageArray.push('Grey');
      }
    }
  }
  ngOnInit(){
    this.fillImageArray();
  }
}
