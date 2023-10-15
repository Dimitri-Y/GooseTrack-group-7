import {
    SectionStatistics,
    ContainerMenuStatistics,
    ContainerCalendarStatistics,
    ContainerCalendarStatisticsSwitchBtn,
    BtnCalendarStatistics,
    TextTimeSymbolStatistics,
    ContainerTimeSymbolStatistics,
    ContainerScheduleStatistics
} from './StatisticsPage.styled';

import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    Rectangle,
    LabelList,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip, Legend,
    ResponsiveContainer
} from 'recharts';



const StatisticsPage = () => {

    const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },{
        name: "Page A",
        uv: 400,
        pv: 2400,
        amt: 2400
    },{
        name: "Page A",
        uv: 1000,
        pv: 2400,
        amt: 2400
    }]
    
    return  (<SectionStatistics>
                
                <ContainerMenuStatistics>
                    <ContainerCalendarStatistics>
                        <BtnCalendarStatistics>19 june 2023</BtnCalendarStatistics>
                        <ContainerCalendarStatisticsSwitchBtn>
                            <button>a</button>
                            <button>a</button>
                        </ContainerCalendarStatisticsSwitchBtn>
                    
                    </ContainerCalendarStatistics>
                    <ContainerTimeSymbolStatistics>
                        <TextTimeSymbolStatistics colorListStyle={'#FFD2DD'}>By Day</TextTimeSymbolStatistics>
                        <TextTimeSymbolStatistics colorListStyle={'#3E85F3'}>By Month</TextTimeSymbolStatistics> 
                    </ContainerTimeSymbolStatistics>            
                </ContainerMenuStatistics>

                <ContainerScheduleStatistics>
                    <BarChart
                        width={280}
                        height={300}
                        data={data}
                    >
                        <CartesianGrid  stroke="#0f0f0f" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis axisLine={false } />
                        <Tooltip /> //focus on colons
                        
                        <Bar dataKey="pv" fill="#FFD2DD" radius={4} barSize={22} >
                           <LabelList dataKey={"pv"} position="top" />
                        </Bar>
                        <Bar dataKey={"uv"} fill="#3E85F3" barSize={22}/>
                    </BarChart>
                </ContainerScheduleStatistics>
            </SectionStatistics>)
};

export default StatisticsPage;