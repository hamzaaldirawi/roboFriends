import { Fragment } from 'react/cjs/react.production.min';
import Card from '../Card';

const CardList = ({ robots }) => {
    return (
        <Fragment>
            {
                robots.map(user => {
                    return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
                })
            }
        </Fragment>
    )
}

export default CardList;