function submitted() {
    let name = document.querySelector("input[name='Name']").value;
    let dobInput = document.querySelector("input[name='DOB']").value;
    let output = document.getElementById("output");
    
    if (!dobInput) {
        output.innerHTML = "Please enter a valid date of birth.";
        return;
    }
    
    let dob = new Date(dobInput);
    let today = new Date();
    
    if (dob > today) {
        output.innerHTML = "You are not even born yet!";
        return;
    }
    
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = ageYears * 12 + (today.getMonth() - dob.getMonth());
    let ageDays = Math.floor((today - dob) / (1000 * 60 * 60 * 24));
    
    if (
        today.getMonth() < dob.getMonth() || 
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
        ageYears--;
    }
    
    const generations = [
        { name: "Greatest Generation (Pre-1946)", start: new Date("1901-01-01"), end: new Date("1945-12-31") },
        { name: "Baby Boomer (1946-1964)", start: new Date("1946-01-01"), end: new Date("1964-12-31") },
        { name: "Generation X (1965-1980)", start: new Date("1965-01-01"), end: new Date("1980-12-31") },
        { name: "Millennial (1981-1996)", start: new Date("1981-01-01"), end: new Date("1996-12-31") },
        { name: "Generation Z (1997-2012)", start: new Date("1997-01-01"), end: new Date("2012-12-31") },
        { name: "Generation Alpha (2013-Present)", start: new Date("2013-01-01"), end: today }
    ];
    
    let generation = "the grave";
    for (let gen of generations) {
        if (dob >= gen.start && dob <= gen.end) {
            generation = gen.name;
            break;
        }
    }
    
    output.innerHTML = `Hello, ${name}!<br>
        You are ${ageYears} years old.<br>
        You are ${ageMonths} months old.<br>
        You are ${ageDays} days old.<br>
        You belong to ${generation}.`;
}
