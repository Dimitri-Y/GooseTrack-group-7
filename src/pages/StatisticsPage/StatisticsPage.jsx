import {
    SectionStatistics,
    ContainerMenuStatistics,
    ContainerCalendarStatistics,
    ContainerCalendarStatisticsSwitchBtn,
    BtnCalendarStatistics,
    TextTimeSymbolStatistics,
    ContainerTimeSymbolStatistics,
    ContainerScheduleStatistics,
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
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';



const StatisticsPage = () => {
    const todoByDay = 0
    const inprogressByDay = 0
    const doneByDay = 110
    const allTasksByDay = todoByDay + inprogressByDay + doneByDay

    
    const todoByDayT= Math.floor(todoByDay/allTasksByDay *100)
    const inprogressByDayT = Math.floor(inprogressByDay/allTasksByDay *100)
    const doneByDayT = Math.floor(doneByDay / allTasksByDay * 100)
    
    console.log(doneByDayT)
    const data = [
    {
        name: "to do",
        uv: todoByDayT,
        ByDay: todoByDayT
    },{
        name: "in progress",
        uv: inprogressByDayT,
        ByDay: inprogressByDayT
    },{
        name: "done",
        uv: doneByDayT,
        ByDay: doneByDayT
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
                        width={270}
                        height={320}
                        data={data}
                        margin={{ top: 20, right: 14, left: 0, bottom: 20 }}
                    >
                    
                        <CartesianGrid  stroke="#0f0f0f" vertical={false}  />
                        <XAxis  tickLine={false} axisLine={false} dataKey="name" tick={{ dy: 20 }}  />
                        <YAxis domain={[0, allTasksByDay]}  tick={{ dx: -14 }} tickLine={false} axisLine={false} />
                        <Tooltip /> //focus on colons
                        
                        <Bar dataKey="ByDay" radius={[0, 0, 4, 4]}  barSize={22} minPointSize={2} >                       
                            <LabelList dataKey={"ByDay"} position="top" />
                        </Bar>
                        <Bar dataKey={"uv"} radius={[0, 0, 4, 4]} fill="rgba(62, 133, 243, 0.5)" barSize={22}>
                             <LabelList dataKey={"uv"} position="top" />
                        </Bar>
                        
                    </BarChart>
                </ContainerScheduleStatistics>
            </SectionStatistics>)
};

export default StatisticsPage;