import {config} from 'dotenv';

config({path:`.env.${process.env.NODE_ENV || `development`}.local`});
export const {
    PORT,
    NODE_ENV,
    DB_URL,
    JWT_SECRET,JWT_EXPIRATION,
    ARCJECT_KEY,
    ARCJECT_ENV,
    QSTASH_URL,QSTASH_TOKEN,
    EMAIL_PASSWORD,
} = process.env;









// {
//   "name": "Fahami",
//   "email": "fahami@gmail.com",
//   "password": "mypassword123"
// }


// {
//     "success": true,
//     "message": "User created successfully",
//     "data": {
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODYzNzI3MTM4ZDMzNTdhNjI1ZjA3Y2MiLCJpYXQiOjE3NTEzNDc4MjUsImV4cCI6MTc1MTQzNDIyNX0.Zl_7_2mIBVYYeszUxpxGdSLugYWLX_0baX8nAZS_XOk",
//         "user": {
//             "name": "Fahami",
//             "email": "fahami@gmail.com",
//             "password": "$2b$10$mAxq4Dj.RfNb9yfJv.90deFNn2ziiFszaNBpj35Vt/TkI2N4zsmv6",
//             "_id": "6863727138d3357a625f07cc",
//             "createdAt": "2025-07-01T05:30:25.719Z",
//             "updatedAt": "2025-07-01T05:30:25.719Z",
//             "__v": 0
//         }
//     }
// }