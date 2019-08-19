export class BetFilter {
    readonly q: string;
    pageNow: number;
    pageSize: number;
    constructor(data: any) {
        this.q = data.q
        this.pageNow = data.pageNow ? data.pageNow : 1
        this.pageSize = data.pageSize ? data.pageSize : 5
    }
}
