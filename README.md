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

    
    
## Endpoint: `/api/v1/captains/register`

### Description
This endpoint is used to register a new captain.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:

- `fullName`: An object containing:
  - `firstName` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastName` (string, optional): The last name of the captain. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 3 characters long.
- `vehicle`: An object containing:
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The license plate of the vehicle. Must be unique and at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be a number and at least 1.
  - `type` (string, required): The type of the vehicle. Must be one of the following: `car`, `motorcycle`, `auto`.

Example:
```json
{
  "fullName": {
    "firstName": "Jane",
    "lastName": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "type": "car"
  }
}
```

### Responses

#### Success
- **Status Code**: `201 Created`
- **Response Body**:
  ```json
  {
    "success": true,
    "token": "jwt_token_here",
    "captain": {
      "_id": "captain_id_here",
      "fullName": {
        "firstName": "Jane",
        "lastName": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "type": "car"
      },
      "status": "inactive"
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
          "msg": "firstName must be at least 3 characters",
          "param": "fullName.firstName",
          "location": "body"
        },
        {
          "msg": "password must be at least 3 characters",
          "param": "password",
          "location": "body"
        },
        {
          "msg": "color must be at least 3 characters",
          "param": "vehicle.color",
          "location": "body"
        },
        {
          "msg": "plate must be at least 3 characters",
          "param": "vehicle.plate",
          "location": "body"
        },
        {
          "msg": "capacity must be a number",
          "param": "vehicle.capacity",
          "location": "body"
        },
        {
          "msg": "type must be at least 3 characters",
          "param": "vehicle.type",
          "location": "body"
        }
      ]
    }
    ```
  - **Response Body** (Captain Already Exists):
    ```json
    {
      "success": false,
      "message": "captain already exists"
    }
    ```

- **Status Code**: `500 Internal Server Error`
  - **Response Body**:
    ```json
    {
      "message": "Internal Server Error"
    }
    ```