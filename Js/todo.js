// proceed function
const proceedNow = document.getElementById("proceedNow");
let count = 1;
proceedNow.addEventListener("click", function () {
  // row values
  const totalRow = parseInt(document.getElementById("areaNumber").value);
  if (confirm("Are you sure want to create  " + totalRow)) {
    const table = document.getElementById("table");

    for (i = 0; i < totalRow; i++) {
      const createTr = document.createElement("tr");
      createTr.innerHTML = `
            <td class="index" id="indexNumber">${count++} </td>
            <td> <input type="text" placeholder="areaName" name="areaName" id="areaName" class="areaName"/></td>
            <td>
        
            <td> <input style="display:hidden" type="file" placeholder="areaImage" name="files" accept="png" id="files" class="files" /> </td>
            <td class="actionButton">
            <button class="dltBtn">Delete</button>
            </td>
            `;
      table.appendChild(createTr);
    }

    // save local storage
    const indexNumber = document.getElementById("indexNumber").innerText;
    const areaName = document.getElementById("areaName").value;
    const imageValue = document.getElementById("files");
    const previousItem = localStorage.getItem("Table");

    // allData(indexNumber, areaName, imageValue)

    //delete items
    const deleteBtn = document.getElementsByClassName("dltBtn");

    for (let button of deleteBtn) {
      button.addEventListener("click", function (event) {
        console.log(event.target.parentNode.parentNode.remove());
        count--;

        // update index number
        const TotalIndex = document.getElementsByClassName("index");
        for (let i = 0; i < TotalIndex.length; i++) {
          TotalIndex[i].innerHTML = i + 1;
        }
      });
    }
  }
});

// send to mongodb
const saveAll = document.getElementById("SaveALL");
saveAll.addEventListener("click", () => {
  const indexNumbers = document.querySelectorAll("#indexNumber");
  const areaNames = document.querySelectorAll("#areaName");
  const imageValues = document.querySelectorAll("#files");
  const values = {};
  console.log(values);

  // total image and area
  imageValues.forEach((img, index) => {
    const formData = new FormData();
    formData.append("image", img.files[0]);

    // image api from imgbb
    const url = "https://api.imgbb.com/1/upload?key=9f421b965d953a6b04039f9b09ad45b7";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const imgUrl = data.data.display_url;
        console.log(imgUrl);
        values[index] = {
          indexNumber: indexNumbers[index].innerText,
          areaName: areaNames[index].value,
          imageValues: imgUrl,
        };

        // Send the POST request after the values object has been fully populated
        const serverUrl = "https://pakapepe-admin-server.vercel.app/todoItems";
        fetch(serverUrl, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ values }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.log(error));
      });
  });
});

// const displayArea = (index, areaName, areaImage)=>{
//     const tableContainer = document.getElementById('tableContainer')
//     const proceedContainer = document.createElement('tr')
//     proceedContainer.innerHTML= `
//     <td>${index}</td>
//     <td class="">${areaName}
//     <button style="margin-bottom: 4px; color: white;" id="EditAreaName">edit</butt>
//     </td>
//     <td class="">${areaImage}
//     <button class="margin-bottom: 4px; color: white;" id="EditImage">edit</butt></td>
//     <td>

//     <button class="margin-bottom: 4px; color: white;" id="Save">Save</button>
//     <button class="margin-bottom: 4px; color: white; Delete">Delete</button>

//     </td>
//     `;
//     tableContainer.appendChild(proceedContainer);

//     //Edit Area Name
//     const EditArea= document.getElementById('EditAreaName')
//      //Change Area Name
//     EditArea.addEventListener('click', (e)=>{
//         const editAreaName= JSON.parse(localStorage.getItem("table"))
//         editAreaName.forEach(e =>{
//             console.log(e.areaName)
//         })
//     })
//     //Change Image
//     const EditImage= document.getElementById('EditImage')
//     //Replace image
//     EditArea.addEventListener('click', ()=>{
//         console.log(areaName)
//     })

//     //Confirm Submit Button
//     const confirmSubmit = document.getElementById('confirmSubmit');
//     confirmSubmit.addEventListener('click', ()=>{

//         console.log(areaImage, areaName)
//     })

//     const deleteBtn = document.getElementsByClassName('Delete')
//     for(let button of deleteBtn){
//         button.addEventListener('click', function(e){
//             console.log(e.target, 'hello')
//         })
//     }

// }

// const temp = []
// let count = 1;
// const proceedRow = document.getElementById('submitProceed');
// proceedRow.addEventListener('click', () =>{

//     console.log('hello')
//     const areaName = document.getElementById('areaName').value;
//     const areaImage = document.getElementById('areaImg').value;
//     const index = count++;
//     console.log(areaName, areaImage , index)

//     const previousItem =JSON.parse(localStorage.getItem("table"))
//     console.log(previousItem)

//     const data = {index, areaName , areaImage}

//     if(previousItem){
//         temp.push(...previousItem, data)
//         localStorage.setItem("table", JSON.stringify(temp));

//     } else{
//         temp.push(data)
//         localStorage.setItem("table", JSON.stringify(temp));
//     }

//     console.log(temp)
//     // const previousItem =JSON.parse(localStorage.getItem("table"))
//     if(temp.length){
//         document.getElementById('tableContainer').innerHTML=''
//         temp.forEach(element =>  {
//             displayArea(element.index, element.areaName, element.areaImage)
//         });
//     }

// })

// const previousItem =JSON.parse(localStorage.getItem("table"))
// if(previousItem){
//     previousItem.forEach((element) =>  {
//         displayArea(element.index, element.areaName, element.areaImage)
//     });
