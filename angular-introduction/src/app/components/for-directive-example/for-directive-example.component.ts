import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from "../person-table/person-table.component";

@Component({
    selector: 'app-for-directive-example',
    standalone: true,
    templateUrl: './for-directive-example.component.html',
    styleUrl: './for-directive-example.component.css',
    imports: [PersonTableComponent]
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    {
      givenName: 'John',
      surName: 'Doe',
      age: 100,
      email: 'doe.john@gmail.com',
      address: "New York, USA"
    },
    {
      givenName: 'Jane',
      surName: 'Smith',
      age: 35,
      email: 'jane.smith@example.com',
      address: "Los Angeles, USA"
    },
    {
      givenName: 'Michael',
      surName: 'Johnson',
      age: 45,
      email: 'michael.johnson@example.com',
      address: "Chicago, USA"
    },
    {
      givenName: 'Emily',
      surName: 'Brown',
      age: 28,
      email: 'emily.brown@example.com',
      address: "Houston, USA"
    },
    {
      givenName: 'David',
      surName: 'Lee',
      age: 50,
      email: 'david.lee@example.com',
      address: "Miami, USA"
    },
    {
      givenName: 'Sarah',
      surName: 'Taylor',
      age: 65,
      email: 'sarah.taylor@example.com',
      address: "San Francisco, USA"
    },
    {
      givenName: 'Daniel',
      surName: 'Martinez',
      age: 30,
      email: 'daniel.martinez@example.com',
      address: "Dallas, USA"
    },
    {
      givenName: 'Jessica',
      surName: 'Garcia',
      age: 40,
      email: 'jessica.garcia@example.com',
      address: "Phoenix, USA"
    },
    {
      givenName: 'James',
      surName: 'Rodriguez',
      age: 55,
      email: 'james.rodriguez@example.com',
      address: "Philadelphia, USA"
    },
    {
      givenName: 'Olivia',
      surName: 'Hernandez',
      age: 22,
      email: 'olivia.hernandez@example.com',
      address: "San Antonio, USA"
    }
  ];

}
