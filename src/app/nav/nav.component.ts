import { Component } from "@angular/core";

@Component({
    selector:'nav-bar',
    templateUrl:'./navbar.html',
    styles:[
        `ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111;
}
    }`]   
})

export class NavBarComponent{


}