function counter() {
    // Write your code below. Hint: you can finish it in about 3-5 lines.
    //Create a variable and store the tage with the id 'counter-number' inside it
        counter_number = document.getElementById('counter-number');
    //Accesses the p tag and adds 1 to its number
        counter_number.innerHTML = parseInt(counter_number.innerHTML) + 1;
    }
