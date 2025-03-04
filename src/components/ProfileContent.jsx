import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ProfileContent = () => {
    const pagelinks = [
        {
            name: "Edit Profile",
        },
        {
            name: "About Info ",
        },
        {
            name: "Timeline",
        },
        {
            name: "Party Master Tab one",
        },
        {
            name: "Party Master Tab one",
        },
        {
            name: "Party Master Tab One",
        }
    ];

    
  return (
    <section className="main-content">
        <Tabs>
            <div className="main-content-header">
                <h1 className="page-title">
                    My Profile
                </h1>
                <TabList className="page-tab-list page-tab-container">
                    {pagelinks.map((pageLink, index) => (
                        <Tab 
                            className="para-small page-tab-list-item" key={index}
                        >
                            <span className="tab-title"><span className="tab-adjuster"></span>{pageLink.name}</span>
                        </Tab>
                    ))
                    }
                </TabList>
            </div>
            
            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 4</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 4</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 4</h2>
            </TabPanel>

        </Tabs>
        
    </section>
  )
}

export default ProfileContent
