const ageInDays = (name , lastName , age) => {
    const fullName = String( (name.charAt(0).toUpperCase() + name.slice(1)) + ( lastName.charAt(0).toUpperCase() + lastName.slice(1)));
    const ageInDays = age*365 ;
    console.log("The person's full name is "+fullName+" and their age in days is "+ageInDays+" days."); 
}


ageInDays( "ramesh" , "sukla" , 1 );
ageInDays("Shivam", "mishra", 22);