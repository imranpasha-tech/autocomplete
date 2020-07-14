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
  matchedSchools : string[];
  text: string;

  constructor(private autocompleteService: AutocompleteService) {

  }

  ngOnInit(): void {

  }

  autocomplete(event) {
    this.schools = [];

    if (event.keyCode >= 65 && event.keyCode <= 90) {
      console.log(event.key);
      let text = this.input.nativeElement.value;
      this.autocompleteService.getSuggestions(text).subscribe(
        response => {
          console.log("response is: ", response);
          this.schools = response;
          this.matchSchools(this.schools, text);
        }
      );
    }

    if (event.keyCode == 8) {
      this.schools = [];
      let text = this.input.nativeElement.value;

      if (text != "") {
        console.log("not empty");
        this.autocompleteService.getSuggestions(this.input.nativeElement.value).subscribe(
          response => {
            console.log("response is: ", response);
            this.schools = response;
            this.matchSchools(this.schools, text);
          }
        );
      } else {
        this.matchedSchools = [];
      }

    }
  }

  matchSchools(schools: schools[], text: string) {
   this.matchedSchools =  schools.map(school => {

        let replacement = `<strong>${text}</strong>`;
        let regex = new RegExp(text, 'g');

        console.log('replacing city:', "alabana".replace(regex, replacement));
        return school.city.replace(regex, replacement);
    });

  }


}
