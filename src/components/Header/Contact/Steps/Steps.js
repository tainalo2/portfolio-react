const steps = [
    {
        step : 1,
        name: 'Information',
        inputs : [
            {
                type : 'inputText',
                required : true,
                uniqueName: 'firstName',
                displayName: 'Prénom',
                defaultValue: '',
                regex: '^[a-zA-Z]+$',
                errorMessage: 'Veuillez entrer un prénom valide'
            },
            {
                type : 'inputText',
                required : true,
                uniqueName: 'lastName',
                displayName: 'Nom',
                regex: '^[a-zA-Z]+$',
                errorMessage: 'Veuillez entrer un nom valide'
            },
            {
                type : 'inputText',
                required : true,
                uniqueName: 'email',
                displayName: 'Email',
                regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
                errorMessage: 'Veuillez entrer une adresse email valide'
            },
            {
                type : 'inputText',
                required : false,
                uniqueName: 'phone',
                displayName: 'Téléphone',
                regex: '^[0-9]+$',
                errorMessage: 'Veuillez entrer un numéro de téléphone valide'
            }
        ]
    },
    {
        step : 2,
        name: 'Sujet',
        inputs : [
            {
                type : 'inputText',
                required : true,
                uniqueName: 'subject',
                displayName: 'Sujet',
                regex: '^[a-zA-Z]+$',
                errorMessage: 'Veuillez entrer un sujet valide'
            }
        ]
    }
]

export default steps;