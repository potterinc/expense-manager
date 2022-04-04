import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  /**
   * One Way Data binding examples
   */
  // Databinding with string interpolation
  appName = "Data from component";

  // Event binding
  showData($event: any) {
    console.log("button is clicked!");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  // Property Binding
  userName:string = "Peter";

  /**
   * There are other ways to bind data which are Attribute binding [attr.ATTR]=component data
   * style binding [style.STYLE]=COMPONENT DATA
   * class binding [class.CLASSNAME]=COMPONENT DATA
   */


  /**
   * TWO WAY DATABINDING EXAMPLES
   * It's a combination of property and event binding using the 'ngModel' directive
   */

  constructor() { }

  ngOnInit(): void {
  }

}
