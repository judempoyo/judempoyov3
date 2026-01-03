export interface JourneyLog {
    date: string
    eventKey: string
    detailKey: string
}

export const useJourneyLogs = () => {
    const logs: JourneyLog[] = [
        {
            date: '2021',
            eventKey: 'journey.logs.0.event',
            detailKey: 'journey.logs.0.detail'
        },
        {
            date: '2023',
            eventKey: 'journey.logs.1.event',
            detailKey: 'journey.logs.1.detail'
        },
        {
            date: '2025',
            eventKey: 'journey.logs.2.event',
            detailKey: 'journey.logs.2.detail'
        }
    ]

    return {
        logs
    }
}
