import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  addExpenses = new FormGroup({
    expenditure: new FormControl('', Validators.required),
    amount: new FormControl(''),
    date: new FormControl('')
  })
  
  // addExpenses = this.formBuilder.group({
  //   expenditure: ['', Validators.required],
  //   amount: [''],
  //   date: ['']
  // })
  constructor() { }

  onSubmit(){
    console.log(this.addExpenses.value);
    
  }

  updateRecord(){
    this.addExpenses.patchValue({
      expenditure: 'Red Wine',
      amount: 10800,
    })
  }
  ngOnInit(): void {    
  }

}
