import  express  from "express";

const app = express()
app.use(express.json())

const classes = [
    {
        id: 1,
        name: "Figther",
        ability: [
            {
                ability_id: 1,
                name: "Extra feature"
            }, 
            {
                ability_id: 2,
                name: "Seccond attack"
            },
        ],
        skills: [
            {
                skill_id: 1,
                name: "Riding horses"
            }, 
            {
                skill_id: 2,
                name: "Atlethics"
            },
        ],
    },
    {
        id: 2,
        name: "Ladino",
        ability: [
            {
                ability_id: 1,
                name: "Sneack Attack"
            }, 
            {
                ability_id: 2,
                name: "Evasion"
            },
        ],
        skills: [
            {
                skill_id: 1,
                name: "Stealth"
            }, 
            {
                skill_id: 2,
                name: "Hide"
            },
        ],
    },
    
]

app.get('/', (req, res) => {
    res.status(200).send("HOME HERE")
})

app.get('/classes', (req, res) => {
    res.status(200).json(classes)
})

app.post('/classes', (req, res) => {
    classes.push(req.body)
    res.status(201).send("Class added successfully")
})

app.put('/classes/:id', (req, res) => {
    let index = searchClasses(req.params.id)
    classes[index] = {
        name: req.body.name,
        ability: req.body.ability,
        skills: req.body.skills
    }
    res.send("Class updated successfully")
})

app.get('/classes/:id', (req, res) => {
    let index = searchClasses(req.params.id)
    res.json(classes[index])
})

app.delete('/classes/:id', (req, res) => {
    let {id} = req.params
    let index = searchClasses(id)
    livros.splice(index, 1)
    res.send("Class deleted successfully")
})

function searchClasses(id) {
    return classes.findIndex(livro => livro.id == id)
}

export default app