import styled from "styled-components";
import { space, layout, flexbox } from "styled-system";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${space};
  ${layout};
  ${flexbox};
`;
export default Row;
