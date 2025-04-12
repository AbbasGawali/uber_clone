# API Documentation

## Endpoint: `/api/v1/users/register`

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:

- `fullName`: An object containing:
  - `firstName` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastName` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `201 Created`
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullName": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Errors
- **Status Code**: `400 Bad Request`
  - **Response Body** (Validation Errors):
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "First name must be at least 3 characters",
          "param": "fullName.firstName",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```
  - **Response Body** (User Already Exists):
    ```json
    {
      "success": false,
      "message": "user already exists"
    }
    ```

- **Status Code**: `500 Internal Server Error`
  - **Response Body**:
    ```json
    {
      "message": "Internal Server Error"
    }
    ```

## Endpoint: `/api/v1/users/login`

### Description
This endpoint is used to log in an existing user.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullName": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Errors
- **Status Code**: `400 Bad Request`
  - **Response Body** (Validation Errors):
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Password is required",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **Status Code**: `401 Unauthorized`
  - **Response Body**:
    ```json
    {
      "success": false,
      "message": "Invalid email or password"
    }
    ```

- **Status Code**: `500 Internal Server Error`
  - **Response Body**:
    ```json
    {
      "message": "Internal Server Error"
    }
    ```

## Endpoint: `/api/v1/users/profile`

### Description
This endpoint is used to retrieve the profile of the currently authenticated user.

### Method
`GET`

### Headers
- `Authorization` (string, required): The Bearer token for the authenticated user.

### Responses

#### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "user": {
      "_id": "user_id_here",
      "fullName": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Errors
- **Status Code**: `401 Unauthorized`
  - **Response Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **Status Code**: `500 Internal Server Error`
  - **Response Body**:
    ```json
    {
      "message": "Internal Server Error"
    }
    ```

---

## Endpoint: `/api/v1/users/logout`

### Description
This endpoint is used to log out the currently authenticated user.

### Method
`GET`

### Headers
- `Authorization` (string, required): The Bearer token for the authenticated user.

### Responses

#### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "message": "Logout success"
  }
  ```

#### Errors
- **Status Code**: `401 Unauthorized`
  - **Response Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **Status Code**: `500 Internal Server Error`
  - **Response Body**:
    ```json
    {
      "message": "Internal Server Error"
    }
    ```