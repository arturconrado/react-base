import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: 'unformOBJ',
    description: 'usando um objs pra declarar a propiedade do repositorio',
    link: 'https://github.com'
}

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1> lista de repositorios</h1>

            <ul>
                <RepositoryItem repository={repository} />

                <RepositoryItem />


                <RepositoryItem />

                <RepositoryItem />

            </ul>
        </section>
    );
}