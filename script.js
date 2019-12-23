



const studentList = document.getElementsByClassName('student-item');
const pageItems = 10;



const showPage = (list, page) => {
   const startIndex = (page * pageItems) - pageItems;
   const endIndex = (page * pageItems) - 1;

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i <= endIndex) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';







      }
   }
}

const appendPageLinks = (list) => {
   const numOfPages = Math.ceil(list.length / pageItems);
   const div = document.createElement('div');
   div.className = ('pagination');
   const page = document.querySelector('.page');
   page.appendChild(div);
   const ul = document.createElement("ul");
   div.appendChild(ul);



   //loop to create and append a & li elements to the dom as well as setting attributes and text content 
   for (let i = 0; i < numOfPages; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      ul.appendChild(li);
      li.appendChild(a);
      a.setAttribute('href', '#');
      a.textContent = [i + 1];

   }
   //setting active class to first a element 
   let pageLinks = document.querySelectorAll('a');
   pageLinks[0].className = ('active');
   // adding event listener to any pagination links.
   ul.addEventListener('click', function (event) {
      for (let j = 0; j < pageLinks.length; j++) {

         //adding and removing active class from a elements
         pageLinks[j].classList.remove('active');
         let linkClick = event.target;
         linkClick.classList.add("active");
         //calling function with studentList and linkClicks content 
         showPage(studentList, linkClick.textContent);


      }

   })
}
// calling functions
showPage(studentList, 1);
appendPageLinks(studentList);