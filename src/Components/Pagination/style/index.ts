
import styled from 'styled-components';

const PaginationStyle = styled.div`
    .pagination {
        justify-content: flex-end;

        .page-item {
            cursor: pointer;

            &.active {
                .page-link {
                    background-color: #a2c314;
                    border-color: #a2c314;
                    color: #fff;
                }
            }

            .page-link {
                color: #a2c314;
            }
        }
    }
`;

export default PaginationStyle;
