Blue Angular Ui
=============

A ui component library for angular based on twitter bootstrap elements.
This readme will be updated as more components are added.

#### Navbar:
NOTE: in order for the active class to be added automatically $locationProvider needs to be set in your application configuration.
Ex. $locationProvider.html5Mode(false).hashPrefix('!');

```HTML
<navbar data="navbarData" navbar-title="'Navbar'"></navbar>
```

| Attribute  | Type | Definition
| ------------- | ------------- | ------------- |
| data  | array of objects  | 'title' and 'link 'required as object attributes |
| navbar-title  | string  | if set title will display in the navbar, if not nothing will be displayed. |

#### Searchable Option Menu:

```HTML
<search-option option-title="'Select Option'"
               data="searchOptionData"
               searchable="true"
               item-click="searchOptionClick"></search-option>
```

| Attribute  | Type | Definition
| ------------- | ------------- | ------------- |
| option-title  | string  | title of the option menu |
| data  | array of objects  | 'title' required as an object attribute |
| searchable  | bool  | enables filtering |
| item-click  | method  | define a method to be called when an option is clicked. Method accepts one argument containing the clicked angular element (usable with jquery lite) |
