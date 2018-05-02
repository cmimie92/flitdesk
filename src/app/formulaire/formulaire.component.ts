import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {


  form = new FormGroup({

    email: new FormControl('',Validators.email)

  })

  constructor() { }

  ngOnInit() {
  }

}
