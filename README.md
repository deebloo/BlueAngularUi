Blue Angular Ui
=============

A ui component library for angular based on twitter bootstrap elements.

#### Searchable Option Menu:

| Attribute  | Type | Definition
| ------------- | ------------- | ------------- |
| data  | array of objects  | 'title' required as an object attribute |
| searchable  | bool  | enables filtering |
| item-click  | method  | define a method to be called when an option is clicked. Method accepts one argument containing the clicked angular element (usable with jquery lite) |

```HTML
<search-option data="searchOptionData"
               searchable="true"
               item-click="searchOptionClick"></search-option>
```
