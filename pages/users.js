import Link from 'next/link'
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
    return (
        <MainContainer keywords="users">
            <h1>Список пользователей</h1>
            {users.map(user =>
                <li>
                    <Link href={`/users/${user.id}`}>
                        <a>{user.title}</a>
                    </Link>
                </li>
            )}
        </MainContainer>
    );
};

export default Users;


export async function getStaticProps(context) {
    const response = await fetch('https://fakestoreapi.com/products')
    const users = await response.json()
    return {
        props: {users}, // will be passed to the page component as props
    }
}
