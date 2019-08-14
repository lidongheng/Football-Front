export class BetFilter {
    readonly q: string;
    pageNow: string;
    constructor(data: any) {
        this.q = data.q
        this.pageNow = data.pageNow ? data.pageNow : 1
    }
}
