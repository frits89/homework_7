var Name = document.getElementById("Name");
    var Surname = document.getElementById("Surname");
    var Patronymic = document.getElementById("Patronymic");
    var Age = document.getElementById("Age");
    var UserAgesDay = document.getElementById("UserAgesDay");
    var button = document.getElementById("button");
    var genderMan = document.getElementById("genderMan");
    var genderWoman = document.getElementById("genderWoman");
    var pension = document.getElementById("pension");


    button.addEventListener("click",function(){
        userNames.innerText ="ФИО:"+ " " + Surname.value + " " + Name.value + " " + Patronymic.value;
        UserAges.innerText ="возраст,лет:" + " " + Age.value;
        UserAgesDay.innerText ="возраст, дней:" + +Age.value*365;

        if (genderMan.checked == true) {
            gender.innerText ="пол:Мужской";
            if(Age.value < 60){
                pension.innerText="пенсионный возраст: нет";
            }
            else{
                pension.innerText="пенсионный возраст: да";
            }
        }
        else if(genderWoman.checked == true){
            gender.innerText ="пол:Женский";
            if(Age.value < 55){
                pension.innerText="пенсионный возраст: нет";
            }
            else{
                pension.innerText="пенсионный возраст: да";
            }
        }
        Surname.value=Name.value=Patronymic.value=Age.value=" ";
    });