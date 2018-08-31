import { SET_USER_INFORMATION, SET_ACTIVE_CARD, SET_NEXT_EXPLANATION_CARD } from '../actions/types'

const initialState = {
    userName:'anonymous',
    allowedTabs:    [
                    // 'Explanation',
                    'Dashboard',
                    'Stripping Pot',
                    'Fractional Still',
                    'Utility Calculators'                
    ],
    activeCard:'Dashboard',
    arrayOfExplanations: [
        {
            headline:'What was our vision for the distillery',
            img:'logo.png',
            arrayOfParagraphs:['Our intent was to create a fully grain to glass distillery.  We would mix traditional North Carolina recipes with modern distilling and manufacturing technology.',
                                'Additionally, we self-funded to avoid private equity or crowd funding.',
                                'By doing this we could take a long term focus which allows us to avoid cutting corners in manufacturing and technology.'
                                ]
        },
        {
            headline:'What engineering and business constraints did we encounter?',
            img:'genericdistillery.jpg',
            arrayOfParagraphs:['Creating a distillery has similar constraints to any current manufacturing operation.',
                                'Equipment costs and their associated automation represent a substantial part of the operating budget.',
                                'The next major spend area is routine operating costs; namely, labor costs.'
                                ]
        },
        {
            headline:'How did I solve the equipment cost issue?',
            img:'ourstills.png',
            arrayOfParagraphs:['To solve the up front cost of stills, I modified existing micro-distilling systems.',
                                'I took these designs and built them using current pharmaceutical manufacturing requirements.',
                                'Additionally, I integrated in-line monitoring so they could be reviewed remotely.'
                                ]
        },
        {
            headline:'How did I solve the labor cost issue?',
            img:'phidgetpanel.png',
            arrayOfParagraphs:['Rather than staffing numerous "station-fill" positions, I identified steps which were repeated activities.',
                                'These operational steps were effectively a series of physical meausrements or energizing and de-energizing pieces of equipment.',
                                'Rather than physically triggering these actions, I connected our devices to solid state relays (SSRs) and connected temperature probes.',
                                'These SSRs and probes could then be programatically controlled using the Phidget library.'
                                ]
        },
        {
            headline:'What is our current state?',
            img:'cli.png',
            arrayOfParagraphs:['We currently operate our equipment using a command line interface into java programs and a VBA program.',
                                'To access the system we use VPN and SSH to reach the individual computer.',
                                'While this has been a stable production system for over two years, it does not lend itself to hiring new staff.',
                                'As we look to increase production, we intend to hire full time staff.',
                                'To ease on-boarding of this individual and to allow us to more easily monitor manufacturing, I am rewriting the system.'
                                ]
        },
        {
            headline:'What technologies have I used to rewrite our approach?',
            img:'techs.png',
            arrayOfParagraphs:['Requirements for the front end are: speed to load, live status updates from the operation, and user access control.',
                                'To meet these needs, I used React, Redux, Redux-Thunk, Material-UI, and React-Easy-Charts.',
                                'The back end requires logging of run and inventory data, user security, and connection to I/O boards (Phidgets).',
                                'To meet these requirements, I used Express, Node, Passport, MongoDB, and Phidgets22 APIs.'
                                ]
        },
        {
            headline:'What are the next steps?',
            img:'nextsteps.png',
            arrayOfParagraphs:['Going forward, this re-write will accumulate a great deal of history from our production.',
                                'I intend to automate  trending to predict process times and performance.',
                                'Additionally, while the data visualization with React-Easy-Charts is sufficient,   ',
                                'I would like to dedicate time to learning VX (React wrapper for D3).']
        }
        ],
    currentArrayIndex:0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_USER_INFORMATION:
            return {
                ...state,
                userName:action.payload.userInformation.userName,
                allowedTabs:action.payload.userInformation.allowedTabs
            }
        case SET_ACTIVE_CARD:
            return {
                ...state,
                activeCard:action.payload,
            }
        case SET_NEXT_EXPLANATION_CARD:
            return {
                ...state,
                currentArrayIndex:action.payload
            }
        default:
            return state;
    }
}



// Currently Planned Tabs
// allowedTabs:    [
//     'Dashboard',
//     'Explanation',
//     'Mash Tun',
//     'Stripping Pot',
//     'Fractional Still',
//     'Inventory Management'                
// ],
