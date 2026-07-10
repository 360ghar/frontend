import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { filterTabs } from '../../data/HomeOneData';
import SimplifiedFilter from './SimplifiedFilter';
import { usePropertyStore } from '../../store/propertyStore';
import { I18nLink, useI18nNavigate } from '../../i18n/I18nLink';

const SELL_CONTACT_PATH = '/contact?subject=List%20my%20property';

const TabFilter = () => {
    const { updateFilter } = usePropertyStore();
    const navigate = useI18nNavigate();

    const handleTabSelect = (index) => {
        const purposeMapping = {
            0: 'rent',    // Rent
            1: 'buy',     // Buy
            2: 'sell'     // Sell → listing/contact flow
        };

        const purpose = purposeMapping[index];
        if (purpose === 'sell') {
            // Listing flow: send sellers to the contact form, not property search.
            // Returning false cancels the tab switch (react-tabs onSelect contract).
            navigate(SELL_CONTACT_PATH);
            return false;
        }
        if (purpose) {
            updateFilter('purpose', purpose);
        }
    };

    return (
        <>
            <Tabs onSelect={handleTabSelect}>
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
                            {filterTab.text === 'Sell' ? (
                                // Fallback only: normal Sell clicks navigate away via onSelect.
                                // Keep a listing CTA here so Sell never shows property search.
                                <div className="simplified-filter">
                                    <div className="row gy-4 align-items-center">
                                        <div className="col-lg-8">
                                            <p className="mb-0 text-secondary">
                                                Ready to list your property? Our team will help you get started.
                                            </p>
                                        </div>
                                        <div className="col-lg-4">
                                            <I18nLink
                                                to={SELL_CONTACT_PATH}
                                                className="btn btn-main w-100"
                                            >
                                                <i className="fas fa-home me-2" aria-hidden="true"></i>
                                                List Your Property
                                            </I18nLink>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <SimplifiedFilter
                                    buttonText={`Search ${filterTab.text === 'Rent' ? 'Rentals' : 'Properties'}`}
                                />
                            )}
                        </TabPanel>
                    ))
                }
            </Tabs>
        </>
    );
};

export default TabFilter;
