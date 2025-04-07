import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProfileForm from '../components/forms/ProfileForm'

const ProfileContent = () => {
    const pagelinks = [
        { name: "Edit Profile"},
        { name: "About Info" },
        { name: "Timeline"},
        { name: "Party Master Tab one" },
        { name: "Party Master Tab one" },
        { name: "Party Master Tab One"}
    ];
    const [openMenu, setOpenMenu] = useState("")
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
    }, []);

    const showDropDown = () => {
        if (screenWidth <= 1024) {
            if (openMenu === '') {
                setOpenMenu("open-page-tab-container");
            } else {
                setOpenMenu("");
            }
        } else {
            return
        }
    }

    return (
        <Tabs>
            <div className="main-content-header">
                <h1 className="page-title">
                    My Profile
                </h1>
                <div className="page-tab-container">
                    <TabList className={`page-tab-list ${openMenu}`} onClick={showDropDown}>
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
            </div>
            
            <TabPanel>
                <ProfileForm />
            </TabPanel>
            <TabPanel>
                <h2>Dummy content for tab 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Dummy content for tab 3</h2>
            </TabPanel>
            <TabPanel>
                <h2>Dummy content for tab 4</h2>
            </TabPanel>
            <TabPanel>
                <h2>Dummy content for tab 5</h2>
            </TabPanel>
            <TabPanel>
                <h2>Dummy content for tab 6</h2>
            </TabPanel>

        </Tabs>
    )
}

export default ProfileContent
