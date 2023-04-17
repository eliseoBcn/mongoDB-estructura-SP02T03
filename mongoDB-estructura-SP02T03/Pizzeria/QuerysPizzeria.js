

db.categoria.insertMany(
    [
        {
            "idCategoria": 1,
            "Nombre": "BEBIDAS"
        },
        {
            "idCategoria": 2,
            "Nombre": "HAMBURGUESAS"
        },
        {
            "idCategoria": 3,
            "Nombre": "PIZZAS NAPOLITANAS"
        },
        {
            "idCategoria": 4,
            "Nombre": "PIZZAS B"
        },
        {
            "idCategoria": 5,
            "Nombre": "PIZZAS C"
        }
    ]
)


db.clientes.insertMany(
    [
        {
            "idCliente": 100,
            "Nombre": "Roque",
            "Apellidos": "Somoza Zaragoza",
            "Direccion": "Gran via 3, 4-5",
            "Localidad": "barcelona",
            "Provincia": "barcelona",
            "CodigoPostal": 8785,
            "Telefono": 931583247
        },
        {
            "idCliente": 200,
            "Nombre": "Sonia",
            "Apellidos": "Ródenas Estrada",
            "Direccion": "La Farga",
            "Localidad": "Hospitalet de Llobregat",
            "Provincia": "barcelona",
            "CodigoPostal": 8906,
            "Telefono": 93257899
        },
        {
            "idCliente": 300,
            "Nombre": "Marta ",
            "Apellidos": "Sancher Garcia",
            "Direccion": "La Castellana",
            "Localidad": "MADRID",
            "Provincia": "MADRID",
            "CodigoPostal": 28046,
            "Telefono": 918541235
        }
    ]


)
db.empleados.insertMany(
    [
        {
            "idEmpleados": 1,
            "Nombre": "ANDRES",
            "Apellidos": "PEREZ MARTINEZ",
            "NIF": "14741258W",
            "Telefono": 688411114,
            "Puesto": "COCINERO",
            "IdTienda": 10
        },
        {
            "idEmpleados": 2,
            "Nombre": "EVA",
            "Apellidos": "DOMINGUEZ ESPARZA",
            "NIF": "66667423R",
            "Telefono": 749525555,
            "Puesto": "REPARTIDOR",
            "IdTienda": 10
        },
        {
            "idEmpleados": 3,
            "Nombre": "IVAN",
            "Apellidos": "LLANDRICH  PEREZ",
            "NIF": "76567547E",
            "Telefono": 741143244,
            "Puesto": "COCINERO",
            "IdTienda": 10
        },
        {
            "idEmpleados": 4,
            "Nombre": "INES",
            "Apellidos": "JULIA DIAGO",
            "NIF": "44454654Q",
            "Telefono": 641123254,
            "Puesto": "COCINERO",
            "IdTienda": 20
        },
        {
            "idEmpleados": 5,
            "Nombre": "ALVARO",
            "Apellidos": "MARTINEZ PEREZ",
            "NIF": "5289E1DFE",
            "Telefono": 684125122,
            "Puesto": "REPARTIDOR",
            "IdTienda": 20
        }
    ]

)

db.pedidos.insertMany(
    [
        {
            "idPedidos": 1,
            "CantidadProductos": 2,
            "FechaPedido": "2023-04-01 14:01:00",
            "PrecioTotal": 11.40,
            "idClientee": 100,
            "RepartoLlevar": "S",
            "Tienda": 10,
            "Idrepartidor": 1,
            "Idempleado": 2
        },
        {
            "idPedidos": 2,
            "CantidadProductos": 4,
            "FechaPedido": "0000-00-00 00:00:00",
            "PrecioTotal": 26.40,
            "idClientee": 100,
            "RepartoLlevar": "N",
            "Tienda": 10,
            "Idrepartidor": 0,
            "Idempleado": 2
        },
        {
            "idPedidos": 3,
            "CantidadProductos": 1,
            "FechaPedido": "2023-04-01 14:01:00",
            "PrecioTotal": 2.40,
            "idClientee": 200,
            "RepartoLlevar": "S",
            "Tienda": 20,
            "Idrepartidor": 5,
            "Idempleado": 4
        }
    ]

)

db.productos.insertMany(
    [
        {
            "idProductos": 1,
            "Nombre": "COCA COLA LIGHT ",
            "Descripcion": "BAJA EN AZUCAR",
            "Imagen": "cocacola.jpeg",
            "Precio": 2.40,
            "IdCategoria": 1
        },
        {
            "idProductos": 2,
            "Nombre": "FANTA LIMON",
            "Descripcion": "BURBUJITAS",
            "Imagen": "fantalimon.jpeg",
            "Precio": 2.00,
            "IdCategoria": 1
        },
        {
            "idProductos": 3,
            "Nombre": "PIIZA CON QUESOS",
            "Descripcion": "3 KESOS",
            "Imagen": "Pizzasvegetal.jpeg",
            "Precio": 9.00,
            "IdCategoria": 3
        },
        {
            "idProductos": 4,
            "Nombre": "HAMBURGUESA VEGETAL",
            "Descripcion": "SABIR ESPINACAS",
            "Imagen": "hamburguesavegetal.jpeg",
            "Precio": 13.00,
            "IdCategoria": 2
        }
    ]

)

db.productosdelpedido.insertMany(
    [
        {
            "idPedido": 1,
            "idproducto": 3,
            "detalle": 1
        },
        {
            "idPedido": 1,
            "idproducto": 1,
            "detalle": 2
        },
        {
            "idPedido": 2,
            "idproducto": 1,
            "detalle": 1
        },
        {
            "idPedido": 2,
            "idproducto": 2,
            "detalle": 2
        },
        {
            "idPedido": 2,
            "idproducto": 3,
            "detalle": 3
        },
        {
            "idPedido": 2,
            "idproducto": 4,
            "detalle": 4
        },
        {
            "idPedido": 3,
            "idproducto": 1,
            "detalle": 1
        }
    ]

)

db.tienda.insertMany(
    [
        {
            "idTienda": 10,
            "Direccion": "Avd Masnou 10",
            "CodigoPostal": 8905,
            "Localidad": "HOSPITALET LLOBREGAT",
            "Provincia": "BARCELONA"
        },
        {
            "idTienda": 20,
            "Direccion": "Gran Via 4",
            "CodigoPostal": 8784,
            "Localidad": "HOSPITALET LLOBREGAT",
            "Provincia": "BARCELONA"
        },
        {
            "idTienda": 30,
            "Direccion": "Pensamiento 20",
            "CodigoPostal": 46110,
            "Localidad": "GODELLA",
            "Provincia": "VALENCIA"
        }
    ]

)
