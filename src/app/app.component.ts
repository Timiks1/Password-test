import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passTest';
  public inputValue: string = '';
  public letters : boolean = false;
  public numbers : boolean = false;
  public symvols : boolean = false;
  public easy : string = "grey";
  public medium : string = "grey";
  public hard : string = "grey";
  public letterRegex = /[a-zA-Z]/;
  public digitRegex = /\d/;
  public symbolRegex = /[^a-zA-Z0-9]/;
  onInputChange() {
    if(this.inputValue.length >0 && this.inputValue.length <8){
      this.easy = 'red';
      this.medium = "red";
      this.hard = "red";
    }
    else{
      this.easy = 'grey';
      this.medium = "grey";
      this.hard = "grey";
    }
    if(this.letterRegex.test(this.inputValue)){
      this.letters = true;
    }
    else{
      this.letters = false;
    }
    if(this.digitRegex.test(this.inputValue)){
      this.numbers = true;
    }
    else{
      this.numbers = false;
    }
    if(this.symbolRegex.test(this.inputValue)){
      this.symvols = true;
    }
    else{
      this.symvols = false;
    }
    if(this.letters || this.numbers || this.symvols){
      this.easy = "red";
    }
    if(this.letters && this.numbers || this.letters && this.symvols || this.symvols && this.numbers){
      this.easy = "yellow";
      this.medium = "yellow";
      this.hard = "grey";
    }
    if(this.letters && this.numbers && this.symvols){
      this.easy = "green";
      this.medium = "green";
      this.hard = "green";
    }
  }
}
