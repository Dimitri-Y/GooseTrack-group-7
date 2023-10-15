import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  margin: 64px 20px 40px;
  padding: 28px 14px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerMenuStatistics = styled.div`
  margin-bottom: 40px;
  width: 100%;
`
export const ContainerCalendarStatistics = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
   
`

export const ContainerTimeSymbolStatistics = styled.div`
    display: flex;
    gap: 14px;
`
export const ContainerCalendarStatisticsSwitchBtn = styled.div`
    display: flex;
`

export const BtnCalendarStatistics = styled.button`
    /* margin-right: 114px; */
`
export const TextTimeSymbolStatistics = styled.p`
    display: flex;
    justify-content: start;
    align-items: center;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #343434;
    ::before {
            content: '';
            border-radius: 50%;
            display: inline-block;
            background-color: ${props => props.colorListStyle};
            margin-right: 8px;
            width: 8px;
            height: 8px;
        }
`

export const ContainerScheduleStatistics = styled.div`
    width: 100%;
    height: 400px;
    border: solid;
    border-radius: 20px;
    border-width: 0.8px;
    padding: 40px 0;
    border-color: #090909;/* #E3F3FF */
`