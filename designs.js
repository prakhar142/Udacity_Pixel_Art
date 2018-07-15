
const forms = document.querySelector('#sizePicker');
forms.addEventListener('submit',makeGrid);
const canvas =  document.querySelector('#pixelCanvas');

function makeGrid(e) {
  canvas.innerHTML='';
  let heightGrid = document.querySelector('#inputHeight').value; 
  let widthGrid = document.querySelector('#inputWidth').value;
  
  e.preventDefault();
  for(let i=1;i<=heightGrid;i++)
  {
     let row = document.createElement('tr');
     for(let j=1;j<=widthGrid;j++)
     {
        let column = document.createElement('td');
        row.appendChild(column);
     }//td  
     canvas.appendChild(row);
         
  }//tr  
  canvas.addEventListener('click',function(evt){
     let colorPicker = document.querySelector('#colorPicker').value;
     if(evt.target.nodeName === 'TD'){
     evt.target.style.backgroundColor = colorPicker;
     }
  });
}//function