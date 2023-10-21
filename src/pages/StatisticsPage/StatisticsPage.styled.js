import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
 
  padding: 28px 14px 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

    @media (min-width: 768px) and (max-width: 1023px) {
            
             padding: 132px 32px 224px;
    }
    @media (min-width: 1024px) {
            padding: 72px 114px 104px;
    }
`;

export const ContainerMenuStatistics = styled.div`
  margin-bottom: 40px;
  width: 100%;
  
  @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        width: 90%;
    }

`
export const ContainerCalendarStatistics = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    @media (max-width: 768px)  {
         margin-bottom: 20px;
    }
    
`

export const ContainerTimeSymbolStatistics = styled.div`
    display: flex;
    gap: 14px;
    @media (min-width: 768px)  {
         gap: 20px;
    }
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
    @media (min-width: 768px) {
          font-size: 16px;
    }
`

export const ContainerScheduleStatistics = styled.div`
    width: 100%;
    height: 228px;
    border: solid;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 20px;
    border-width: 0.8px;
    padding: 40px 0;
    border-color: #E3F3FF;/* #E3F3FF */
    
    @media (min-width: 768px) and (max-width: 1023px) {
         height: 334px;
         padding: 32px 0;
    }
    @media (min-width: 1024px) {
         height: 360px;
    }
`
export const ContainerScheduleResponsive = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 360px;
    @media (min-width: 768px) and (max-width: 1023px) {
        height: 576px;

    }
    @media (min-width: 1024px) {
        height: 360px;
    }
`
export const TextTaskStatistics = styled.p`
    align-self: flex-start;
    margin-left: 10%;
    
    margin-bottom: 8px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0em;
    color: #343434;

    @media (min-width: 768px)  {
        margin-bottom: 12px;
    }
`