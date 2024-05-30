const marks = [80, 90, 100, 70, 60];
// more control
for (let i = 0; i<marks; i=i+2) {
    console.log("Index:", i, "Mark", marks[i]);
}
// readable and simple (if we want index like value of array then prefer this)
for (let idx in marks){
    console.log("Index:", idx, "Mark", marks[idx]);
}
// readable and cleaner(continued by previous comment , otherwise prefer this)
for (let mark of marks) {
    console.log("Mark:", mark);
}

// Ex-1 
const cart = [
    { name: "Apple", price: 0.5, quantity: 4 },
    { name: "Banana", price: 0.25, quantity: 6 },
  ];
  
  const newItems = [
    { name: "Cherry", price: 0.75, quantity: 5 },
    { name: "Date", price: 1, quantity: 3 },
  ];
  
  //   Ex 1.1: Combine cart + newItems
  
  for (let item of cart) {
    var carts = [...cart,...newItems];
    console.log(carts);
  }
  let res = 0;
  for (let i in carts) {
    let cost = carts[i].price * carts[i].quantity;
    res = res + cost;

  }
  console.log(res);
  
  // Ex 2 : Rating 4.7 and above | Recommendations List
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];
let highRatedBooks = [];
for(let i in books){
    if(books[i].rating>=4.7){
        highRatedBooks.push(books[i].title);
    }
}
console.log(highRatedBooks);
// for(let i of books){
 //   if(i.rating>=4.7){
   //     console.log(i.title);
    //}

// Ex 3: If employee's grades 80 or above promote them
const employes = [
    { id: 1, name: "Alice", grade: 78 },
    { id: 2, name: "Bob", grade: 85 },
    { id: 3, name: "Charlie", grade: 92 },
    { id: 4, name: "David", grade: 88 },
    { id: 5, name: "Eva", grade: 76 },
  ];
  let idStatus = [];
  for(let i in employes){
    if(employes[i].grade>=80){
        var item = {id:employes[i].id, status:"Promoted"};
        idStatus.push(item);
    }
  }
  console.log(idStatus);
  //let employeGood = [];
  // for(let employe of employes){
   // if(employes.grade>=80){
    //employeGood.push({id: employe.id, status:"Promoted"})
    // console.log(employeGood);
  
  // This should output:
  // [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]
  
  
  
  // Ex4: Top 1 movie titles
  
  const movies = [
    { title: "Inception", ratings: [5, 4, 5, 4, 5] },
    { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
    { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
    { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
    { title: "Memento", ratings: [4, 5, 4, 5, 4] },
  ];

  for(let i in movies){
    if(movies(i).ratings)

  }
  // Expected Output:  The Dark Knight 
  
  