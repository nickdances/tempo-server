<a name="module_models/users"></a>

## models/users

* [models/users](#module_models/users)
    * _static_
        * [.getOne(email)](#module_models/users.getOne) ⇒ <code>Array.&lt;UserWithID&gt;</code>
        * [.create(body)](#module_models/users.create) ⇒ <code>number</code>
        * [.update(id, body)](#module_models/users.update) ⇒ <code>number</code>
        * [.delete(id)](#module_models/users.delete) ⇒ <code>number</code>
    * _inner_
        * [~User](#module_models/users..User) : <code>Object</code>
        * [~UserWithID](#module_models/users..UserWithID) : <code>User</code>

<a name="module_models/users.getOne"></a>

### models/users.getOne(email) ⇒ <code>Array.&lt;UserWithID&gt;</code>
getOne - query database for one user

**Kind**: static method of [<code>models/users</code>](#module_models/users)  
**Returns**: <code>Array.&lt;UserWithID&gt;</code> - - [UserWithID](#module_models/users..UserWithID)  

| Param | Type |
| --- | --- |
| email | <code>string</code> | 

<a name="module_models/users.create"></a>

### models/users.create(body) ⇒ <code>number</code>
create - create one user in database

**Kind**: static method of [<code>models/users</code>](#module_models/users)  
**Returns**: <code>number</code> - - User ID  

| Param | Type | Description |
| --- | --- | --- |
| body | <code>User</code> | [User](#module_models/users..User) |

<a name="module_models/users.update"></a>

### models/users.update(id, body) ⇒ <code>number</code>
update - delete one user from database

**Kind**: static method of [<code>models/users</code>](#module_models/users)  
**Returns**: <code>number</code> - - Updated User ID  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | User ID |
| body | <code>User</code> | [User](#module_models/users..User) |

<a name="module_models/users.delete"></a>

### models/users.delete(id) ⇒ <code>number</code>
delete - delete one user from database

**Kind**: static method of [<code>models/users</code>](#module_models/users)  
**Returns**: <code>number</code> - - Deleted User ID  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | User ID |

<a name="module_models/users..User"></a>

### models/users~User : <code>Object</code>
**Kind**: inner typedef of [<code>models/users</code>](#module_models/users)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  |  |
| password | <code>string</code> |  | bcrypt hash |
| [cycle_length] | <code>number</code> | <code>28</code> | menstrual cycle length |

<a name="module_models/users..UserWithID"></a>

### models/users~UserWithID : <code>User</code>
**Kind**: inner typedef of [<code>models/users</code>](#module_models/users)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | database generated User ID |

