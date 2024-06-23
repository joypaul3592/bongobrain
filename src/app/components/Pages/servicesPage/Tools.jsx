import React from 'react'
import TitleBox from '../../uiKit/TitleBox'

export default function Tools() {
    const ToolsItems = [
        {
            title: '.NET & MICROSOFT WORLD',
            items: ['WCF', 'WPF', 'Silverlight', 'LINQ', 'LINQ To SQL', 'ADO.NET Entity Framework', 'ASP.NET MVC', 'Microsoft Enterprise Library', 'PRISM', 'MEF / Unity', 'Nhibernate', 'Sprint.Net', 'Sorry', 'Spring.net', 'Sharepoint']
        },
        {
            title: 'DATABASE AND NOSQL',
            items: ['MS SQL Server', 'MySQL', 'MongoDB', 'Couchbase', 'Neo4j']
        },
        {
            title: 'JAVASCRIPT UNIVERSE',
            items: ['jQuery', 'jQuery UI', 'Node.js', 'AngularJS', 'Ext JS', 'Knockout.js', 'RequireJS', 'jQuery Mobile']
        },
        {
            title: 'JAVA WORLD',
            items: ['JSP', 'JSF', 'JPA', 'Hibernate', 'CDI', 'JAX - RS', 'RESTEasy', 'Spring', 'Seam', 'Maven', 'GWT', 'Wicket']
        },
        {
            title: 'PYTHON WORLD',
            items: ['Django', 'South', 'Celery', 'Tornado']
        }
        ,
        {
            title: 'SERVERS ETC.',
            items: ['JBoss AS', 'Tomcat', 'Nginx', 'IIS', 'Endeca', 'Jitsi']
        }
        ,
        {
            title: 'THE XML GANG',
            items: ['XSLT', 'XPath', 'XSL-FO']
        }
        ,
        {
            title: 'THIRD PARTY FRAMEWORKS',
            items: ['Selenium Webdriver ', 'Various PDF frameworks', 'Various control libraries', 'OCR SDKs', 'CrystalReports', 'WebRTC', 'Jitsi']
        }
        ,
        {
            title: 'CLOUD',
            items: ['Amazon AWS', 'S3', 'Rackspace', 'Heroku', 'Windows Azure']
        }
        ,
        {
            title: 'MOBILE SPACE',
            items: ['Objective - C', 'Cocoa', 'Cocos2d', 'Titanium', 'Phonegap', 'jQuery Mobile', 'HTML5', 'Android', 'Windows Mobile']
        }

    ]
    return (
        <div className='pt-32 relative z-[10]'>
            <TitleBox tag='Technology ' title1='Tools and Frameworks ' title2='guideline For You' />
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-5 '>
                <div>
                    {
                        ToolsItems?.slice(0, 3)?.map((data, index) => (
                            <div data-aos="zoom-in" key={index} className='text-white  flex items-center flex-col mt-10 h-fit ' >
                                <div className='w-52 h-fit '>
                                    <h2>{data?.title}</h2>
                                    <div className='h-[1px] w-full bg-green-500'></div>
                                    <div className='h-[1px] w-full  mb-5'></div>
                                    {
                                        data?.items?.map((item, itemIndex) => (
                                            <div key={itemIndex} className='text-gray-300 text-sm flex items-center gap-2 my-2 hover:text-green-500'><div className='h-2 w-2 rounded-full bg-green-500'></div>{item}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        ToolsItems?.slice(3, 6)?.map((data, index) => (
                            <div data-aos="zoom-out" key={index} className='text-white  flex items-center flex-col mt-10 h-fit ' >
                                <div className='w-52 h-fit '>
                                    <h2>{data?.title}</h2>
                                    <div className='h-[1px] w-full bg-green-500'></div>
                                    <div className='h-[1px] w-full  mb-5'></div>
                                    {
                                        data?.items?.map((item, itemIndex) => (
                                            <div key={itemIndex} className='text-gray-300 text-sm flex items-center gap-2 my-2 hover:text-green-500'><div className='h-2 w-2 rounded-full bg-green-500'></div>{item}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        ToolsItems?.slice(6)?.map((data, index) => (
                            <div data-aos="zoom-in" key={index} className='text-white  flex items-center flex-col mt-10 h-fit ' >
                                <div className='w-52 h-fit '>
                                    <h2>{data?.title}</h2>
                                    <div className='h-[1px] w-full bg-green-500'></div>
                                    <div className='h-[1px] w-full  mb-5'></div>
                                    {
                                        data?.items?.map((item, itemIndex) => (
                                            <div key={itemIndex} className='text-gray-300 text-sm flex items-center gap-2 my-2 hover:text-green-500'><div className='h-2 w-2 rounded-full bg-green-500'></div>{item}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
