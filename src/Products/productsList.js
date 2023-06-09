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
        "img": "https://i.ibb.co/q54GRNV/Tostada-de-arroz-lulemuu.png",
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
        "img": "https://i.ibb.co/6y43qTv/Galletitas-de-Arroz-Crispino.png",
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
        "img": "https://i.ibb.co/hZjWzY9/Harina-de-quinoa.jpg",
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
        "img": "https://i.ibb.co/yyBfkc4/Harina-de-casta-as-de-Caju.png",
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
        "img": "https://i.ibb.co/HntcDCR/Polenta-Organica.jpg",
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
        "img": "https://i.ibb.co/S6Jk2s8/Fecula-de-Mandioca.jpg",
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
        "img": "https://i.ibb.co/nCYFWt4/Polvo-para-Hornear.jpg",
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
        "img": "https://i.ibb.co/SXK2gP9/Pan-Rallado-sin-tacc.jpg",
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
        "img": "https://i.ibb.co/VgTfXV1/Azucar-negra.png",
    },
    {
        "name": "Pre-Mezcla base Multiple para Panificados, Pastas, y Postres",
        "category": "sintacc",
        "type": [
            "Sin TACC",
            "premezcla"
        ],
        "brand": "Dimax",
        "price": 1500,
        "unit": 500,
        "stock": 31,
        "img": "https://i.ibb.co/Y2zg4XD/Pre-Mezcla-para-Panificados.png",
    },
    {
        "name": "Almohaditas rellenas de frutilla",
        "category": "cereales",
        "type": [
            "almohaditas",
            "frutilla",
        ],
        "brand": "",
        "price": 70,
        "unit": 200,
        "stock": 2,
        "img": "https://i.ibb.co/swC7jMT/Almohaditas-Rellenas-de-frutilla.png",
    },
    {
        "name": "Almohaditas rellenas de avellana",
        "category": "cereales",
        "type": [
            "almohaditas",
            "avellana"
        ],
        "brand": "",
        "price": 70,
        "unit": 200,
        "stock": 2,
        "img": "https://i.ibb.co/qMwWNvM/Almohaditas-Rellenas-de-avellanas.png",
    },
    {
        "name": "Almohaditas rellenas de chocolate blanco",
        "category": "cereales",
        "type": [
            "almohaditas",
            "chocolate blanco",
        ],
        "brand": "",
        "price": 70,
        "unit": 100,
        "stock": 44,
        "img": "https://i.ibb.co/6NQDGyz/Almohaditas-Rellenas-de-chocolate-blanco.jpg",
    },
    {
        "name": "Almohaditas rellenas de limon",
        "category": "cereales",
        "type": [
            "almohaditas",
            "limon"
        ],
        "brand": "",
        "price": 70,
        "unit": 100,
        "stock": 44,
        "img": "https://i.ibb.co/DWCvDWq/Almohaditas-Rellenas-de-Limon.png",
    },
    {
        "name": "Almohaditas de Salvado rellenas",
        "category": "cereales",
        "type": [
            "almohaditas",
            "salvado"
        ],
        "brand": "",
        "price": 60,
        "unit": 100,
        "stock": 44,
        "img": "https://i.ibb.co/1bhrd5c/Almohaditas-Integrales.jpg",
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
        "img": "https://i.ibb.co/HH8XgTH/Copos-de-maiz-sin-azucar.png",
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
        "img": "https://i.ibb.co/nRQbZw7/Copoz-de-maiz-con-azucar.webp",
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
        "img": "https://i.ibb.co/W0bNB6H/Copoz-de-maiz-con-miel.png",
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
        "img": "https://i.ibb.co/QdVqZQ7/Aritos-de-colores.jpg",
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
        "img": "https://i.ibb.co/FYTngc4/Aritos-de-miel.png",
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
        "img": "https://i.ibb.co/MpWg98R/Ositos-de-miel.jpg",
    },
    {
        "name": "Ositos de frutilla",
        "category": "cereales",
        "type": [
            "ositos",
            "frutilla"
        ],
        "brand": "",
        "price": 160,
        "unit": 200,
        "stock": 4,
        "img": "https://i.ibb.co/82DWcG1/Ositos-de-frutilla.png",
    },
    {
        "name": "Pizza de Muzzalmendras - SIN TACC",
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
        "img": "https://i.ibb.co/dWQVrR5/Pizza-Muzzalmendras.png",
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
        "unit": 4,
        "stock": 3,
        "img": "https://i.ibb.co/RcP70Mv/Medallones-UFF.jpg",
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
        "unit": 4,
        "stock": 12,
        "img": "https://i.ibb.co/RcP70Mv/Medallones-UFF.jpg",
    },
    {
        "name": "Medallones vegetales Sin TACC de quinoa, zanahoria y cebolla caramelizada",
        "category": "sintacc",
        "type": [
            "sin TACC",
            "zanahoria",
            "cebolla caramelizada"
        ],
        "brand": "Mundo Vegetal",
        "price": 290,
        "unit": 4,
        "stock": 67,
        "img": "https://i.ibb.co/M7ZqvN1/Medallones-vegetales-Sin-TACC-de-quinoa-zanahoria-y-cebolla-caramelizada-x4-unidades.png",
    },
    {
        "name": "Medallones vegetales sin TACC de quinoa, espinaca y zucchini",
        "category": "sintacc",
        "type": [
            "sin TACC",
            "quinoa",
            "espinaca",
            "zucchini"
        ],
        "brand": "Mundo Vegetal",
        "price": 290,
        "unit": 4,
        "stock": 67,
        "img": "https://i.ibb.co/H4m1FH6/Medallones-vegetales-sin-TACC-de-quinoa-espinaca-y-zucchini-x4-unidades.jpg",
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
        "unit": 4,
        "stock": 19,
        "img": "https://i.ibb.co/PT7Zm6R/Medallones-vegetales-sin-TACC-de-espinaca-remolacha-morron-y-berenjena.jpg",
    },
    {
        "name": "Bastoncitos vegetales sin TACC de espinaca, proteina de arveja y arroz yamani",
        "category": "veggie",
        "type": [
            "espinaca",
            "proteina de arveja",
            "proteina de arroz yamani"
        ],
        "brand": "Mundo Vegetal",
        "price": 270,
        "unit": 8,
        "stock": 46,
        "img": "https://i.ibb.co/ncZL4hc/Bastoncitos-vegetales-sin-TACC-de-espinaca-proteina-de-arveja-y-arroz-yamani.png",
    },
    {
        "name": "Bastoncitos vegetales sin TACC de morron, berenjena, soja organica y arroz yamani",
        "category": "veggie",
        "type": [
            "morron",
            "berenjena",
            "soja organica",
            "proteina de arroz yamani"
        ],
        "brand": "Mundo Vegetal",
        "price": 270,
        "unit": 8,
        "stock": 40,
        "img": "https://i.ibb.co/H7WJVjq/Bastoncitos-vegetales-sin-TACC-de-morron-berenjena-soja-organica-y-arroz-yamani.png",
    },
    {
        "name": "Milanesas vegetales de soja sin TACC ",
        "category": "sintacc",
        "type": [
            "sin TACC",
            "soja"
        ],
        "brand": "VIA VEG",
        "price": 370,
        "unit": 2,
        "stock": 83,
        "img": "https://i.ibb.co/wYnM5ry/Milanesa-de-soja-Viaveg.png",
    },
    {
        "name": "Milanesas vegetales de arvejas sin TACC ",
        "category": "sintacc",
        "type": [
            "sin TACC",
            "arvejas"
        ],
        "brand": "VIA VEG",
        "price": 370,
        "unit": 2,
        "stock": 83,
        "img": "https://i.ibb.co/YyB3tgM/Milanesa-de-arvejas-Viaveg.png",
    },
    {
        "name": "Milanesas vegetales de garvanzos sin TACC ",
        "category": "sintacc",
        "type": [
            "sin TACC",
            "garvanzos"
        ],
        "brand": "VIA VEG",
        "price": 370,
        "unit": 2,
        "stock": 83,
        "img": "https://i.ibb.co/m5tng6s/Milanesa-de-garbanzos-Viaveg.png",
    },
    {
        "name": "Milanesas vegetales de lentejas sin TACC ",
        "category": "sintacc",
        "type": [
            "sin TACC",
            "lentejas"
        ],
        "brand": "VIA VEG",
        "price": 370,
        "unit": 2,
        "stock": 83,
        "img": "https://i.ibb.co/X4twCzB/Milanesa-de-lentejas-Viaveg.png",
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
        "img": "https://i.ibb.co/dLJZn1f/oquis-libre-de-gluten.jpg",
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
        "img": "https://i.ibb.co/f09281P/Proteina-Gold-1kg.png",
    },
    {
        "name": "Animal Max",
        "category": "suplementos",
        "type": [
            "Animal Max",
            "Suplemento",
            "Fit"
        ],
       "brand": "Body Extreme Nutrition",
        "price": 13300,
        "unit": 1,
        "stock": 3,
        "img": "https://i.ibb.co/4RbJ3q5/Animal-Max.png",
    },
    {
        "name": "BCAA Explosive Power 120 Cap.",
        "category": "suplementos",
        "type": [
            "BCAA",
            "Suplemento",
            "Fit"
        ],
        "brand": "Body Extreme Nutrition",
        "price": 8800,
        "unit": 120,
        "stock": 4,
        "img": "https://i.ibb.co/MfVm2Dp/BCAA.png",
    },
    {
        "name": "Carblock 4000",
        "category": "suplementos",
        "type": [
            "Inhibidor de carbohidratos",
            "Suplemento",
            "Fit"
        ],
        "brand": "Body Extreme Nutrition",
        "price": 8800,
        "unit": 120,
        "stock": 9,
        "img": "https://i.ibb.co/gRB7QJf/CARBLOCK-4000.png",
    },
    {
        "name": "Power Complex 9000",
        "category": "suplementos",
        "type": [
            "Power Complex",
            "suplemento",
            "Fit"
        ],
        "brand": "Body Extreme Nutrition",
        "price": 12700,
        "unit": 1,
        "stock": 7,
        "img": "https://i.ibb.co/vhnWSzn/POWER-COMPLEX-9000.png",
    }
];

export default productsList;