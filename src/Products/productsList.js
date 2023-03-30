const productsList = [
    {
        "name": "Tostada de Arroz",
        "category": "Sin TACC",
        "type": [
            "Sin TACC",
            "tostada"
        ],
        "brand": "LULEMUU",
        "price": 90,
        "unit": 120,
        "stock": 27,
        "img": "",
        "id": "1"
    },
    {
        "name": "Galletitas de Arroz",
        "category": "Sin TACC",
        "type": [
            "Sin TACC",
            "galletita"
        ],
        "brand": "CRISPINO",
        "price": 100,
        "unit": 100,
        "stock": 37,
        "img": "",
        "id": "2"
    },
    {
        "name": "Harina de Quínoa",
        "category": "Sin TACC",
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
        "id": "3"
    },
    {
        "name": "Harina de Castañas de cajú",
        "category": "Sin TACC",
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
        "id": "4"
    },
    {
        "name": "Polenta Organica",
        "category": "Sin TACC",
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
        "id": "5"
    },
    {
        "name": "Fécula de Mandioca",
        "category": "Sin TACC",
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
        "id": "6"
    },
    {
        "name": "Polvo para hornear",
        "category": "Sin TACC",
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
        "id": "7"
    },
    {
        "name": "Pan Rallado",
        "category": "Sin TACC",
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
        "id": "8"
    },
    {
        "name": "Azucar Negar",
        "category": "Sin TACC",
        "type": [
            "Sin TACC",
            "azucar"
        ],
        "brand": "",
        "price": 240,
        "unit": 1000,
        "stock": 14,
        "img": "",
        "id": "9"
    },
    {
        "name": "Pre-Mezcla para Panificados, Pastas, y Postres",
        "category": "Sin TACC",
        "type": [
            "Sin TACC",
            "premezcla"
        ],
        "brand": "",
        "price": 150,
        "unit": 500,
        "stock": 31,
        "img": "",
        "id": "10"
    },
    {
        "name": "Almohaditas rellenas de frutilla, avellana",
        "category": "Cereales",
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
        "id": "11"
    },
    {
        "name": "Almohaditas de chocolate rellenas de chocolate blanco, limon",
        "category": "Cereales",
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
        "id": "12"
    },
    {
        "name": "Almohaditas de Salvado",
        "category": "Cereales",
        "type": [
            "almohaditas",
            "salvado"
        ],
        "brand": "",
        "price": 60,
        "unit": 100,
        "stock": 44,
        "img": "",
        "id": "13"
    },
    {
        "name": "Almohaditas de arroz rellenas de frutilla, limon, chocolate",
        "category": "Cereales",
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
        "id": "14"
    },
    {
        "name": "Copos de maiz sin azucar",
        "category": "Cereales",
        "type": [
            "copos",
            "maiz"
        ],
        "brand": "",
        "price": 60,
        "unit": 200,
        "stock": 30,
        "img": "",
        "id": "15"
    },
    {
        "name": "Copos de maiz con azucar",
        "category": "Cereales",
        "type": [
            "copos",
            "maiz"
        ],
        "brand": "",
        "price": 80,
        "unit": 200,
        "stock": 56,
        "img": "",
        "id": "16"
    },
    {
        "name": "Copos de maiz con miel",
        "category": "Cereales",
        "type": [
            "copos",
            "maiz"
        ],
        "brand": "",
        "price": 80,
        "unit": 200,
        "stock": 54,
        "img": "",
        "id": "17"
    },
    {
        "name": "Aritos de colores",
        "category": "Cereales",
        "type": [
            "aritos",
            "colores"
        ],
        "brand": "",
        "price": 150,
        "unit": 200,
        "stock": 4,
        "img": "",
        "id": "18"
    },
    {
        "name": "Aritos de miel",
        "category": "Cereales",
        "type": [
            "aritos",
            "miel"
        ],
        "brand": "",
        "price": 150,
        "unit": 200,
        "stock": 15,
        "img": "",
        "id": "19"
    },
    {
        "name": "Ositos de miel",
        "category": "Cereales",
        "type": [
            "ositos",
            "miel"
        ],
        "brand": "",
        "price": 160,
        "unit": 200,
        "stock": 4,
        "img": "",
        "id": "20"
    },
    {
        "name": "Pizza vegetal a base de almendras",
        "category": "Congelados",
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
        "id": "21"
    },
    {
        "name": "Medallones vegetales",
        "category": "Congelados",
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
        "id": "22"
    },
    {
        "name": "Medallones vegetales rellenos",
        "category": "Congelados",
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
        "id": "22"
    },
    {
        "name": "Medallones vegetales Sin TACC de quinoa, zanahoria y cebolla caramelizada x4 unidades",
        "category": "Congelados",
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
        "id": "24"
    },
    {
        "name": "Medallones vegetales sin TACC de quinoa, espinaca y zucchini x4 unidades",
        "category": "Congelados",
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
        "id": "25"
    },
    {
        "name": "Bastoncitos vegetales sin TACC de espinaca, remolacha, morron y berenjena",
        "category": "Congelados",
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
        "id": "26"
    },
    {
        "name": "Bastoncitos vegetales sin TACC de remolacha, proteina de arveja y arroz yamani",
        "category": "Congelados",
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
        "id": "27"
    },
    {
        "name": "Bastoncitos vegetales sin TACC de morron, berenjena, proteina de arveja y arroz yamani",
        "category": "Congelados",
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
        "id": "28"
    },
    {
        "name": "Medallones vegetales sin TACC x2 unidades",
        "category": "Congelados",
        "type": [
            "sin TACC",
            "lentejas"
        ],
        "brand": "VIA VEG",
        "price": 170,
        "unit": 1,
        "stock": 83,
        "img": "",
        "id": "29"
    },
    {
        "name": "Ñoquis sin TACC",
        "category": "Congelados",
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
        "id": "30"
    }
];

export default productsList;