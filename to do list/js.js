
document.addEventListener("DOMContentLoaded", function() {
   var n = window.prompt("please enter your name");
    window.document.getElementById('name').textContent = 'welcome ' + n;

    setTimeout(function(){
        window.document.getElementById('myText').style.display = 'none'; 
        document.body.style.background = '#FFFFFF';
        window.document.getElementById('Text').style.display = 'block';
    }, 5000);})
   


    document.addEventListener("DOMContentLoaded", function () {
        const taskList = document.getElementById("todoList");
        const addButton = document.getElementById("addButton");
        const taskInput = document.getElementById("taskInput");
    
        addButton.addEventListener("click", function () {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                const task = createTask(taskText);
                taskList.appendChild(task);
                taskInput.value = "";
            }});
        });
        
        
        function markAsCompleted(button) {
          var task = button.parentElement.querySelector("p");
          task.classList.toggle("completed");
          if (task.classList.contains("completed")) {
            task.style.textDecoration = "line-through";
           button.style.textDecoration = "line-through";
         
           };
            
        }
        
       
        function createTask(text) {
            const task = document.createElement("div");
            task.className = "task";
            task.innerHTML = `
                
                <p>${text}</p>
                <button id=check onclick="markAsCompleted(this)">Mark as completed</button>
            `;
        
            return task;
        
              };
     
    function toggleMode() {
        var body = document.body;
        var currentClass = body.className;
        if (currentClass === "dark-mode") {
            body.className = "";
            document.getElementById("toggle-icon").classList.remove("fa-sun");
            document.getElementById("toggle-icon").classList.add("fa-moon");
            body.style.backgroundColor = "#fff";
        } else {
            body.className = "dark-mode";
            document.getElementById("toggle-icon").classList.remove("fa-moon");
            document.getElementById("toggle-icon").classList.add("fa-sun");
            body.style.backgroundColor = "#333";
        }
    }

document.addEventListener("DOMContentLoaded", function() {
    const phrases = [
        "The only way to do great work is to love what you do.",
        "IT is not enoughto say or think, you must do",
        "Believe in your self and you have won half the better",
        "Our limitations only exist in your mind",
        ,"The future depends on what you do today.",
        "Believe you can and you're halfway there."
    ];
    
    let currentIndex = 0;
    
    function updatePhrase() {
        document.getElementById("output").textContent = phrases[currentIndex];
        currentIndex = (currentIndex + 1) % phrases.length;
    }
    
    updatePhrase();
    
    setInterval(updatePhrase, 4000);});
    