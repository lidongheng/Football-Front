import validator from 'validator';

export class Validator {

    public static registerInput(data: any){
        data.username = !this.isEmpty(data.username) ? data.username : '';
        data.email = !this.isEmpty(data.email) ? data.email : '';
        data.password = !this.isEmpty(data.password) ? data.password : '';
        data.password2 = !this.isEmpty(data.password2) ? data.password2 : '';
        let errors = {username:"",email:"",password:"",password2:""};
        if(!validator.isLength(data.username,{min:2,max:30})) {
            errors.username =  '名字的长度不能小于2位并且不能大于30位!'
        }

        if (validator.isEmpty(data.username)) {
           errors.username = '名字不能为空!'
        }

        if (validator.isEmpty(data.email)) {
            errors.email = '邮箱不能为空!'
        }

        if (!validator.isEmail(data.email)) {
            errors.email = '邮箱不合法!'
        }

        if (validator.isEmpty(data.password)) {
            errors.password = '密码不能为空!'
        }

        if(!validator.isLength(data.password,{min:6,max:30})) {
            errors.password = '密码的长度不能小于6位并且不能大于30位!'
        }

        if (validator.isEmpty(data.password2)) {
            errors.password2 = '确认密码不能为空!'
        }

        if(!validator.equals(data.password,data.password2)) {
            errors.password2 = '两次密码输入不一致'
        }

        return {
            errors,
            // @ts-ignore
            isValid:this.isEmpty(errors)
        };

    }

    public static loginInput(data: any) {
        data.email = !this.isEmpty(data.email) ? data.email : '';
        data.password = !this.isEmpty(data.password) ? data.password : '';
        let errors = {email:"",password:""};
        if (validator.isEmpty(data.email)) {
            errors.email = '邮箱不能为空!'
        }

        if (!validator.isEmail(data.email)) {
            errors.email = '邮箱不合法!'
        }

        if (validator.isEmpty(data.password)) {
            errors.password = '密码不能为空!'
        }

        return {
            errors,
            // @ts-ignore
            isValid:this.isEmpty(errors)
        };
    }

    public static commentInput (data: any) {
        data.content = !this.isEmpty(data.content) ? data.content : '';
        let errors = {content:""};
        if (validator.isEmpty(data.content)) {
            errors.content = '不能提交空白评论!'
        }
        if(!validator.isLength(data.content,{max:140})) {
            errors.content = '输入字数超过140字！';
        }
        return {
            errors,
            // @ts-ignore
            isValid:this.isEmpty(errors)
        };
    }

    public static articleInput (data: any) {
        data.title = !this.isEmpty(data.title) ? data.title : '';
        data.content = !this.isEmpty(data.content) ? data.content : '';
        data.about = !this.isEmpty(data.about) ? data.about : '';
        let errors = {title:"",content:"",about:""};
        if (validator.isEmpty(data.title)) {
            errors.title = '标题不能为空!'
        }
        if (validator.isEmpty(data.content)) {
            errors.content = '内容不能为空!'
        }
        if (validator.isEmpty(data.about)) {
            errors.about = '关联球队不能为空!'
        }
        return {
            errors,
            // @ts-ignore
            isValid:this.isEmpty(errors)
        };
    }

    public static betFormInput (data: any) {
        data.league = !this.isEmpty(data.league) ? data.league : '';
        data.rounds = !this.isEmpty(data.rounds) ? data.rounds : '';
        data.host = !this.isEmpty(data.host) ? data.host : '';
        data.away = !this.isEmpty(data.away) ? data.away : '';
        data.matchTime = !this.isEmpty(data.matchTime) ? data.matchTime : '';
        data.isSingleMatch = !this.isEmpty(data.isSingleMatch) ? data.isSingleMatch : '';
        data.analysis = !this.isEmpty(data.analysis) ? data.analysis : '';
        data.hostInjury = !this.isEmpty(data.hostInjury) ? data.hostInjury : '';
        data.awayInjury = !this.isEmpty(data.awayInjury) ? data.awayInjury : '';
        data.hostExpectLineup = !this.isEmpty(data.hostExpectLineup) ? data.hostExpectLineup : '';
        data.hostExpectBench = !this.isEmpty(data.hostExpectBench) ? data.hostExpectBench : '';
        data.awayExpectLineup = !this.isEmpty(data.awayExpectLineup) ? data.awayExpectLineup : '';
        data.awayExpectBench = !this.isEmpty(data.awayExpectBench) ? data.awayExpectBench : '';
        data.hostNews = !this.isEmpty(data.hostNews) ? data.hostNews : '';
        data.awayNews = !this.isEmpty(data.awayNews) ? data.awayNews : '';
        let errors = {league:"",rounds:"",host:"",away:"",matchTime:"",isSingleMatch:"", analysis:"",
            hostInjury:"",awayInjury:"",hostExpectLineup:"",hostExpectBench:"",awayExpectLineup:"",
            awayExpectBench:"",hostNews:"",awayNews:""};
        if (validator.isEmpty(data.league)) {
            errors.league = '联赛名不能为空!'
        }
        if (validator.isEmpty(data.rounds)) {
            errors.rounds = '轮次不能为空!'
        }
        if (validator.isEmpty(data.host)) {
            errors.host = '主队不能为空!'
        }
        if (validator.isEmpty(data.away)) {
            errors.away = '客队不能为空!'
        }if (validator.isEmpty(data.matchTime)) {
            errors.matchTime = '比赛时间不能为空!'
        }
        if (validator.isEmpty(data.isSingleMatch)) {
            errors.isSingleMatch = '是否竞彩单关不能为空!'
        }
        if (validator.isEmpty(data.analysis)) {
            errors.analysis = '战意不能为空!'
        }
        if (validator.isEmpty(data.hostInjury)) {
            errors.hostInjury = '主队伤病名单不能为空!'
        }
        if (validator.isEmpty(data.awayInjury)) {
            errors.awayInjury = '客队伤病名单不能为空!'
        }
        if (validator.isEmpty(data.hostExpectLineup)) {
            errors.hostExpectLineup = '主队阵容不能为空!'
        }
        if (validator.isEmpty(data.hostExpectBench)) {
            errors.hostExpectBench = '主队替补不能为空!'
        }
        if (validator.isEmpty(data.awayExpectLineup)) {
            errors.awayExpectLineup = '客队阵容不能为空!'
        }
        if (validator.isEmpty(data.awayExpectBench)) {
            errors.awayExpectBench = '客队替补不能为空!'
        }
        if (validator.isEmpty(data.hostNews)) {
            errors.hostNews = '主队新闻不能为空!'
        }
        if (validator.isEmpty(data.awayNews)) {
            errors.awayNews = '客队新闻不能为空!'
        }
        return {
            errors,
            // @ts-ignore
            isValid:this.isEmpty(errors)
        };

    }

    public static betInput (data: any) {
        data.league = !this.isEmpty(data.league) ? data.league : '';
        data.number = !this.isEmpty(data.number) ? data.number : '';
        data.host = !this.isEmpty(data.host) ? data.host : '';
        data.away = !this.isEmpty(data.away) ? data.away : '';
        data.handicap = !this.isEmpty(data.handicap) ? data.handicap : '';
        data.profit = !this.isEmpty(data.profit) ? data.profit : '';
        data.amount = !this.isEmpty(data.amount) ? data.amount : '';
        let errors = {league:"", number:"", host:"", away:"", handicap:"",
            profit:"",amount:""};
        if (validator.isEmpty(data.league)) {
            errors.league = '联赛名不能为空!'
        }
        if (validator.isEmpty(data.number)) {
            errors.number = '编号不能为空!'
        }
        if (validator.isEmpty(data.host)) {
            errors.host = '主队不能为空!'
        }
        if (validator.isEmpty(data.away)) {
            errors.away = '客队不能为空!'
        }if (validator.isEmpty(data.handicap)) {
            errors.handicap = '盘口不能为空!'
        }
        if (validator.isEmpty(data.profit)) {
            errors.profit = '水位不能为空!'
        }
        if (validator.isEmpty(data.amount)) {
            errors.amount = '投注额不能为空!'
        }
        return {
            errors,
            // @ts-ignore
            isValid:this.isEmpty(errors)
        };
    }

    private static isEmpty (value: any) {
        if (typeof value === 'string' && value.trim().length === 0) {
            return true
        } else if (typeof value === 'object') {
            return Object.values(value).every(v => v === "")
        } else {
            return  value === undefined || value === null
        }
    }
}
