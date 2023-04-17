

db.proveedores.insertMany(
    [
        {
            "idProveedor": 10,
            "Nombre": "CORTE INGLES",
            "calle": "cataluña",
            "numero": 22,
            "piso": 1,
            "puerta": 1,
            "ciudad": "BARCELONA",
            "codigopostal": 80460,
            "pais": "ESPAÑA",
            "telefono": 685236985,
            "fax": 931257841,
            "nif": "20165284F"
        },
        {
            "idProveedor": 20,
            "Nombre": "MULTIOPTICAS",
            "calle": "Isabel la Catolica",
            "numero": 30,
            "piso": 1,
            "puerta": 1,
            "ciudad": "HOSPITALET DE LLOBREGAT",
            "codigopostal": 8905,
            "pais": "ESPAÑA",
            "telefono": 931258899,
            "fax": 938411231,
            "nif": "23567841B"
        },
        {
            "idProveedor": 30,
            "Nombre": "HERMANOS PEREZ",
            "calle": "Primavera",
            "numero": 101,
            "piso": 3,
            "puerta": 3,
            "ciudad": "BADALONA",
            "codigopostal": 8920,
            "pais": "ESPAÑA",
            "telefono": 931231396,
            "fax": 931741133,
            "nif": "40165284Z"
        },
        {
            "idProveedor": 40,
            "Nombre": "OPTICAS ASOCIADAS",
            "calle": "Marque de dos aguas",
            "numero": 40,
            "piso": 12,
            "puerta": 3,
            "ciudad": "VALENCIA",
            "codigopostal": 46110,
            "pais": "ESPAÑA",
            "telefono": 968951233,
            "fax": 961749632,
            "nif": "45127841Z"
        }
    ]
)


db.ventas.insertMany(
    [
        {
            "idempleado": 10000,
            "idCliente": 110,
            "IdGafas": 1010,
            "Idventas": 500,
            "fechafactura": "2021-05-05"
        },
        {
            "idempleado": 10000,
            "idCliente": 110,
            "IdGafas": 1000,
            "Idventas": 501,
            "fechafactura": "2021-03-03"
        },
        {
            "idempleado": 10000,
            "idCliente": 110,
            "IdGafas": 1020,
            "Idventas": 503,
            "fechafactura": "2021-08-30"
        },
        {
            "idempleado": 10001,
            "idCliente": 110,
            "IdGafas": 1000,
            "Idventas": 504,
            "fechafactura": "2022-05-04"
        },
        {
            "idempleado": 10001,
            "idCliente": 110,
            "IdGafas": 1010,
            "Idventas": 505,
            "fechafactura": "2022-09-03"
        },
        {
            "idempleado": 10001,
            "idCliente": 110,
            "IdGafas": 1020,
            "Idventas": 506,
            "fechafactura": "2022-08-30"
        },
        {
            "idempleado": 10001,
            "idCliente": 120,
            "IdGafas": 1000,
            "Idventas": 507,
            "fechafactura": "2023-04-03"
        },
        {
            "idempleado": 10001,
            "idCliente": 120,
            "IdGafas": 1020,
            "Idventas": 508,
            "fechafactura": "2023-11-03"
        },
        {
            "idempleado": 10001,
            "idCliente": 130,
            "IdGafas": 1020,
            "Idventas": 509,
            "fechafactura": "2023-09-03"
        },
        {
            "idempleado": 10001,
            "idCliente": 130,
            "IdGafas": 1000,
            "Idventas": 510,
            "fechafactura": "2023-05-04"
        }
    ]


)
db.gafas.insertMany(
    [
        {
            "Marca": "ADIDAS",
            "graduacion1": 2.00,
            "graduacion2": 2.00,
            "TipoMontura": "RECTANGULAR",
            "ColorMontura": "GRIS",
            "ColorVidrio1": "GRIS",
            "ColorVidrio2": "GRIS",
            "Precio": 312.00,
            "IdProveedor": 10,
            "Idgafas": 1010
        },
        {
            "Marca": "ARMANI",
            "graduacion1": 1.00,
            "graduacion2": 1.00,
            "TipoMontura": "OVALADA",
            "ColorMontura": "MARRON ",
            "ColorVidrio1": "TRASPARENTE",
            "ColorVidrio2": "TRASPARENTE",
            "Precio": 112.00,
            "IdProveedor": 10,
            "Idgafas": 1000
        },
        {
            "Marca": "CELINE",
            "graduacion1": 2.20,
            "graduacion2": 2.50,
            "TipoMontura": "REDONDA",
            "ColorMontura": "AZUL ",
            "ColorVidrio1": "PLATEADOS",
            "ColorVidrio2": "PLATEADOS",
            "Precio": 221.00,
            "IdProveedor": 20,
            "Idgafas": 1020
        }
    ]
)


db.clientes.insertMany(

    [
        {
            "idCliente": 110,
            "NombreApellidos": "PEREZ,GARCIA ALBERTO",
            "calle": "PENSAMIENTO",
            "numero": 20,
            "piso": 10,
            "puerta": 3,
            "ciudad": "GODELLA",
            "codigopostal": 46110,
            "telefono": 65822447,
            "coreoelectronico": "PEREZ23234@GMAIL.COM",
            "fecharegistro": "2020-01-01",
            "RECOMENDADO": "N"
        },
        {
            "idCliente": 120,
            "NombreApellidos": "ANA, MARIA MATURES",
            "calle": "LEVANTE",
            "numero": 30,
            "piso": 4,
            "puerta": 3,
            "ciudad": "HOSPITALET DE LLOBREGAT",
            "codigopostal": 8905,
            "telefono": 65533333,
            "coreoelectronico": "ANAMARIAMATURES@HOTMAIL.COM",
            "fecharegistro": "2020-03-05",
            "RECOMENDADO": "N"
        },
        {
            "idCliente": 130,
            "NombreApellidos": "JOAN, LLANDRICH LASURT",
            "calle": "MASNOU",
            "numero": 89,
            "piso": 3,
            "puerta": 1,
            "ciudad": "HOSPITALET DE LLOBREGATº",
            "codigopostal": 8915,
            "telefono": 652743258,
            "coreoelectronico": "LLNDRICLASURT2023@GMAIL.COM",
            "fecharegistro": "2020-04-10",
            "RECOMENDADO": "S"
        }
    ]


)
