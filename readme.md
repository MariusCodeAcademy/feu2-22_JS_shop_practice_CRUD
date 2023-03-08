# shop practice

### shop example link

https://www.figma.com/community/file/1104697168164533075

### shop api docs

https://dummyjson.com/docs/products

## Structure

1. index.html - shop page
2. add-product.html - add new item
3. update-product.html - update item info

## TODO:

### index.html

1. gauti visas prekes is api
2. nupiesti, sugeneruoti elementus htmle

### single-product.html

1. gauti prekes id
2. parisisiusti preke
3. nupieti preke htmle (sugeneruoti makeOneSingleItem single produkta)
4. paspaudus mygtukus iskviesti funkcijas kurios konsole logina
   1. iskonsolinti elemento id kuriame buvo paspaustas mygtukas

### add-product.html

1. sukuri htmle forma naujai prekei pridet
2. surinkti formos laukus ir issiusti i api (dokumentacija https://dummyjson.com/docs/products#add)
3. jei pavyko perradresuoti i index.html
4. jei ne pranesti apie klaida

```javascript
   {
   title: 'iPhone 9',
   description: 'An apple mobile which is nothing like apple',
   price: 549,
   discountPercentage: 12.96,
   category: 'smartphones',
   thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
}
```

### update-product.html

1. gauti prekes id
2. parisisiusti preke
3. htmle forma panasi i add-product.html
4. puslapiui pasileidus, mes kreipiames i serveri ir parsisiunciam post info
5. supildom formos laukams values is gauto objekto
6. vartotojas pakecia reikalinga info
7. surenkam formos ivesties lauku info
8. siunciam put request.
