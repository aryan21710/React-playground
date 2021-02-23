/* employeeDetails.roleName,
employeeDetails.staffingOffice,
employeeDetails.preferredName,
 employeeDetails.employeeId

*/
export const csvData = [
    {
        id: 1,
        name: 'Data Science',
        description:
			'Data Science certification training lets you master data analysis, deploying R Statistical computing, machine learning algorithms, K-Means Clustering, NaïveBayes',
        material: 'Please read these books before the workshop, Book 1 Book 2',
        learningResource: null,
        frequency: 'Every Month',
        region: 'Pan India',
        expenseCode: 'TW 1234',
        groupSizeMin: 2,
        groupSizeMax: 10,
        experienceMin: 2,
        experienceMax: 10,
        suggestedRoles: [
            { id: 16, category: 'DEVELOPER', name: 'Data Engineer' },
            { id: 17, category: 'DEVELOPER', name: 'Data Scientist' },
        ],
        events: [
            {
                id: 1,
                fromDate: 1547251200000,
                toDate: 1547259200000,
                room: 'Bhagat Singh',
                additionalMaterial: 'Not Available',
                comments: 'No Comments',
                disableSelfSignUp: false,
                signUpLastDate: 1547251200000,
                eventStatus: null,
                participants: [],
                trainers: [],
                training: 1,
                location: 1,
                emailAnnouncementSent: false,
                closureEmailSent: false,
                feedbackEmailSent: false,
                isDeleted: false,
                isCalendarInviteCreated: false,
                feedbackLink: null,
                eventOrganizer: null,
                confirmedParticipantCount: 0,
            },
            {
                id: 2,
                fromDate: 1547251200000,
                toDate: 1547259200000,
                room: 'Ailamma',
                additionalMaterial: 'Not Available',
                comments: 'No Comments',
                disableSelfSignUp: false,
                signUpLastDate: 1547251200000,
                eventStatus: null,
                participants: [],
                trainers: [],
                training: 1,
                location: 1,
                emailAnnouncementSent: false,
                closureEmailSent: false,
                feedbackEmailSent: false,
                isDeleted: false,
                isCalendarInviteCreated: false,
                feedbackLink: null,
                eventOrganizer: null,
                confirmedParticipantCount: 0,
            },
        ],
        is_deleted: false,
        isIndiaCapabilityTeamProgram: false,
    },
    {
        id: 2,
        name: 'XP workshop',
        description: 'XP Workshop description',
        
    },
    {
        id: 8,
        name: 'delete me training',
        description: 'delete me training',
        material: '',
        learningResource: '',
        frequency: 'None',
        region: 'Local Office',
        expenseCode: '',
        groupSizeMin: 1,
        groupSizeMax: 10,
        experienceMin: 1,
        experienceMax: 10,
        suggestedRoles: [
            { id: 1, category: 'MANAGEMENT', name: 'Administrator' },
            { id: 28, category: 'OTHERS', name: 'Advisory' },
            { id: 15, category: 'DEVELOPER', name: 'Apprentice' },
            { id: 23, category: 'BUSINESS_ANALYST', name: 'Business Analyst' },
            { id: 5, category: 'MANAGEMENT', name: 'Business Development Manager' },
            { id: 29, category: 'OTHERS', name: 'Client Principal' },
            { id: 11, category: 'DEVELOPER', name: 'Database Administrator' },
            { id: 16, category: 'DEVELOPER', name: 'Data Engineer' },
            { id: 17, category: 'DEVELOPER', name: 'Data Scientist' },
            { id: 6, category: 'MANAGEMENT', name: 'Delivery Assurance Manager' },
            { id: 10, category: 'DEVELOPER', name: 'Developer' },
            { id: 25, category: 'BUSINESS_ANALYST', name: 'Domain Specialist' },
            { id: 22, category: 'DESIGN', name: 'Experience Designer' },
            { id: 30, category: 'OTHERS', name: 'Head of Business Unit' },
            { id: 31, category: 'OTHERS', name: 'Head of Capability' },
            { id: 32, category: 'OTHERS', name: 'Head of Information Security' },
            { id: 33, category: 'OTHERS', name: 'Head of Technology' },
            { id: 20, category: 'DEVELOPER', name: 'Information Security Engineer' },
            { id: 18, category: 'DEVELOPER', name: 'Infrastructure Consultant' },
            { id: 9, category: 'DEVELOPER', name: 'Intern' },
            { id: 2, category: 'MANAGEMENT', name: 'Location Manager' },
            { id: 19, category: 'DEVELOPER', name: 'Networks Engineer' },
            { id: 35, category: 'OTHERS', name: 'Others' },
            { id: 3, category: 'MANAGEMENT', name: 'Product Manager' },
            { id: 12, category: 'DEVELOPER', name: 'Product Support Analyst' },
            { id: 4, category: 'MANAGEMENT', name: 'Program Manager' },
            { id: 7, category: 'MANAGEMENT', name: 'Project Manager' },
            { id: 26, category: 'QUALITY_ANALYST', name: 'Quality Analyst' },
            { id: 27, category: 'QUALITY_ANALYST', name: 'Quality Assurance' },
            { id: 8, category: 'MANAGEMENT', name: 'Recruiter' },
            { id: 24, category: 'BUSINESS_ANALYST', name: 'Sales Analyst' },
            { id: 34, category: 'OTHERS', name: 'Specialist' },
            { id: 13, category: 'DEVELOPER', name: 'Technical Administrator' },
            { id: 14, category: 'DEVELOPER', name: 'UI Developer' },
            { id: 21, category: 'DESIGN', name: 'Visual Designer' },
        ],
        events: [
            {
                id: 5,
                fromDate: 1610596800000,
                toDate: 1610710200000,
                room: '',
                additionalMaterial: '',
                comments: '',
                disableSelfSignUp: false,
                signUpLastDate: 1610434800000,
                eventStatus: 'LAUNCHED',
                participants: [
                    {
                        id: 1018,
                        employeeId: 27070,
                        participantStatus: 'CONFIRMED',
                        trainerFeedback: null,
                        trainingFeedback: null,
                        isInvited: true,
                        trainingId: 8,
                        event: 5,
                        participantAttendance: false,
                    },
                    {
                        id: 1019,
                        employeeId: 29145,
                        participantStatus: 'CONFIRMED',
                        trainerFeedback: null,
                        trainingFeedback: null,
                        isInvited: false,
                        trainingId: 8,
                        event: 5,
                        participantAttendance: false,
                    },
                    {
                        id: 1020,
                        employeeId: 25190,
                        participantStatus: 'CONFIRMED',
                        trainerFeedback: null,
                        trainingFeedback: null,
                        isInvited: true,
                        trainingId: 8,
                        event: 5,
                        participantAttendance: false,
                    },
                    {
                        id: 1021,
                        employeeId: 16330,
                        participantStatus: 'CONFIRMED',
                        trainerFeedback: null,
                        trainingFeedback: null,
                        isInvited: true,
                        trainingId: 8,
                        event: 5,
                        participantAttendance: false,
                    },
                ],
                trainers: [
                    { id: 2, event: 5, employeeId: 29145, name: 'aryan sharma', email: 'aryan.singh@thoughtworks.com' },
                    { id: 3, event: 5, employeeId: 12692, name: 'Christopher Rex', email: 'christr@thoughtworks.com' },
                ],
                training: 8,
                location: 9,
                emailAnnouncementSent: false,
                closureEmailSent: false,
                feedbackEmailSent: false,
                isDeleted: false,
                isCalendarInviteCreated: false,
                feedbackLink: '',
                eventOrganizer: 'aryan.singh@thoughtworks.com',
                confirmedParticipantCount: 4,
            },
        ],
        is_deleted: false,
        isIndiaCapabilityTeamProgram: false,
    },
    {
        id: 9,
        name: 'dummy',
        description: 'dummy',
        material: '',
        learningResource: '',
        frequency: 'None',
        region: 'Local Office',
        expenseCode: '',
        groupSizeMin: 1,
        groupSizeMax: 10,
        experienceMin: 1,
        experienceMax: 10,
        suggestedRoles: [{ id: 10, category: 'DEVELOPER', name: 'Developer' }],
        events: [],
        is_deleted: false,
        isIndiaCapabilityTeamProgram: true,
    },
];


export const csvData1 = [{
            employeeId: 27070,
            employeeEmail: 'a123@gmail.com',
            employeeName: 'a123',
            employeeLocation: 'Bangalore-Koramangala',
            participantStatus: 'CONFIRMED',
            name: 'Data Science',
            description:
                'Data Science certification training lets you master data analysis, deploying R Statistical computing, machine learning algorithms, K-Means Clustering, NaïveBayes',
            region: 'Pan India',
            fromDate: '01-01-2021',
            toDate: '03-01-2021',
            room: 'Bhagat Singh',
            disableSelfSignUp: false,
            signUpLastDate: 1547251200000,
        },{
            employeeId: 29145,
            employeeEmail: 'a456@gmail.com',
            employeeName: 'a456',
            employeeLocation: 'Bangalore-Koramangala',
            participantStatus: 'CONFIRMED',
            name: 'Data Science',
            description:
                'Data Science certification training lets you master data analysis, deploying R Statistical computing, machine learning algorithms, K-Means Clustering, NaïveBayes',
            region: 'Pan India',
            fromDate: '01-01-2021',
            toDate: '03-01-2021',
            room: 'Bhagat Singh',
            disableSelfSignUp: false,
            signUpLastDate: 1547251200000,
        },
        {
            employeeId: 16330,
            employeeEmail: 'a123@gmail.com',
            employeeName: 'a123',
            employeeLocation: 'Chennai',
            participantStatus: 'CONFIRMED',
            name: 'Data Science',
            description:
                'Data Science certification training lets you master data analysis, deploying R Statistical computing, machine learning algorithms, K-Means Clustering, NaïveBayes',
            region: 'Pan India',
            fromDate: '01-02-2021',
            toDate: '03-02-2021',
            room: 'Bhagat Singh',
            disableSelfSignUp: false,
            signUpLastDate: 1547251200000,
        },{
            employeeId: 29145,
            employeeEmail: 'a456@gmail.com',
            employeeName: 'a456',
            employeeLocation: 'Chennai',
            participantStatus: 'CONFIRMED',
            name: 'Data Science',
            description:
                'Data Science certification training lets you master data analysis, deploying R Statistical computing, machine learning algorithms, K-Means Clustering, NaïveBayes',
            region: 'Pan India',
            fromDate: '01-02-2021',
            toDate: '03-02-2021',
            room: 'Bhagat Singh',
            disableSelfSignUp: false,
            signUpLastDate: 1547251200000,
        },
        {
            employeeId: null,
            employeeEmail: '',
            employeeName: '',
            participantStatus: null,
            name: 'DUMMY',
            description:
                'DUMMY',
            region: 'Pan India',
            fromDate: '01-03-2021',
            toDate: '03-03-2021',
            room: 'Bhagat Singh',
            disableSelfSignUp: false,
            signUpLastDate: 1547251200000,
        }
];


