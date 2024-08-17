/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import * as Bootstrap from "ojs/ojbootstrap";
import "oj-c/input-text";
import "oj-c/input-number";
import "oj-c/button";
import "ojs/ojknockout";
import 'ojs/ojtable';

class DashboardViewModel {

  value: ko.Observable<string>;
  // Observable 'O' is capital, firstname can have string or null both
  firstname: ko.Observable<string> | ko.Observable<any>;
  salary:ko.Observable<number> | ko.Observable<any>;
  users : ko.Observable<any>;
  constructor() {
    this.value = ko.observable("Green");
    // initialization
    this.firstname = ko.observable(null);
    this.salary = ko.observable(null);
    this.users = ko.observable(null);
    
  }
  // handling the events when button is clicked
  public handleClick = async (event:Event) => {
    let elementName = (event.currentTarget as HTMLElement).tagName;
    console.log("Name="+this.firstname()+", Salary="+this.salary());
    console.log("Element Name="+elementName)
    let id = parseInt(this.firstname());
    let URL = "https://jsonplaceholder.typicode.com/users/"+id;
    let res = await fetch(URL);
    let jsonData = await res.json();
    // display name, username, email, street, suite in the web-page
    this.firstname(jsonData.name);//assigns name to firstname
    console.log(jsonData);
    
  }
}

export = DashboardViewModel;

