export type Course = { name?: string; year?: number; semester?: number; groups?: string[] }

const data: Course[] = JSON.parse(`[
    {
        "name": "Biometric Systems",
        "reviews": [],
        "year": 1,
        "semester": 1,
        "groups": [
            "MCI-A",
            "C"
        ]
    },
    {
        "name": "Machine Learning",
        "reviews": [],
        "year": 1,
        "semester": 1,
        "groups": [
            "MCI-A",
            "SE-B",
            "NS-B",
            "C"
        ]
    },
    {
        "name": "Human computer interaction on the web",
        "reviews": [],
        "year": 1,
        "semester": 2,
        "groups": [
            "MCI-A",
            "SE-B",
            "NS-B",
            "C"
        ]
    },
    {
        "name": "Natural Language Processing",
        "reviews": [
            "hard",
            "bello ma impegnativo"
        ],
        "year": 1,
        "semester": 2,
        "groups": [
            "MCI-A",
            "C"
        ]
    },
    {
        "name": "Deep learning and applied artificial intelligence",
        "reviews": [
            "è un corso abbastanza complesso e va a fondo sulle giustificazioni teoriche dietro le techiche che si usano. ",
            "Meglio mettere un corso più introduttivo tipo ML qui o di ingegneria, così riempi anche un po' di più il primo semestre del primo anno"
        ],
        "year": 1,
        "semester": 2,
        "groups": [
            "SE-B",
            "MCI-A",
            "NS-B",
            "C"
        ]
    },
    {
        "name": "Advanced machine learning",
        "reviews": [],
        "year": 2,
        "semester": 1,
        "groups": [
            "SE-B",
            "NS-B",
            "MCI-A",
            "C"
        ]
    },
    {
        "name": "Computer vision",
        "reviews": [
            "CV è utile per alzare la media, in quanto molto facile e non c'è bisogno di seguire le lezioni. AML merita molto di più rispetto a CV. Tra l'altro in CV il prof spiega cose vecchie, mentre in AML c'è qualcosa di più recente.",
            "È inutile seguire CV. Lascia AML."
        ],
        "year": 2,
        "semester": 1,
        "groups": [
            "IS-A",
            "MCI-A",
            "C"
        ]
    },
    {
        "name": "Fundamentals of computer graphics",
        "reviews": [],
        "year": 2,
        "semester": 1,
        "groups": [
            "MCI-A",
            "IS-A",
            "SE-B",
            "C"
        ]
    },
    {
        "name": "Multimodal interaction",
        "reviews": [],
        "year": 2,
        "semester": 2,
        "groups": [
            "MCI-A",
            "NS-B",
            "C"
        ]
    },
    {
        "name": "Computer network performance",
        "reviews": [],
        "year": 1,
        "semester": 1,
        "groups": [
            "IS-A",
            "NS-A",
            "MCI-B",
            "C"
        ]
    },
    {
        "name": "Distributed systems",
        "reviews": [],
        "year": 1,
        "semester": 1,
        "groups": [
            "SE-A",
            "MCI-B",
            "C"
        ]
    },
    {
        "name": "Formal methods in software development",
        "reviews": [],
        "year": 1,
        "semester": 1,
        "groups": [
            "SE-A",
            "MCI-B",
            "C"
        ]
    },
    {
        "name": "Foundations of data science",
        "reviews": [
            "L'orario di FDS si sovrappone con Biometric Systems... è legale perché il primo è di un altro CDL",
            "se fai sia FDS che AML e il prof è sempre Galasso: potresti ritrovarti con il primo homework dei due corsi IDENTICO. Quindi ottimizzi i tempi al primo HW."
        ],
        "year": 1,
        "semester": 1,
        "groups": [
            "MCI-B",
            "C"
        ]
    },
    {
        "name": "Concurrent systems",
        "reviews": [],
        "year": 2,
        "semester": 2,
        "groups": [
            "SE-A",
            "NS-B",
            "MCI-B",
            "C"
        ]
    },
    {
        "name": "Autonomous networking",
        "reviews": [],
        "year": 1,
        "semester": 1,
        "groups": [
            "IS-B",
            "NS-A",
            "C"
        ]
    },
    {
        "name": "Cryptography",
        "reviews": [],
        "year": 1,
        "semester": 1,
        "groups": [
            "IS-B",
            "NS-A",
            "C"
        ]
    },
    {
        "name": "Methods in computer science education: Design",
        "reviews": [],
        "year": 1,
        "semester": 1,
        "groups": [
            "C"
        ]
    },
    {
        "name": "Models of computation",
        "reviews": [],
        "year": 1,
        "semester": 1,
        "groups": [
            "IS-A",
            "SE-B",
            "C"
        ]
    },
    {
        "name": "Security in software applications",
        "reviews": [],
        "year": 1,
        "semester": 1,
        "groups": [
            "IS-A",
            "NS-B",
            "SE-A",
            "C"
        ]
    },
    {
        "name": "Big data computing",
        "reviews": [],
        "year": 1,
        "semester": 2,
        "groups": [
            "IS-A",
            "SE-B",
            "MCI-B",
            "C"
        ]
    },
    {
        "name": "Cloud computing",
        "reviews": [],
        "year": 1,
        "semester": 2,
        "groups": [
            "NS-B",
            "SE-B",
            "C"
        ]
    },
    {
        "name": "Internet of things",
        "reviews": [],
        "year": 1,
        "semester": 2,
        "groups": [
            "MCI-B",
            "NS-A",
            "C"
        ]
    },
    {
        "name": "Mathematical logic for computer science",
        "reviews": [],
        "year": 1,
        "semester": 2,
        "groups": [
            "SE-B",
            "C"
        ]
    },
    {
        "name": "Methods in computer science education: Analysis",
        "reviews": [],
        "year": 1,
        "semester": 2,
        "groups": [
            "C"
        ]
    },
    {
        "name": "Practical network defense",
        "reviews": [],
        "year": 1,
        "semester": 2,
        "groups": [
            "C"
        ]
    },
    {
        "name": "Automatic software verification methods",
        "reviews": [],
        "year": 2,
        "semester": 1,
        "groups": [
            "SE-A",
            "NS-B",
            "C"
        ]
    },
    {
        "name": "Computational complexity",
        "reviews": [],
        "year": 2,
        "semester": 1,
        "groups": [
            "IS-B",
            "C"
        ]
    },
    {
        "name": "Network algorithms",
        "reviews": [],
        "year": 2,
        "semester": 1,
        "groups": [
            "NS-B",
            "IS-A",
            "C"
        ]
    },
    {
        "name": "Advanced algorithms",
        "reviews": [],
        "year": 2,
        "semester": 2,
        "groups": [
            "IS-A",
            "SE-A",
            "C"
        ]
    },
    {
        "name": "Data and network security",
        "reviews": [],
        "year": 2,
        "semester": 2,
        "groups": [
            "NS-A",
            "C"
        ]
    },
    {
        "name": "Information systems",
        "reviews": [],
        "year": 2,
        "semester": 2,
        "groups": [
            "C"
        ]
    },
    {
        "name": "Intensive computation",
        "reviews": [],
        "year": 2,
        "semester": 2,
        "groups": [
            "NS-B",
            "C"
        ]
    },
    {
        "name": "Topics in physics",
        "reviews": [],
        "year": 2,
        "semester": 2,
        "groups": [
            "C"
        ]
    }
]`)

const maxCFU = JSON.parse(`
{
    "MCI-A": 30,
    "MCI-B": 24,
    "SE-A": 24,
    "SE-B": 30,
    "NS-A": 30,
    "NS-B": 24,
    "IS-A": 36,
    "IS-B": 18,
    "C": 12
}
`)

export const getCourses = (filter: Partial<Pick<Course, 'name' | 'year' | 'semester'>> = {}): Course[] =>
    data.filter(c => (
        c.name === (filter.name || c.name) &&
        c.year === (filter.year || c.year) &&
        c.semester === (filter.semester || c.semester)
    ))


export function getGroups(): string[] {
    const groups = new Set<string>()
    getCourses().forEach(c => (c.groups || []).forEach(g => groups.add(g)))
    return [...groups].sort((a, b) => {
        if (a === 'C') return 1
        else if (b === 'C') return -1
        else return a.localeCompare(b)
    })
}

export function getMaxCFU(group: string) {
    return maxCFU[group]
}




