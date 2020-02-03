export const BLOG_SAMPLE = [{
    id: 1,
    title: 'UrbanCode Deploy(UCD) – Sharing Properties Between Components',
    published_date: "8 May 2019",
    author: [{ email: "alan.murphy@uk.ibm.com" }, { email: "david@uk.ibm.com" }, { email: "rene.klever@nl.ibm.com" }],
    exec_summary: "Learn how to avoid having multiple independent definitions or property sheets with different versions and still maintain the traceability of values used.",
    article: [
        "In UCD processes, we would normally seek to minimise the scope of visibility of properties so that there is no confusion between similar / same named properties between components and also because we generally have no need for a wider scope.  But this isn’t always the case.",
        "If we take a brief look at the two major classifications of properties, you can see how UCD has evolved.",
        "In the beginning there were just plain old properties (POPs) they were just simple name/value pairs they had wider visibility but suffered from some draw backs which is how UCD evolved to offer Property Definitions.",
        "Property definitions offered a more rigorous way of defining properties and also introduced the automatic creation of instances in the required scopes.  So for example, a plain-old-property for environments had to be manually defined in each environment which opened the door for mis-spellings / differences in case / forgetting to define the property in an environment at all.  It also made the creation of new environments a bit more challenging.  Also cleaning up if a property were removed or if its named changed required a lot more manual work.",
        "Using a component environment property definition, I only need to define it once in a component and then every environment belonging to an application that includes the component automatically gets an instance of the property defined in it.  They also get automatically renamed and cleaned up.",
        "In addition, I can also specify a data type, a default value and a value pattern.  All of these things made the property definition an altogether much more rigorous proposition.  But they came with some changes in scope.  So, a component environment property definition is only visible to the component that defined it.",
        "This neatly leads us back to the topic of this blog.  How do I share a property definition between components?  Well I suppose we should start out by asking - Why do we need to?",
        "There are some use-cases where this can be required but they are usually along the lines of: you have a resource provider and a resource consumer, and they are in different components.",
        "For example, I have a database component for my application which manages the database itself and I have another component that uses the database.  They both have a need to access the database and they both need credentials to do so.  If I use a component environment property definition, they are only in scope for the component that defines the property.  So how can I share the value?  I don’t want to have to define the property twice in two separate places, I could update one place and forget the other(s), yes there could be many components that want access to the same database.",
        "A general rule of thumb, which is applicable in many spheres, is to define once, use many.  So, if I was writing code, I’d define my constant or variable once and use it from many places.",
        "How can we do this with UCD?",
        "I’m sure there are going to be other solutions to this problem, some of which may have a process change the value of another property on-the-fly.  But this means that the number of versions of your property sheet is going to sky rocket and its also going to provide some ‘interesting’ challenges with snapshots.",
        "Well that is along the lines of the solution I’ll present here, but what I use are process properties.  Yes, that’s right, processes have properties too.  First, I would decide on what component owns the property.  Usually this is logically the resource provider.  This component is where I define my component environment properties and then I have a component process which is always run, but the application process; something like an operational process with no version.  This process then uses a step from the UrbanCode Deploy Processes plugin to create each property I want to share on the parent application process so that now all components can see the properties you expose.",
        "So how did I Build It?",
    ],
    tag: [
        "Deploy",
        "DevOps",
        "UrbanCode"
    ]
}, {
    id: 2,
    title: 'LOUISE - UrbanCode Deploy(UCD) – Sharing Properties Between Components',
    published_date: "8 May 2019",
    author: [{ email: "alan.murphy@uk.ibm.com" }, { email: "david@uk.ibm.com" }, { email: "rene.klever@nl.ibm.com" }],
    exec_summary: "Learn how to avoid having multiple independent definitions or property sheets with different versions and still maintain the traceability of values used.",
    article: [
        "In UCD processes, we would normally seek to minimise the scope of visibility of properties so that there is no confusion between similar / same named properties between components and also because we generally have no need for a wider scope.  But this isn’t always the case.",
        "If we take a brief look at the two major classifications of properties, you can see how UCD has evolved.",
        "In the beginning there were just plain old properties (POPs) they were just simple name/value pairs they had wider visibility but suffered from some draw backs which is how UCD evolved to offer Property Definitions.",
        "Property definitions offered a more rigorous way of defining properties and also introduced the automatic creation of instances in the required scopes.  So for example, a plain-old-property for environments had to be manually defined in each environment which opened the door for mis-spellings / differences in case / forgetting to define the property in an environment at all.  It also made the creation of new environments a bit more challenging.  Also cleaning up if a property were removed or if its named changed required a lot more manual work.",
        "Using a component environment property definition, I only need to define it once in a component and then every environment belonging to an application that includes the component automatically gets an instance of the property defined in it.  They also get automatically renamed and cleaned up.",
        "In addition, I can also specify a data type, a default value and a value pattern.  All of these things made the property definition an altogether much more rigorous proposition.  But they came with some changes in scope.  So, a component environment property definition is only visible to the component that defined it.",
        "This neatly leads us back to the topic of this blog.  How do I share a property definition between components?  Well I suppose we should start out by asking - Why do we need to?",
        "There are some use-cases where this can be required but they are usually along the lines of: you have a resource provider and a resource consumer, and they are in different components.",
        "For example, I have a database component for my application which manages the database itself and I have another component that uses the database.  They both have a need to access the database and they both need credentials to do so.  If I use a component environment property definition, they are only in scope for the component that defines the property.  So how can I share the value?  I don’t want to have to define the property twice in two separate places, I could update one place and forget the other(s), yes there could be many components that want access to the same database.",
        "A general rule of thumb, which is applicable in many spheres, is to define once, use many.  So, if I was writing code, I’d define my constant or variable once and use it from many places.",
        "How can we do this with UCD?",
        "I’m sure there are going to be other solutions to this problem, some of which may have a process change the value of another property on-the-fly.  But this means that the number of versions of your property sheet is going to sky rocket and its also going to provide some ‘interesting’ challenges with snapshots.",
        "Well that is along the lines of the solution I’ll present here, but what I use are process properties.  Yes, that’s right, processes have properties too.  First, I would decide on what component owns the property.  Usually this is logically the resource provider.  This component is where I define my component environment properties and then I have a component process which is always run, but the application process; something like an operational process with no version.  This process then uses a step from the UrbanCode Deploy Processes plugin to create each property I want to share on the parent application process so that now all components can see the properties you expose.",
        "So how did I Build It?",
    ],
    tag: [
        "Deploy",
        "DevOps",
        "UrbanCode"
    ]
}]



export const RANDOM_TAGS = [
    {
        tags: ["devops", "cloud"]
    },
    {
        tags: ["csmo", "log-analysis"]
    },
    {
        tags: ["cloud", "deploy", "integration"]
    },    
    {
        tags: ["devops", "develop", "deploy", "urbancode", "rational", "cloud", "manage", "monitor"]
    },
    {
        tags: ["csmo", "monitor", "manage", "log-analysis", "noi"]
    },
    {
        tags: ["devops", "cloud"]
    },
    {
        tags: ["csmo", "log-analysis"]
    },
    {
        tags: ["cloud", "deploy", "migration", "integration"]
    }    ,
    {
        tags: ["devops", "deploy", "urbancode"]
    },
]

export const DEVOPS_LINKS = [
    {
        tag: [
            "DevOps",
            "General"
        ],
        link: {
            label: "IBM Cloud Blog",
            url: "https://www.ibm.com/cloud/blog/devops"
        },
    },
]

export const CSMO_LINKS = [
    {
        tag: [
            "csmo",
            "General"
        ],
        link: {
            label: "IBM Cloud Blog",
            url: "https://www.ibm.com/cloud/blog/management"
        },
    },
    {
        tag: [
            "csmo",
            "General"
        ],
        link: {
            label: "IBM Cloud Architecture and Solution Engineering (CASE) Blog",
            url: "http://ibm.biz/csmo_blog"
        },
    },
]

export const TRADIT_LINKS = [
    {
        tag: [
            "DevOps",
            "General"
        ],
        link: {
            label: "IBM Cloud Blog",
            url: "https://www.ibm.com/cloud/blog/devops"
        },
    },
]