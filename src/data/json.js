export const TESTDATA = {
  data: '<ul class="panel-text-small"><li class="panel-text-li">A program of events and classes designed to foster collaboration, share knowledge, learn from experience and improve practices with focus on the following areas:</li><ul><li class="padding-left display-list">Management & Platform</li><li class="padding-left display-list">Multicloud Manager</li><li class="padding-left display-list">Application Insights</li><li class="padding-left display-list">Operation Insights</li><li class="padding-left display-list">DevOps</li><li class="padding-left display-list">CSMO</li></ul><li class="padding-top">Bi-weekly meeting events are held every other Tuesday. Additional enablement and courses may be scheduled.</li><li class="padding-top">Events are open to all Cloud practitioners.</li><li class="padding-top">For more details, visit the <a target="_blank" rel="noopener noreferrer" href="https://ec.yourlearning.ibm.com/w3/series/10005049?other=All&track=All%20Tracks&layout=grid">Your Learning</a> series and subscribe to events.</li></ul>'
}
/**********************/
/**     C S M O      **/
/**********************/
export const JSON_CSMO = {
  id: "CSMO",
  short_name: "CSMO",
  full_name: "IBM Cloud Service Management and Operations",
  whatis: {
    title: "What is CSMO?",
    summary: "IBM Cloud Service Management and Operations (CSMO) addresses the operational aspect of your application and services.<p class='padding-top panel-text-small'>CSMO enables the business to take a renewed look at how they manage and support applications in the cloud, and ensure an 'always on' experience for their customers.</p><p class='padding-top panel-text-small'>The CSMO discipline drives an organization to re-visit the activities of plan, design, deliver, operate, and control in an effort to transform and enable IT and cloud services they offer. In addition enabling their application teams, development, and operations to redefine service management to better fit the needs for cloud and DevOps patterns, while maintaining the traditional approaches, such as the IT Infrastructure Library (ITIL) where appropriate.</p></div>",
    icon: {
      type: "help",
      color: "red"
    }
  },
  quote: {
    text: "Cloud Operations Management is the process concerned with designing, controlling, and subsequently redesigning cloud operations processes.",
    link: {
      label: "Techopedia Definition",
      url: "https://www.techopedia.com/definition/30468/cloud-operations-management",
    }
  },
  contacts: [
    {
      email: "mbienfan@us.ibm.com",
      full_name: "Melody Bienfang",
      tags: [
        "member",
        "team",
      ],
    },
  ],
  resources: [
    {
      tag: [
        "video",
        "devops",
        "General"
      ],
      link:
      {
        label: "CSMO Video Playlist",
        url: "https://secure.video.ibm.com/channel/23645120/playlist/518837",
        icon: "video"
      }
    },
    {
      tag: [
        "product",
        "csmo",
        "feature",
        "learn"
      ],
      link: {
        label: "Explore CSMO",
        url: "https://www.ibm.com/cloud/garage/content/course/explore-csmo/0"
      },
    },
    {
      tag: [
        "product",
        "csmo",
        "General",
        "feature",
        "learn"
      ],
      link: {
        label: "CSMO Learning Journey",
        url: "https://www.ibm.com/cloud/garage/journeys/csmo"
      },
    },
    {
      tag: [
        "product",
        "csmo",
        "General"
      ],
      link: {
        label: "Become a CSMO advocate",
        url: "https://www.ibm.com/cloud/garage/content/course/csmo-advocate/0"
      },
    },
    {
      tag: [
        "product",
        "csmo",
        "General"
      ],
      link: {
        label: "IBM Cloud Sales CSMO",
        url: "https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wf58c4c538dbf_45b4_b7a7_5003d0ceb79b/page/Cloud%20Service%20Management%20and%20Operations%20(CSMO)"
      },
    },
    {
      tag: [
        "product",
        "devops",
        "General"
      ],
      link: {
        label: "CASE Asset Repository",
        url: "https://ibm-cloud-architecture.github.io/deliverables/csmo.html"
      },
    },
    {
      tag: [
        "CSMO",
        "DevOps",
        "General"
      ],
      link: {
        label: "ChatOps in use community Learning Series",
        url: "https://ec.yourlearning.ibm.com/w3/series/10041493"
      },
      badge: {
        link: "link",
        icon: "badge"
      }
    }
  ],
  offerings: {
    summary: "Clients are transforming their operations to support the cloud paradigm shift. As developing, testing, and releasing of new functions becomes more agile, operations must also evolve.  While other clients have not realized they must transform operations to stay relevant.</p><p class='padding-top panel-text-small'>With IBM Cloud Service Management and Operations (CSMO), clients can take incremental steps toward the agility, performance, and collaboration they need in order to accelerate their ability to innovate, modernize systems, reduce costs and gain competitive advantage.</p><p class='padding-top panel-text-small'>",
    link: {
      label: "SODA",
      url: "http://ibm.biz/csmo-soda"
    },
    offering: [
      {
        name: "CSMO Discovery and Roadmap",
        id: "CMO400",
        description: "Discovery & Roadmap for CSMO offering provides an As-Is/ Target state analysis which will take a comprehensive approach to fully analyze a client cloud service management & operations processes, procedures, tools and resources.  Services will provide an as is - target state report.  The report and analysis will present gaps, recommendations and a go forward plan to achieve future state.",
        tag: [
          "CSMO"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/1431"
        },
      },
      {
        name: 'RACI for Cloud',
        id: "CMO100",
        description: "The RACI offerings focus on defining the roles and responsibilities for the delivery of the key supporting processes when providing Cloud Services.  Based on these use-cases we can define who is Responsible (R), Accountable (A), Consulted (C) or Informed (I) when processes are delivered. This is crucial as customers adopt Cloud and move into a model where there is a Cloud Provider or Consumer, providing infrastructure or platform services for customers to run their application upon.",
        tag: [
          "CSMO"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/805"
        }
      },
      {
        name: 'ChatOps Adoption',
        id: "CMO202",
        description: "ChatOps is the use of chat clients, chatbots and real-time communication tools to facilitate how software development and operation tasks are communicated and executed. Essentially it's about integrating work the clients are already doing into conversations they are already having. The ChatOps offerings providing consultancy and coaching to help customers transform to a more collaborative approach using the tools they have to provide more business and organisational benefit.",
        tag: [
          "CSMO"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/827"
        },
      },
      {
        name: 'Build to Manage',
        id: "CMO302",
        description: "Build to Manage provides guidance and assistance to help client DevOps teams to implement and deploy applications and services that are reliable, performant, manageable and production ready.",
        tag: [
          "CSMO"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/836"
        },
      },
      {
        name: 'Site Reliability Engineer (SRE)',
        id: "CMO502",
        description: "Site Reliability Engineer (SRE) offering provides staff augmentation to ensure the SRE principles are understood and implemented.  Our SRE subject matter expert will work within the client SRE teams to provide guidance and coaching to support the successful adoption of SRE practices.",
        tag: [
          "CSMO"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/1496",
        },
      },
      {
        name: 'CSMO Consultancy',
        id: "CMO404",
        description: "Mentor and assist Client through discussions, plan strategy, define a high-level business strategy solution for Cloud Service Management and Operations (CSMO) disciplines for the client’s cloud (private, public, hybrid) platform capabilities.    We will provide a findings & recommendations output.",
        tag: [
          "CSMO"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/1485"
        },
      },
      {
        name: 'IBM Cloud Garage - CSMO',
        id: "CG500",
        description: "IBM Cloud Garage Visit,  Design Thinking or MVP with a focus on CSMO.",
        tag: [
          "CSMO"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/316"
        },
      }
    ]
  },

  blogs: {
    summary: "Articles shared by community members and links to related blogs.",
    link: {
      label: "See all...",
      url: "/"
    },
    blogs: [
      {
        tag: [
          "csmo"
        ],
        link: {
          label: 'Community blogs tagged with "CSMO"',
          url: "https://apps.na.collabserv.com/blogs/c83b42e5-2186-42f1-b498-2871621e2984?tags=csmo&lang=en_us"
        },
      },
      {
        tag: [
          "csmo"
        ],
        link: {
          label: "IBM Cloud Garage and Solution Engineering blog (tagged CSMO)",
          url: "https://apps.na.collabserv.com/blogs/7be81ac0-37f8-466b-a858-2525e0b798cf?lang=en_us"
        },
      },
      {
        tag: [
          "csmo",
          "General"
        ],
        link: {
          label: "Configuring Predictive Insights to use Apache LDAP authentication",
          url: "https://apps.na.collabserv.com/blogs/c83b42e5-2186-42f1-b498-2871621e2984/entry/Configuring_Operations_Analytics_Predictive_Insights_to_use_Apache_LDAP_authentication?lang=en_us"
        },
      },
      {
        tag: [
          "csmo"
        ],
        link: {
          label: "What is Site Reliability Engineer (SRE)?",
          url: "http://ibm.biz/csmo-what-is-SRE"
        },
      },
      {
        tag: [
          "csmo"
        ],
        link: {
          label: "New SRE presentation)?",
          url: "https://apps.na.collabserv.com/blogs/7be81ac0-37f8-466b-a858-2525e0b798cf/entry/Update_to_the_SRE_Presentation_aug_2019?lang=en_us"
        },
      }
    ]
  },
  products: [
    {
      tag: [
        "product",
        "csmo",
        "General"
      ],
      link: {
        label: "CSMO is a service offering...",
        url: "https://soda.w3ibm.mybluemix.net/search?query=*&filters={%22segments%22:[%22Cloud%20Service%20Management%20and%20Operations%20(CSMO)%22]}"
      },
    },
    {
      tag: [
        "product",
        "csmo",
        "General"
      ],
      link: {
        label: "Check out the architecture",
        url: "https://www.ibm.com/cloud/garage/architectures/serviceManagementArchitecture"
      },
    },
    {
      tag: [
        "product",
        "csmo",
        "General"
      ],
      link: {
        label: "A guide to ChatOps",
        url: "https://pages.github.ibm.com/CASE/ChatOps/"
      },
    },

  ],
  slack_channels: [
    {
      tag: [
        "slack",
        "csmo",
        "General"
      ],
      link: {
        label: "#tech-cloudmgmt-csmo",
        url: "https://ibm-cloud.slack.com/messages/C464273UM",
        icon: "slack"
      },
    },
    {
      tag: [
        "slack",
        "csmo",
        "General"
      ],
      link: {
        label: "#gse-csmo-chatops",
        url: "https://ibm-cloud.slack.com/messages/CHJLNHG3Z",
        icon: "slack"
      },
    },
    {
      tag: [
        "slack",
        "csmo",
        "General"
      ],
      link: {
        label: "#gse-csmo-discovery",
        url: "https://ibm-cloud.slack.com/messages/CHJN4AH55",
        icon: "slack"
      },
    },
    {
      tag: [
        "slack",
        "csmo",
        "General"
      ],
      link: {
        label: "#gse-csmo-garage",
        url: "https://ibm-cloud.slack.com/messages/CHJLNHG3Z",
        icon: "slack"
      },
    },
    {
      tag: [
        "slack",
        "csmo",
        "General"
      ],
      link: {
        label: "#gse-csmo-icp-mcm-ops",
        url: "https://ibm-cloud.slack.com/messages/CHK3N8Q86",
        icon: "slack"
      },
    },
    {
      tag: [
        "slack",
        "csmo",
        "General"
      ],
      link: {
        label: "#gse-csmo-raci-consult",
        url: "https://ibm-cloud.slack.com/messages/CHK3PJE9L",
        icon: "slack"
      },
    },
    {
      tag: [
        "slack",
        "csmo",
        "General"
      ],
      link: {
        label: "#gse-csmo-sre",
        url: "https://ibm-cloud.slack.com/messages/CHJ0GULFP",
        icon: "slack"
      },
    },
    {
      tag: [
        "slack",
        "csmo",
        "General"
      ],
      link: {
        label: "#tech-devops-svcmgmt",
        url: "https://ibm-cloud.slack.com/archives/C6D6WHDGX",
        icon: "slack"
      },
    },

  ],
  tags: {
    tags: ["csmo", "monitor", "manage", "log-analysis", "noi"]
  },
  stories: [
    {
      tag: [
        "story",
        "csmo",
        "General"
      ],
      link: {
        label: "CSMO Success Stories",
        url: "https://ibm.box.com/s/2rszlcrp06ouvueslw1rd3op7uunlv3e"
      },
    },
    {
      tag: [
        "story",
        "csmo",
        "General"
      ],
      link: {
        label: "Submit a Success Story",
        url: "https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W5ccbfeca27ac_4588_82ce_50757d2fd1c1/page/Submitting%20Client%20Success%20Stories",
        icon: "document"
      },
    },
    {
      tag: [
        "story",
        "csmo",
        "General"
      ],
      link: {
        label: "All Management & Platform stories",
        url: "https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wf58c4c538dbf_45b4_b7a7_5003d0ceb79b/page/Client%20successes%20and%20references%20for%20Cloud%20Integration%20Services?section=MAP"
      },
    },

  ],
}

/**********************/
/**     DEVOPS      **/
/**********************/
export const JSON_DEVOPS = {
  id: "DevOps",
  short_name: "DevOps",
  full_name: "DevOps",
  whatis: {
    title: "What is DevOps?",
    summary: "<p class='padding-top panel-text-small'>DevOps is a concept with different interpretations and definitions, but when you get down to it, it's all about developers and operations teams breaking down silos and working together to innovate faster.</p><p class='padding-top panel-text-small'>For many companies, the ability to innovate at a rapid pace — respond to market conditions and customer feedback — is a key factor for success.</p><p class='padding-top panel-text-small'>Adopting the DevOps philosophy requires a new mindset, new tools and new skills.</p>",
    icon: {
      type: "help",
      color: "blue"
    }
  },
  contacts: [
    {
      email: "shochste@us.ibm.com",
      tags: [
        "member",
        "team",
      ],
    },
    {
      email: "acm@us.ibm.com",
      tags: [
        "member",
        "team",
      ],
    },
  ],
  quote: {
    text: "Shorten releases, improve reliability and stay ahead of the competition.",
    link: {
      label: "IBM",
      url: "https://www.ibm.com/cloud/devops",
    }
  },
  resources: [
    {
      link: {
        label: "DevOps Video Playlist",
        url: "https://secure.video.ibm.com/channel/23645120/playlist/518678",
        icon: "video"
      },
    },
    {
      tag: [
        "product",
        "devops",
        "General"
      ],
      link: {
        label: "CASE Asset Repository",
        url: "https://ibm-cloud-architecture.github.io/deliverables/application-modernization.html"
      },
    },
    {
      tag: [
        "DevOps",
        "General",
        "feature"
      ],
      link: {
        label: "IBM DevOps - Solutions, Case Studies, Resources",
        url: "https://www.ibm.com/cloud/devops"
      },
    },
    {
      tag: [
        "DevOps",
        "General"
      ],
      link: {
        label: "Reference Architecture",
        url: "https://www.ibm.com/cloud/garage/architectures/devOpsArchitecture/0_1"
      },
    },
    {
      tag: [
        "DevOps",
        "General"
      ],
      link: {
        label: "DevOps for Hybrid Cloud PoV",
        url: "https://www.ibm.com/downloads/cas/YZDAADR2"
      },
    },
    {
      tag: [
        "DevOps",
        "Learn"
      ],
      link: {
        label: "DevOps Learning Journey",
        url: "https://www.ibm.com/cloud/garage/davinci/devops"
      },
      badge: {
        link: {
          label: "IBM Garage Method for Cloud - Explorer",
          url: "https://www.youracclaim.com/org/ibm/badge/ibm-garage-method-for-cloud-explorer"
        },
        icon: "badge"
      }
    },
    {
      tag: [
        "DevOps",
        "Learn"
      ],
      link: {
        label: "DevOps Badges",
        url: "https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wfa71c61628d8_4a44_9e8c_d27221adc2ea/page/DevOps%20Badges"
      },
      badge: {
        link: {
          label: "IBM Garage Method for Cloud - Explorer",
          url: "https://www.youracclaim.com/org/ibm/badge/ibm-garage-method-for-cloud-explorer"
        },
        icon: "badge"
      }
    },
    {
      tag: [
        "DevOps",
        "Learn"
      ],
      link: {
        label: "IBM Cloud Innovate method",
        url: "https://www.ibm.com/cloud/garage/content/course/explore-cloud-innovate/32"
      },
      badge: {
        link: {
          label: "IBM Cloud Innovate Method - Explorer",
          url: "https://www.youracclaim.com/org/ibm/badge/ibm-cloud-innovate-method-explorer"
        },
        icon: "badge"
      }
    },
    {
      tag: [
        "DevOps",
        "Learn"
      ],
      link: {
        label: "IBM Garage Method for Cloud - Explorer",
        url: "https://www.ibm.com/cloud/garage/content/course/explore-garage-method-for-cloud/0"
      },
      badge: {
        link: {
          label: "IBM Garage Method for Cloud - Explorer",
          url: "https://www.youracclaim.com/org/ibm/badge/ibm-garage-method-for-cloud-explorer"
        },
        icon: "badge"
      }
    },
    {
      tag: [
        "DevOps",
        "Learn"
      ],
      link: {
        label: "Use Kabanero, Appsody, and Codewind to build a Spring Boot application on Kubernetes",
        url: "https://developer.ibm.com/tutorials/kabanero-introduction-to-modern-microservices-development-for-kubernetes/"
      },
    },
    {
      tag: [
        "DevOps",
        "general",
        "ucd"
      ],
      link: {
        label: "UCD Architecture",
        url: "http://www.urbancodelabs.com/product/deploy/architecture/"
      },
    },
    {
      tag: [
        "DevOps",
        "general",
        "feature"
      ],
      link: {
        label: "IBM Developer - All things DevOps",
        url: "https://developer.ibm.com/?s=devops"
      },
    },
    {
      tag: [
        "DevOps",
        "general",
        "feature"
      ],
      link: {
        label: "IBM Cloud Pak for Applications",
        url: "https://developer.ibm.com/components/cloud-pak-for-applications/"
      },
    },
    {
      tag: [
        "DevOps",
        "general",
        "ucd"
      ],
      link: {
        label: "Redhat Openshift on IBM Cloud",
        url: "https://developer.ibm.com/components/redhat-openshift-ibm-cloud/"
      },
    },
  ],
  products: [
    {
      tag: [
        "product",
        "devops",
        "General"
      ],
      link: {
        label: "IBM Rational Product Pages",
        url: "https://productpages.w3ibm.mybluemix.net/ProductPages/index.html?name=Rational"
      },
    },
    {
      tag: [
        "product",
        "devops",
        "General"
      ],
      link: {
        label: "IBM UrbanCode Product pages",
        url: "https://productpages.w3ibm.mybluemix.net/ProductPages/index.html?name=UrbanCode"
      },
    },
    {
      tag: [
        "product",
        "devops",
        "General"
      ],
      link: {
        label: "IBM UrbanCode Plugins",
        url: "http://www.urbancode.com/plugins/"
      },
    },
    {
      tag: [
        "product",
        "devops",
        "General"
      ],
      link: {
        label: "IBM UrbanCode Velocity",
        url: "http://www.urbancode.com/product/urbancode-velocity/"
      },
    },
    {
      tag: [
        "product",
        "devops",
        "General"
      ],
      link: {
        label: "IBM UrbanCode Deploy",
        url: "http://www.urbancode.com/product/deploy/"
      },
    },
    {
      tag: [
        "product",
        "devops",
        "General"
      ],
      link: {
        label: "IBM UrbanCode Build",
        url: "http://www.urbancode.com/product/build/"
      },
    },
    {
      tag: [
        "product",
        "devops",
        "General"
      ],
      link: {
        label: "IBM UrbanCode Release",
        url: "http://www.urbancode.com/product/release/"
      },
    },
  ],
  blogs: {
    summary: "Articles shared by community members and links to related blogs.",
    link: {
      label: "See all...",
      url: "/"
    },
    blogs: [
      {
        tag: [
          "DevOps"
        ],
        link: {
          label: 'Community blogs tagged with "DevOps"',
          url: "https://apps.na.collabserv.com/blogs/c83b42e5-2186-42f1-b498-2871621e2984?tags=devops&lang=en_us"
        },
      },
      {
        tag: [
          "DevOps"
        ],
        link: {
          label: 'UrbanCode blogs',
          url: "http://www.urbancodelabs.com/blog/"
        },
      },
      {
        tag: [
          "DevOps",
          "blog"
        ],
        link: {
          label: "IBM New Cloud Blog",
          url: "https://www.ibm.com/blogs/bluemix/2019/03/what-is-devops/"
        },
      },
      {
        tag: [
          "product",
          "devops",
          "General"
        ],
        link: {
          label: "Top 2019 Trends in DevOps",
          url: "https://medium.com/@LazzaroChris/2019-devops-trends-4f8f9b476ac7"
        },
      },
    ]
  },
  offerings: {
    summary: "The DevOps services offerings are the next logical step and upsell for clients who have purchased IBM private Cloud, public cloud and/or DevOps. With no product affinity, the offerings take a consultative approach in assisting clients on their cloud journey, focusing on mentoring and assisting them as they begin their transformation.",
    link: {
      label: "SODA",
      url: "http://ibm.biz/csmo-soda"
    },
    offering: [
      {
        name: 'DevOps Discovery and Solutioning Workshop',
        description: "Establish a roadmap to improve DevOps outcomes that meet customer defined business goals.",
        id: "",
        tag: [
          "devops"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/32"
        },
      },
      {
        name: 'IBM UrbanCode Deploy Jump Start',
        description: "Enables UCD clients to rapidly setup their application deployment automation platform.",
        id: "ORS110",
        tag: [
          "devops"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/33"
        }
      },
      {
        name: 'IBM UrbanCode Deploy Quick Start',
        description: "Bring the customer up to speed on Deploy automation with UCD using IBM best practices.",
        id: "DV220",
        tag: [
          "devops"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/35"
        },
      },
      {
        name: 'UrbanCode Quick Win Pilot',
        description: "Implement and optimize usage model, enable teams and automate continuous delivery process..",
        id: "DV230",
        tag: [
          "devops"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/34"
        },
      },
    ]
  },
  slack_channels: [
    {
      tag: [
        "slack",
        "devops",
        "General"
      ],
      link: {
        label: "#tech-devops-ucd",
        url: "https://www.ibm.com/cloud/blog/management",
        icon: "slack"
      },
    },
    {
      tag: [
        "product",
        "devops",
        "General"
      ],
      link: {
        label: "#tech-devops-svcmgmt",
        url: "https://ibm-cloud.slack.com/archives/C6D6WHDGX",
        icon: "slack"
      },
    },

  ],
  tags: {
    tags: ["devops", "develop", "deploy", "urbancode", "rational", "cloud", "manage", "monitor"]
  },
  stories: [
    {
      tag: [
        "story",
        "csmo",
        "General"
      ],
      link: {
        label: "Submit a Success Story",
        url: "https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W5ccbfeca27ac_4588_82ce_50757d2fd1c1/page/Submitting%20Client%20Success%20Stories",
        icon: "document"
      },
    },
    {
      tag: [
        "product",
        "csmo",
        "General"
      ],
      link: {
        label: "All Management & Platform stories",
        url: "https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wf58c4c538dbf_45b4_b7a7_5003d0ceb79b/page/Client%20successes%20and%20references%20for%20Cloud%20Integration%20Services?section=MAP"
      },
    },
  ],

}

/**********************/
/**  TRADITIONAL IT  **/
/**********************/
export const JSON_TRADITIONAL_IT = {
  id: "TRADIT",
  short_name: "TradIT",
  full_name: "Traditional IT",
  whatis: {
    title: "What is Traditional IT?",
    summary: "<p class='padding-top panel-text-small'>Teams must monitor the infrastructure and application layers, as well as the response time of an application.</p><p class='padding-top panel-text-small'>  Traditionally the on-prem solutions are </p><p></p><ul class='padding-top-5'><li class='padding-left display-list'>Hybrid Cloud Management (PureApp, CAM, ICO)</li><li class='padding-left display-list'>App Insights (APM, ICAM)</li><li class='padding-left display-list'>Op Insights (NOI, CEM)</li><li class='padding-left display-list'>DevOps (Rational, UrbanCode)</li></ul></p>",
    icon: {
      type: "help",
      color: "yellow"
    }
  },
  quote: {
    text: "",
    link: {
      label: "",
      url: "",
    }
  },
  resources: [
    {
      tag: [
        "product",
        "tradit",
        "General",
        "video"
      ],
      link: {
        label: "Traditional IT Video Playlist",
        url: "https://secure.video.ibm.com/channel/23645120/playlist/519110",
        icon: "video"
      },
    },
    {
      tag: [
        "product",
        "tradit",
        "General",
        "feature"
      ],
      link: {
        label: "IT Operations Management Developer Center",
        url: "https://developer.ibm.com/itom/",
      },
    },
    {
      tag: [
        "tradit",
        "learn",
      ],
      link: {
        label: "IBM Netcool Operations Insight 1.6 Implementation and configuration training",
        url: "https://www.ibm.com/services/learning/ites.wss/zz-en?pageType=course_description&cc=&courseCode=TOD66G"
      },
      badge: {
        link: "link",
        icon: "badge"
      }
    },
    {
      tag: [
        "tradit",
        "learn",
        "feature"
      ],
      link: {
        label: "NOI Best Practices",
        url: "https://www.ibm.com/developerworks/community/wikis/home?lang=en#/wiki/Tivoli%20Netcool%20OMNIbus/page/Best%20Practices"
      },
      badge: {
        link: "link",
        icon: "badge"
      }
    },

    {
      tag: [
        "tradit",
        "learn",
      ],
      link: {
        label: "NOI 1.6 documentation",
        url: "https://www.ibm.com/support/knowledgecenter/SSTPTP_1.6.0/com.ibm.netcool_ops.doc/soc/collaterals/soc_netops_kc_welcome.html"
      },
      badge: {
        link: "link",
        icon: "badge"
      }
    },
    {
      tag: [
        "tradit",
        "learn",
        "feature"
      ],
      link: {
        label: "Explore Application Modernization",
        url: "https://www.ibm.com/cloud/garage/content/course/explore-application-modernization/0"
      },
      badge: {
        link: "link",
        icon: "badge"
      }
    },
  ],
  blogs: {
    summary: "Articles shared by community members and links to related blogs.",
    link: {
      label: "See all...",
      url: "/"
    },
    blogs: [
      {
        tag: [
          "tradit"
        ],
        link: {
          label: "Old Community Blogs",
          url: "https://apps.na.collabserv.com/blogs/c83b42e5-2186-42f1-b498-2871621e2984?lang=en_us"
        },
      },
      {
        tag: [
          "tradit"
        ],
        link: {
          label: "Traditional IT Blogs",
          url: "https://apps.na.collabserv.com/blogs/c83b42e5-2186-42f1-b498-2871621e2984/entry/NOI_1_6_how_to_install_on_Fyre?lang=en_us"
        },
      },
      {
        tag: [
          "tradit"
        ],
        link: {
          label: "IT Operations Management Blogs",
          url: "https://developer.ibm.com/itom/blog/"
        },
      },
      {
        tag: [
          "tradit"
        ],
        link: {
          label: "Embarking on the journey to modernize your traditional applications with IBM Cloud Private and IBM Cloud APM",
          url: "https://developer.ibm.com/apm/2018/01/31/embarking-journey-modernize-traditional-applications/"
        },
      },
      {
        tag: [
          "tradit"
        ],
        link: {
          label: "Hybrid DevOps and Management Blog (w3 publisher)",
          url: "https://w3.ibm.com/w3publisher/hybrid-devops-and-management-community/blog"
        },
      },

    ]
  },
  offerings: {
    summary: "Our service offerings help clients on their cloud journey to build solutions and processes with end-to-end visibility, control, and automation to help manage applications, infrastructure, services, and workloads across cloud, hybrid, and traditional environments.",
    link: {
      label: "SODA",
      url: "http://ibm.biz/csmo-soda"
    },
    offering: [
      {
        name: "IBM Cloud App Management - Smart Start",
        id: "IT145",
        description: "Start using IBM Cloud App Management quickly - a cloud-native management platform for application modernization helping DevOps and Operations teams manage applications in a hybrid cloud environment.",
        tag: [
          "Cloud",
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/2904"
        },
      },
      {
        name: "NOI - Operations Management Solution Design Workshop",
        id: "IT150",
        description: "Evaluate key decisions and actions to architect an initial production Netcool Operations Insight deploymentor migrate an existing Netcool/OMNIbus environment.",
        tag: [
          "Cloud",
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/164"
        },
      },
      {
        name: "Netcool/OMNIbus to Netcool Operations Insight Upgrade Services",
        id: "IT154",
        description: "Realize improved operational visibility, event handling and advanced analytics provided by Netcool Operations Insight – Operations Management using IBM’s Best Practice and asset based upgrade services.",
        tag: [
          "Cloud",
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/166"
        },
      },
      {
        name: "IBM Operations Analytics - Predictive Insights Quick Start",
        id: "IT170",
        description: "Realise the value of Predictive Insights in your environment by undertaking a Proof of Concept",
        tag: [
          "Cloud",
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/329"
        },
      },
      {
        name: "IBM Operations Analytics - Log Analysis Application On-boarding",
        id: "IT162",
        description: "Onboard an application's logs into a production Log Analysis system. IBM will gather your requirements and turn it into a fully operational solution for analyzing your log data. Improve workflow, reduce Mean Time to Resolution and catch issues early.",
        tag: [
          "Cloud",
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/170"
        },
      },
      {
        name: "More service offerings available...",
        id: "",
        description: "Quick link to other related Management & Platform service offerings.",
        tag: [
          "Cloud",
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/search?query=IT1&filters={}"
        },
      },
    ]
  },
  products: [
    {
      tag: [
        "product",
        "tradit",
        "General"
      ],
      link: {
        label: "IBM Netcool Operations Insight (NOI)",
        url: "https://productpages.w3ibm.mybluemix.net/ProductPages/index.html?name=%22Netcool%20Operations%20Insight%22&ppId=8D7DCE403F7311E692951B84C90A7ACF&str=netcool"
      },
    },
    {
      tag: [
        "product",
        "tradit",
        "General"
      ],
      link: {
        label: "IBM Cloud Event Management",
        url: "https://productpages.w3ibm.mybluemix.net/ProductPages/index.html?name=cloud%20event%20management"
      },
    },
    {
      tag: [
        "product",
        "tradit",
        "General"
      ],
      link: {
        label: "Log Analysis info",
        url: "https://developer.ibm.com/itom/resources/category/log-analysis/"
      },
    },
    {
      tag: [
        "product",
        "tradit",
        "General"
      ],
      link: {
        label: "Predictive Insights Info",
        url: "https://developer.ibm.com/itom/resources/category/predictive-insights/"
      },
    },
  ],
  slack_channels: [
    {
      tag: [
        "product",
        "csmo",
        "General"
      ],
      link: {
        label: "#tech-cloudmgmt-ioa",
        url: "https://ibm-cloud.slack.com/messages/C3X2R8R4N",
        icon: "slack"
      },
    },
    {
      tag: [
        "product",
        "csmo",
        "General"
      ],
      link: {
        label: "#tech-cloudmgmt-noi",
        url: "https://ibm-cloud.slack.com/messages/C27FJ0U77",
        icon: "slack"
      },
    },
    {
      tag: [
        "product",
        "csmo",
        "General"
      ],
      link: {
        label: "#tech-devops-svcmgmt",
        url: "https://ibm-cloud.slack.com/archives/C6D6WHDGX",
        icon: "slack"
      },
    },
  ],
  tags: {
    tags: ["cloud", "deploy", "migration", "integration"]
  },
  stories: [
    {
      tag: [
        "story",
        "csmo",
        "General"
      ],
      link: {
        label: "Submit a Success Story",
        url: "https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W5ccbfeca27ac_4588_82ce_50757d2fd1c1/page/Submitting%20Client%20Success%20Stories",
        icon: "document"
      },
    },
    {
      tag: [
        "product",
        "csmo",
        "General"
      ],
      link: {
        label: "All Management & Platform stories",
        url: "https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wf58c4c538dbf_45b4_b7a7_5003d0ceb79b/page/Client%20successes%20and%20references%20for%20Cloud%20Integration%20Services?section=MAP"
      },
    },
  ],

}
/**************************/
/**  MULTICLOUD MANAGER  **/
/**************************/
export const JSON_MCM = {
  id: "MCM",
  short_name: "MCM",
  full_name: "MultiCloud Manager",
  whatis: {
    title: "What is Cloud Pak for MultiCloud Management?",
    summary: "<p class='padding-top panel-text-small'>Multi-Cloud Management is the process applied to a Hybrid Cloud environment where a Customer has multiple cloud platforms running different applications.  </p><p class='padding-top panel-text-small'>Multi-Cloud Management provides the following capability:<ul><li class='padding-left display-list'>Visibility - Increase application and cluster visibility across the enterprise from on-prem to any cloud, public or private</li><li class='padding-left display-list'>Automation - Simplify your IT and application ops management while increasing flexibility and cost-saving with intelligent data analysis driven by predictive signals</li><li class='padding-left display-list'>Governance - Manage your multicloud environments with a consistent set of configuration and security policies across all applications and clusters</li></p></li></ul></p>",
    icon: {
      type: "help",
      color: "green"
    }
  },
  quote: {
    text: "Multi-Cloud is an IT approach in which an organization uses multiple cloud services from more than one provider.",
    link: {
      label: "IBM",
      url: "https://www.ibm.com/blogs/cloud-computing/2018/10/24/what-is-multicloud/",
    }
  },
  contacts: [
    {
      email: "david@uk.ibm.com",
      tags: [
        "member",
        "team",
      ],
    },
  ],

  resources: [
    {
      tag: [
        "product",
        "mcm",
        "General",
        "feature"
      ],
      link: {
        label: "Cloud Pak for MCM 2020 Roadmap",
        url: "https://ibm.biz/cp4mcmroadmap"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General",
        "feature"
      ],
      link: {
        label: "MCM Sales Play",
        url: "https://ibm.seismic.com/Link/Content/DCpf47Sell4UiiwtL8hhHXFA"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General",
      ],
      link: {
        label: "MCM Service Offerings",
        url: "https://soda.w3ibm.mybluemix.net/search?query=Multicloud%20Management&filters={}"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General",
        "feature"
      ],
      link: {
        label: "MCM Competitors",
        url: "http://ibm.biz/cp4mcmCompetitors"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General",
      ],
      link: {
        label: "MCM Market Trends",
        url: "https://virtualizationreview.com/articles/2019/10/21/cloud-trends.aspx"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General",
      ],
      link: {
        label: "MCM Residency Insights",
        url: "https://cloudpak8s.io/mcm/cp4mcm_overview/"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General",
      ],
      link: {
        label: "CP4MCM on ROKS (Public Cloud) ",
        url: "https://cloud.ibm.com/catalog/content/ibm-cp-management#about"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General",
      ],
      link: {
        label: "MCM Dev Release Pulse Page",
        url: "https://digital.webmaster.ibm.com/ibmprivatecloud/squad-pulse/"
      },
    },
    {
      tag: [
        "learn",
        "mcm",
      ],
      link: {
        label: "CP4MCM Weekly Dev Playbacks",
        url: "https://ec.yourlearning.ibm.com/w3/series/10054414?other=All&track=All%20Tracks&layout=grid"
      },
    },

    {
      tag: [
        "product",
        "mcm",
        "General",
        "feature"
      ],
      link: {
        label: "BlueDemo",
        url: "https://bluedemos.com/show/1719"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General"
      ],
      link: {
        label: "MCM Video Playlist",
        url: "https://secure.video.ibm.com/channel/23645120/playlist/500457",
        icon: "video"
      },
    },

    {
      tag: [
        "product",
        "mcm",
        "General"
      ],
      link: {
        label: "Cookbook for MCM Solution Architects",
        url: "https://pages.github.ibm.com/CASE/refarch-mcm/"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "learn"
      ],
      link: {
        label: "Explore MCM",
        url: "https://www.ibm.com/cloud/garage/content/course/ibm-multicloud-manager/0"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "learn"
      ],
      link: {
        label: "Cloud Pak for MCM in one minute",
        url: "https://mediacenter.ibm.com/media/1_aiyo4xli"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "learn"
      ],
      link: {
        label: "Under the Hood: IBM Cloud Pak for Multicloud Management",
        url: "https://mediacenter.ibm.com/media/1_me0g9zg7"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "learn"
      ],
      link: {
        label: "MCMDemo/Presentation",
        url: "https://ibm.ent.box.com/s/fs0a38atce7jsdbqyeomz5w77efqhtch"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "learn"
      ],
      link: {
        label: "CAM/iCAMDemo/Presentations",
        url: "https://ibm.box.com/s/umivok3tydeyvfcsubcjnk3p7w37yv0z"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "learn"
      ],
      link: {
        label: "RedHat enablement",
        url: "https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W5ccbfeca27ac_4588_82ce_50757d2fd1c1/page/RedHat"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "learn"
      ],
      link: {
        label: "Submit your ideas...",
        url: "https://cp4mcm.ideas.aha.io/"
      },
    },

    {
      tag: [
        "product",
        "mcm",
        "General"
      ],
      link: {
        label: "IBM Cloud",
        url: "https://www.ibm.com/cloud/multicloud-manager"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General",
      ],
      link: {
        label: "MCM Scenarios",
        url: "https://github.ibm.com/Richard-Hine/EuropeanCoC/tree/master/MultiCloudManager"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General"
      ],
      link: {
        label: "CAM client deck",
        url: "https://ibm.ent.box.com/s/ev7lxn65le33gzv59x4pg45c6y76jg24"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General"
      ],
      link: {
        label: "FAQ - IBM Cloud Pak for Multicloud Management",
        url: "https://ibm.ent.box.com/s/ei0915ve8201ttg2wyedql8q00zlgu96"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General",
      ],
      link: {
        label: "Cloud Pak for Multicloud Management - Videos, Product Tours and Hands On Labs",
        url: "https://www.ibm.com/demos/collection/Cloud-Pak-for-Multicloud-Management/"
      },
    },
  ],
  blogs: {
    summary: "Articles shared by community members and links to related blogs.",
    link: {
      label: "See all...",
      url: "/"
    },
    blogs: [
      {
        tag: [
          "mcm"
        ],
        link: {
          label: "Community Blogs",
          url: "https://apps.na.collabserv.com/blogs/c83b42e5-2186-42f1-b498-2871621e2984?lang=en_us"
        },
      },
      {
        tag: [
          "mcm"
        ],
        link: {
          label: "What is MultiCloud?",
          url: "https://www.ibm.com/blogs/cloud-computing/2018/10/24/what-is-multicloud/"
        },
      },
      {
        tag: [
          "mcm"
        ],
        link: {
          label: "Navigate MCM",
          url: "https://www.ibm.com/blogs/cloud-computing/2019/05/07/navigate-multicloud-management/"
        },
      },
    ]
  },
  offerings: {
    summary: "<p class='padding-top panel-text-small'>The MCM services offerings provide services to design, architect, build and integrate your next generation enterprise grade Hybrid Cloud management platform with IBM's Cloud Pak and container enabled applications</p>",
    link: {
      label: "SODA",
      url: "http://ibm.biz/csmo-soda"
    },
    offering: [
      // {
      //   name: "IBM Multicloud Manager - Solution Initiation Workshop",
      //   id: "MCM101",
      //   description: "Install IBM Multicloud Manager solution and provide IBM recommended practices to execute your project.",
      //   tag: [
      //     "MCM"
      //   ],
      //   link: {
      //     label: "link",
      //     url: "https://soda.w3ibm.mybluemix.net/show/3058"
      //   },
      // },
      {
        name: "Cloud Pak for Multicloud Management - Solution Initiation Workshop",
        id: "MCM102",
        description: "This workshop is designed to fast-track the development of your management solution using Cloud Pak for Multicloud Management on any IBM supported container platform. Configure and deploy the Cloud Pak components to support your solution development.",
        tag: [
          "MCM"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/3294"
        },
      },
      {
        name: "Cloud Pak for Multicloud Management - MVP",
        id: "MCM103",
        description: "Build out the first iteration of your MVP solution alongside  the IBM team.",
        tag: [
          "MCM"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/3391"
        },
      },

      {
        name: "Cloud Pak for Multicloud Management - MVP to Production",
        id: "MCM104",
        description: "Harden the MVP and take it to production  with all the required operational processes and governance. ",
        tag: [
          "MCM"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/3392"
        },
      },

    ]
  },
  products: [
    {
      tag: [
        "product",
        "mcm",
        "General"
      ],
      link: {
        label: "IBM Multicloud Manager",
        url: "https://productpages.w3ibm.mybluemix.net/ProductPages/index.html?name=%22IBM%20Multicloud%20Manager%22&ppId=0c1d2d5d3450d9d0103d8da0cb268db4&str=multicloud"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General"
      ],
      link: {
        label: "IBM Cloud Event Management",
        url: "https://productpages.w3ibm.mybluemix.net/ProductPages/index.html?name=cloud%20event%20management"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General"
      ],
      link: {
        label: "IBM Cloud Application Management",
        url: "https://productpages.w3ibm.mybluemix.net/ProductPages/index.html?name=cloud%20application%20management"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General"
      ],
      link: {
        label: "IBM Cloud Pak for Multicloud Management",
        url: "https://productpages.w3ibm.mybluemix.net/ProductPages/index.html?name=%22IBM%20Cloud%20Pak%20for%20Multicloud%20Management%22&ppId=BDB6F5D0784D11E9BAD1085830964175&str=multicloud"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General"
      ],
      link: {
        label: "IBM Cloud Pak Home for Multicloud Management",
        url: "https://www.ibm.com/uk-en/cloud/multicloud-manager"
      },
    },
  ],
  slack_channels: [
    {
      tag: [
        "product",
        "mcm",
        "General"
      ],
      link: {
        label: "#mcm-dev",
        url: "https://ibm-cloud.slack.com/messages/CDRSV3YM7",
        icon: "slack"
      },
    },
    {
      tag: [
        "product",
        "mcm",
        "General"
      ],
      link: {
        label: "#cp4mcm-sales-win-room",
        url: "https://ibm-cloud.slack.com/messages/CHV6W7YV6",
        icon: "slack"
      },
    },

    {
      tag: [
        "product",
        "csmo",
        "General"
      ],
      link: {
        label: "#tech-devops-svcmgmt",
        url: "https://ibm-cloud.slack.com/archives/C6D6WHDGX",
        icon: "slack"
      },
    },
  ],
  tags: {
    tags: ["cloud", "manage", "monitor"]
  },
  stories: [
    {
      tag: [
        "story",
        "csmo",
        "General"
      ],
      link: {
        label: "Residency: Cloud Pak for Applications",
        url: "https://pages.github.ibm.com/CASE/cloudpak-onboard-residency/apps/cp4a_overview/",
        icon: "document"
      },
    },
    {
      tag: [
        "story",
        "csmo",
        "General"
      ],
      link: {
        label: "MCM Technology Stack",
        url: "http://ibm.biz/Bd2Qzt",
        icon: "document"
      },
    },
    {
      tag: [
        "story",
        "csmo",
        "General"
      ],
      link: {
        label: "Submit a Success Story",
        url: "https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W5ccbfeca27ac_4588_82ce_50757d2fd1c1/page/Submitting%20Client%20Success%20Stories",
        icon: "document"
      },
    },
    {
      tag: [
        "product",
        "csmo",
        "General"
      ],
      link: {
        label: "All Management & Platform stories",
        url: "https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wf58c4c538dbf_45b4_b7a7_5003d0ceb79b/page/Client%20successes%20and%20references%20for%20Cloud%20Integration%20Services?section=MAP"
      },
    },
  ],
}

/**************************/
/**  MULTICLOUD MANAGER  **/
/**************************/
export const JSON_CLOUDPAK_SYSTEM = {
  id: "SYSTEM",
  short_name: "SYSTEM",
  full_name: "IBM Cloud Pak System",
  whatis: {
    title: "What is IBM Cloud Pak System?",
    summary: "<p class='padding-top panel-text-small'>This system of hardware and software with integrated VMware and Red Hat helps you build, deploy and manage containerized apps and Kubernetes workloads on premises, at the edge or on any cloud.</p>",
    icon: {
      type: "help",
      color: "mid-blue"
    }
  },
  quote: {
    text: "For rapid deployment, use the IBM Cloud Pak System.",
    link: {
      label: "IBM",
      url: "https://www.ibm.com/cloud/paks/",
    }
  },
  contacts: [
    {
      email: "jc.marcandella@fr.ibm.com",
      tags: [
        "member",
        "team",
      ],
    },
  ],

  resources: [
    {
      tag: [
        "product",
        "system",
        "General",
        "feature"
      ],
      link: {
        label: "IBM Cloud Pak System",
        url: "https://www.ibm.com/cloud/cloudpaksystem"
      },
    },
    {
      tag: [
        "product",
        "system",
        "General",
        "feature"
      ],
      link: {
        label: "Installation and Service guides (internal - IBM confidential) ",
        url: "http://worklodepid.rtp.raleigh.ibm.com:8081/internaldocs/internaldocs.html"
      },
    },
    {
      tag: [
        "product",
        "system",
        "General",
        "feature"
      ],
      link: {
        label: "Sales Wiki",
        url: "http://ibm.biz/CPS_ZACs"
      },
    },
    {
      tag: [
        "product",
        "system",
        "General",
        "feature"
      ],
      link: {
        label: "Roadmap",
        url: "http://www.ibm.biz/CPS_Roadmap"
      },
    },
    {
      tag: [
        "product",
        "system",
        "General",
      ],
      link: {
        label: "Sales Play",
        url: "http://www.ibm.biz/CPS_Sales_play"
      },
    },
    {
      tag: [
        "product",
        "system",
        "General",
      ],
      link: {
        label: "Purchasing & Parts",
        url: "http://www.ibm.biz/CPS_Purchase"
      },
    },
    {
      tag: [
        "product",
        "system",
        "General",
      ],
      link: {
        label: "Cloud Pak System Service Offerings",
        url: "https://soda.w3ibm.mybluemix.net/search?query=CPS&filters={%22keywords%22:[%22Cloud%20Pak%20System%22]}"
      },
    },
    {
      tag: [
        "product",
        "system",
        "learn"
      ],
      link: {
        label: "Deep Dive: IBM Cloud Pak System",
        url: "https://blueprint-secured.sl.bluecloud.ibm.com/b_dir/blueprint.nsf/url/AB863145?OpenDocument"
      },
    },

    {
      tag: [
        "product",
        "system",
        "learn",
      ],
      link: {
        label: "Simplify the deployment of on-premises Kubernetes clusters (IBM Developer publication)",
        url: "https://developer.ibm.com/blogs/simplify-the-deployment-of-on-premises-kubernetes-clusters/"
      },
    },
    {
      tag: [
        "product",
        "system",
        "learn"
      ],
      link: {
        label: "Accelerate your Red Hat OpenShift Container Platform deployment with IBM Cloud Pak System",
        url: "https://developer.ibm.com/tutorials/accelerate-your-red-hat-openshift-container-platform-deployment-with-ibm-cloud-pak-system/"
      },
    },
    {
      tag: [
        "product",
        "system",
        "General",
      ],
      link: {
        label: "IBM Cloud Garage Mind Meld session on 'IBM Prayoga brings simplified on-premise Kubernetes platform to your datacenter'",
        url: "https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W999324537b63_4293_8c52_02f0d652e2f4/page/Introducing%20IBM%20Cloud%20Pak%20System"
      },
    },
  ],
  blogs: {
    summary: "Articles shared by community members and links to related blogs.",
    link: {
      label: "See all...",
      url: "/"
    },
    blogs: [
      {
        tag: [
          "system"
        ],
        link: {
          label: "IBM Cloud and Cognitive Software Community Blog",
          url: "https://ibm.biz/cloud-cognitive-software"
        },
      },
      {
        tag: [
          "system"
        ],
        link: {
          label: "Public IBM Cloud Pak System blog",
          url: "https://ibmcloudpaksystem.home.blog/"
        },
      },
      {
        tag: [
          "system"
        ],
        link: {
          label: "Old Public blog",
          url: "https://www.ibm.com/developerworks/community/blogs/explorepatterns?lang=en"
        },
      },

    ]
  },
  offerings: {
    summary: "<p class='padding-top panel-text-small'>The Cloud Pak System services offerings ...</p>",
    link: {
      label: "SODA",
      url: "https://soda.w3ibm.mybluemix.net/search?query=CPS&filters={%22keywords%22:[%22Cloud%20Pak%20System%22]}"
    },
    offering: [
      {
        name: "IBM Cloud Pak System Solution Design and Planning",
        id: "CPS100",
        description: "The Solution Design and Planning Workshop is a necessary first step to a successful deployment of IBM Cloud Pak System.",
        tag: [
          "system"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/48"
        },
      },
      {
        name: "IBM Cloud Pak System Migration Services",
        id: "CPS101",
        description: "Migrate existing workloads from PureApplication to the Cloud Pak System appliance or platform conversion from Power to Intel. Migration can be essential for avoiding your End Of Support (EOS) situations as an existing PureApplication customer.",
        tag: [
          "system"
        ],
        link: {
          label: "link",
          url: "https://soda.w3ibm.mybluemix.net/show/3321"
        },
      },
    ]
  },
  products: [
    {
      tag: [
        "product",
        "system",
        "General"
      ],
      link: {
        label: "IBM Cloud Pak System",
        url: "/"
      },
    },
  ],
  slack_channels: [
    {
      tag: [
        "product",
        "csmo",
        "General"
      ],
      link: {
        label: "#cloud-pak-system",
        url: "https://ibm-cloudplatform.slack.com/archives/CNHCCTFT3",
        icon: "slack"
      },
    },
    {
      tag: [
        "product",
        "csmo",
        "General"
      ],
      link: {
        label: "#tech-devops-svcmgmt",
        url: "https://ibm-cloud.slack.com/archives/C6D6WHDGX",
        icon: "slack"
      },
    },
  ],
  tags: {
    tags: ["cloud", "pak", "system"]
  },
  stories: [
    {
      tag: [
        "story",
        "system",
        "General"
      ],
      link: {
        label: "CPS v2.3.1.0 available 29 November 2019 (Passport Advantage)",
        url: "https://www.ibm.com/software/passportadvantage/index.html",
        icon: "document"
      },
    },
    {
      tag: [
        "story",
        "system",
        "General"
      ],
      link: {
        label: "CPS v2.3.1.0 available (Software Seller Workplace)",
        url: "https://w3-03.ibm.com/software/xl/download/ticket.wss",
        icon: "document"
      },
    },
    {
      tag: [
        "story",
        "system",
        "General"
      ],
      link: {
        label: "CPS v2.3.0 Launch Letter",
        url: "https://www-01.ibm.com/common/ssi/ShowDoc.wss?docURL=/common/ssi/rep_ca/9/897/ENUS219-359/index.html&request_locale=en",
        icon: "document"
      },
    },

  ],
}