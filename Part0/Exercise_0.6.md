```mermaid
sequenceDiagram
participant browser
participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate server
server-->>browser: json file
deactivate server

Note right of browser: The server etch a reference to the HTML form element, <br> registers an event handler to handle the form's submit event and prevents the default handling of form's submit. <br> At last the event handler creates a new note, adds it to the notes list.
