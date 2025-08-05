

const journey = [
    {
        years: "2018 - 2020",
        role: "Técnico em TI",
        instituition: "Aplicação"
    }, 

    {
        years: "2022 - 2022",
        role: "Design Thinking",
        instituition: "Centro Universitário FIAP"
    }, 

    {
        years: "2022 - 2022",
        role: "User Experience",
        instituition: "Centro Universitário FIAP"
    }, 

    {
        years: "2022 - 2022",
        role: "User Experience",
        instituition: "Centro Universitário FIAP"
    }, 

        {
        years: "2022 - 2025",
        role: "Bacharelado em Design",
        instituition: "Centro Universitário SENAC"
    }, 

    {
        years: "2024 - 2025",
        role: "Design Gráfico",
        instituition: "Centro Universitário FIAP"
    }, 

    {
        years: "2025 - 2025",
        role: "Mobile Marketing",
        instituition: "Centro Universitário FIAP"
    }, 
    /* Work experience*/

    {
        years: "2022 - 2022",
        role: "Estágio em Design Web",
        instituition: "Madis Rodbel"
    }, 

    {
        years: "2023 - 2023",
        role: "Estágio em Design Gráfico",
        instituition: "Revista Experimental | Centro Universitário Senac"
    }, 

    {
        years: "2024 - 2025",
        role: "Estágio em Design de Produto",
        instituition: "Estúdio De La Cruz"
    }, 



]

const Journey = () => {
    return (
        <div className="flex flex-col">
            <h2 className="h2 mb-8">
                 Formação & <span className="text-accent">Experiência </span>
            </h2>

            {
                journey.map((item, index) => {
                    const {instituition, role, years} = item;
                    return <div key={index} className="flex items-center gap-12 w-full">
                              {/* Bullets */}
                        <div className="flex flex-col w-max justify-center items-center">
                            <div className="w-3 h-3 bg-accent rounded-full"></div>
                            <div className="w-[1px] h-[180px] bg-white/10"></div>
                        </div>
                        {/* Text*/}
                         <div className="max-w-[500px]">
                            <p className="mb-6 text-lg text-white">{years}</p>
                            <h4 className="h4 mb-2">{role}</h4>
                            <p className="text-lg text-white/50">{instituition}</p>
                         </div>
                    </div>
                })
            }
    
        </div>
    )
}


export default Journey