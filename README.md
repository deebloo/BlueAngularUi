Blue Angular Ui
=============

A ui component library for angular based on twitter bootstrap elements.
This readme will be updated as more components are added.

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

#### Searchable Option Menu:

```HTML
<search-option data="navbarData"></search-option>
```

| Attribute  | Type | Definition
| ------------- | ------------- | ------------- |
| data  | array of objects  | 'title' and 'link 'required as object attributes |
