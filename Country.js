class Country {
    name;
    lang;
    greeting;
    colors;

    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    };

    DisplayColors(){
        let color1 = document.getElementById("Color1");
        let color2 = document.getElementById("Color2");
        let color3 = document.getElementById("Color3");
        color1 = document.getElementById("Color1").style.backgroundColor = this.colors[0];
        color2 = document.getElementById("Color2").style.backgroundColor = this.colors[1];
        color3 = document.getElementById("Color3").style.backgroundColor = this.colors[2];
    };
}
let usa = new Country("USA", "English", "Hello! How are you?", ["red", "white", "blue"]);
let germany = new Country("Germany", "German", "Hallo! Wie geht es Ihnen?", ["black", "red", "gold"]);
let france = new Country("France", "French", "Salut! Comment ca va?", ["blue", "white", "red"]);
let ireland = new Country("Ireland", "English", "Top of the morning to ye", ["green", "white", "orange"]);
let scotland = new Country("Scotland", "English", "Gled tae meet ye A'm gled tae meet ye", ["blue", "white", "blue"]);


function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let name1 = document.getElementById("CountryName");
    let lang1 = document.getElementById("OfficialLanguage");
    let greeting1 = document.getElementById("HelloWorld");

    if (input === "USA") {
        //set country to usa 
        name1.innerText = usa.name;
        lang1.innerText = usa.lang;
        greeting1.innerText = usa.greeting;
    }
    else if (input === "Germany") {
        name1.innerText = germany.name;
        lang1.innerText = germany.lang;
        greeting1.innerText = germany.greeting;
    }
    else if (input === "France") {
        name1.innerText = france.name;
        lang1.innerText = france.lang;
        greeting1.innerText = france.greeting;
    }
    else if (input === "Ireland"){
        name1.innerText = ireland.name;
        lang1.innerText = ireland.lang;
        greeting1.innerText = ireland.greeting;
    }
    else if (input === "Scotland"){
        name1.innerText = scotland.name;
        lang1.innerText = scotland.lang;
        greeting1.innerText = scotland.greeting;
    }

}

function PushToWebsite(country)
{
    country.DisplayColors()
    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.lang;
    document.getElementById("HelloWorld").innerText = country.greeting;
}