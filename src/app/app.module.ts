import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatabindingComponent } from './components/test/databinding/databinding.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatabindingComponent,
    AddExpenseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
