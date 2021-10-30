import styled from "styled-components";

/** Row - flex div with horizontal orientation
 * - availble props: vCenter, hCenter to handle alignment 
 */
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: ${(prop) => prop.vCenter ? "center" : "initial" };
  justify-content: ${(prop) => prop.hCenter ? "center" : "initial" };
`

/** Col - flex div with vertical orientation
 * - availble props: vCenter, hCenter to handle alignment 
 */
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: ${(prop) => prop.hCenter ? "center" : "initial" };
  justify-content: ${(prop) => prop.vCenter ? "center" : "initial" };
`