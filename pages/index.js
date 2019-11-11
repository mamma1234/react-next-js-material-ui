/*
const styles = {
    from: {
        color: 'red',
    },
};

export default (props) => {
    const { router } = props;
    return (
        <div>
            Home
            {
                router.query.history ? (
                    <div style={styles.from}>
                        From the {router.query.history}
                    </div>
                ) : null
            }
        </div>
    );
}
*/

import History from '../components/History';


export default (props) => {
    console.log(`index props`, props);
    return (
        <div>
            Home
            <History />
        </div>
    );
}