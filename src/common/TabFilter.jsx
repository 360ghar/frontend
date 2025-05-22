import React from 'react';

import Filter from '../common/Filter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { filterTabs } from '../data/HomeOneData/HomeOneData';

const TabFilter = (props) => {
    return (
        <>
             <Tabs>
                <TabList className={'common-tab nav nav-pills'}>
                    {
                        filterTabs.map((filterTab, index) => (
                            <Tab key={index} className={'nav-link'}>{filterTab.text}</Tab>
                        ))
                    }
                </TabList>
                {
                    filterTabs.map((filterTab, index) => (
                        <TabPanel key={index}>
                            <Filter colClass={props.colClass} buttonText={filterTab.text}/>
                        </TabPanel>
                    ))
                }
            </Tabs>   
        </>
    );
};

export default TabFilter;