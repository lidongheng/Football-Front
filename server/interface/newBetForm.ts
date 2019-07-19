export interface NewBetForm {
    user: string;
    league: string;
    rounds: string;
    host: string;
    away: string;
    matchTime: string;
    isSingleMatch: number;
    EuroCompanyId: number;
    AsiaCompanyId: number;
    Euroodd: object;
    Asiaodd: object;
    analysis: string;
    hostInjury: string;
    awayInjury: string;
    hostExpectLineup: string;
    hostExpectBench: string;
    awayExpectLineup: string;
    awayExpectBench: string;
    hostNews: string;
    awayNews: string;
}
