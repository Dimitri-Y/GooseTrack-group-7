
import {
    SectionStatistics,
    ContainerMenuStatistics,
    ContainerCalendarStatistics,
    BtnCalendarStatistics,
    TextTimeSymbolStatistics,
    ContainerTimeSymbolStatistics,
    ContainerScheduleStatistics,
    TextTaskStatistics,
    
    
} from './StatisticsPage.styled';

import React from 'react';
import Loader from 'components/Loader/Loader'

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

import DatepickerStatistics from 'components/DatepickerStatistics/DatepickerStatistics'
import {fetchStatisticsDataThunk } from '../../redux/statistics/statisticsOperations'
import { useSelector, useDispatch } from "react-redux"
     

const StatisticsPage = () => {
    const dispatch = useDispatch()
    const statistics = useSelector(state => state.statistics.statistics)  
    const isLoading = useSelector(state => state.statistics.isLoading)  
    const theme = useSelector(state => state.theme)   
    
    const themeColors = {
        darkGrid:  'rgb(227, 243, 255, 0.2)',
        lightGrid: '#E3F3FF',
        darkText:  "#fff",
        lightText: '#343434',
    };


    const setDate = (selectedDate) =>  {      
        const date = new Date(selectedDate);
        let day = date.getDate(); 
        let month = date.getMonth() + 1; 
        if (month < 10) {
            month = `0${month}`;
        }
        if (day < 10) {
            day = `0${day}`;
        }
        const year = date.getFullYear();
       
        const dateFetchData = `${year}-${month}-${day}`
        dispatch(fetchStatisticsDataThunk(dateFetchData))
    }

    
    
    const countsByMonth = statistics.ByMonth ? statistics.ByMonth?.reduce((accumulator, task) => {
        if (task.category === "to-do") {
            accumulator.todoByMonth++;
        } else if (task.category === "in-progress") {
            accumulator.inprogressByMonth++;
        } else if (task.category === "done") {
            accumulator.doneByMonth++;
        }
            accumulator.total++;
            return accumulator;
        }, {
            todoByMonth: 0,
            inprogressByMonth: 0,
            doneByMonth: 0,
            total: 0,
    }) : {
            todoByMonth: 0,
            inprogressByMonth: 0,
            doneByMonth: 0,
            total: 0,
    };
    
    
    const countsByDay = statistics.ByDay ? statistics.ByDay?.reduce((accumulator, task) => {
        if (task.category === "to-do") {
            accumulator.todoByDay++;
        } else if (task.category === "in-progress") {
            accumulator.inprogressByDay++;
        } else if (task.category === "done") {
            accumulator.doneByDay++;
        }
            accumulator.total++;
            return accumulator;
        }, {
            todoByDay: 0,
            inprogressByDay: 0,
            doneByDay: 0,
            total: 0,
    }) : {
            todoByDay: 0,
            inprogressByDay: 0,
            doneByDay: 0,
            total: 0,
    };
    


    
    const todoByDayT = countsByDay.total !== 0 ? Math.floor((countsByDay.todoByDay /  countsByDay.total) * 100) : 0;
    const inprogressByDayT = countsByDay.total !== 0 ? Math.floor((countsByDay.inprogressByDay / countsByDay.total) * 100) : 0;
    const doneByDayT = countsByDay.total !== 0 ? Math.floor((countsByDay.doneByDay / countsByDay.total) * 100) : 0;
    

    const todoByMonthT = countsByMonth.total !== 0 ? Math.floor((countsByMonth.todoByMonth/ countsByMonth.total) * 100) : 0;
    const inprogressByMonthT = countsByMonth.total !== 0 ? Math.floor((countsByMonth.inprogressByMonth / countsByMonth.total) * 100) : 0;
    const doneByMonthT = countsByMonth.total !== 0 ? Math.floor((countsByMonth.doneByMonth / countsByMonth.total) * 100) : 0;
    
    const data = [
    {
        name: "To Do",
        ByMonth: countsByMonth.todoByMonth,
        ByDay: countsByDay.todoByDay,
        ByDayInterest:  `${todoByDayT}%`,
        ByMonthInterest: `${todoByMonthT}%` ,
    },{
        name: "In Progress",
        ByMonth: countsByMonth.inprogressByMonth,
        ByDay: countsByDay.inprogressByDay ,
        ByDayInterest:  `${inprogressByDayT}%`,
        ByMonthInterest:  `${inprogressByMonthT}%`,
    },{
        name: "Done",
        ByMonth: countsByMonth.doneByMonth,
        ByDay: countsByDay.doneByDay,
        ByDayInterest:  `${doneByDayT}%`,
        ByMonthInterest:  `${doneByMonthT}%`,
    }]


    return   (<SectionStatistics>
                
                <ContainerMenuStatistics >
                    <ContainerCalendarStatistics>
                <DatepickerStatistics setDate={setDate} themeColor={theme} />
                    </ContainerCalendarStatistics>
            
                    <ContainerTimeSymbolStatistics>
                        <TextTimeSymbolStatistics colorliststyle={'#FFD2DD'}>By Day</TextTimeSymbolStatistics>
                        <TextTimeSymbolStatistics colorliststyle={'#3E85F3'}>By Month</TextTimeSymbolStatistics> 
                    </ContainerTimeSymbolStatistics>            
                </ContainerMenuStatistics>
            
         {!isLoading  && <ContainerScheduleStatistics >
            <TextTaskStatistics>Tasks</TextTaskStatistics>
           
            <ResponsiveContainer width={(window.innerWidth >= 1024) ? '80%' : (window.innerWidth >= 768) ? '85%' : '90%'} height="90%">
                <BarChart
                    style={{ position: ' static' }}
                    barGap={(window.innerWidth <= 768) ? 8 : 14}
                    data={data}
                    margin={(window.innerWidth <= 768) ? { top: 20, right: 0, left: 4, bottom: 20 } : { top: 20, right: 0, left: 14, bottom: 20 }}
                >
                        
                    <CartesianGrid stroke={theme === 'dark' ? themeColors.darkGrid : themeColors.lightGrid} vertical={false} />
                    <XAxis tickLine={false} axisLine={false} dataKey="name" tick={{
                        dy: 20, fontSize: (window.innerWidth <= 768) ? 12 : 14,
                        fontWeight: 400,
                        letterSpacing: 1.2,
                        lineHeight: (window.innerWidth <= 768) ? 14 : 21,
                        fill: theme === 'dark' ? themeColors.darkText : themeColors.lightText
                    }} />
                    <YAxis domain={countsByMonth.total === 0 ? [0, 100] : [0, countsByMonth.total]} tick={{ dx: (window.innerWidth >= 1024) ? -34 : (window.innerWidth >= 768) ? -24 : -14, fontSize: (window.innerWidth <= 768) ? 12 : 14, fontWeight: 400, letterSpacing: 1.2, fill: theme === 'dark' ? themeColors.darkText : themeColors.lightText }} tickLine={false} axisLine={false} />
                            
                    <defs>
                        <linearGradient id="gradientDay" x1="0" x2="0" y1="1" y2="0">
                            <stop offset="0%" stopColor="rgba(255, 210, 221, 1)" />
                            <stop offset="100%" stopColor="rgba(255, 210, 221, 0)" />
                        </linearGradient>
                    </defs>

                    <Bar dataKey="ByDay" radius={[0, 0, 4, 4]} barSize={(window.innerWidth <= 768) ? 22 : 27} minPointSize={2} fill={`url(#gradientDay)`} >
                        <LabelList dataKey="ByDayInterest" position="top" fill={theme === 'dark' ? themeColors.darkText : themeColors.lightText} fontSize={(window.innerWidth <= 768) ? 12 : 16} fontWeight={500} lineHeight={16} />
                    </Bar >
                    <defs>
                        <linearGradient id="gradientM" x1="0" x2="0" y1="1" y2="0">
                            <stop offset="0%" stopColor="rgba(62, 133, 243, 1)" />
                            <stop offset="100%" stopColor="rgba(62, 133, 243, 0)" />
                        </linearGradient>
                    </defs>

                    <Bar dataKey={"ByMonth"} radius={[0, 0, 4, 4]} minPointSize={2} fill={`url(#gradientM)`} barSize={(window.innerWidth <= 768) ? 22 : 27} >
                        <LabelList dataKey={"ByMonthInterest"} position="top" fill={theme === 'dark' ? themeColors.darkText : themeColors.lightText} fontSize={(window.innerWidth <= 768) ? 12 : 16} fontWeight={500} lineHeight={16} />
                    </Bar>
                    <Tooltip contentStyle={{
                        background: theme === 'dark' ? themeColors.lightText : themeColors.darkText,
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)',
                    }}
                        isAnimationActive={false}
                        cursor={false}
                        position={(window.innerWidth >= 1024) ? { y: 350, x: 750 } : (window.innerWidth >= 768) ? { y: 360, x: 220 } : { y: 300, x: 150 }} />
                </BarChart>
            </ResponsiveContainer>
                
        </ContainerScheduleStatistics> || <Loader/>}
        </SectionStatistics>)

};

export default StatisticsPage;