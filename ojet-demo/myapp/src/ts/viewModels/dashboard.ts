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
import "ojs/ojknockout";

class DashboardViewModel {
  value: ko.Observable<string>;
  // Observable 'O' is capital, firstname can have string or null both
  firstname: ko.Observable<string> | ko.Observable<any>;
  salary:ko.Observable<number> | ko.Observable<any>;
  constructor() {
    this.value = ko.observable("Green");
    // initialization
    this.firstname = ko.observable(null);
    this.salary = ko.observable(null);
  }
}

export = DashboardViewModel;
