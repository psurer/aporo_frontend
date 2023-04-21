import { Component } from '@angular/core';
// we import the Component decorator from the @angular/core module, which is used to define an Angular component.

// The MenuItem interface defines the structure of each object in the menuItems array in the NavbarComponent class.
// Each object represents a menu item that will be displayed in the navbar. It has two properties:
interface MenuItem { 
  label: string;
  link: string;
}
// the @Component decorator is used to define the metadata of the component, such as the selector, template, and styles. In this case:
// The selector property sets the name of the component's HTML tag, which is app-navbar.
// The templateUrl property sets the location of the component's HTML template file, which is ./navbar.component.html.
// The styleUrls property sets the location of the component's CSS styles file, which is ./navbar.component.scss.
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent { //our main class of the component. 

  //public logoUrl: string property is a string that sets the URL of the logo image. It is defined as public so that it can be accessed by other components.
  public logoUrl: string = 'assets/images/aporo-logo.jpeg'; // Replace with the actual logo URL

  // we have the dropDownItems Array to hold our items that will be displayed in the dropdown menu
  public dropdownItems: Array<MenuItem> = [
    { label: 'Dropdown Item 1', link: '/dropdown-item-1' },
    { label: 'Dropdown Item 2', link: '/dropdown-item-2' },
  ];
  public isMenuOpen: boolean = false;
  /* here the public menuItems: Array<MenuItem> property is an array of objects that represent
   the menu items we will have in our navbar.  
   *** aka it contains the menu items that will be displayed in the navbar. ***
  Each object has a label property, which is the text of the menu item, and a link property, which is the URL of the page 
  that the menu item links to. We will handle this with our routing
  The MenuItem interface is defined at the bottom of the code, which specifies the structure 
  of each menu item object. */
  public menuItems: Array<MenuItem> = [
    { label: 'Services', link: '/services' },
    { label: 'About', link: '/about' },
  ];

  // constructor() method is the default constructor of the class. It is empty here, as there is no initialization needed.
  constructor() { } 


   // toggleMenu method toggles the value of isMenuOpen property between true and false
  
public toggleMenu(): void {
  this.isMenuOpen = !this.isMenuOpen;
}

}
