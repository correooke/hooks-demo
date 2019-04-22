# Diccionario React con Hooks

Este ejemplo se compone de un cliente y un servidor que permite realizar las traducciones. 
Utilizamos hooks en conjunto con clases. Como librería gráfica utilizamos Material-ui.
Además utilizando "context" para contener la búsqueda (search) y un evento para cambiar el estado (changeSearch)

 - SearchComponent: Dónde se establece el término a buscar. La actualización del término buscado se propaga mediante el evento changeSearch.

 - DictionaryComponent: Diccionario que realiza la búsqueda en base al parámetro "word". 
 Dentro del "dictionary" tenemos una lista de "Entry" esta tiene una lista de "Sense" (acepciones) que a su vez contiene una definición (Definition) y un ejemplo del uso (UseExample).

## Cheatsheets pages 

https://devhints.io/flow
https://www.saltycrane.com/flow-type-cheat-sheet/latest/

## Definitions

https://github.com/flow-typed/flow-typed

    flow-typed install [package-specification]
    Ex: flow-typed install foo@1.2.3


## Plugins FlowJS Configurations

#### flowtype.flow-for-vscode

    "flow.pathToFlow": "${workspaceRoot}\\\\node_modules\\\\.bin\\\\flow",
    "flow.showUncovered": true,

        "editor.quickSuggestions": {
        "comments": false,
        "strings": false
    },

#### vscode-flow-ide

    "flowide.enable": true,
    "flowide.pathToFlow": "${workspaceRoot}\\\\node_modules\\\\.bin\\\\flow"