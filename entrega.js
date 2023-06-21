class ticketManager {
    #precioBaseDeGanancia; /* Variable privada para añadir el coste adicional */
    #contadorIdEventos; /* Variable privada para guardar el idEvento */
    #contadorIdUsuario; /* Variable privada para guardar el contador */

    constructor(precioBaseDeGanancia) {
        this.#precioBaseDeGanancia = precioBaseDeGanancia;
        this.eventos = []; /* Array para guardar eventos*/
        this.#contadorIdEventos = 0; /* Inicializa el contador de eventos en 0 */
        this.#contadorIdUsuario = 0; /* Inicializa el contador de usuarios en 0 */
    }

    agregarEvento(nombre, lugar, precio, capacidad, fecha) {
        const precioEvento = precio * 0.15; /* Agrega 15% al valor original del precio */

        const evento = {
            idEvento: this.#contadorIdEventos,
            nombre,
            lugar,
            precio: precioEvento,
            capacidad,
            fecha,
            participantes: [] /* Array vacio para guardar participantes */
        };

        this.#contadorIdEventos++; /* Incrementa el id del contador del evento */

        this.eventos.push(evento);
    }

    agregarUsuario(idEvento, idUsuario) {
        const evento = this.eventos.find(evento => evento.id === idEvento);
        if (evento) {
            evento.participantes.push(idUsuario);
            this.#contadorIdUsuario++; /* Incrementa el contador de id de usuario */
        } else {
            console.log(`El evento con el ID ${idEvento} no existe.`);
        }
    }

    ponerEventoEnGira(idEvento, lugar, fecha) {
        const eventoACopiar = this.eventos.find(evento => evento.id === idEvento);
        if (eventoACopiar) {
            const eventoCopiado = {
                ...eventoACopiar,
                id: this.#contadorIdEventos,
                lugar,
                fecha,
                participantes: []
            };

            this.#contadorIdEventos++;

            this.eventos.push(eventoCopiado);
        } else {
            console.log(`El evento con el id ${idEvento} no existe.`);
        }
    }

    conseguirEventos() {
        return this.eventos;
    }
}
