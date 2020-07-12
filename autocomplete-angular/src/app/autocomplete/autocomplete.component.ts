import { AutocompleteService } from './service/autocomplete.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { schools } from './schools';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @ViewChild('input', { static: true }) input: ElementRef;
  schools: schools[];
  text: string;

  constructor(private autocompleteService: AutocompleteService) {

  }

  ngOnInit(): void {

  }

  autocomplete(event) {
    console.log(event);
    this.schools = [];
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      console.log(event.key);

      this.autocompleteService.getSuggestions(event.key).subscribe(
        response => {
          console.log("response is: ", response);
          this.schools = response;
        }
      );
    }

    if (event.keyCode == 8) {
      this.schools = [];
      console.log(this.input.nativeElement.value);
      let text = this.input.nativeElement.value;

      if (text != "") {
        console.log("not empty");
        this.autocompleteService.getSuggestions(this.input.nativeElement.value).subscribe(
          response => {
            console.log("response is: ", response);
            this.schools = response;
          }
        );
      } else {
        this.schools = [];
      }

    }
  }
}
