<a name="module_models/entries"></a>

## models/entries

* [models/entries](#module_models/entries)
    * _static_
        * [.getAll(uid)](#module_models/entries.getAll) ⇒ <code>Array.&lt;EntryWithID&gt;</code>
        * [.create(uid, body)](#module_models/entries.create) ⇒ <code>number</code>
        * [.update(id, body)](#module_models/entries.update) ⇒ <code>number</code>
        * [.delete(id)](#module_models/entries.delete) ⇒ <code>number</code>
    * _inner_
        * [~Entry](#module_models/entries..Entry) : <code>Object</code>
        * [~EntryWithID](#module_models/entries..EntryWithID) : <code>Entry</code>

<a name="module_models/entries.getAll"></a>

### models/entries.getAll(uid) ⇒ <code>Array.&lt;EntryWithID&gt;</code>
getAll - query database for all entries for one user

**Kind**: static method of [<code>models/entries</code>](#module_models/entries)  
**Returns**: <code>Array.&lt;EntryWithID&gt;</code> - - [EntryWithID](#module_models/entries..EntryWithID)  

| Param | Type | Description |
| --- | --- | --- |
| uid | <code>number</code> | User ID, foreign key in Entries database table |

<a name="module_models/entries.create"></a>

### models/entries.create(uid, body) ⇒ <code>number</code>
create - create one database entry for one User

**Kind**: static method of [<code>models/entries</code>](#module_models/entries)  
**Returns**: <code>number</code> - - Created Entry ID  

| Param | Type | Description |
| --- | --- | --- |
| uid | <code>number</code> | User ID, foreign key in Entries database table |
| body | <code>Entry</code> | [Entry](#module_models/entries..Entry) |

<a name="module_models/entries.update"></a>

### models/entries.update(id, body) ⇒ <code>number</code>
update - modify one database entry for one User

**Kind**: static method of [<code>models/entries</code>](#module_models/entries)  
**Returns**: <code>number</code> - - Updated Entry ID  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Entry ID |
| body | <code>Entry</code> | [Entry](#module_models/entries..Entry) |

<a name="module_models/entries.delete"></a>

### models/entries.delete(id) ⇒ <code>number</code>
delete - delete one database entry for one User

**Kind**: static method of [<code>models/entries</code>](#module_models/entries)  
**Returns**: <code>number</code> - - Deleted Entry ID  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Entry ID |

<a name="module_models/entries..Entry"></a>

### models/entries~Entry : <code>Object</code>
Object representing one [user's](module:models/users~User) data for one day

**Kind**: inner typedef of [<code>models/entries</code>](#module_models/entries)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| flow | <code>boolean</code> | User report of menstruation |
| day | <code>number</code> |  |
| month | <code>number</code> |  |
| temp | <code>number</code> | User Basal Body Temperature |

<a name="module_models/entries..EntryWithID"></a>

### models/entries~EntryWithID : <code>Entry</code>
**Kind**: inner typedef of [<code>models/entries</code>](#module_models/entries)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | database generated Entry ID |

