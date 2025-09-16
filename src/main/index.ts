const elements = [
    { firstname: 'Arne', lastname: 'Arnesen' },
    { firstname: 'Magnus', lastname: 'Magnusson' },
    { firstname: 'Siri', lastname: 'Sirisen' },
    { firstname: 'Stefan', lastname: 'Stefanson' },
    { firstname: 'Geir', lastname: 'Geirsen' },
    { firstname: 'Guri', lastname: 'Gurisen' },
]

<<<<<<< Updated upstream
let createTable = () => {
    const peopleTable = elements.map(({ firstname, lastname}) => {
        return [firstname, lastname]
    });
    console.table(peopleTable, ["Fornavn", "Etternavn"]);
}
=======
export const greeting = (firstname: string, lastname: string) => {
    console.log(`Hei hei ${firstname} ${lastname}`);
};

const people = [
    { firstname: "Magnus", lastname: "Magnusson" },
    { firstname: "Stefan", lastname: "Stefanson" },
];

export const greetTheGang = () => {
    people.forEach((person) => {
        greeting(person.firstname, person.lastname);
    });
};
>>>>>>> Stashed changes
