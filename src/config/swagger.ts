export const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "Piupiuwer API",
        version: "1.0.0",
        description: "Api of a twitter-like social network.",
        license: "GPL-3.0 License ",
        contact: {
            name: "Luis Dellano",
            // url: "tobe",
            email: "luisdellano@usp.br",
        },
    },
    servers: [
        {
            url: "http://localhost:3333",
            description: "Development API",
        },
    ],
    paths: {
        "/sessions/login": {
            post: {
                summary: "Login user",
                description: "Endpoint used to login user in the platform",
                tags: ["Authentication"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        required: true,
                                        type: "string",
                                        example: "email@domain.com",
                                    },
                                    password: {
                                        required: true,
                                        type: "string",
                                        example: "senha",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "User logged in.",
                        type: "object",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/users/register": {
            post: { summary: "Register user", tags: ["Authentication"] },
        },
        "/users": {
            delete: {
                summary: "Delete user.",
                description: "test",
                tags: ["Users"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        required: true,
                                        type: "string",
                                        example: "email@domain.com",
                                    },
                                    password: {
                                        required: true,
                                        type: "string",
                                        example: "senha",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        "/users/{userId}/following": {
            get: {
                summary: "Find every following user",
                tags: ["Users"],
                parameters: [
                    {
                        in: "path",
                        name: "userId",
                        description: "user id",
                        required: true,
                    },
                ],
            },
        },
        "/users/{userId}/followers": {
            get: {
                summary: "Find every follower",
                tags: ["Users"],
                parameters: [
                    {
                        in: "path",
                        name: "userId",
                        description: "user id",
                        required: true,
                    },
                ],
            },
        },
        "/users/{userInfo}": {
            get: {
                summary: "List users",
                tags: ["Users"],
                description:
                    "List Users. If no userInfo is passed, every user is listed. It is also possible to list by userId or username. ",
                parameters: [
                    {
                        in: "path",
                        name: "userInfo",
                        description: "username or userId",
                        required: false,
                    },
                ],
            },
        },
        "/users/follow": {
            post: {
                summary: "follow user",
                description: "Endpoint used to login user in the platform",
                tags: ["Users"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        required: true,
                                        type: "string",
                                        example: "email@domain.com",
                                    },
                                    password: {
                                        required: true,
                                        type: "string",
                                        example: "senha",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "User logged in.",
                        type: "object",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/users/unfollow": {
            post: {
                summary: "unfollow user",
                description: "Endpoint used to login user in the platform",
                tags: ["Users"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        required: true,
                                        type: "string",
                                        example: "email@domain.com",
                                    },
                                    password: {
                                        required: true,
                                        type: "string",
                                        example: "senha",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "User logged in.",
                        type: "object",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/pius": {
            delete: {
                summary: "unfollow user",
                description: "Endpoint used to login user in the platform",
                tags: ["Pius"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        required: true,
                                        type: "string",
                                        example: "email@domain.com",
                                    },
                                    password: {
                                        required: true,
                                        type: "string",
                                        example: "senha",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "User logged in.",
                        type: "object",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User",
                                },
                            },
                        },
                    },
                },
            },
            get: {
                summary: "unfollow user",
                description: "Endpoint used to login user in the platform",
                tags: ["Pius"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        required: true,
                                        type: "string",
                                        example: "email@domain.com",
                                    },
                                    password: {
                                        required: true,
                                        type: "string",
                                        example: "senha",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "User logged in.",
                        type: "object",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User",
                                },
                            },
                        },
                    },
                },
            },
            post: {
                summary: "unfollow user",
                description: "Endpoint used to login user in the platform",
                tags: ["Pius"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        required: true,
                                        type: "string",
                                        example: "email@domain.com",
                                    },
                                    password: {
                                        required: true,
                                        type: "string",
                                        example: "senha",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "User logged in.",
                        type: "object",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/pius/liked": {
            get: {
                summary: "Login user",
                description: "Endpoint used to login user in the platform",
                tags: ["Pius"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        required: true,
                                        type: "string",
                                        example: "email@domain.com",
                                    },
                                    password: {
                                        required: true,
                                        type: "string",
                                        example: "senha",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "User logged in.",
                        type: "object",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/pius/favorited": {
            get: {
                summary: "Login user",
                description: "Endpoint used to login user in the platform",
                tags: ["Pius"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        required: true,
                                        type: "string",
                                        example: "email@domain.com",
                                    },
                                    password: {
                                        required: true,
                                        type: "string",
                                        example: "senha",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "User logged in.",
                        type: "object",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/pius/like": {
            post: {
                summary: "login user",
                description: "endpoint used to login user in the platform",
                tags: ["Pius"],
                requestbody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        required: true,
                                        type: "string",
                                        example: "email@domain.com",
                                    },
                                    password: {
                                        required: true,
                                        type: "string",
                                        example: "senha",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "user logged in.",
                        type: "object",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/user",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/pius/unlike": {
            post: {
                summary: "login user",
                description: "endpoint used to login user in the platform",
                tags: ["Pius"],
                requestbody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        required: true,
                                        type: "string",
                                        example: "email@domain.com",
                                    },
                                    password: {
                                        required: true,
                                        type: "string",
                                        example: "senha",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "user logged in.",
                        type: "object",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/user",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/pius/favorite": {
            post: {
                summary: "login user",
                description: "endpoint used to login user in the platform",
                tags: ["Pius"],
                requestbody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        required: true,
                                        type: "string",
                                        example: "email@domain.com",
                                    },
                                    password: {
                                        required: true,
                                        type: "string",
                                        example: "senha",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "user logged in.",
                        type: "object",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/user",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/pius/unfavorite": {
            post: {
                summary: "login user",
                description: "endpoint used to login user in the platform",
                tags: ["Pius"],
                requestbody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        required: true,
                                        type: "string",
                                        example: "email@domain.com",
                                    },
                                    password: {
                                        required: true,
                                        type: "string",
                                        example: "senha",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "user logged in.",
                        type: "object",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/user",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    components: {
        schemas: {
            User: {
                type: "object",
                properties: {
                    username: { type: "string" },
                    email: { type: "string" },
                    phone: { type: "string" },
                    password: { type: "string" },
                    cpf: { type: "string" },
                    firstName: { type: "string" },
                    lastName: { type: "string" },
                    about: { type: "string" },
                    photo: { type: "string" },
                    followers: { type: "number" },
                    following: { type: "number" },
                    createdAt: { type: "string" },
                    updatedAt: { type: "string" },
                },
            },
            Piu: {
                type: "object",
                properties: {
                    id: { type: "string" },
                    userId: { type: "string" },
                    message: { type: "string" },
                    likes: { type: "number" },
                    favourites: { type: "number" },
                    createdAt: { type: "string" },
                    updatetAt: { type: "string" },
                },
            },
            Error: {
                type: "object",
                properties: { message: { type: "string" } },
            },
        },
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
    },
};
