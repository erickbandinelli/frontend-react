import React, { FunctionComponent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../Store';
import { loadRequest } from '../../Store/ducks/posts/actions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from "../Pagination";
import DataTableStyle from './style';


const DataTable: FunctionComponent<any> = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [clientsPerPage] = useState(10);

    const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadRequest());
    }, [dispatch]);

    const postsState = useSelector(
		(state: ApplicationState) => state.Posts
    );

    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
    const indexOfLastPosts = currentPage * clientsPerPage;
    const indexOfFirstPosts = indexOfLastPosts - clientsPerPage;
    //Order Alphabetic
    const newListPosts = postsState.data;
    const currentPosts = newListPosts.slice(indexOfFirstPosts, indexOfLastPosts);
    const qtnPosts = newListPosts.length;

    console.log(qtnPosts);

	return (
        <DataTableStyle>
            <Container fluid>
                <Row noGutters={true}>
                    <Col sm="12" md="12" lg="12">
                        <h1>Últimas Postagens</h1>
                    </Col>

                    <Col sm="12" md="12" lg="12">
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Título</th>
                                        <th scope="col">Conteúdo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentPosts.map((item, key) => {
                                            return (
                                                <tr  key={key}>
                                                    <td>{item.title}</td>
                                                    <td>{item.body}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col sm="12" md="6" lg="6">Exibindo {clientsPerPage} posts</Col>

                    <Col sm="12" md="6" lg="6">
                    <Pagination
                        currentPage={currentPage}
                        clientsPerPage={clientsPerPage}
                        totalClients={qtnPosts}
                        paginate={paginate} />
                    </Col>
                </Row>
            </Container>
        </DataTableStyle>
	)
}

export default DataTable
