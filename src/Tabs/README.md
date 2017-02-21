# Tabs component


## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| items | array of objects (see item)| - | + | Specifies tabs |
| onClick | func | - | + | callback on tab click |
| activeId | string or number | - | - | index of selected tab |
| type | string ('default', 'compact', 'uniformSide', 'uniformFull') | 'default' | - | tabs type |

## Item

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| id | string or number| - | + | Specifies the item id |
| title | string or node | - | + | Value to be shown on tab |


