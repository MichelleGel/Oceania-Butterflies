import Layout from '../layout/Layout';
import TestServices from '../services/TestServices';
import CreateButterfly from './CreateButterfly';
import EditButterfly from './EditButterfly';

function Home() {

    return (
        <>
        <Layout/>
        <CreateButterfly/>
        <EditButterfly/>
        </>
    )
}

export default Home
