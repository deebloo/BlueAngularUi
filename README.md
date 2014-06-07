Blue Angular Ui
=============

A ui component library for angular based on twitter bootstrap elements.

Searchable Option Menu:
 data(object): 'title' required as an object attribute
 searchable(bool): enables filtering for the list of items
 item-click(function): define a method to be called when an option is clicked. Method accepts one argument containing the                          clicked angular element (usable with jquery lite)

```HTML
<search-option data="searchOptionData"
               searchable="true"
               item-click="searchOptionClick"></search-option>
```
