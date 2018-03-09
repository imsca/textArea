import { Component, OnInit } from '@angular/core';
import { TextwrapService } from './textwrap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private text: string;
  private lines: string[];
  private numLines: number;

  constructor(private textWrapService: TextwrapService) {

  }

  ngOnInit () {
    this.text = "Lorem ipsum dolor sit amet";
    this.numLines = 10;
  }
  handleClick (){
    this.lines = this.textWrapService.textWrap(this.text, this.numLines);
  }
}
