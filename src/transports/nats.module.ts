import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NATS_SERVICE, envs } from 'src/config';

@Module({

    imports: [
        ClientsModule.register([

            {
                // aca tiene que tener la misma conexion que en productos para la forma en la que van a hablar los dos  en el main del otro proyecto lo encontras con el nombre COX1 en la parte de envs.ts tambien hay de esto pero es la configuracion de envss
                name: NATS_SERVICE,
                transport: Transport.NATS,
                options: {
                    servers: envs.natsServers,

                }
            },

        ]),
    ],
    exports: [
        ClientsModule.register([

            {
                // aca tiene que tener la misma conexion que en productos para la forma en la que van a hablar los dos  en el main del otro proyecto lo encontras con el nombre COX1 en la parte de envs.ts tambien hay de esto pero es la configuracion de envss
                name: NATS_SERVICE,
                transport: Transport.NATS,
                options: {
                    servers: envs.natsServers,

                }
            },

        ]),
    ]


})
export class NatsModule { }
