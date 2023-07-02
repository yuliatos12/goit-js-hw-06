// Task 1
const categoryItems = document.querySelectorAll('li.item');
const itemQty = categoryItems.length;
console.log(`Nubmer of categories: ${itemQty}`)

// Task 2
categoryItems.forEach(category => {
    const categoryHeading = category.firstElementChild.textContent;
    const elemQty = category.lastElementChild.children.length;
    console.log(`Category: ${categoryHeading}`);
    console.log(`Elements: ${elemQty}`);
})
