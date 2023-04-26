const productsList = [
    {
        "name": "Tostada de Arroz",
        "category": "sintacc",
        "type": [
            "Sin TACC",
            "tostada"
        ],
        "brand": "LULEMUU",
        "price": 90,
        "unit": 120,
        "stock": 27,
        "img": "",
    },
    {
        "name": "Galletitas de Arroz",
        "category": "sintacc",
        "type": [
            "Sin TACC",
            "galletita"
        ],
        "brand": "CRISPINO",
        "price": 100,
        "unit": 100,
        "stock": 37,
        "img": "",
    },
    {
        "name": "Harina de Quínoa",
        "category": "sintacc",
        "type": [
            "Sin TACC",
            "harina",
            "quinoa"
        ],
        "brand": "",
        "price": 330,
        "unit": 250,
        "stock": 42,
        "img": "",
    },
    {
        "name": "Harina de Castañas de cajú",
        "category": "sintacc",
        "type": [
            "Sin TACC",
            "harina",
            "castaña",
            "caju"
        ],
        "brand": "",
        "price": 330,
        "unit": 180,
        "stock": 15,
        "img": "",
    },
    {
        "name": "Polenta Organica",
        "category": "sintacc",
        "type": [
            "Sin TACC",
            "polenta",
            "organiga"
        ],
        "brand": "",
        "price": 130,
        "unit": 450,
        "stock": 22,
        "img": "",
    },
    {
        "name": "Fécula de Mandioca",
        "category": "sintacc",
        "type": [
            "Sin TACC",
            "fecula",
            "mandioca",
            "harina"
        ],
        "brand": "",
        "price": 230,
        "unit": 500,
        "stock": 39,
        "img": "",
    },
    {
        "name": "Polvo para hornear",
        "category": "sintacc",
        "type": [
            "Sin TACC",
            "polvo",
            "hornear"
        ],
        "brand": "",
        "price": 140,
        "unit": 200,
        "stock": 51,
        "img": "",
    },
    {
        "name": "Pan Rallado",
        "category": "sintacc",
        "type": [
            "Sin TACC",
            "pan",
            "rallado"
        ],
        "brand": "",
        "price": 220,
        "unit": 500,
        "stock": 49,
        "img": "",
    },
    {
        "name": "Azucar Negar",
        "category": "sintacc",
        "type": [
            "Sin TACC",
            "azucar"
        ],
        "brand": "",
        "price": 240,
        "unit": 1000,
        "stock": 14,
        "img": "",
    },
    {
        "name": "Pre-Mezcla para Panificados, Pastas, y Postres",
        "category": "sintacc",
        "type": [
            "Sin TACC",
            "premezcla"
        ],
        "brand": "",
        "price": 150,
        "unit": 500,
        "stock": 31,
        "img": "",
    },
    {
        "name": "Almohaditas rellenas de frutilla, avellana",
        "category": "cereales",
        "type": [
            "almohaditas",
            "frutilla",
            "avellana"
        ],
        "brand": "",
        "price": 70,
        "unit": 200,
        "stock": 2,
        "img": "",
    },
    {
        "name": "Almohaditas de chocolate rellenas de chocolate blanco, limon",
        "category": "cereales",
        "type": [
            "almohaditas",
            "chocolate",
            "limon"
        ],
        "brand": "",
        "price": 70,
        "unit": 100,
        "stock": 44,
        "img": "",
    },
    {
        "name": "Almohaditas de Salvado",
        "category": "cereales",
        "type": [
            "almohaditas",
            "salvado"
        ],
        "brand": "",
        "price": 60,
        "unit": 100,
        "stock": 44,
        "img": "",
    },
    {
        "name": "Almohaditas de arroz rellenas de frutilla, limon, chocolate",
        "category": "cereales",
        "type": [
            "almohaditas",
            "arroz",
            "frutilla",
            "limon",
            "chocolate"
        ],
        "brand": "",
        "price": 70,
        "unit": 100,
        "stock": 57,
        "img": "",
    },
    {
        "name": "Copos de maiz sin azucar",
        "category": "cereales",
        "type": [
            "copos",
            "maiz"
        ],
        "brand": "",
        "price": 60,
        "unit": 200,
        "stock": 30,
        "img": "",
    },
    {
        "name": "Copos de maiz con azucar",
        "category": "cereales",
        "type": [
            "copos",
            "maiz"
        ],
        "brand": "",
        "price": 80,
        "unit": 200,
        "stock": 56,
        "img": "",
    },
    {
        "name": "Copos de maiz con miel",
        "category": "cereales",
        "type": [
            "copos",
            "maiz"
        ],
        "brand": "",
        "price": 80,
        "unit": 200,
        "stock": 54,
        "img": "",
    },
    {
        "name": "Aritos de colores",
        "category": "cereales",
        "type": [
            "aritos",
            "colores"
        ],
        "brand": "",
        "price": 150,
        "unit": 200,
        "stock": 4,
        "img": "",
    },
    {
        "name": "Aritos de miel",
        "category": "cereales",
        "type": [
            "aritos",
            "miel"
        ],
        "brand": "",
        "price": 150,
        "unit": 200,
        "stock": 15,
        "img": "",
    },
    {
        "name": "Ositos de miel",
        "category": "cereales",
        "type": [
            "ositos",
            "miel"
        ],
        "brand": "",
        "price": 160,
        "unit": 200,
        "stock": 4,
        "img": "",
    },
    {
        "name": "Pizza vegetal a base de almendras",
        "category": "veggie",
        "type": [
            "pizza",
            "vegetal",
            "veggie",
            "vegano"
        ],
        "brand": "Felices las vacas",
        "price": 740,
        "unit": 1,
        "stock": 21,
        "img": "",
    },
    {
        "name": "Medallones vegetales",
        "category": "veggie",
        "type": [
            "medallones",
            "vegetal",
            "veggie",
            "vegano"
        ],
        "brand": "UFF",
        "price": 290,
        "unit": 1,
        "stock": 3,
        "img": "",
    },
    {
        "name": "Medallones vegetales rellenos",
        "category": "veggie",
        "type": [
            "medallones",
            "rellenos",
            "vegetal",
            "veggie",
            "vegano"
        ],
        "brand": "UFF",
        "price": 350,
        "unit": 1,
        "stock": 12,
        "img": "",
    },
    {
        "name": "Medallones vegetales Sin TACC de quinoa, zanahoria y cebolla caramelizada x4 unidades",
        "category": "sintacc",
        "type": [
            "sin TACC",
            "zanahoria",
            "cebolla caramelizada"
        ],
        "brand": "Mundo Vegetal",
        "price": 290,
        "unit": 1,
        "stock": 67,
        "img": "",
    },
    {
        "name": "Medallones vegetales sin TACC de quinoa, espinaca y zucchini x4 unidades",
        "category": "sintacc",
        "type": [
            "sin TACC",
            "quinoa",
            "espinaca",
            "zucchini"
        ],
        "brand": "Mundo Vegetal",
        "price": 290,
        "unit": 1,
        "stock": 67,
        "img": "",
    },
    {
        "name": "Bastoncitos vegetales sin TACC de espinaca, remolacha, morron y berenjena",
        "category": "veggie",
        "type": [
            "espinaca",
            "remolacha",
            "morron",
            "berenjena"
        ],
        "brand": "Mundo Vegetal",
        "price": 270,
        "unit": 1,
        "stock": 19,
        "img": "",
    },
    {
        "name": "Bastoncitos vegetales sin TACC de remolacha, proteina de arveja y arroz yamani",
        "category": "veggie",
        "type": [
            "remolacha",
            "proteina de arveja",
            "proteina de arroz yamani"
        ],
        "brand": "Mundo Vegetal",
        "price": 270,
        "unit": 1,
        "stock": 46,
        "img": "",
    },
    {
        "name": "Bastoncitos vegetales sin TACC de morron, berenjena, proteina de arveja y arroz yamani",
        "category": "veggie",
        "type": [
            "morron",
            "berenjena",
            "proteina de arveja",
            "proteina de arroz yamani"
        ],
        "brand": "Mundo Vegetal",
        "price": 270,
        "unit": 1,
        "stock": 40,
        "img": "",
    },
    {
        "name": "Medallones vegetales sin TACC x2 unidades",
        "category": "sintacc",
        "type": [
            "sin TACC",
            "lentejas"
        ],
        "brand": "VIA VEG",
        "price": 170,
        "unit": 1,
        "stock": 83,
        "img": "",
    },
    {
        "name": "Ñoquis sin TACC",
        "category": "sintacc",
        "type": [
            "sin TACC",
            "pastas",
            "ñoquis"
        ],
        "brand": "",
        "price": 320,
        "unit": 500,
        "stock": 4,
        "img": "",
    },
    {
        "name": "Proteina Gold 1kg",
        "category": "suplementos",
        "type": [
            "Proteina",
            "Suplemento",
            "Fit"
        ],
        "brand": "Body Extreme Nutrition",
        "price": 10200,
        "unit": 1,
        "stock": 10,
        "img": "",
    },
    {
        "name": "Animal Max",
        "category": "suplemento",
        "type": [
            "Animal Max",
            "Suplemento",
            "Fit"
        ],
       "brand": "Body Extreme Nutrition",
        "price": 13300,
        "unit": 1,
        "stock": 3,
        "img": "",
    },
    {
        "name": "BCAA Explosive Power 120 Cap.",
        "category": "suplemento",
        "type": [
            "BCAA",
            "Suplemento",
            "Fit"
        ],
        "brand": "Body Extreme Nutrition",
        "price": 8800,
        "unit": 120,
        "stock": 4,
        "img": "",
    },
    {
        "name": "Carblock 4000",
        "category": "suplemento",
        "type": [
            "Inhibidor de carbohidratos",
            "Suplemento",
            "Fit"
        ],
        "brand": "Body Extreme Nutrition",
        "price": 8800,
        "unit": 120,
        "stock": 9,
        "img": "",
    },
    {
        "name": "Power Complex 9000",
        "category": "suplemento",
        "type": [
            "Power Complex",
            "suplemento",
            "Fit"
        ],
        "brand": "Body Extreme Nutrition",
        "price": 12700,
        "unit": 1,
        "stock": 7,
        "img": "",
    }
];

export default productsList;