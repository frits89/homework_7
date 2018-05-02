var Name = document.getElementById("Name");
var Surname = document.getElementById("Surname");
var Patronymic = document.getElementById("Patronymic");
var Age = document.getElementById("Age");
var UserAgesDay = document.getElementById("UserAgesDay");
var button = document.getElementById("button");
var genderMan = document.getElementById("genderMan");
var genderWoman = document.getElementById("genderWoman");
var pension = document.getElementById("pension");

var pension_age_woman = 55;
var pension_age_man = 60;
var retiremehtAge = document.getElementById('pension');


button.addEventListener("click",function(){
    userNames.innerText ="ФИО:"+ " " + Surname.value + " " + Name.value + " " + Patronymic.value;
    UserAges.innerText ="возраст,лет:" + " " + Age.value;
    UserAgesDay.innerText ="возраст, дней:" + +Age.value*365;

    (document.getElementById('genderMan').checked)?
        gender.innerHTML = 'пол: Мужской':
        (document.getElementById('genderWoman').checked)?
            gender.innerHTML = 'пол: Женский': '';

    ((document.getElementById('genderMan').checked) && (Age.value < 60))?
        retiremehtAge.innerHTML = 'пенсионный возраст: ' + 'Нет':
        ((document.getElementById('genderMan').checked) && (Age.value >= 60))?
            retiremehtAge.innerHTML = 'пенсионный возраст: ' + 'Да':

            ((document.getElementById('genderWoman').checked) && (Age.value < 55))?
                retiremehtAge.innerHTML = 'пенсионный возраст: ' + 'Нет':
                retiremehtAge.innerHTML = 'пенсионный возраст: ' + 'Да';

    Surname.value=Name.value=Patronymic.value=Age.value=" ";
});