import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../services/database.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-forms',
  templateUrl: './orderService.create.component.html',
  styleUrls: ['./orderService.create.component.css'],
  providers:[DatabaseService]
})
export class OrderServiceCreateComponent implements OnInit {

  public new_lastName;
  public new_firstName;
  public new_email;
  public new_comments;
  public new_options;
  public new_description
  public new_residentName

  constructor(private database: DatabaseService) { }

  ngOnInit() {
  }

  createPerson(lastName, firstName, email, comments, option) {

    let lastname  = { lastName : lastName };
    let firstname = { firstName: firstName };
    let Email     = { email    : email };
    let Comments  = { comments : comments };
    let Option    = { options  : option };

    this.database.createPerson(lastname, firstname, Email, Comments, Option).subscribe(
      data => {
        return true;
      },
      error => {
        console.error("Error creating item");
        return Observable.throw(error);
      }
    );
  }
}
